import type { DrizzleDb } from "@/lib/drizzle";
import { db } from "@/lib/drizzle";

export type GraphQLContext = {
	db: DrizzleDb;
};

export async function createContext(): Promise<GraphQLContext> {
	return {
		db,
	};
}
