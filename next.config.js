/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: [
          "iconscout.com",
         'backend.reborngreen.org',

        ],
      },
      env: {
        API_URL: process.env.API_URL,
      },
}

module.exports = nextConfig
