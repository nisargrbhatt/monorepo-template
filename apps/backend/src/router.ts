import { contractOpenSpec } from "@lib/implementor";
import { liveness, readiness } from "@modules/health";

export const router = contractOpenSpec.router({
	health: {
		liveness: liveness,
		readiness: readiness,
	},
});
