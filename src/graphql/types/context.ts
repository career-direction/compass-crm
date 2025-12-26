import type { DrizzleDB } from "@/lib/drizzle/drizzle";
import { db } from "@/lib/drizzle/drizzle";

export type GraphQLContext = {
	db: DrizzleDB;
};

export async function createContext(): Promise<GraphQLContext> {
	return {
		db,
	};
}
