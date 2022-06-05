import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type { Post } from './types'

const defaultAuthor = {
  name: 'Mario Colque',
  picture: '/assets/picture.jpg',
}

const postsDirectory = join(process.cwd(), 'data/blog')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Post = {
    slug: '',
    title: '',
    date: '',
    author: defaultAuthor,
    content: '',
    coverImage: '',
    ogImage: '',
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    } else if (field === 'author') {
      post.author = defaultAuthor
    }
  })

  return post as Post
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))
  return posts
}
