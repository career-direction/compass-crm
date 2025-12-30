import { readFileSync } from "node:fs";
import { join } from "node:path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import type { ValidationRule } from "graphql";
import depthLimit from "graphql-depth-limit";
import { createYoga } from "graphql-yoga";
import type { NextRequest } from "next/server";
import { resolvers } from "@/graphql/resolvers";
import type { Context } from "@/graphql/context";
import { extractToken, verifyToken } from "@/features/auth/auth";
import { db } from "@/lib/drizzle/drizzle";

// graphql-yogaプラグインの型定義（このファイルでのみ使用）
type OnValidateParams = {
	addValidationRule: (rule: ValidationRule) => void;
};

type OnRequestParams = {
	request: Request;
};

const typeDefs = readFileSync(
	join(process.cwd(), "src/graphql/schema/schema.graphql"),
	"utf-8",
);

const isDevelopment = process.env.NODE_ENV === "development";

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const maxDepth = isDevelopment ? 15 : 8;
const depthLimitRule = depthLimit(maxDepth);

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const { handleRequest } = createYoga<Record<string, unknown>, Context>({
	schema,
	context: async ({ request }) => {
		let token: string | null = null;

		// 1. Authorizationヘッダーからトークンを取得（API呼び出し用）
		const authHeader = request.headers.get("authorization");
		token = extractToken(authHeader);

		// 2. Cookieからトークンを取得（ブラウザ用）
		if (!token) {
			const cookieHeader = request.headers.get("cookie");
			if (cookieHeader) {
				const cookies = cookieHeader.split(";").reduce(
					(acc, cookie) => {
						const [key, value] = cookie.trim().split("=");
						acc[key] = value;
						return acc;
					},
					{} as Record<string, string>,
				);
				token = cookies["auth-token"] || null;
			}
		}

		if (!token) {
			throw new Error("認証が必要です");
		}

		const result = await verifyToken(token);
		switch (result.type) {
			case "success":
				return {
					db,
					user: result.data,
				};
			case "failure":
				throw new Error("認証に失敗しました");
		}
	},

	graphqlEndpoint: "/api/graphql",

	graphiql: isDevelopment,

	cors: {
		origin: isDevelopment
			? ["http://localhost:3000"]
			: ["https://compass-crm.vercel.app"], // TODO: 本番環境のURLに変更
		credentials: true,
	},

	plugins: [
		{
			onValidate: ({ addValidationRule }: OnValidateParams) => {
				addValidationRule(depthLimitRule);
			},
		},
		{
			onRequest: async ({ request }: OnRequestParams) => {
				const ip =
					request.headers.get("x-forwarded-for") ||
					request.headers.get("x-real-ip") ||
					"unknown";

				const now = Date.now();
				const windowMs = 60 * 1000; // 1分
				const maxRequests = isDevelopment ? 200 : 30; // 開発時は緩め

				const current = rateLimitStore.get(ip);

				if (!current || now > current.resetTime) {
					rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
					return;
				}

				if (current.count >= maxRequests) {
					console.warn(`Rate limit exceeded for IP: ${ip}`);
					throw new Error("Too many requests. Please try again later.");
				}

				current.count++;
			},
		},
	],
});

// Next.js Route Handlerとしてエクスポート
export async function GET(request: NextRequest) {
	return handleRequest(request, {});
}

export async function POST(request: NextRequest) {
	return handleRequest(request, {});
}
