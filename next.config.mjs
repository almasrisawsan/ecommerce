/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
