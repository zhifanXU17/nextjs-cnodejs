/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**.githubusercontent.com",
        pathname: "/**",
      },
      {
        hostname: "gravatar.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
