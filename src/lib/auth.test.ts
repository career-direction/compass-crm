/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
	type AuthUser,
	UserKind,
	extractToken,
	requireAdmin,
	requireSelfOrAdmin,
	requireTrainer,
	verifyToken,
} from "./auth";

/**
 * テスト用のモックユーザーを作成するヘルパー関数
 */
const createMockUser = (overrides: Partial<AuthUser> = {}): AuthUser => ({
	id: 1,
	key: "test-user-key",
	kind: UserKind.CLIENT, // デフォルトはクライアント
	firstName: "太郎",
	lastName: "テスト",
	email: "test@example.com",
	...overrides,
});

describe("extractToken", () => {
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

describe("requireAdmin", () => {
	it("管理者ユーザーの場合、そのユーザーを返す", () => {
		// Arrange
		const adminUser = createMockUser({ kind: UserKind.ADMIN });

		// Act
		const result = requireAdmin(adminUser);

		// Assert
		expect(result).toBe(adminUser);
	});

	it("トレーナーユーザーの場合、権限エラーをスローする", () => {
		// Arrange
		const trainerUser = createMockUser({ kind: UserKind.TRAINER });

		// Act & Assert
		expect(() => requireAdmin(trainerUser)).toThrow(
			"この操作には管理者権限が必要です。",
		);
	});

	it("クライアントユーザーの場合、権限エラーをスローする", () => {
		// Arrange
		const clientUser = createMockUser({ kind: UserKind.CLIENT });

		// Act & Assert
		expect(() => requireAdmin(clientUser)).toThrow(
			"この操作には管理者権限が必要です。",
		);
	});
});

describe("requireTrainer", () => {
	it("管理者ユーザーの場合、そのユーザーを返す", () => {
		// Arrange
		// 管理者はトレーナー権限も持つ（上位互換）
		const adminUser = createMockUser({ kind: UserKind.ADMIN });

		// Act
		const result = requireTrainer(adminUser);

		// Assert
		expect(result).toBe(adminUser);
	});

	it("トレーナーユーザーの場合、そのユーザーを返す", () => {
		// Arrange
		const trainerUser = createMockUser({ kind: UserKind.TRAINER });

		// Act
		const result = requireTrainer(trainerUser);

		// Assert
		expect(result).toBe(trainerUser);
	});

	it("クライアントユーザーの場合、権限エラーをスローする", () => {
		// Arrange
		const clientUser = createMockUser({ kind: UserKind.CLIENT });

		// Act & Assert
		expect(() => requireTrainer(clientUser)).toThrow(
			"この操作にはトレーナー権限が必要です。",
		);
	});
});

describe("requireSelfOrAdmin", () => {
	it("管理者ユーザーが他人のデータにアクセスする場合、ユーザーを返す", () => {
		// Arrange
		const adminUser = createMockUser({ id: 1, kind: UserKind.ADMIN });
		const targetUserId = 999; // 別のユーザーのID

		// Act
		const result = requireSelfOrAdmin(adminUser, targetUserId);

		// Assert
		expect(result).toBe(adminUser);
	});

	it("一般ユーザーが自分自身のデータにアクセスする場合、ユーザーを返す", () => {
		// Arrange
		const user = createMockUser({ id: 42, kind: UserKind.CLIENT });
		const targetUserId = 42; // 同じユーザーのID

		// Act
		const result = requireSelfOrAdmin(user, targetUserId);

		// Assert
		expect(result).toBe(user);
	});

	it("トレーナーが自分自身のデータにアクセスする場合、ユーザーを返す", () => {
		// Arrange
		const trainerUser = createMockUser({ id: 10, kind: UserKind.TRAINER });
		const targetUserId = 10;

		// Act
		const result = requireSelfOrAdmin(trainerUser, targetUserId);

		// Assert
		expect(result).toBe(trainerUser);
	});

	it("一般ユーザーが他人のデータにアクセスしようとした場合、権限エラーをスローする", () => {
		// Arrange
		const user = createMockUser({ id: 42, kind: UserKind.CLIENT });
		const targetUserId = 999; // 別のユーザーのID

		// Act & Assert
		expect(() => requireSelfOrAdmin(user, targetUserId)).toThrow(
			"この操作は自分自身のデータのみ可能です。",
		);
	});

	it("トレーナーが他人のデータにアクセスしようとした場合、権限エラーをスローする", () => {
		// Arrange
		const trainerUser = createMockUser({ id: 10, kind: UserKind.TRAINER });
		const targetUserId = 999;

		// Act & Assert
		expect(() => requireSelfOrAdmin(trainerUser, targetUserId)).toThrow(
			"この操作は自分自身のデータのみ可能です。",
		);
	});
});

describe("UserKind定数", () => {
	it("ADMIN, TRAINER, CLIENTが正しい値を持つ", () => {
		// Assert
		expect(UserKind.ADMIN).toBe(0);
		expect(UserKind.TRAINER).toBe(1);
		expect(UserKind.CLIENT).toBe(2);
	});
});

/**
 * verifyToken のテスト
 *
 * JWTベースの認証のテスト
 * - generateTokenで実際のJWTを生成してテスト
 */
describe("verifyToken", () => {
	it("有効なJWTトークンの場合、ユーザー情報を返す", async () => {
		// Arrange
		const { generateToken } = await import("./jwt");

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
