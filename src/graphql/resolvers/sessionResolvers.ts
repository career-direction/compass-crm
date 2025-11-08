import type { Context } from "../types";

export const sessionResolvers = {
	Query: {
		sessions: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.ptSession.findMany({
				include: {
					client: {
						include: {
							user: true,
						},
					},
					trainer: {
						include: {
							user: true,
						},
					},
					items: true,
				},
			});
		},
	},

	Mutation: {
		createSession: async (
			_parent: any,
			args: { input: any },
			context: Context,
		) => {
			const { clientId, trainerId, scheduledAt, duration, notes } = args.input;
			return await context.prisma.ptSession.create({
				data: {
					clientId,
					trainerId,
					scheduledAt: new Date(scheduledAt),
					duration,
					status: "SCHEDULED",
					notes,
				},
				include: {
					client: {
						include: {
							user: true,
						},
					},
					trainer: {
						include: {
							user: true,
						},
					},
					items: true,
				},
			});
		},
	},

	PTSession: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		client: (parent: any) => parent.client,
		trainer: (parent: any) => parent.trainer,
		items: (parent: any) => parent.items,
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		scheduledAt: (parent: any) => parent.scheduled_at?.toISOString(),
		createdAt: (parent: any) => parent.created_at?.toISOString(),
		updatedAt: (parent: any) => parent.updated_at?.toISOString(),
	},

	PTSessionItem: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		createdAt: (parent: any) => parent.created_at?.toISOString(),
		updatedAt: (parent: any) => parent.updated_at?.toISOString(),
	},
};
