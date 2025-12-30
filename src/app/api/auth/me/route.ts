import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/jwt";

export async function GET(request: NextRequest) {
	try {
		const token = request.cookies.get("auth-token")?.value;

		if (!token) {
			return NextResponse.json({ user: null });
		}

		// JWTトークンを検証してユーザー情報を取得
		const result = await verifyJWT(token);

		if (result.type === "failure") {
			// トークンが無効な場合はCookieを削除
			const response = NextResponse.json({ user: null });
			response.cookies.set("auth-token", "", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 0,
				path: "/",
			});
			return response;
		}

		const { payload } = result;

		return NextResponse.json({
			user: {
				id: payload.userId,
				key: payload.userKey,
				kind: payload.kind,
				firstName: payload.firstName,
				lastName: payload.lastName,
				email: payload.email,
			},
		});
	} catch (error) {
		console.error("Auth check error:", error);
		return NextResponse.json({ user: null });
	}
}
