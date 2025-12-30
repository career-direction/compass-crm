import { eq } from "drizzle-orm";

import { bodyConditions } from "@/db/schema";
import type {
	BodyCondition,
	MutationResolvers,
	QueryResolvers,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";

const parseFloatOrNull = (value: string | null): number | null => {
	if (value === null) return null;
	const parsed = Number.parseFloat(value);
	return Number.isNaN(parsed) ? null : parsed;
};

const mapBodyCondition = (
	row: typeof bodyConditions.$inferSelect,
): BodyCondition => ({
	id: Number(row.id),
	clientId: Number(row.clientId),
	measuredAt: row.measuredAt,
	weight: parseFloatOrNull(row.weight),
	bodyFat: parseFloatOrNull(row.bodyFat),
	muscleMass: parseFloatOrNull(row.muscleMass),
	skeletalMuscleRate: parseFloatOrNull(row.skeletalMuscleRate),
	bmi: parseFloatOrNull(row.bmi),
	bmr: parseFloatOrNull(row.bmr),
	avgSleepTime: parseFloatOrNull(row.avgSleepTime),
	avgRespirationRate: parseFloatOrNull(row.avgRespirationRate),
	sympathetic: parseFloatOrNull(row.sympathetic),
	parasympathetic: parseFloatOrNull(row.parasympathetic),
	bust: parseFloatOrNull(row.bust),
	underbust: parseFloatOrNull(row.underbust),
	waist: parseFloatOrNull(row.waist),
	hip: parseFloatOrNull(row.hip),
	armCircumference: parseFloatOrNull(row.armCircumference),
	buttockHeight: parseFloatOrNull(row.buttockHeight),
	thighCircumference: parseFloatOrNull(row.thighCircumference),
	calfCircumference: parseFloatOrNull(row.calfCircumference),
	ffd: parseFloatOrNull(row.ffd),
	hwd: parseFloatOrNull(row.hwd),
	memo: row.memo,
});

export const bodyConditionResolvers = {
	Query: {
		bodyConditions: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const rows = await context.db
				.select()
				.from(bodyConditions)
				.where(eq(bodyConditions.clientId, args.clientId))
				.limit(limit)
				.offset(offset);

			return rows.map(mapBodyCondition);
		},
	},

	Mutation: {
		createBodyCondition: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const { clientId, measuredAt, ...rest } = args.input;

			const values: Record<string, unknown> = {
				clientId,
				measuredAt,
			};

			// Float値をテキストに変換
			for (const [key, value] of Object.entries(rest)) {
				if (value !== null && value !== undefined) {
					values[key] = String(value);
				}
			}

			const [created] = await context.db
				.insert(bodyConditions)
				.values(values as typeof bodyConditions.$inferInsert)
				.returning();

			return mapBodyCondition(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "bodyConditions">;
	Mutation: Pick<MutationResolvers<Context>, "createBodyCondition">;
};
