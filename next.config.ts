import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  basePath: '/app',
  async rewrites() {
    return {
      fallback: [
        {
          basePath: false,
          source: '/:path*',
          destination: 'https://example.com/:path*',
        },
      ],
    };
  },
};


export default nextConfig;
