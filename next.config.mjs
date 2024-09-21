// @ts-nocheck
/// <reference no-default-lib="true"/>
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { 
        ignoreDuringBuilds: true 
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'majestic-lynx-217.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;
