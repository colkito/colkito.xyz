import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'
import type { Post } from '@/lib/types'

type PostHeaderProps = Pick<Post, 'title' | 'coverImage' | 'date'>

export default function PostHeader({
  title,
  coverImage,
  date,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-2xl">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  )
}
