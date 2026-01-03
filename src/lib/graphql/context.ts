import { AuthUser } from "@/features/auth/api/authAPI";
import { db } from "@/lib/drizzle/drizzle";
import type { DrizzleDB } from "@/lib/drizzle/drizzle";

export type Context = {
	db: DrizzleDB;
	user: AuthUser;
};

type GraphQLContext = {
	db: DrizzleDB;
};

export async function createContext(): Promise<GraphQLContext> {
	return {
		db,
	};
}
