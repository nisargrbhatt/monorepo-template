import { oc } from "@orpc/contract";
import { z } from "zod/v3";

export const livenessContract = oc
	.route({
		method: "GET",
		path: "/health/liveness",
		description: "Liveness check",
		summary: "Liveness",
	})
	.output(
		z.object({
			message: z.string().describe("Liveness check successful"),
		})
	)
	.errors({
		INTERNAL_SERVER_ERROR: {
			message: "Internal server error",
		},
	});

export const readinessContract = oc
	.route({
		method: "GET",
		path: "/health/readiness",
		description: "Readiness check",
		summary: "Readiness",
	})
	.output(
		z.object({
			message: z.string().describe("Readiness check successful"),
			data: z.object({
				database: z.boolean().describe("Database is ready or not"),
			}),
		})
	)
	.errors({
		INTERNAL_SERVER_ERROR: {
			message: "Internal server error",
			data: z.object({
				database: z.boolean().describe("Database is ready or not"),
			}),
		},
	});
