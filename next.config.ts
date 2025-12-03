// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE: output: 'export'
  // REMOVE: basePath: '/clawscan-website'
  // REMOVE: assetPrefix: '/clawscan-website/'
  
  images: {
    // Keep unoptimized: true to fix the logo, but remove other clutter
    unoptimized: true, 
  },
};

export default nextConfig;