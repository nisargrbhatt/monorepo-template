"use client";

import { Button } from "@components/ui/button";
import { authClient } from "@lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
	const router = useRouter();
	const signOut = async () => {
		await authClient.signOut();
		router.push("/");
	};

	return (
		<div>
			<h1>Sign Out from App</h1>
			<Button type="button" onClick={signOut}>
				Sign Out
			</Button>
		</div>
	);
}
