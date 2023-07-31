/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_MONGODB_URI: process.env.DB_MONGODB_URI,
  },
};

module.exports = nextConfig;
