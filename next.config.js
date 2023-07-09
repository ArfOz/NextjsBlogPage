/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    i18n,
};

module.exports = nextConfig;
