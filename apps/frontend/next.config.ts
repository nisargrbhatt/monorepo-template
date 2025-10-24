import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	rewrites: () => [
		{
			source: "/api/auth/:path*",
			destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/:path*`,
		},
	],
};

export default nextConfig;
