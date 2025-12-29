import { eq } from "drizzle-orm";

import { learningMaterials } from "@/db/schema";
import type {
	LearningMaterial,
	MutationResolvers,
	QueryResolvers,
} from "@/graphql/generated/server/graphql-resolvers";
import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";
import { formatDateString } from "./mappers";

const mapLearningMaterial = (
	row: typeof learningMaterials.$inferSelect,
): LearningMaterial => ({
	id: Number(row.id),
	ownerId: row.ownerId,
	key: row.key,
	name: row.name,
	status: row.status,
	sourceUrl: row.sourceUrl,
	contentType: row.contentType,
	contentId: Number(row.contentId),
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const learningMaterialResolvers = {
	Query: {
		learningMaterials: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			let query = context.db.select().from(learningMaterials);

			if (args.ownerId) {
				query = query.where(
					eq(learningMaterials.ownerId, args.ownerId),
				) as typeof query;
			}

			const rows = await query.limit(limit).offset(offset);

			return rows.map(mapLearningMaterial);
		},
	},

	Mutation: {
		createLearningMaterial: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			const user = requireTrainer(context.user);

			const { name, status, sourceUrl, contentType, contentId } = args.input;

			const now = new Date();
			const [created] = await context.db
				.insert(learningMaterials)
				.values({
					ownerId: user.key,
					name,
					status,
					sourceUrl,
					contentType,
					contentId,
					createdAt: now,
					updatedAt: now,
				})
				.returning();

			return mapLearningMaterial(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "learningMaterials">;
	Mutation: Pick<MutationResolvers<Context>, "createLearningMaterial">;
};
