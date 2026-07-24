/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Redirect old routes to new Next.js paths
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aboutMe",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
