import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* We remove 'output: export' and 'basePath' so Vercel serves it at the root */
  
  images: {
    // Keep this to ensure your logo loads without optimization errors
    unoptimized: true, 
  },
};

export default nextConfig;