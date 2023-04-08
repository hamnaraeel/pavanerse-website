/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "w86v54uruq3d",
    CONTENTFUL_ACCESS_KEY: "z4QbYhhNMAhOcwbarn6O1lxuE7nsiUrdrKDka8mmwHc",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
