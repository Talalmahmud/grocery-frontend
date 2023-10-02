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
    ],
  },
};

module.exports = nextConfig;
