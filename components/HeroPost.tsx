import type { Post } from '@/lib/types'

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
}: Post) {
  console.log({
    title,
    coverImage,
    date,
    author,
    slug,
    excerpt,
  })
  return <>Hero</>
}
