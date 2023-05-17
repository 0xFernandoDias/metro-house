/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: {
		ENVIRONMENT: process.env.ENVIRONMENT,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "flowbite.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i0.wp.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

module.exports = nextConfig
