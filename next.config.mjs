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
};

export default withNextIntl(nextConfig);
