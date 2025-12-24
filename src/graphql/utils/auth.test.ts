import { describe, expect, it } from "vitest";
import type { AuthUser } from "@/lib/auth";
import {
	requireAdmin,
	requireSelfOrAdmin,
	requireTrainer,
	UserKind,
} from "./auth";

/**
 * テスト用のモックユーザーを作成するヘルパー関数
 *
 * 古典学派のアプローチ：
 * - テストダブルではなく、実際のオブジェクトを作成
 * - 必要なプロパティを持つオブジェクトを直接構築
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
