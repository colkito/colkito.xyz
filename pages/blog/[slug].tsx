import { Container, Heading, Text } from '@chakra-ui/react'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import type { Post } from '@/lib/types'

type PostProps = {
  post: Post
}

export default function Post({ post }: PostProps) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  if (router.isFallback) {
    return <Text>Loading…</Text>
  }

  return (
    <>
      <Head>
        <title>{post.title} |</title>
        <meta property="og:image" content={post.ogImage} />
      </Head>
      <Container maxW="container.lg">
        <Heading>{post.title}</Heading>
        {/* // <PostHeader
        //   title={post.title}
        //   coverImage={post.coverImage}
        //   date={post.date}
        //   author={post.author}
        // />
        // <PostBody content={post.content} /> */}
        <Text>{post.content}</Text>
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
