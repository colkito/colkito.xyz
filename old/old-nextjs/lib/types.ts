// Stories
type PostAuthor = {
  name: string
  picture: string
}

export type Post = {
  slug: string
  title: string
  date: string
  author: PostAuthor
  excerpt: string
  content: string
  coverImage: string
  ogImage: string
}
