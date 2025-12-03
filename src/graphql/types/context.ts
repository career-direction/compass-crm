import type { DrizzleDB } from "@/lib/drizzle";
import { db } from "@/lib/drizzle";

export type GraphQLContext = {
	db: DrizzleDB;
};

export async function createContext(): Promise<GraphQLContext> {
	return {
		db,
	};
}
