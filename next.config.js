/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  reactStrictMode: true,
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})

// const withMDX = require('@next/mdx')({
//   extension: /\.(md|mdx)$/,
// })

// module.exports = withMDX({
//   reactStrictMode: true,
// })
