// eslint-disable-next-line @typescript-eslint/no-var-requires
const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withExportImages(config)
