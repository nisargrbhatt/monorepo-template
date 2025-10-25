import { openApiTanstackClient } from "@lib/orpc";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function UserCard() {
	const { data, error } = useQuery(openApiTanstackClient.user.me.queryOptions());

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, []);

	return <p>Email: {data?.data?.email}</p>;
}
