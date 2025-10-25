import { Button } from "@/components/ui/button";
import { authClient } from "@lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-out/")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = Route.useNavigate();

	const signOut = async () => {
		await authClient.signOut();
		navigate({ to: "/" });
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
