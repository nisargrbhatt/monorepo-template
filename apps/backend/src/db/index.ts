import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const dbUrl = process.env.DATABASE_URL!;

const sql = postgres(dbUrl);

export const db = drizzle({
	client: sql,
	schema: schema,
});
