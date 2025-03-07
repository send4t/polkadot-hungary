/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gateway.ipfs.io'],
  },
  i18n: {
    locales: ["hu-HU"],
    defaultLocale: "hu-HU"
},
}

module.exports = nextConfig
