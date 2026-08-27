/** @type {import('next').NextConfig} */
const blobUrl = process.env.NEXT_PUBLIC_BLOB_BASE_URL;
let blobHostname = '';
if (blobUrl) {
  try {
    blobHostname = new URL(blobUrl).hostname;
  } catch (e) {
    console.warn("Invalid NEXT_PUBLIC_BLOB_BASE_URL in environment variables.");
  }
}

const nextConfig = {
  images: {
    remotePatterns: blobHostname ? [
      {
        protocol: 'https',
        hostname: blobHostname,
        port: '',
      },
    ] : [],
  },
};

export default nextConfig;
