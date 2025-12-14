import type {
	Client,
	ClientProfile as GqlClientProfile,
	Trainer,
	TrainerProfile as GqlTrainerProfile,
	User,
	PtSession,
} from "@/generated/graphql-resolvers";
import {
	clientProfiles,
	clients,
	trainerProfiles,
	trainers,
	users,
} from "@/db/schema";

type DbUser = typeof users.$inferSelect;
type DbClient = typeof clients.$inferSelect;
type DbClientProfile = typeof clientProfiles.$inferSelect;
type DbTrainer = typeof trainers.$inferSelect;
type DbTrainerProfile = typeof trainerProfiles.$inferSelect;

const toIsoString = (value?: Date | string | null) => {
	if (!value) {
		return new Date().toISOString();
	}

	return value instanceof Date ? value.toISOString() : value;
};

export const mapUser = (user: DbUser): User => ({
	id: Number(user.id),
	key: user.key,
	kind: user.kind ?? 0,
	first_name: user.firstName,
	last_name: user.lastName,
	first_name_kana: user.firstNameKana,
	last_name_kana: user.lastNameKana,
	birth_date: toIsoString(user.birthDate),
	gender: user.gender ?? 0,
	active_flag: user.activeFlag ?? true,
	credentials: null,
	created_at: toIsoString(user.createdAt),
	updated_at: toIsoString(user.updatedAt),
});

const mapClientProfile = (profile: DbClientProfile): GqlClientProfile => ({
	id: Number(profile.id),
	clientId: profile.clientId?.toString() ?? "",
	occupation: profile.occupation,
	hobby: profile.hobby,
	allowSnsPost: profile.allowSnsPost,
	exerciseHistory: profile.exerciseHistory,
});

const mapTrainerProfile = (
	profile: DbTrainerProfile,
): GqlTrainerProfile => ({
	id: Number(profile.id),
	trainerId: profile.trainerId?.toString() ?? "",
	motivationStatement: profile.motivationStatement,
	signatureMuscle: profile.signatureMuscle,
	specialization: profile.specialization,
	certifications: profile.certifications,
});

export const mapClient = (
	client: DbClient,
	user: DbUser,
	profile?: DbClientProfile | null,
): Client => ({
	id: Number(client.id),
	userId: client.userId?.toString() ?? "",
	user: mapUser(user),
	profile: profile ? mapClientProfile(profile) : null,
	sessions: [] as PtSession[],
});

export const mapTrainer = (
	trainer: DbTrainer,
	user: DbUser,
	profile?: DbTrainerProfile | null,
): Trainer => ({
	id: Number(trainer.id),
	userId: trainer.userId?.toString() ?? "",
	user: mapUser(user),
	profile: profile ? mapTrainerProfile(profile) : null,
	sessions: [] as PtSession[],
});

export const mapTrainerProfileOnly = mapTrainerProfile;
export const mapClientProfileOnly = mapClientProfile;
export const formatDateString = toIsoString;
