/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: "/pm-portfolio-1",
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.sanity.io"]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});
		return config;
	},
	images: {
		unoptimized: true,
	  },
};

module.exports = nextConfig;
