import { eq } from "drizzle-orm";

import { userCredentials, users } from "@/db/schema";
import type {
	MutationResolvers,
	QueryResolvers,
	User,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireAdmin } from "@/features/auth/auth";
import { formatDateString, mapUser } from "./mappers";

export const userResolvers = {
	Query: {
		hello: () => "Hello from GraphQL!",

		users: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const timeoutPromise = new Promise<never>((_, reject) => {
				setTimeout(
					() => reject(new Error("Query timeout: Operation took too long")),
					30000,
				);
			});

			const queryPromise = context.db
				.select({
					user: users,
					credentials: userCredentials,
				})
				.from(users)
				.leftJoin(userCredentials, eq(users.key, userCredentials.userId))
				.limit(limit)
				.offset(offset);

			const rows = await Promise.race([queryPromise, timeoutPromise]);

			return rows.map(({ user, credentials }) => {
				const mappedUser = mapUser(user);
				if (credentials) {
					mappedUser.credentials = {
						id: Number(credentials.id),
						userId: credentials.userId,
						email: credentials.email,
						passwordDigest: credentials.passwordDigest,
						resetAt: credentials.resetAt,
						createdAt: formatDateString(credentials.createdAt),
						updatedAt: formatDateString(credentials.updatedAt),
					};
				}
				return mappedUser as User;
			});
		},
	},

	Mutation: {
		createUser: async (_parent, args, context) => {
			// 管理者のみユーザー作成可能
			requireAdmin(context.user);

			const {
				kind,
				firstName,
				lastName,
				firstNameKana,
				lastNameKana,
				birthDate,
				gender,
				email,
				password,
			} = args.input;

			// パスワードのハッシュ化（実際の実装では適切なハッシュ関数を使用）
			const passwordDigest = `hashed_${password}`;

			const [createdUser] = await context.db
				.insert(users)
				.values({
					kind,
					firstName,
					lastName,
					firstNameKana,
					lastNameKana,
					birthDate,
					gender,
				})
				.returning();

			// 認証情報を作成
			const [createdCredentials] = await context.db
				.insert(userCredentials)
				.values({
					userId: createdUser.key,
					email,
					passwordDigest,
				})
				.returning();

			const mappedUser = mapUser(createdUser);
			mappedUser.credentials = {
				id: Number(createdCredentials.id),
				userId: createdCredentials.userId,
				email: createdCredentials.email,
				passwordDigest: createdCredentials.passwordDigest,
				resetAt: createdCredentials.resetAt,
				createdAt: formatDateString(createdCredentials.createdAt),
				updatedAt: formatDateString(createdCredentials.updatedAt),
			};

			return mappedUser as User;
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "hello" | "users">;
	Mutation: Pick<MutationResolvers<Context>, "createUser">;
};
