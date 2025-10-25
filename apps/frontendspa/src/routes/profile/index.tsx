import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@lib/auth-client";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: session } = authClient.useSession();

	return (
		<div>
			<h1>Profile</h1>
			<p>Name: {session?.user?.name}</p>
			<p>Email: {session?.user?.email}</p>
			<Avatar>
				<AvatarImage src={session?.user?.image || ""} />
				<AvatarFallback>{session?.user?.name?.at(0)?.toUpperCase()}</AvatarFallback>
			</Avatar>
			<Link to="/sign-out">
				<Button type="button">Logout</Button>
			</Link>
		</div>
	);
}
