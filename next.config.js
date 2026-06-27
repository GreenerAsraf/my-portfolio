/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow static image imports (same as CRA behavior)
  images: {
    unoptimized: true,
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
        destination: "/aboutme",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
