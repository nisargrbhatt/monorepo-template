import { oc } from "@orpc/contract";
import { livenessContract, readinessContract } from "./health";
import { meContract } from "./user";

export const contractRouter = {
	health: oc.router({
		liveness: livenessContract,
		readiness: readinessContract,
	}),
	user: oc.router({
		me: meContract,
	}),
};
