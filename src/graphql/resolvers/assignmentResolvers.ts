import { eq } from "drizzle-orm";

import { assignments } from "@/db/schema";
import type {
	Assignment,
	MutationResolvers,
	QueryResolvers,
} from "@/generated/graphql-resolvers";

import type { Context } from "../types";
import { requireTrainer } from "../utils/auth";
import { formatDateString } from "./mappers";

const mapAssignment = (row: typeof assignments.$inferSelect): Assignment => ({
	id: Number(row.id),
	key: row.key,
	ptSessionId: Number(row.ptSessionId),
	dueDate: row.dueDate,
	taskType: row.taskType,
	taskId: Number(row.taskId),
	createdAt: formatDateString(row.createdAt),
	updatedAt: formatDateString(row.updatedAt),
});

export const assignmentResolvers = {
	Query: {
		assignments: async (_parent, args, context) => {
			const limit = Math.min(args.limit ?? 50, 100);
			const offset = args.offset ?? 0;

			const rows = await context.db
				.select()
				.from(assignments)
				.where(eq(assignments.ptSessionId, args.sessionId))
				.limit(limit)
				.offset(offset);

			return rows.map(mapAssignment);
		},
	},

	Mutation: {
		createAssignment: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

			const { ptSessionId, dueDate, taskType, taskId } = args.input;

			const [created] = await context.db
				.insert(assignments)
				.values({
					ptSessionId,
					dueDate,
					taskType,
					taskId,
				})
				.returning();

			return mapAssignment(created);
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "assignments">;
	Mutation: Pick<MutationResolvers<Context>, "createAssignment">;
};
