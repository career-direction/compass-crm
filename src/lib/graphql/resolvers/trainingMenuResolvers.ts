import { eq } from "drizzle-orm";

import { trainingMenus } from "@/db/schema";
import type {
	MutationResolvers,
	QueryResolvers,
	TrainingMenu,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";
import { formatDateString } from "./mappers";

const mapTrainingMenu = (
	row: typeof trainingMenus.$inferSelect,
): TrainingMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	requiredFunction: null,
	learningMaterialId: row.learningMaterialId
		? Number(row.learningMaterialId)
		: null,
	learningMaterial: null,
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

			const rows = await context.db
				.select()
				.from(trainingMenus)
				.limit(limit)
				.offset(offset);

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
					learningMaterialId: learningMaterialId ?? 0,
					tips: tips ?? "",
					commonErrors: commonErrors ?? [],
					targetMuscles: targetMuscles ?? [],
					level: level ?? 1,
				})
				.returning();

			return mapTrainingMenu(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "trainingMenus">;
	Mutation: Pick<MutationResolvers<Context>, "createTrainingMenu">;
};
