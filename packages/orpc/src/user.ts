import { oc } from "@orpc/contract";
import * as z from "zod";

export const meContract = oc
	.route({
		method: "GET",
		path: "/user/me",
		description: "Get current user",
		summary: "Get Me",
	})
	.output(
		z.object({
			message: z.string().describe("User fetched successfully"),
			data: z.object({
				id: z.string(),
				createdAt: z.date(),
				updatedAt: z.date(),
				email: z.string().describe("User email"),
				emailVerified: z.boolean(),
				name: z.string().describe("User name"),
				image: z.string().nullish().describe("User image"),
			}),
		})
	)
	.errors({
		UNAUTHORIZED: {
			message: "Unauthorized",
		},
	});
