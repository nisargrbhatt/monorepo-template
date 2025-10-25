import { Button } from "@/components/ui/button";
import { authClient } from "@lib/auth-client";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: session } = authClient.useSession();

	return (
		<div className="h-screen w-full">
			<h1 className="font-h1">Hello from Title</h1>
			{!session ? (
				<Link to="/sign-in">
					<Button type="button">Login</Button>
				</Link>
			) : (
				<Link to="/profile">
					<Button type="button">Profile</Button>
				</Link>
			)}
		</div>
	);
}
