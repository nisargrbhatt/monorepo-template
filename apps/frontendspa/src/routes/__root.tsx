import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
	component: RootLayout,
	errorComponent: ({ error, reset }) => {
		console.error(error);
		return (
			<div>
				<p>{error?.message ?? "Something went wrong"}</p>
				<button
					type="button"
					onClick={() => {
						reset();
					}}
				>
					Retry
				</button>
			</div>
		);
	},
});

function RootLayout() {
	return (
		<div>
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools />
		</div>
	);
}
