import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { userCredentials, users } from "@/db/schema";
import { db } from "@/lib/drizzle";
import { generateToken } from "@/lib/jwt";

type RegisterRequest = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export async function POST(request: NextRequest) {
	try {
		const body: RegisterRequest = await request.json();
		const { email, password, firstName, lastName } = body;

		// バリデーション
		if (!email || !password || !firstName || !lastName) {
			return NextResponse.json(
				{ error: "すべての項目を入力してください" },
				{ status: 400 },
			);
		}

		// メールアドレスの重複チェック
		const [existingUser] = await db
			.select()
			.from(userCredentials)
			.where(eq(userCredentials.email, email))
			.limit(1);

		if (existingUser) {
			return NextResponse.json(
				{ error: "このメールアドレスは既に使用されています" },
				{ status: 409 },
			);
		}

		// パスワードをハッシュ化
		const passwordDigest = await bcrypt.hash(password, 10);

		// ユーザーを作成
		const now = new Date();
		const [newUser] = await db
			.insert(users)
			.values({
				kind: 2, // クライアントとして登録
				firstName,
				lastName,
				firstNameKana: "", // TODO: カナ入力を追加するか自動変換
				lastNameKana: "",
				birthDate: "2000-01-01", // TODO: 生年月日入力を追加
				gender: 2, // その他
				createdAt: now,
				updatedAt: now,
			})
			.returning();

		// 認証情報を作成
		await db.insert(userCredentials).values({
			userId: newUser.key,
			email,
			passwordDigest,
			createdAt: now,
			updatedAt: now,
		});

		// JWTトークンを生成
		const token = await generateToken({
			userId: newUser.id,
			userKey: newUser.key,
			kind: newUser.kind,
			email,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
		});

		// レスポンスを作成
		const response = NextResponse.json({
			success: true,
			user: {
				id: newUser.id,
				key: newUser.key,
				kind: newUser.kind,
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				email,
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
		console.error("Registration error:", error);
		return NextResponse.json(
			{ error: "アカウント作成中にエラーが発生しました" },
			{ status: 500 },
		);
	}
}
