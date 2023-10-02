/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dfstudio-d420.kxcdn.com",
      },
      {
        hostname: "t4.ftcdn.net",
      },
      {
        hostname: "lulumart.com.bd",
      },
      {
        hostname: "t3.ftcdn.net",
      },
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
