/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ia-builder",
        destination: "/developer-ai",
        permanent: true,
      },
      {
        source: "/ia-builder/:path*",
        destination: "/developer-ai/:path*",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
