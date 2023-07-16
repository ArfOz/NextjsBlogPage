const path = require('path');
const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    i18n,
    experimental: {
        appDir: true,
    },
    localePath: path.resolve('./public/locales'),
};

module.exports = nextConfig;
