import { createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import depthLimit from "graphql-depth-limit";
import { resolvers } from "@/graphql/resolvers";
import { db } from "@/lib/drizzle";
import type { NextRequest } from "next/server";

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

const { handleRequest } = createYoga({
	schema,
	context: () => ({
		db,
	}),

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
			onValidate: ({ addValidationRule }: any) => {
				addValidationRule(depthLimitRule);
			},
		},
		{
			onRequest: async ({ request }: any) => {
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
