import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type { Post } from './types'

const defaultAuthor = {
  name: 'Mario Colque',
  picture: '/assets/picture.jpg',
}

const storiesDir = join(process.cwd(), 'data/stories')

export function getPostSlugs() {
  return fs.readdirSync(storiesDir)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(storiesDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Default Post
  const post: Post = {
    slug: '',
    title: '',
    date: '',
    author: defaultAuthor,
    excerpt: '',
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
    } else if (field === 'ogImage' && data['coverImage']) {
      // Set coverImage (if exists) as ogImage by default
      post.ogImage = data['coverImage']
    } else if (field === 'author') {
      // Set default Author
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
    .sort((post1: Post, post2: Post) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )
  return posts
}
