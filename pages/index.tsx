import Link from 'next/link'
import { Container, Heading, Text } from '@chakra-ui/react'
import HeroPost from '@/components/HeroPost'
import MoreStories from '@/components/MoreStories'
import { getAllPosts } from '@/lib/api'
import type { Post } from '@/lib/types'

type HomeProps = {
  heroPost: Post
  morePosts: Post[]
}

export default function Home({ heroPost, morePosts }: HomeProps) {
  return (
    <Container>
      <Heading>
        Welcome to <Link href="/hello">colkito.xyz</Link>
      </Heading>
      <Text>
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside, the sable cloud beneath was dished out, and the
        car seemed to float in the middle of an immense dark sphere, whose upper
        half was strewn with silver. Looking down into the dark gulf below, I
        could see a ruddy light streaming through a rift in the clouds.
      </Text>

      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}

      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'coverImage',
    'date',
    'author',
    'slug',
    'excerpt',
  ])

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return {
    props: { heroPost, morePosts },
  }
}
