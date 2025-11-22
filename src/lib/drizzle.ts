import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Drizzle用のシングルトンDBクライアント
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
