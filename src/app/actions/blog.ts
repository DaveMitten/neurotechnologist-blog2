'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Post } from 'payload-types'
import { revalidatePath } from 'next/cache'

const payload = await getPayload({
  config: configPromise,
})

export async function getPostsCollection() {
  revalidatePath('/blog', 'page')
  try {
    const collection = await payload.find({
      collection: 'posts',
    })
    if (!collection || collection.docs.length === 0) {
      return []
    }

    return collection
  } catch (error) {
    console.error('Error fetching collection:', error)
    return []
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const post = await payload.findByID({
      collection: 'posts',
      id: id,
    })

    return post as Post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    if (posts.docs.length === 0) {
      return null
    }

    return posts.docs[0] as Post
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}
