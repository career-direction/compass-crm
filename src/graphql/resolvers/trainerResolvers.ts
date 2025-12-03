import type { GraphQLResolveInfo } from "graphql";
import { eq } from "drizzle-orm";
import { trainers, users, trainerProfiles } from "@/db/schema";
import type { Context } from "../types";

export const trainerResolvers = {
	Query: {
		trainers: async (
			_parent: any,
			_args: any,
			context: Context,
			_info: GraphQLResolveInfo,
		) => {
			const rows = await context.db
				.select({
					trainer: trainers,
					user: users,
					profile: trainerProfiles,
				})
				.from(trainers)
				.leftJoin(users, eq(trainers.userId, users.id))
				.leftJoin(trainerProfiles, eq(trainers.id, trainerProfiles.trainerId));

			return rows.map(({ trainer, user, profile }) => ({
				id: Number(trainer.id),
				userId: trainer.userId?.toString() ?? "",
				user: user && {
					id: Number(user.id),
					key: user.key,
					kind: user.kind ?? 0,
					first_name: user.firstName,
					last_name: user.lastName,
					first_name_kana: user.firstNameKana,
					last_name_kana: user.lastNameKana,
					birth_date: user.birthDate,
					gender: user.gender ?? 0,
					active_flag: user.activeFlag ?? true,
					created_at: user.createdAt,
					updated_at: user.updatedAt,
				},
				profile: profile && {
					id: Number(profile.id),
					trainer_id: profile.trainerId?.toString(),
					motivation_statement: profile.motivationStatement,
					signature_muscle: profile.signatureMuscle,
					specialization: profile.specialization,
					certifications: profile.certifications,
				},
				ptSessions: [],
			}));
		},
	},

	Mutation: {
		createTrainer: async (
			_parent: any,
			args: { input: any },
			context: Context,
		) => {
			const { userId } = args.input;
			const [createdTrainer] = await context.db
				.insert(trainers)
				.values({
					userId: Number(userId),
				})
				.returning();

			const [user] = await context.db
				.select()
				.from(users)
				.where(eq(users.id, Number(userId)))
				.limit(1);

			return {
				id: Number(createdTrainer.id),
				userId: createdTrainer.userId?.toString() ?? "",
				user: user && {
					id: Number(user.id),
					key: user.key,
					kind: user.kind ?? 0,
					first_name: user.firstName,
					last_name: user.lastName,
					first_name_kana: user.firstNameKana,
					last_name_kana: user.lastNameKana,
					birth_date: user.birthDate,
					gender: user.gender ?? 0,
					active_flag: user.activeFlag ?? true,
					created_at: user.createdAt,
					updated_at: user.updatedAt,
				},
				profile: null,
				ptSessions: [],
			};
		},
	},

	Trainer: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		user: (parent: any) => parent.user,
		profile: (parent: any) => parent.profile,
		sessions: (parent: any) => parent.ptSessions ?? [],
	},

	TrainerProfile: {
		// BigIntをIntに変換
		id: (parent: any) => Number(parent.id),
		// Prismaのフィールド名をGraphQLのフィールド名にマッピング
		motivationStatement: (parent: any) => parent.motivation_statement,
		signatureMuscle: (parent: any) => parent.signature_muscle,
	},
};
