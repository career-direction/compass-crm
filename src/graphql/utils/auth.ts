import type { AuthUser } from "@/lib/auth";

/**
 * 認証エラーをスロー
 */
export const requireAuth = (user: AuthUser | null): AuthUser => {
	if (!user) {
		throw new Error("認証が必要です。ログインしてください。");
	}
	return user;
};

/**
 * 管理者権限を要求
 */
export const requireAdmin = (user: AuthUser | null): AuthUser => {
	const authUser = requireAuth(user);
	if (authUser.kind !== 0) {
		throw new Error("この操作には管理者権限が必要です。");
	}
	return authUser;
};

/**
 * トレーナー以上の権限を要求（管理者 or トレーナー）
 */
export const requireTrainer = (user: AuthUser | null): AuthUser => {
	const authUser = requireAuth(user);
	if (authUser.kind !== 0 && authUser.kind !== 1) {
		throw new Error("この操作にはトレーナー権限が必要です。");
	}
	return authUser;
};

/**
 * 特定のユーザー自身または管理者であることを要求
 */
export const requireSelfOrAdmin = (
	user: AuthUser | null,
	targetUserId: number,
): AuthUser => {
	const authUser = requireAuth(user);
	if (authUser.kind !== 0 && authUser.id !== targetUserId) {
		throw new Error("この操作は自分自身のデータのみ可能です。");
	}
	return authUser;
};

/**
 * ユーザー種別の定数
 */
export const UserKind = {
	ADMIN: 0,
	TRAINER: 1,
	CLIENT: 2,
} as const;

