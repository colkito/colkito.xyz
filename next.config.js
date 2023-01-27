/* eslint-disable @typescript-eslint/no-var-requires */
const withExportImages = require('next-export-optimize-images')
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */

const defaultConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const configWithPWA = withPWA({
  ...defaultConfig,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
  },
})

module.exports = withExportImages(configWithPWA)
