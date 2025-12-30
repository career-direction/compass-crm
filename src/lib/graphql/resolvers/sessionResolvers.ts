import { eq, inArray } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";

import {
	clients,
	ptSessionItems,
	ptSessions,
	trainers,
	users,
} from "@/db/schema";
import type {
	MutationResolvers,
	PtSession,
	PtSessionItem,
	QueryResolvers,
	SessionStatus,
} from "@/lib/graphql/generated/server/graphql-resolvers";

import type { Context } from "../context";
import { requireTrainer } from "@/features/auth/auth";
import { formatDateString, mapClient, mapTrainer } from "./mappers";

export const sessionResolvers = {
	Query: {
		sessions: async (_parent, _args, context) => {
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

			const itemsBySession = new Map<number, PtSessionItem[]>();
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
					createdAt: formatDateString(item.createdAt),
					updatedAt: formatDateString(item.updatedAt),
				});
				itemsBySession.set(sessionId, list);
			}

			return rows.map(
				({ session, client, trainer, clientUser, trainerUser }) => {
					if (!client || !clientUser) {
						throw new Error("セッションのクライアント情報が不足しています");
					}

					if (!trainer || !trainerUser) {
						throw new Error("セッションのトレーナー情報が不足しています");
					}

					const scheduleBase =
						session.performedAt ?? session.createdAt ?? new Date();

					const mappedSession: PtSession = {
						id: Number(session.id),
						clientId: client.id?.toString() ?? "",
						trainerId: trainer.id?.toString() ?? "",
						client: mapClient(client, clientUser),
						trainer: mapTrainer(trainer, trainerUser),
						items: itemsBySession.get(Number(session.id)) ?? [],
						scheduledAt: formatDateString(scheduleBase),
						createdAt: formatDateString(session.createdAt),
						updatedAt: formatDateString(session.updatedAt),
						status: ((session.kind?.toUpperCase() as SessionStatus) ??
							"SCHEDULED") as SessionStatus,
						notes: session.memo ?? session.trainerComment ?? null,
						duration: 0,
					};

					return mappedSession;
				},
			);
		},
	},

	Mutation: {
		createSession: async (_parent, args, context) => {
			// トレーナー以上の権限が必要
			requireTrainer(context.user);

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

			const clientUser = alias(users, "client_user_mutation");
			const trainerUser = alias(users, "trainer_user_mutation");

			const [clientRow] = await context.db
				.select({
					client: clients,
					user: clientUser,
				})
				.from(clients)
				.leftJoin(clientUser, eq(clients.userId, clientUser.id))
				.where(eq(clients.id, Number(clientId)))
				.limit(1);

			if (!clientRow?.client || !clientRow?.user) {
				throw new Error("クライアント情報が見つかりません");
			}

			const [trainerRow] = await context.db
				.select({
					trainer: trainers,
					user: trainerUser,
				})
				.from(trainers)
				.leftJoin(trainerUser, eq(trainers.userId, trainerUser.id))
				.where(eq(trainers.id, Number(trainerId)))
				.limit(1);

			if (!trainerRow?.trainer || !trainerRow?.user) {
				throw new Error("トレーナー情報が見つかりません");
			}

			const baseScheduledAt = session.performedAt ?? performedAt;

			const mappedSession: PtSession = {
				id: Number(session.id),
				clientId: session.clientId?.toString() ?? "",
				trainerId: session.trainerId?.toString() ?? "",
				client: mapClient(clientRow.client, clientRow.user),
				trainer: mapTrainer(trainerRow.trainer, trainerRow.user),
				items: [],
				scheduledAt: formatDateString(baseScheduledAt),
				createdAt: formatDateString(session.createdAt),
				updatedAt: formatDateString(session.updatedAt),
				status: ((session.kind?.toUpperCase() as SessionStatus) ??
					"SCHEDULED") as SessionStatus,
				notes: notes ?? null,
				duration: duration ?? 0,
			};

			return mappedSession;
		},
	},
} satisfies {
	Query: Pick<QueryResolvers<Context>, "sessions">;
	Mutation: Pick<MutationResolvers<Context>, "createSession">;
};
