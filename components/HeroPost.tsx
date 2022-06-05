import type { Post } from '@/lib/types'

type HeroPostProps = Pick<
  Post,
  'slug' | 'title' | 'date' | 'author' | 'coverImage'
>

export default function HeroPost({
  slug,
  title,
  date,
  author,
  coverImage,
}: HeroPostProps) {
  console.log({
    slug,
    title,
    date,
    author,
    coverImage,
  })
  return <>Hero</>
}
