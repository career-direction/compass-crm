import type { AuthUser } from "@/lib/auth";
import type { DrizzleDB } from "@/lib/drizzle";

export type Context = {
	db: DrizzleDB;
	user: AuthUser | null;
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
