import { db } from "@db/index";
import { dbHealthCheck } from "@db/statements";
import { contractOpenSpec } from "@lib/implementor";
import { safeAsync } from "@repo/utils";

export const liveness = contractOpenSpec.health.liveness.handler(() => ({
	message: "Liveness check successful",
}));

export const readiness = contractOpenSpec.health.readiness.handler(async ({ errors }) => {
	const dbCheck = await safeAsync(db.execute(dbHealthCheck));

	if (!dbCheck.success) {
		console.error(dbCheck.error);
		throw errors.INTERNAL_SERVER_ERROR({
			message: "Internal server error",
			data: {
				database: false,
			},
		});
	}

	return {
		message: "Readiness check successful",
		data: {
			database: true,
		},
	};
});
