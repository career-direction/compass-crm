import { eq } from "drizzle-orm";
import { treatmentMenus } from "@/db/schema";
import type {
	MutationResolvers,
	QueryResolvers,
	TreatmentMenu,
} from "@/generated/graphql-resolvers";
import type { Context } from "../types";
import { formatDateString } from "./mappers";
import { requireAdmin, requireAuth } from "../utils/auth";

const mapTreatmentMenu = (
	row: typeof treatmentMenus.$inferSelect,
): TreatmentMenu => ({
	id: Number(row.id),
	name: row.name,
	requiredFunctionId: Number(row.requiredFunctionId),
	learningMaterialId: Number(row.learningMaterialId),
	tips: row.tips,
	commonErrors: row.commonErrors,
	targetMuscles: row.targetMuscles,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const treatmentMenuResolvers = {
	Query: {
		treatmentMenus: async (_parent, args, context) => {
			// 認証チェック
			requireAuth(context.user);

			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			let query = context.db.select().from(treatmentMenus);

			if (args.requiredFunctionId) {
				query = query.where(
					eq(treatmentMenus.requiredFunctionId, args.requiredFunctionId),
				) as typeof query;
			}

			const rows = await query.limit(limit).offset(offset);

			return rows.map(mapTreatmentMenu);
		},
	},

	Mutation: {
		createTreatmentMenu: async (_parent, args, context) => {
			// 管理者のみ施術メニュー作成可能
			requireAdmin(context.user);

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

