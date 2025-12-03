import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "src/graphql/schema/schema.graphql",
	documents: ["src/**/*.{ts,tsx,graphql}", "!src/generated/**"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/generated/gql/": {
			preset: "client",
		},
		"./src/generated/gql/urql.ts": {
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
	},
};

export default config;
