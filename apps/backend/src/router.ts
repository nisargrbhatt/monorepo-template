import { contractOpenSpec } from "@lib/implementor";
import { liveness, readiness } from "@modules/health";
import { me } from "@modules/user";

export const router = contractOpenSpec.router({
	health: {
		liveness: liveness,
		readiness: readiness,
	},
	user: {
		me: me,
	},
});
