import { jwtVerify, SignJWT } from "jose";

// トークンの有効期限（7日間）
const TOKEN_EXPIRATION = "7d";

const getJWTSecret = (): Uint8Array => {
	const secret =
		process.env.JWT_SECRET || "default-secret-please-change-in-production";
	return new TextEncoder().encode(secret);
};

export type JWTPayload = {
	userId: number;
	userKey: string;
	kind: number;
	email: string;
	firstName: string;
	lastName: string;
};

export const generateToken = async (payload: JWTPayload): Promise<string> => {
	const token = await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(TOKEN_EXPIRATION)
		.sign(getJWTSecret());

	return token;
};

export type VerifyJWTResult =
	| { type: "success"; payload: JWTPayload }
	| { type: "failure"; error: string };

export const verifyJWT = async (token: string): Promise<VerifyJWTResult> => {
	try {
		const { payload } = await jwtVerify(token, getJWTSecret());

		if (
			typeof payload.userId !== "number" ||
			typeof payload.userKey !== "string" ||
			typeof payload.kind !== "number" ||
			typeof payload.email !== "string" ||
			typeof payload.firstName !== "string" ||
			typeof payload.lastName !== "string"
		) {
			return { type: "failure", error: "無効なトークンペイロードです" };
		}

		return {
			type: "success",
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
			return { type: "failure", error: "トークンの有効期限が切れています" };
		}
		return { type: "failure", error: "無効なトークンです" };
	}
};
