/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    staticPageGenerationTimeout: 1000,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "brookj-assets.tinajs.dev",
                port: "",
            },
            {
                protocol: "https",
                hostname: "assets-local-brookj.tinajs.dev",
                port: "",
            },
            {
                protocol: "https",
                hostname: "assets.tina.io",
                port: "",
            },
            {
                protocol: "https",
                hostname: "assets.tinajs.dev",
                port: "",
            },
        ],
    },
};

export default nextConfig;
