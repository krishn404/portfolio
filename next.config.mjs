/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'spotify-github-profile.kittinanx.com',
      },
    ],
  },
};

export default nextConfig;
