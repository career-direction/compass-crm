import { eq } from "drizzle-orm";

import { midtermHealthPurposes } from "@/db/schema";
import type {
	MidtermHealthPurpose,
	MutationResolvers,
	QueryResolvers,
} from "@/generated/graphql-resolvers";

import type { Context } from "../types";
import { requireTrainer } from "@/lib/auth";
import { formatDateString } from "./mappers";

const mapMidtermHealthPurpose = (
	row: typeof midtermHealthPurposes.$inferSelect,
): MidtermHealthPurpose => ({
	id: Number(row.id),
	key: row.key,
	clientId: Number(row.clientId),
	purpose: row.purpose,
	months: row.months,
	settingDate: formatDateString(row.settingDate),
	startDate: formatDateString(row.startDate),
	memo: row.memo,
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const midtermHealthPurposeResolvers = {
	Query: {
		midtermHealthPurposes: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const rows = await context.db
				.select()
				.from(midtermHealthPurposes)
				.where(eq(midtermHealthPurposes.clientId, args.clientId))
				.limit(limit)
				.offset(offset);

			return rows.map(mapMidtermHealthPurpose);
		},
	},

	Mutation: {
		createMidtermHealthPurpose: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const { clientId, purpose, months, settingDate, startDate, memo } =
				args.input;

			const [created] = await context.db
				.insert(midtermHealthPurposes)
				.values({
					clientId,
					purpose,
					months,
					settingDate: new Date(settingDate),
					startDate: new Date(startDate),
					memo,
				})
				.returning();

			return mapMidtermHealthPurpose(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "midtermHealthPurposes">;
	Mutation: Pick<MutationResolvers<Context>, "createMidtermHealthPurpose">;
};
