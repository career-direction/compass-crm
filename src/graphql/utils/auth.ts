import type { AuthUser } from "@/lib/auth";

/**
 * 管理者権限を要求
 */
export const requireAdmin = (user: AuthUser): AuthUser => {
	if (user.kind !== 0) {
		throw new Error("この操作には管理者権限が必要です。");
	}
	return user;
};

/**
 * トレーナー以上の権限を要求（管理者 or トレーナー）
 */
export const requireTrainer = (user: AuthUser): AuthUser => {
	if (user.kind !== 0 && user.kind !== 1) {
		throw new Error("この操作にはトレーナー権限が必要です。");
	}
	return user;
};

/**
 * 特定のユーザー自身または管理者であることを要求
 */
export const requireSelfOrAdmin = (
	user: AuthUser,
	targetUserId: number,
): AuthUser => {
	if (user.kind !== 0 && user.id !== targetUserId) {
		throw new Error("この操作は自分自身のデータのみ可能です。");
	}
	return user;
};

/**
 * ユーザー種別の定数
 */
export const UserKind = {
	ADMIN: 0,
	TRAINER: 1,
	CLIENT: 2,
} as const;
