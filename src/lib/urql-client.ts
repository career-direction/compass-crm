import { Client, fetchExchange, errorExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

const isServerSide = typeof window === "undefined";

export const urqlClient = new Client({
	url: isServerSide ? "http://localhost:3000/api/graphql" : "/api/graphql",
	exchanges: [
		// エラーハンドリング（ログ出力、再試行など）
		errorExchange({
			onError: (error) => {
				console.error("GraphQL Error:", error);
			},
		}),
		cacheExchange({
			updates: {
				Mutation: {
					createUser: (_result, _args, cache, _info) => {
						cache.invalidate("Query", "users");
					},
					createClient: (_result, _args, cache, _info) => {
						cache.invalidate("Query", "clients");
					},
					createTrainer: (_result, _args, cache, _info) => {
						cache.invalidate("Query", "trainers");
					},
					createSession: (_result, _args, cache, _info) => {
						cache.invalidate("Query", "sessions");
					},
				},
			},
			// キーの生成戦略をカスタマイズ
			keys: {
				User: (data) => data.id as string,
				Client: (data) => data.id as string,
				Trainer: (data) => data.id as string,
				PTSession: (data) => data.id as string,
			},
		}),
		fetchExchange,
	],
	// SSRサポートのための設定
	suspense: false,
	requestPolicy: "cache-first",
	fetchOptions: () => ({
		headers: {
			"Content-Type": "application/json",
		},
	}),
});

export default urqlClient;
