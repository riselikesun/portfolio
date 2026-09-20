/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@riselikesun/ui"],
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
