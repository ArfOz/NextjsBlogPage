/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
    },

    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    // omitted for brevity...
                ],
            },
            {
                source: '/api/special-data',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'false' },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://example.com',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,DELETE,PATCH,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
