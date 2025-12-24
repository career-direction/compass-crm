import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { userCredentials, users } from "@/db/schema";
import { db } from "@/lib/drizzle";

type LoginRequest = {
	email: string;
	password: string;
};

export async function POST(request: NextRequest) {
	try {
		const body: LoginRequest = await request.json();
		const { email, password } = body;

		if (!email || !password) {
			return NextResponse.json(
				{ error: "メールアドレスとパスワードを入力してください" },
				{ status: 400 },
			);
		}

		// ユーザー認証情報を取得
		const [credential] = await db
			.select({
				credential: userCredentials,
				user: users,
			})
			.from(userCredentials)
			.leftJoin(users, eq(userCredentials.userId, users.key))
			.where(eq(userCredentials.email, email))
			.limit(1);

		if (!credential?.user) {
			return NextResponse.json(
				{ error: "メールアドレスまたはパスワードが正しくありません" },
				{ status: 401 },
			);
		}

		// パスワード検証
		const isValidPassword = await bcrypt.compare(
			password,
			credential.credential.passwordDigest,
		);

		if (!isValidPassword) {
			return NextResponse.json(
				{ error: "メールアドレスまたはパスワードが正しくありません" },
				{ status: 401 },
			);
		}

		const { user } = credential;

		// トークンとしてユーザーのkeyを使用（本番ではJWTに置き換え推奨）
		const token = user.key;

		// レスポンスを作成
		const response = NextResponse.json({
			success: true,
			user: {
				id: user.id,
				key: user.key,
				kind: user.kind,
				firstName: user.firstName,
				lastName: user.lastName,
				email: credential.credential.email,
			},
		});

		// HttpOnly Cookieにトークンを設定
		response.cookies.set("auth-token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 7, // 7日間
			path: "/",
		});

		return response;
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json(
			{ error: "ログイン処理中にエラーが発生しました" },
			{ status: 500 },
		);
	}
}
