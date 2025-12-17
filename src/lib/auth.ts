import { eq } from "drizzle-orm";
import { userCredentials, users } from "@/db/schema";
import { db } from "./drizzle";

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
 * トークンからユーザー情報を取得
 * 
 * 注意: 現在は簡易実装（トークン = ユーザーのkey）
 * 本番環境ではJWTやセッションベースの認証に置き換えてください
 */
export const verifyToken = async (token: string): Promise<AuthResult> => {
	try {
		// トークンをユーザーのkeyとして検証（簡易実装）
		const [credential] = await db
			.select({
				credential: userCredentials,
				user: users,
			})
			.from(userCredentials)
			.leftJoin(users, eq(userCredentials.userId, users.key))
			.where(eq(userCredentials.userId, token))
			.limit(1);

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

