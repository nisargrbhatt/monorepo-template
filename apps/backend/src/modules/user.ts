import { contractOpenSpec } from "@lib/implementor";
import { privateAuth } from "@lib/procedures";

export const me = contractOpenSpec.user.me.use(privateAuth).handler(async ({ context }) => ({
	message: "User fetched successfully",
	data: context.user,
}));
