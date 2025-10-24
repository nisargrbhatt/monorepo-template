import { oc } from "@orpc/contract";
import { livenessContract, readinessContract } from "./health";

export const contractRouter = {
	health: oc.router({
		liveness: livenessContract,
		readiness: readinessContract,
	}),
};
