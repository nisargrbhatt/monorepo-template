import { Button } from "@/components/ui/button";
import { getServerSession } from "@lib/auth-utils";
import Link from "next/link";

export default async function Home() {
	const session = await getServerSession();

	return (
		<div className="h-screen w-full">
			<h1 className="font-h1">Hello from Title</h1>
			{!session ? (
				<Link href="/sign-in">
					<Button type="button">Login</Button>
				</Link>
			) : (
				<Link href="/profile">
					<Button type="button">Profile</Button>
				</Link>
			)}
		</div>
	);
}
