import type { DrizzleDB } from "@/lib/drizzle";

export interface Context {
	db: DrizzleDB;
}

export interface CreateUserInput {
	email: string;
	name?: string;
	role: string;
}

export interface CreateClientInput {
	userId: string;
}

export interface CreateTrainerInput {
	userId: string;
}

export interface CreateSessionInput {
	clientId: string;
	trainerId: string;
	scheduledAt: string;
	duration: number;
	notes?: string;
}
