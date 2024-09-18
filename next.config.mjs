import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["lucide-react"],
    compress: true,
    swcMinify: true,
    experimental: {
        serverComponentsExternalPackages: ["@react-email/render"],
    },
    images: {
        remotePatterns: [
            {
                hostname: "flagcdn.com",
                pathname: "**/*.png",
                protocol: "https",
            },
            {
                hostname: "img.icons8.com",
                pathname: "**/*",
                protocol: "https",
            },
        ],
    },
};

export default withNextIntl(nextConfig);
