// Blog
type PostAuthor = {
  name: string
  picture: string
}

export type Post = {
  title: string
  coverImage: string
  date: string
  author: PostAuthor
  slug: string
  excerpt: string
  content?: string
  ogImage?: string
}
