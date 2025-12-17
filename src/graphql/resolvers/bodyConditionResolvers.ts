import { eq } from "drizzle-orm";
import { bodyConditions } from "@/db/schema";
import type {
	BodyCondition,
	MutationResolvers,
	QueryResolvers,
} from "@/generated/graphql-resolvers";
import type { Context } from "../types";

const parseFloat = (value: string | null): number | null => {
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
	weight: parseFloat(row.weight),
	bodyFat: parseFloat(row.bodyFat),
	muscleMass: parseFloat(row.muscleMass),
	skeletalMuscleRate: parseFloat(row.skeletalMuscleRate),
	bmi: parseFloat(row.bmi),
	bmr: parseFloat(row.bmr),
	avgSleepTime: parseFloat(row.avgSleepTime),
	avgRespirationRate: parseFloat(row.avgRespirationRate),
	sympathetic: parseFloat(row.sympathetic),
	parasympathetic: parseFloat(row.parasympathetic),
	bust: parseFloat(row.bust),
	underbust: parseFloat(row.underbust),
	waist: parseFloat(row.waist),
	hip: parseFloat(row.hip),
	armCircumference: parseFloat(row.armCircumference),
	buttockHeight: parseFloat(row.buttockHeight),
	thighCircumference: parseFloat(row.thighCircumference),
	calfCircumference: parseFloat(row.calfCircumference),
	ffd: parseFloat(row.ffd),
	hwd: parseFloat(row.hwd),
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

