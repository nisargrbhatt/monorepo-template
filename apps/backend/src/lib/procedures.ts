import { oo } from "@orpc/openapi";
import { ORPCError, os } from "@orpc/server";
import type { HonoRequest } from "hono";
import { auth } from "./auth";

type HonoContext = {
	internal?: boolean;
	req?: HonoRequest;
	user: typeof auth.$Infer.Session.user;
	session: typeof auth.$Infer.Session.session;
};

const internalApiKey = process.env.SERVER_KEY;

export const internalAuth = oo.spec(
	os.$context<HonoContext>().middleware(({ context, next }) => {
		if (context?.internal === true) {
			return next();
		}

		const apiKey = context?.req?.header("x-api-key");

		if (!apiKey) {
			throw new ORPCError("UNAUTHORIZED", {
				message: "No `x-api-key` Header Found",
			});
		}

		if (apiKey !== internalApiKey) {
			throw new ORPCError("UNAUTHORIZED", {
				message: "Invalid API Key",
			});
		}

		return next();
	}),
	{
		security: [{ apiKey: [] }],
	}
);

export const privateAuth = oo.spec(
	os.$context<HonoContext>().middleware(async ({ context, next }) => {
		if (context?.internal === true) {
			return next();
		}

		const authHeader = context.req?.raw?.headers;

		if (!authHeader) {
			throw new ORPCError("UNAUTHORIZED", {
				message: "No Auth Header Found",
			});
		}

		const session = await auth.api.getSession({ headers: authHeader });

		if (!session) {
			throw new ORPCError("UNAUTHORIZED", {
				message: "Invalid session",
			});
		}

		return next({
			context: {
				user: session.user,
				session: session.session,
			},
		});
	}),
	{
		security: [{ bearerAuth: [] }],
	}
);

export const publicProcedures = oo.spec(os.$context<HonoContext>(), {
	security: [],
});

export const privateProcedures = os.$context<HonoContext>().use(privateAuth);

export const internalProcedures = os.$context<HonoContext>().use(internalAuth);
