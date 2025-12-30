import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: "jsdom",
		env: {
			JWT_SECRET: "test-secret-key-for-vitest-minimum-32-characters",
		},
	},
});
