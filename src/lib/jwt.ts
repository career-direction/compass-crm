import { jwtVerify, SignJWT } from "jose";

// トークンの有効期限（7日間）
const TOKEN_EXPIRATION = "7d";

/**
 * JWTシークレットを取得（遅延評価）
 */
const getJWTSecret = (): Uint8Array => {
	const secret =
		process.env.JWT_SECRET || "default-secret-please-change-in-production";
	return new TextEncoder().encode(secret);
};

/**
 * JWTペイロードの型定義
 */
export type JWTPayload = {
	userId: number;
	userKey: string;
	kind: number;
	email: string;
	firstName: string;
	lastName: string;
};

/**
 * JWTトークンを生成する
 */
export const generateToken = async (payload: JWTPayload): Promise<string> => {
	const token = await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(TOKEN_EXPIRATION)
		.sign(getJWTSecret());

	return token;
};

/**
 * JWTトークンを検証してペイロードを取得する
 */
export const verifyJWT = async (
	token: string,
): Promise<
	{ success: true; payload: JWTPayload } | { success: false; error: string }
> => {
	try {
		const { payload } = await jwtVerify(token, getJWTSecret());

		// ペイロードの型チェック
		if (
			typeof payload.userId !== "number" ||
			typeof payload.userKey !== "string" ||
			typeof payload.kind !== "number" ||
			typeof payload.email !== "string" ||
			typeof payload.firstName !== "string" ||
			typeof payload.lastName !== "string"
		) {
			return { success: false, error: "無効なトークンペイロードです" };
		}

		return {
			success: true,
			payload: {
				userId: payload.userId,
				userKey: payload.userKey,
				kind: payload.kind,
				email: payload.email,
				firstName: payload.firstName,
				lastName: payload.lastName,
			},
		};
	} catch (error) {
		if (error instanceof Error && error.message.includes("expired")) {
			return { success: false, error: "トークンの有効期限が切れています" };
		}
		return { success: false, error: "無効なトークンです" };
	}
};
