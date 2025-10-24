import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { getServerSession } from "@lib/auth-utils";
import Link from "next/link";

export default async function ProfilePage() {
	const session = await getServerSession({ redirectUrl: "/profile" });

	return (
		<div>
			<h1> Profile</h1>
			<p>Name: {session?.user?.name}</p>
			<p>Email: {session?.user?.email}</p>
			<Avatar>
				<AvatarImage src={session?.user?.image || ""} />
				<AvatarFallback>{session?.user?.name?.at(0)?.toUpperCase()}</AvatarFallback>
			</Avatar>
			<Link href="/sign-out">
				<Button type="button">Logout</Button>
			</Link>
		</div>
	);
}
