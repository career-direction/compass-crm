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

<<<<<<< HEAD
		if (!credential?.user) {
			return { success: false, error: "無効なトークンです" };
		}

		const { user } = credential;

		return {
			success: true,
			user: {
				id: user.id,
				key: user.key,
				kind: user.kind,
				firstName: user.firstName,
				lastName: user.lastName,
				email: credential.credential.email,
			},
		};
	} catch (error) {
		console.error("Token verification error:", error);
		return { success: false, error: "認証エラーが発生しました" };
	}
};

export const checkPermission = (
	user: AuthUser | null,
	requiredKind: number | number[],
): boolean => {
	if (!user) {
		return false;
=======
	if (!result.success) {
		return { success: false, error: result.error };
>>>>>>> 003b80b94bd20bf93bcdbddb6b703d4d6413371e
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

<<<<<<< HEAD
export const isAdmin = (user: AuthUser | null): boolean => {
	return checkPermission(user, 0);
};

export const isTrainer = (user: AuthUser | null): boolean => {
	return checkPermission(user, [0, 1]); // 管理者もトレーナー権限を持つ
};

export const isClient = (user: AuthUser | null): boolean => {
	return checkPermission(user, [0, 1, 2]); // 全員がクライアントデータにアクセス可能
=======
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
>>>>>>> 003b80b94bd20bf93bcdbddb6b703d4d6413371e
};
