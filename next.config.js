const prismic = require('@prismicio/client')
const sm = require('./slicemachine.config.json')
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
})

const redirects = () => {
  return [
    {
      source: '/today-i-learned/javascript/',
      destination: '/today-i-learned/category/javascript/',
      permanent: true,
    },
    {
      source: '/today-i-learned/react/',
      destination: '/today-i-learned/category/react/',
      permanent: true,
    },
    {
      source: '/today-i-learned/api/',
      destination: '/today-i-learned/category/api/',
      permanent: true,
    },
    {
      source: '/today-i-learned/accessibility/',
      destination: '/today-i-learned/category/accessibility/',
      permanent: true,
    },
    {
      source: '/today-i-learned/backend/',
      destination: '/today-i-learned/category/backend/',
      permanent: true,
    },
    {
      source: '/today-i-learned/css/',
      destination: '/today-i-learned/category/css/',
      permanent: true,
    },
    {
      source: '/today-i-learned/gatsbyjs/',
      destination: '/today-i-learned/category/gatsbyjs/',
      permanent: true,
    },
    {
      source: '/today-i-learned/git/',
      destination: '/today-i-learned/category/git/',
      permanent: true,
    },
    {
      source: '/today-i-learned/html/',
      destination: '/today-i-learned/category/html/',
      permanent: true,
    },
    {
      source: '/today-i-learned/performance/',
      destination: '/today-i-learned/category/performance/',
      permanent: true,
    },
    {
      source: '/today-i-learned/prisma/',
      destination: '/today-i-learned/category/prisma/',
      permanent: true,
    },
    {
      source: '/today-i-learned/redux/',
      destination: '/today-i-learned/category/redux/',
      permanent: true,
    },
    {
      source: '/today-i-learned/software development/',
      destination: '/today-i-learned/category/software-development/',
      permanent: true,
    },
    {
      source: '/today-i-learned/testing/',
      destination: '/today-i-learned/category/testing/',
      permanent: true,
    },
    {
      source: '/today-i-learned/ux/',
      destination: '/today-i-learned/category/ux/',
      permanent: true,
    },
    {
      source: '/today-i-learned/web-security/',
      destination: '/today-i-learned/category/web-security/',
      permanent: true,
    },
  ]
}

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.repositoryName, { accessToken })

  const repository = await client.getRepository()
  const locales = repository.languages.map((lang) => lang.id)

  return {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    i18n: {
      locales,
      localeDetection: false,
      defaultLocale: locales[0],
    },
    images: {
      domains: ['media.giphy.com', 'images.prismic.io'],
    },
    async redirects() {
      return redirects()
    },
  }
}

// Merge MDX config with Next.js config
module.exports = nextConfig
