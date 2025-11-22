import { createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import depthLimit from "graphql-depth-limit";
import { resolvers } from "@/graphql/resolvers";
import { db } from "@/lib/drizzle";
import type { NextRequest } from "next/server";

// スキーマファイルを読み込む
const typeDefs = readFileSync(
	join(process.cwd(), "src/graphql/schema/schema.graphql"),
	"utf-8",
);

// DoS攻撃対策の設定
const isDevelopment = process.env.NODE_ENV === "development";

// GraphQLスキーマ作成（DoS攻撃対策付き）
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

// DoS攻撃対策: Query Depth制限
const maxDepth = isDevelopment ? 15 : 8;
const depthLimitRule = depthLimit(maxDepth);

// レート制限用のメモリストア（本番環境ではRedisを使用推奨）
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// GraphQL Yogaインスタンス作成
const { handleRequest } = createYoga({
	schema,
	context: () => ({
		db,
	}),

	// GraphQLエンドポイントのパスを明示的に指定
	graphqlEndpoint: "/api/graphql",

	// GraphQL Playgroundを開発環境でのみ有効化
	graphiql: isDevelopment,

	// CORS設定
	cors: {
		origin: isDevelopment
			? ["http://localhost:3000"]
			: ["https://compass-crm.vercel.app"], // TODO: 本番環境のURLに変更
		credentials: true,
	},

	// DoS攻撃対策: Query Depth制限
	plugins: [
		{
			onValidate: ({ addValidationRule }: any) => {
				addValidationRule(depthLimitRule);
			},
		},
		{
			onRequest: async ({ request }: any) => {
				// レート制限の実装
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
