import { eq } from "drizzle-orm";

import { clientProfiles, clients, users } from "@/db/schema";
import { requireAdmin } from "@/features/auth/auth";
import type {
	Client,
	MutationResolvers,
	QueryResolvers,
} from "@/graphql/generated/server/graphql-resolvers";
import type { Context } from "../context";
import { mapClient } from "./mappers";

export const clientResolvers = {
	Query: {
		clients: async (_parent, args, context) => {
			// ページネーション強制（大量データ取得防止）
			const limit = Math.min(args.limit ?? 50, 100); // 最大100件
			const offset = args.offset ?? 0;

			const timeoutPromise = new Promise<never>((_, reject) => {
				setTimeout(
					() => reject(new Error("Query timeout: Operation took too long")),
					30000,
				);
			});

			const queryPromise = context.db
				.select({
					client: clients,
					user: users,
					profile: clientProfiles,
				})
				.from(clients)
				.leftJoin(users, eq(clients.userId, users.id))
				.leftJoin(clientProfiles, eq(clients.id, clientProfiles.clientId))
				.limit(limit)
				.offset(offset);

			const rows = await Promise.race([queryPromise, timeoutPromise]);

			return rows.map(({ client, user, profile }) => {
				if (!user) {
					throw new Error("ユーザー情報が存在しません");
				}

				return mapClient(client, user, profile) as Client;
			});
		},
	},

	Mutation: {
		createClient: async (_parent, args, context) => {
			requireAdmin(context.user);

			const { userId } = args.input;
			const [createdClient] = await context.db
				.insert(clients)
				.values({
					userId: Number(userId),
				})
				.returning();

			const [user] = await context.db
				.select()
				.from(users)
				.where(eq(users.id, Number(userId)))
				.limit(1);

			if (!user) {
				throw new Error("ユーザー情報が存在しません");
			}

			return mapClient(createdClient, user);
		},

		createClientWithProfile: async (_parent, args, context) => {
			requireAdmin(context.user);

			const {
				firstName,
				lastName,
				firstNameKana,
				lastNameKana,
				birthDate,
				gender,
				occupation,
				hobby,
				allowSnsPost,
				exerciseHistory,
			} = args.input;

			// 1. ユーザーを作成 (kind: 2 = クライアント)
			const now = new Date();
			const [createdUser] = await context.db
				.insert(users)
				.values({
					kind: 2,
					firstName,
					lastName,
					firstNameKana,
					lastNameKana,
					birthDate,
					gender,
					createdAt: now,
					updatedAt: now,
				})
				.returning();

			// 2. クライアントを作成
			const [createdClient] = await context.db
				.insert(clients)
				.values({
					userId: createdUser.id,
				})
				.returning();

			// 3. クライアントプロファイルを作成
			const [createdProfile] = await context.db
				.insert(clientProfiles)
				.values({
					clientId: createdClient.id,
					occupation,
					hobby,
					allowSnsPost,
					exerciseHistory,
				})
				.returning();

			return mapClient(createdClient, createdUser, createdProfile);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "clients">;
	Mutation: Pick<
		MutationResolvers<Context>,
		"createClient" | "createClientWithProfile"
	>;
};
