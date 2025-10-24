import { sql } from "drizzle-orm";

export const dbHealthCheck = sql`SELECT 1`;
