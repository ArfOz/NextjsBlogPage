/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/*',
                destination: 'http://localhost:3000/*',
            },
        ];
    },
};

module.exports = nextConfig;
