import type { Context } from "../types";
import { users, userCredentials } from "@/db/schema";
import { eq } from "drizzle-orm";

export const userResolvers = {
	Query: {
		hello: () => "Hello from GraphQL!",

		users: async (_parent: any, args: any, context: Context) => {
			// ページネーション強制（大量データ取得防止）
			const limit = Math.min(args.limit || 50, 100); // 最大100件
			const offset = args.offset || 0;

			// クエリタイムアウト設定
			const timeoutPromise = new Promise<never>((_, reject) => {
				setTimeout(
					() => reject(new Error("Query timeout: Operation took too long")),
					30000,
				); // 30秒
			});

			const queryPromise = context.db
				.select({
					id: users.id,
					key: users.key,
					kind: users.kind,
					first_name: users.firstName,
					last_name: users.lastName,
					first_name_kana: users.firstNameKana,
					last_name_kana: users.lastNameKana,
					birth_date: users.birthDate,
					gender: users.gender,
					active_flag: users.activeFlag,
					created_at: users.createdAt,
					updated_at: users.updatedAt,
					credentials_id: userCredentials.id,
					credentials_email: userCredentials.email,
					credentials_reset_at: userCredentials.resetAt,
					credentials_created_at: userCredentials.createdAt,
					credentials_updated_at: userCredentials.updatedAt,
				})
				.from(users)
				.leftJoin(userCredentials, eq(users.key, userCredentials.userId))
				.limit(limit)
				.offset(offset);

			// タイムアウトとクエリのレース
			const rows = await Promise.race([queryPromise, timeoutPromise]);

			return rows.map((row) => ({
				id: Number(row.id),
				key: row.key,
				kind: row.kind ?? 0,
				first_name: row.first_name,
				last_name: row.last_name,
				first_name_kana: row.first_name_kana,
				last_name_kana: row.last_name_kana,
				birth_date: row.birth_date,
				gender: row.gender ?? 0,
				active_flag: row.active_flag ?? true,
				credentials: row.credentials_id
					? {
							id: Number(row.credentials_id),
							email: row.credentials_email,
							reset_at: row.credentials_reset_at ?? false,
							created_at: row.credentials_created_at,
							updated_at: row.credentials_updated_at,
						}
					: null,
				created_at: row.created_at,
				updated_at: row.updated_at,
			}));
		},
	},

	Mutation: {
		createUser: async (
			_parent: any,
			args: { input: any },
			context: Context,
		) => {
			const {
				kind,
				first_name,
				last_name,
				first_name_kana,
				last_name_kana,
				birth_date,
				gender,
				email,
				password,
			} = args.input;

			// パスワードのハッシュ化（実際の実装では適切なハッシュ関数を使用）
			const password_digest = `hashed_${password}`;

			const [user] = await context.db
				.insert(users)
				.values({
					kind,
					firstName: first_name,
					lastName: last_name,
					firstNameKana: first_name_kana,
					lastNameKana: last_name_kana,
					birthDate: new Date(birth_date),
					gender,
					activeFlag: true,
				})
				.returning();

			const [credentials] = await context.db
				.insert(userCredentials)
				.values({
					userId: user.key,
					email,
					passwordDigest: password_digest,
					resetAt: false,
				})
				.returning();

			return {
				id: Number(user.id),
				key: user.key,
				kind: user.kind ?? 0,
				first_name: user.firstName,
				last_name: user.lastName,
				first_name_kana: user.firstNameKana,
				last_name_kana: user.lastNameKana,
				birth_date: user.birthDate,
				gender: user.gender ?? 0,
				active_flag: user.activeFlag ?? true,
				credentials: credentials
					? {
							id: Number(credentials.id),
							email: credentials.email,
							reset_at: credentials.resetAt ?? false,
							created_at: credentials.createdAt,
							updated_at: credentials.updatedAt,
						}
					: null,
				created_at: user.createdAt,
				updated_at: user.updatedAt,
			};
		},
	},

	User: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		created_at: (parent: any) => parent.created_at.toISOString(),
		updated_at: (parent: any) => parent.updated_at.toISOString(),
		birth_date: (parent: any) => parent.birth_date.toISOString().split("T")[0], // YYYY-MM-DD形式
	},

	UserCredentials: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		created_at: (parent: any) => parent.created_at.toISOString(),
		updated_at: (parent: any) => parent.updated_at.toISOString(),
	},
};
