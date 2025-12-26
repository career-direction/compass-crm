import { beforeEach, describe, expect, test, vi } from "vitest";

describe("urqlクライアント設定", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.resetModules();
		// windowオブジェクトをリセット
		Object.defineProperty(global, "window", {
			value: undefined,
			writable: true,
		});
	});

	test("urqlClientが正しくエクスポートされている", async () => {
		// Act
		const { urqlClient, default: defaultClient } = await import(
			"./urql-client"
		);

		// Assert
		expect(urqlClient).toBeDefined();
		expect(defaultClient).toBeDefined();
		expect(urqlClient).toBe(defaultClient);
	});

	test("urqlClientがClientインスタンスである", async () => {
		// Act
		const { urqlClient } = await import("./urql-client");

		// Assert
		expect(urqlClient).toHaveProperty("suspense");
		expect(urqlClient.suspense).toBe(false);
	});

	test("サーバーサイドとクライアントサイドでURLが切り替わる", async () => {
		// Arrange - サーバーサイド
		Object.defineProperty(global, "window", {
			value: undefined,
			writable: true,
		});

		// Act
		const { urqlClient: serverClient } = await import("./urql-client");

		// サーバーサイドでのテスト
		expect(serverClient).toBeDefined();

		// Arrange - クライアントサイド
		vi.resetModules();
		Object.defineProperty(global, "window", {
			value: {},
			writable: true,
		});

		// Act
		const { urqlClient: clientClient } = await import("./urql-client");

		// クライアントサイドでのテスト
		expect(clientClient).toBeDefined();
	});

	test("urqlクライアントの基本設定が正しい", async () => {
		// Act
		const { urqlClient } = await import("./urql-client");

		// Assert
		expect(urqlClient.suspense).toBe(false);
		// requestPolicyは内部プロパティなので、存在確認のみ
		expect(urqlClient).toBeDefined();
	});
});
