import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "src/graphql/schema/schema.graphql",
	documents: ["src/**/*.{ts,tsx,graphql}", "!src/generated/**"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		// 以下、クライアント用の型定義出力用の設定
		"./src/graphql/generated/client/gql/": {
			preset: "client",
		},
		"./src/graphql/generated/client/gql/urql.ts": {
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
		"./src/graphql/generated/server/graphql-resolvers.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				contextType: "@/graphql/types#Context",
				avoidOptionals: true,
			},
		},
	},
};

export default config;
