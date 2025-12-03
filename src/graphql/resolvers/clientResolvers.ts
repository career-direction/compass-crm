import type { GraphQLResolveInfo } from "graphql";
import { eq } from "drizzle-orm";
import type { Context } from "../types";
import {
	clientProfiles,
	clients,
	users,
} from "@/db/schema";

export const clientResolvers = {
	Query: {
		clients: async (
			_parent: any,
			args: any,
			context: Context,
			_info: GraphQLResolveInfo,
		) => {
			// ページネーション強制（大量データ取得防止）
			const limit = Math.min(args.limit || 50, 100); // 最大100件
			const offset = args.offset || 0;

			// 動的にincludeフィールドを決定してオーバーフェッチを防ぐ
			const relationMap = {
				user: true,
				profile: true,
				ptSessions: {
					include: {
						client: { include: { user: true } },
						trainer: { include: { user: true } },
						items: true,
					},
				},
			};

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

			return rows.map(({ client, user, profile }) => ({
				id: Number(client.id),
				userId: client.userId?.toString() ?? "",
				user: user && {
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
					created_at: user.createdAt,
					updated_at: user.updatedAt,
				},
				profile: profile && {
					id: Number(profile.id),
					client_id: profile.clientId?.toString(),
					occupation: profile.occupation,
					hobby: profile.hobby,
					allow_sns_post: profile.allowSnsPost,
					exercise_history: profile.exerciseHistory,
				},
				ptSessions: [],
			}));
		},
	},

	Mutation: {
		createClient: async (
			_parent: any,
			args: { input: any },
			context: Context,
		) => {
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

			return {
				id: Number(createdClient.id),
				userId: createdClient.userId?.toString() ?? "",
				user: user && {
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
					created_at: user.createdAt,
					updated_at: user.updatedAt,
				},
				profile: null,
				ptSessions: [],
			};
		},
	},

	Client: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		user: (parent: any) => parent.user,
		profile: (parent: any) => parent.profile,
		sessions: (parent: any) => parent.ptSessions,
	},

	ClientProfile: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		allowSnsPost: (parent: any) => parent.allow_sns_post,
		exerciseHistory: (parent: any) => parent.exercise_history,
	},
};
