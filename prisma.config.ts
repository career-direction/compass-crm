import { defineConfig } from "@prisma/config";

export default defineConfig({
	datasource: {
		// ここで環境変数を読み込む
		url: process.env.DATABASE_URL!,
	},
});
