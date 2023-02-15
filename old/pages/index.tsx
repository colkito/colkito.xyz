import Container from '@/components/Container'
import HeroPost from '@/components/HeroPost'
import Intro from '@/components/Intro'
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
      <Intro />
      {heroPost && (
        <HeroPost
          slug={heroPost.slug}
          title={heroPost.title}
          date={heroPost.date}
          excerpt={heroPost.excerpt}
          author={heroPost.author}
          coverImage={heroPost.coverImage}
        />
      )}

      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'coverImage',
    'date',
    'author',
    'excerpt',
  ])

  const heroPost = allPosts.shift()

  return {
    props: { heroPost, morePosts: allPosts },
  }
}
