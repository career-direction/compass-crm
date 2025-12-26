import { verifyJWT } from "./jwt";

/**
 * ユーザー種別
 */
export const UserKind = {
	ADMIN: 0,
	TRAINER: 1,
	CLIENT: 2,
} as const;

export type UserKindType = (typeof UserKind)[keyof typeof UserKind];

export type AuthUser = {
	id: number;
	key: string;
	kind: UserKindType;
	firstName: string;
	lastName: string;
	email: string;
};

export type AuthResult =
	| { success: true; user: AuthUser }
	| { success: false; error: string };

/**
 * Authorizationヘッダーからトークンを抽出
 */
export const extractToken = (authHeader: string | null): string | null => {
	if (!authHeader) {
		return null;
	}

	if (authHeader.startsWith("Bearer ")) {
		return authHeader.slice(7);
	}

	return null;
};

/**
 * JWTトークンを検証してユーザー情報を取得
 */
export const verifyToken = async (token: string): Promise<AuthResult> => {
	const result = await verifyJWT(token);

	if (!result.success) {
		return { success: false, error: result.error };
	}

	const { payload } = result;

	return {
		success: true,
		user: {
			id: payload.userId,
			key: payload.userKey,
			kind: payload.kind as UserKindType,
			firstName: payload.firstName,
			lastName: payload.lastName,
			email: payload.email,
		},
	};
};

/**
 * 管理者権限を要求
 */
export const requireAdmin = (user: AuthUser): AuthUser => {
	if (user.kind !== UserKind.ADMIN) {
		throw new Error("この操作には管理者権限が必要です。");
	}
	return user;
};

/**
 * トレーナー以上の権限を要求（管理者 or トレーナー）
 */
export const requireTrainer = (user: AuthUser): AuthUser => {
	if (user.kind !== UserKind.ADMIN && user.kind !== UserKind.TRAINER) {
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
	if (user.kind !== UserKind.ADMIN && user.id !== targetUserId) {
		throw new Error("この操作は自分自身のデータのみ可能です。");
	}
	return user;
};
