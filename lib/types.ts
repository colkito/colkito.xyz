// Blog
type PostAuthor = {
  name: string
  picture: string
}

export type Post = {
  slug: string
  title: string
  date: string
  author: PostAuthor
  content: string
  coverImage: string
  ogImage: string
}
