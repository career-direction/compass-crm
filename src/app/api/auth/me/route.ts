import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { userCredentials, users } from "@/db/schema";
import { db } from "@/lib/drizzle";

export async function GET(request: NextRequest) {
	try {
		const token = request.cookies.get("auth-token")?.value;

		if (!token) {
			return NextResponse.json({ user: null });
		}

		// トークン（ユーザーのkey）からユーザー情報を取得
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
			return NextResponse.json({ user: null });
		}

		const { user } = credential;

		return NextResponse.json({
			user: {
				id: user.id,
				key: user.key,
				kind: user.kind,
				firstName: user.firstName,
				lastName: user.lastName,
				email: credential.credential.email,
			},
		});
	} catch (error) {
		console.error("Auth check error:", error);
		return NextResponse.json({ user: null });
	}
}
