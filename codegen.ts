import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "src/lib/graphql/schema/schema.graphql",
	documents: ["src/**/*.{ts,tsx,graphql}", "!src/generated/**"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		// 以下、クライアント用の型定義出力用の設定
		"./src/lib/graphql/generated/client/gql/": {
			preset: "client",
		},
		"./src/lib/graphql/generated/client/gql/urql.ts": {
			plugins: [
				{
					"typescript-urql": {
						documentMode: "external",
						importDocumentNodeExternallyFrom: "./graphql",
						importOperationTypesFrom: "Operations",
					},
				},
			],
		},
		// 以下、サーバー側Resolver型生成用の設定
		"./src/lib/graphql/generated/server/graphql-resolvers.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				contextType: "@/lib/graphql/context#Context",
				avoidOptionals: true,
			},
		},
	},
};

export default config;
