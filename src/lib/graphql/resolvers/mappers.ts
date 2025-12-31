import type {
	clientProfiles,
	clients,
	trainerProfiles,
	trainers,
	users,
} from "@/db/schema";
import type {
	Client,
	ClientProfile as GqlClientProfile,
	TrainerProfile as GqlTrainerProfile,
	PtSession,
	Trainer,
	User,
} from "@/lib/graphql/generated/server/graphql-resolvers";

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
	firstName: user.firstName,
	lastName: user.lastName,
	firstNameKana: user.firstNameKana,
	lastNameKana: user.lastNameKana,
	birthDate: toIsoString(user.birthDate),
	gender: user.gender ?? 0,
	activeFlag: user.activeFlag ?? true,
	deletedAt: user.deletedAt ? toIsoString(user.deletedAt) : null,
	credentials: null,
	createdAt: toIsoString(user.createdAt),
	updatedAt: toIsoString(user.updatedAt),
});

const mapClientProfile = (profile: DbClientProfile): GqlClientProfile => ({
	id: Number(profile.id),
	clientId: profile.clientId?.toString() ?? "",
	occupation: profile.occupation,
	hobby: profile.hobby,
	allowSnsPost: profile.allowSnsPost,
	exerciseHistory: profile.exerciseHistory,
});

const mapTrainerProfile = (profile: DbTrainerProfile): GqlTrainerProfile => ({
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
