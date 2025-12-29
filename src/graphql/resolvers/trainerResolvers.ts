import { eq } from "drizzle-orm";

import { trainerProfiles, trainers, users } from "@/db/schema";
import { requireAdmin } from "@/features/auth/auth";
import type {
	MutationResolvers,
	QueryResolvers,
	Trainer,
} from "@/graphql/generated/server/graphql-resolvers";
import type { Context } from "../context";
import { mapTrainer } from "./mappers";

export const trainerResolvers = {
	Query: {
		trainers: async (_parent, _args, context) => {
			const rows = await context.db
				.select({
					trainer: trainers,
					user: users,
					profile: trainerProfiles,
				})
				.from(trainers)
				.leftJoin(users, eq(trainers.userId, users.id))
				.leftJoin(trainerProfiles, eq(trainers.id, trainerProfiles.trainerId));

			return rows.map(({ trainer, user, profile }) => {
				if (!user) {
					throw new Error("ユーザー情報が存在しません");
				}

				return mapTrainer(trainer, user, profile) as Trainer;
			});
		},
	},

	Mutation: {
		createTrainer: async (_parent, args, context) => {
			// 管理者のみトレーナー作成可能
			requireAdmin(context.user);

			const { userId } = args.input;
			const [createdTrainer] = await context.db
				.insert(trainers)
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

			return mapTrainer(createdTrainer, user);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "trainers">;
	Mutation: Pick<MutationResolvers<Context>, "createTrainer">;
};
