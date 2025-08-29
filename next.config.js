/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
  },
  images: {
    domains: ['images.pexels.com', 'www.pexels.com']
  },
  // Allow TradingView scripts
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://s3.tradingview.com https://charting-library.tradingview.com https://code.jquery.com https://cdn.jsdelivr.net; object-src 'none';"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;