import { eq } from "drizzle-orm";

import { treatmentMenus } from "@/db/schema";
import type {
	MutationResolvers,
	QueryResolvers,
	TreatmentMenu,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";
import { formatDateString } from "./mappers";

const mapTreatmentMenu = (
	row: typeof treatmentMenus.$inferSelect,
): TreatmentMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	requiredFunction: null,
	learningMaterialId: Number(row.learningMaterialId),
	learningMaterial: null,
	tips: row.tips,
	commonErrors: row.commonErrors,
	targetMuscles: row.targetMuscles,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const treatmentMenuResolvers = {
	Query: {
		treatmentMenus: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const rows = await context.db
				.select()
				.from(treatmentMenus)
				.limit(limit)
				.offset(offset);

			return rows.map(mapTreatmentMenu);
		},
	},

	Mutation: {
		createTreatmentMenu: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const {
				name,
				requiredFunctionId,
				learningMaterialId,
				tips,
				commonErrors,
				targetMuscles,
			} = args.input;

			const [created] = await context.db
				.insert(treatmentMenus)
				.values({
					name,
					requiredFunctionId,
					learningMaterialId,
					tips,
					commonErrors,
					targetMuscles,
				})
				.returning();

			return mapTreatmentMenu(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "treatmentMenus">;
	Mutation: Pick<MutationResolvers<Context>, "createTreatmentMenu">;
};
