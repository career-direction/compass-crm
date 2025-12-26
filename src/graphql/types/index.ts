import type { AuthUser } from "@/features/auth/auth";
import type { DrizzleDB } from "@/lib/drizzle/drizzle";

export type Context = {
	db: DrizzleDB;
	user: AuthUser;
};

export type CreateUserInput = {
	email: string;
	name?: string;
	role: string;
};

export type CreateClientInput = {
	userId: string;
};

export type CreateTrainerInput = {
	userId: string;
};

export type CreateSessionInput = {
	clientId: string;
	trainerId: string;
	scheduledAt: string;
	duration: number;
	notes?: string;
};
