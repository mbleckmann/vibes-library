/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",   //  <-- GitHub-Assets erlauben
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

