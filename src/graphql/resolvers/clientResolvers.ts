import { eq } from "drizzle-orm";

import { clientProfiles, clients, users } from "@/db/schema";
import type {
	Client,
	MutationResolvers,
	QueryResolvers,
} from "@/generated/graphql-resolvers";

import type { Context } from "../types";
import { requireAdmin } from "@/lib/auth";
import { mapClient } from "./mappers";

export const clientResolvers = {
	Query: {
		clients: async (_parent, args, context) => {
			// ページネーション強制（大量データ取得防止）
			const limit = Math.min(args.limit ?? 50, 100); // 最大100件
			const offset = args.offset ?? 0;

			// クエリタイムアウト設定
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
			// 管理者のみクライアント作成可能
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
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "clients">;
	Mutation: Pick<MutationResolvers<Context>, "createClient">;
};
