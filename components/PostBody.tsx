import markdownStyles from './markdown-styles.module.css'
import type { Post } from '@/lib/types'

type PostBodyProps = Pick<Post, 'content'>

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
