import { alias } from "drizzle-orm/pg-core";
import { eq, inArray } from "drizzle-orm";
import type { Context } from "../types";
import {
	clients,
	ptSessionItems,
	ptSessions,
	trainers,
	users,
} from "@/db/schema";

export const sessionResolvers = {
	Query: {
		sessions: async (_parent: any, _args: any, context: Context) => {
			const clientUser = alias(users, "client_user");
			const trainerUser = alias(users, "trainer_user");

			const rows = await context.db
				.select({
					session: ptSessions,
					client: clients,
					trainer: trainers,
					clientUser,
					trainerUser,
				})
				.from(ptSessions)
				.leftJoin(clients, eq(ptSessions.clientId, clients.id))
				.leftJoin(clientUser, eq(clients.userId, clientUser.id))
				.leftJoin(trainers, eq(ptSessions.trainerId, trainers.id))
				.leftJoin(trainerUser, eq(trainers.userId, trainerUser.id));

			const sessionIds = rows
				.map(({ session }) => session.id)
				.filter((id): id is number => id !== undefined && id !== null);

			const itemRows = sessionIds.length
				? await context.db
						.select({
							item: ptSessionItems,
						})
						.from(ptSessionItems)
						.where(inArray(ptSessionItems.ptSessionId, sessionIds))
				: [];

			const itemsBySession = new Map<number, any[]>();
			for (const { item } of itemRows) {
				const sessionId = item.ptSessionId;
				const list = itemsBySession.get(sessionId) ?? [];
				list.push({
					id: Number(item.id),
					sessionId: item.ptSessionId?.toString() ?? "",
					exerciseName: item.taskType,
					sets: null,
					reps: null,
					weight: null,
					duration: null,
					notes: item.trainerAdvice ?? item.memo ?? null,
					created_at: item.createdAt,
					updated_at: item.updatedAt,
				});
				itemsBySession.set(sessionId, list);
			}

			return rows.map(({ session, client, trainer, clientUser, trainerUser }) => ({
				id: Number(session.id),
				clientId: client?.id?.toString() ?? "",
				trainerId: trainer?.id?.toString() ?? "",
				client:
					client && clientUser
						? {
								id: Number(client.id),
								userId: client.userId?.toString() ?? "",
								user: {
									id: Number(clientUser.id),
									key: clientUser.key,
									kind: clientUser.kind ?? 0,
									first_name: clientUser.firstName,
									last_name: clientUser.lastName,
									first_name_kana: clientUser.firstNameKana,
									last_name_kana: clientUser.lastNameKana,
									birth_date: clientUser.birthDate,
									gender: clientUser.gender ?? 0,
									active_flag: clientUser.activeFlag ?? true,
									created_at: clientUser.createdAt,
									updated_at: clientUser.updatedAt,
								},
								profile: null,
								ptSessions: [],
							}
						: null,
				trainer:
					trainer && trainerUser
						? {
								id: Number(trainer.id),
								userId: trainer.userId?.toString() ?? "",
								user: {
									id: Number(trainerUser.id),
									key: trainerUser.key,
									kind: trainerUser.kind ?? 0,
									first_name: trainerUser.firstName,
									last_name: trainerUser.lastName,
									first_name_kana: trainerUser.firstNameKana,
									last_name_kana: trainerUser.lastNameKana,
									birth_date: trainerUser.birthDate,
									gender: trainerUser.gender ?? 0,
									active_flag: trainerUser.activeFlag ?? true,
									created_at: trainerUser.createdAt,
									updated_at: trainerUser.updatedAt,
								},
								profile: null,
								ptSessions: [],
							}
						: null,
				items: itemsBySession.get(Number(session.id)) ?? [],
				scheduled_at: session.performedAt ?? session.createdAt ?? new Date(),
				created_at: session.createdAt ?? new Date(),
				updated_at: session.updatedAt ?? new Date(),
				status: session.kind ?? "SCHEDULED",
				notes: session.memo ?? session.trainerComment ?? null,
				duration: 0,
			}));
		},
	},

	Mutation: {
		createSession: async (
			_parent: any,
			args: { input: any },
			context: Context,
		) => {
			const { clientId, trainerId, scheduledAt, duration, notes } = args.input;
			const performedAt = scheduledAt ? new Date(scheduledAt) : new Date();
			const [session] = await context.db
				.insert(ptSessions)
				.values({
					clientId: Number(clientId),
					trainerId: Number(trainerId),
					performedAt,
					kind: "SCHEDULED",
					theme: "Session",
					memo: notes,
					trainerComment: notes ?? null,
				})
				.returning();

			return {
				id: Number(session.id),
				clientId: session.clientId?.toString() ?? "",
				trainerId: session.trainerId?.toString() ?? "",
				client: null,
				trainer: null,
				items: [],
				scheduled_at: session.performedAt ?? performedAt,
				created_at: session.createdAt ?? new Date(),
				updated_at: session.updatedAt ?? new Date(),
				status: session.kind ?? "SCHEDULED",
				notes: notes ?? null,
				duration: duration ?? 0,
			};
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
