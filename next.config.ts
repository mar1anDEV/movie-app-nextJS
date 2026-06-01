import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.178.178'],
  images : {
    domains: ['image.tmdb.org']
  }
};

export default nextConfig;