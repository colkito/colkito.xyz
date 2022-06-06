import Link from 'next/link'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import type { Post } from '@/lib/types'

type PostPreviewProps = Pick<
  Post,
  'slug' | 'title' | 'coverImage' | 'date' | 'author' | 'excerpt'
>

export default function PostPreview({
  slug,
  title,
  coverImage,
  date,
  author,
  excerpt,
}: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/stories/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
