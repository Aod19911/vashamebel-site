/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // НАШ НОВЫЙ, НАДЕЖНЫЙ СЕРВИС
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;