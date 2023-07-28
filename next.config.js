/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,

    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
