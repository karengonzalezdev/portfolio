/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: "dist",
    images:{
        unoptimized: true,
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.pexels.com",
            }
        ]
    }
};

module.exports = nextConfig
