import type { PrismaClient } from "@prisma/client";

export interface Context {
	prisma: PrismaClient;
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
