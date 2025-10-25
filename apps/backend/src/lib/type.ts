import type { HonoRequest } from "hono";
import type { auth } from "./auth";

export type HonoContext = {
	internal?: boolean;
	req?: HonoRequest;
};

export type AuthContext = {
	user: typeof auth.$Infer.Session.user;
	session: typeof auth.$Infer.Session.session;
};
