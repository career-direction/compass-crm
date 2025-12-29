import { eq } from "drizzle-orm";

import { trainingMenus } from "@/db/schema";
import { requireTrainer } from "@/features/auth/auth";
import type {
	MutationResolvers,
	QueryResolvers,
	TrainingMenu,
} from "@/graphql/generated/server/graphql-resolvers";
import type { Context } from "../context";
import { formatDateString } from "./mappers";

const mapTrainingMenu = (
	row: typeof trainingMenus.$inferSelect,
): TrainingMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	learningMaterialId: Number(row.learningMaterialId),
	tips: row.tips,
	commonErrors: row.commonErrors,
	targetMuscles: row.targetMuscles,
	level: row.level,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const trainingMenuResolvers = {
	Query: {
		trainingMenus: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			let query = context.db.select().from(trainingMenus);

			if (args.requiredFunctionId) {
				query = query.where(
					eq(trainingMenus.requiredFunctionId, args.requiredFunctionId),
				) as typeof query;
			}

			const rows = await query.limit(limit).offset(offset);

			return rows.map(mapTrainingMenu);
		},
	},

	Mutation: {
		createTrainingMenu: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const {
				name,
				requiredFunctionId,
				learningMaterialId,
				tips,
				commonErrors,
				targetMuscles,
				level,
			} = args.input;

			const [created] = await context.db
				.insert(trainingMenus)
				.values({
					name,
					requiredFunctionId,
					learningMaterialId,
					tips,
					commonErrors,
					targetMuscles,
					level,
				})
				.returning();

			return mapTrainingMenu(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "trainingMenus">;
	Mutation: Pick<MutationResolvers<Context>, "createTrainingMenu">;
};
