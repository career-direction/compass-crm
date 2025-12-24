import { verifyJWT } from "./jwt";

export type AuthUser = {
	id: number;
	key: string;
	kind: number; // 0: 管理者, 1: トレーナー, 2: クライアント
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
			kind: payload.kind,
			firstName: payload.firstName,
			lastName: payload.lastName,
			email: payload.email,
		},
	};
};

/**
 * ユーザーの権限をチェック
 */
export const checkPermission = (
	user: AuthUser | null,
	requiredKind: number | number[],
): boolean => {
	if (!user) {
		return false;
	}

	const kinds = Array.isArray(requiredKind) ? requiredKind : [requiredKind];
	return kinds.includes(user.kind);
};

/**
 * 管理者かどうかをチェック
 */
export const isAdmin = (user: AuthUser | null): boolean => {
	return checkPermission(user, 0);
};

/**
 * トレーナーかどうかをチェック
 */
export const isTrainer = (user: AuthUser | null): boolean => {
	return checkPermission(user, [0, 1]); // 管理者もトレーナー権限を持つ
};

/**
 * クライアントかどうかをチェック
 */
export const isClient = (user: AuthUser | null): boolean => {
	return checkPermission(user, [0, 1, 2]); // 全員がクライアントデータにアクセス可能
};
