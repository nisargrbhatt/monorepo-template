"use server";
import { headers } from "next/headers";
import { authClient } from "./auth-client";
import { safeAsync } from "@repo/utils";
import { redirect } from "next/navigation";

/**
 * Function to fetch session from server
 * Use this function also as Auth Guard
 * As in Next.js v16, they have changed middleware to proxy
 * to indicate that middleware is not the place to do auth checks or any io operation
 * So as per the docs, data-access layer is the place to do auth checks.
 * Or put it inside Layout component for client side checks only.
 */
export const getServerSession = async (props?: { redirectUrl?: string }) => {
	const redirectToLogin = () => {
		if (typeof props?.redirectUrl === "string") {
			return redirect(`/sign-in?redirectUrl=${props.redirectUrl}`);
		}
		return null;
	};

	const sessionResult = await safeAsync(
		authClient.getSession({
			fetchOptions: {
				headers: await headers(),
			},
		})
	);

	if (!sessionResult.success) {
		return redirectToLogin();
	}

	if (!sessionResult.data?.data) {
		return redirectToLogin();
	}

	return sessionResult.data.data;
};
