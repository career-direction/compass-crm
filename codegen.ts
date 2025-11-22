import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "src/graphql/schema/schema.graphql",
	documents: ["src/**/*.{ts,tsx}", "!src/generated/**"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./src/generated/gql/": {
			preset: "client",
			plugins: ["typescript", "typescript-operations", "typescript-urql"],
		},
	},
};

export default config;
