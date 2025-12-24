/**
 * @vitest-environment node
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { AuthUser } from "./auth";

// DBモジュールをモック
vi.mock("./drizzle", () => ({
	db: {
		select: vi.fn(),
	},
}));

/**
 * auth.ts のユニットテスト
 *
 * テスト方針（古典学派）:
 * - 純粋関数（extractToken, checkPermission, isAdmin, isTrainer, isClient）は
 *   そのままテスト可能
 * - verifyToken はDBアクセス（プロセス外依存）があるため、DBモジュールをモック
 */

/**
 * テスト用のモックユーザーを作成するヘルパー関数
 */
const createMockUser = (overrides: Partial<AuthUser> = {}): AuthUser => ({
	id: 1,
	key: "test-user-key",
	kind: 2, // デフォルトはクライアント
	firstName: "太郎",
	lastName: "テスト",
	email: "test@example.com",
	...overrides,
});

describe("extractToken", () => {
	// extractTokenは純粋関数なので、モックなしでテスト可能
	let extractToken: typeof import("./auth").extractToken;

	beforeEach(async () => {
		// DBモジュールをモックしてからインポート
		vi.doMock("./drizzle", () => ({
			db: {},
		}));
		const authModule = await import("./auth");
		extractToken = authModule.extractToken;
	});

	it("nullが渡された場合、nullを返す", () => {
		// Arrange
		const authHeader = null;

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(null);
	});

	it("空文字が渡された場合、nullを返す", () => {
		// Arrange
		const authHeader = "";

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(null);
	});

	it("Bearer プレフィックスがない場合、nullを返す", () => {
		// Arrange
		const authHeader = "some-token-without-bearer";

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(null);
	});

	it("Bearer プレフィックス付きの場合、トークン部分を返す", () => {
		// Arrange
		const token = "my-secret-token-12345";
		const authHeader = `Bearer ${token}`;

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(token);
	});

	it("Bearer の後にスペースがない場合、nullを返す", () => {
		// Arrange
		const authHeader = "Bearertoken-without-space";

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(null);
	});

	it("小文字のbearerの場合、nullを返す（大文字小文字を区別）", () => {
		// Arrange
		const authHeader = "bearer my-token";

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(null);
	});

	it("Bearer の後が空の場合、空文字を返す", () => {
		// Arrange
		const authHeader = "Bearer ";

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe("");
	});

	it("UUID形式のトークンを正しく抽出する", () => {
		// Arrange
		const token = "550e8400-e29b-41d4-a716-446655440000";
		const authHeader = `Bearer ${token}`;

		// Act
		const result = extractToken(authHeader);

		// Assert
		expect(result).toBe(token);
	});
});

describe("checkPermission", () => {
	let checkPermission: typeof import("./auth").checkPermission;

	beforeEach(async () => {
		vi.doMock("./drizzle", () => ({
			db: {},
		}));
		const authModule = await import("./auth");
		checkPermission = authModule.checkPermission;
	});

	it("ユーザーがnullの場合、falseを返す", () => {
		// Arrange
		const user = null;
		const requiredKind = 0;

		// Act
		const result = checkPermission(user, requiredKind);

		// Assert
		expect(result).toBe(false);
	});

	it("ユーザーのkindが要求されたkindと一致する場合、trueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 1 }); // トレーナー
		const requiredKind = 1;

		// Act
		const result = checkPermission(user, requiredKind);

		// Assert
		expect(result).toBe(true);
	});

	it("ユーザーのkindが要求されたkindと一致しない場合、falseを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 2 }); // クライアント
		const requiredKind = 0; // 管理者を要求

		// Act
		const result = checkPermission(user, requiredKind);

		// Assert
		expect(result).toBe(false);
	});

	it("配列で複数のkindを指定した場合、いずれかに一致すればtrueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 1 }); // トレーナー
		const requiredKinds = [0, 1]; // 管理者またはトレーナー

		// Act
		const result = checkPermission(user, requiredKinds);

		// Assert
		expect(result).toBe(true);
	});

	it("配列で複数のkindを指定した場合、いずれにも一致しなければfalseを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 2 }); // クライアント
		const requiredKinds = [0, 1]; // 管理者またはトレーナーを要求

		// Act
		const result = checkPermission(user, requiredKinds);

		// Assert
		expect(result).toBe(false);
	});
});

describe("isAdmin", () => {
	let isAdmin: typeof import("./auth").isAdmin;

	beforeEach(async () => {
		vi.doMock("./drizzle", () => ({
			db: {},
		}));
		const authModule = await import("./auth");
		isAdmin = authModule.isAdmin;
	});

	it("管理者（kind: 0）の場合、trueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 0 });

		// Act
		const result = isAdmin(user);

		// Assert
		expect(result).toBe(true);
	});

	it("トレーナー（kind: 1）の場合、falseを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 1 });

		// Act
		const result = isAdmin(user);

		// Assert
		expect(result).toBe(false);
	});

	it("クライアント（kind: 2）の場合、falseを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 2 });

		// Act
		const result = isAdmin(user);

		// Assert
		expect(result).toBe(false);
	});

	it("ユーザーがnullの場合、falseを返す", () => {
		// Arrange
		const user = null;

		// Act
		const result = isAdmin(user);

		// Assert
		expect(result).toBe(false);
	});
});

describe("isTrainer", () => {
	let isTrainer: typeof import("./auth").isTrainer;

	beforeEach(async () => {
		vi.doMock("./drizzle", () => ({
			db: {},
		}));
		const authModule = await import("./auth");
		isTrainer = authModule.isTrainer;
	});

	it("管理者（kind: 0）の場合、trueを返す（管理者はトレーナー権限も持つ）", () => {
		// Arrange
		const user = createMockUser({ kind: 0 });

		// Act
		const result = isTrainer(user);

		// Assert
		expect(result).toBe(true);
	});

	it("トレーナー（kind: 1）の場合、trueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 1 });

		// Act
		const result = isTrainer(user);

		// Assert
		expect(result).toBe(true);
	});

	it("クライアント（kind: 2）の場合、falseを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 2 });

		// Act
		const result = isTrainer(user);

		// Assert
		expect(result).toBe(false);
	});

	it("ユーザーがnullの場合、falseを返す", () => {
		// Arrange
		const user = null;

		// Act
		const result = isTrainer(user);

		// Assert
		expect(result).toBe(false);
	});
});

describe("isClient", () => {
	let isClient: typeof import("./auth").isClient;

	beforeEach(async () => {
		vi.doMock("./drizzle", () => ({
			db: {},
		}));
		const authModule = await import("./auth");
		isClient = authModule.isClient;
	});

	it("管理者（kind: 0）の場合、trueを返す（全員がクライアントデータにアクセス可能）", () => {
		// Arrange
		const user = createMockUser({ kind: 0 });

		// Act
		const result = isClient(user);

		// Assert
		expect(result).toBe(true);
	});

	it("トレーナー（kind: 1）の場合、trueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 1 });

		// Act
		const result = isClient(user);

		// Assert
		expect(result).toBe(true);
	});

	it("クライアント（kind: 2）の場合、trueを返す", () => {
		// Arrange
		const user = createMockUser({ kind: 2 });

		// Act
		const result = isClient(user);

		// Assert
		expect(result).toBe(true);
	});

	it("ユーザーがnullの場合、falseを返す", () => {
		// Arrange
		const user = null;

		// Act
		const result = isClient(user);

		// Assert
		expect(result).toBe(false);
	});
});

/**
 * verifyToken のテスト
 *
 * JWTベースの認証に変更後のテスト
 * - generateTokenで実際のJWTを生成してテスト
 * - DBモックは不要（JWTからユーザー情報を取得するため）
 */
describe("verifyToken", () => {
	it("有効なJWTトークンの場合、ユーザー情報を返す", async () => {
		// Arrange
		const { generateToken } = await import("./jwt");
		const { verifyToken } = await import("./auth");

		const payload = {
			userId: 1,
			userKey: "valid-user-key-12345",
			kind: 1,
			email: "user@example.com",
			firstName: "太郎",
			lastName: "山田",
		};
		const token = await generateToken(payload);

		// Act
		const result = await verifyToken(token);

		// Assert
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.user.id).toBe(1);
			expect(result.user.key).toBe("valid-user-key-12345");
			expect(result.user.kind).toBe(1);
			expect(result.user.firstName).toBe("太郎");
			expect(result.user.lastName).toBe("山田");
			expect(result.user.email).toBe("user@example.com");
		}
	});

	it("無効なトークンの場合、エラーを返す", async () => {
		// Arrange
		const { verifyToken } = await import("./auth");
		const invalidToken = "invalid-token-string";

		// Act
		const result = await verifyToken(invalidToken);

		// Assert
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error).toBe("無効なトークンです");
		}
	});

	it("管理者ユーザーのトークンを正しく検証できる", async () => {
		// Arrange
		const { generateToken } = await import("./jwt");
		const { verifyToken } = await import("./auth");

		const payload = {
			userId: 100,
			userKey: "admin-user-key",
			kind: 0, // 管理者
			email: "admin@example.com",
			firstName: "管理者",
			lastName: "システム",
		};
		const token = await generateToken(payload);

		// Act
		const result = await verifyToken(token);

		// Assert
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.user.kind).toBe(0);
			expect(result.user.email).toBe("admin@example.com");
		}
	});

	it("トレーナーユーザーのトークンを正しく検証できる", async () => {
		// Arrange
		const { generateToken } = await import("./jwt");
		const { verifyToken } = await import("./auth");

		const payload = {
			userId: 50,
			userKey: "trainer-user-key",
			kind: 1, // トレーナー
			email: "trainer@example.com",
			firstName: "トレーナー",
			lastName: "田中",
		};
		const token = await generateToken(payload);

		// Act
		const result = await verifyToken(token);

		// Assert
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.user.kind).toBe(1);
			expect(result.user.firstName).toBe("トレーナー");
		}
	});

	it("クライアントユーザーのトークンを正しく検証できる", async () => {
		// Arrange
		const { generateToken } = await import("./jwt");
		const { verifyToken } = await import("./auth");

		const payload = {
			userId: 200,
			userKey: "client-user-key",
			kind: 2, // クライアント
			email: "client@example.com",
			firstName: "クライアント",
			lastName: "佐藤",
		};
		const token = await generateToken(payload);

		// Act
		const result = await verifyToken(token);

		// Assert
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.user.kind).toBe(2);
			expect(result.user.lastName).toBe("佐藤");
		}
	});
});
