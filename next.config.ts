import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://example.com/:path*',
        },
      ],
    };
  },
};


export default nextConfig;
