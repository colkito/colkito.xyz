import type { Post } from '@/lib/types'

type MoreStoriesProps = {
  posts: Post[]
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  console.log(posts.length)
  return <>More</>
}
