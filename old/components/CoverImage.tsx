import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

type CoverImageProps = {
  title: string
  src: string
  slug?: string
  height: number
  width: number
}

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
}: CoverImageProps) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm rounded-lg', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/stories/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
