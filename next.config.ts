import type {NextConfig} from 'next';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com https://static.doubleclick.net https://*.doubleclick.net https://googleads.g.doubleclick.net https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://www.google.com https://ssl.google-analytics.com https://cdn.leadster.com.br https://www.clarity.ms https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://tagmanager.google.com https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://i.ytimg.com https://*.google.com https://*.doubleclick.net https://picsum.photos https://drive.google.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.google-analytics.com https://*.leadster.com.br https://*.facebook.com https://*.facebook.net https://www.clarity.ms",
      "font-src 'self' data: https://fonts.gstatic.com",
      "frame-src https://www.youtube.com https://www.google.com https://www.googletagmanager.com https://*.doubleclick.net https://*.leadster.com.br",
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googleapis.com https://www.googletagmanager.com https://www.youtube.com https://region1.google-analytics.com https://*.google.com https://*.doubleclick.net https://*.leadster.com.br https://www.clarity.ms https://*.clarity.ms https://connect.facebook.net https://*.facebook.net https://*.facebook.com",
      "media-src 'self' https://www.youtube.com",
      "worker-src blob:",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
