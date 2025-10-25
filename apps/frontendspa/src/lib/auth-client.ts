import { createAuthClient } from "better-auth/react";

export const authClient: ReturnType<typeof createAuthClient> = createAuthClient({
	baseURL: import.meta.env.VITE_BACKEND_URL!,
});
