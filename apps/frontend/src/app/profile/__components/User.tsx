"use client";
import { openApiClient } from "@lib/orpc";
import { useEffect, useState } from "react";

export default function UserCard() {
	const [user, setUser] = useState<
		Awaited<ReturnType<typeof openApiClient.user.me>>["data"] | null
	>(null);

	useEffect(() => {
		const abortController = new AbortController();

		openApiClient.user.me({}, { signal: abortController.signal }).then((res) => {
			setUser(() => res.data);
		});

		return () => {
			abortController.abort();
		};
	}, []);

	return <p>Email: {user?.email}</p>;
}
