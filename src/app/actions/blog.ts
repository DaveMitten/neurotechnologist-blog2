'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

const payload = await getPayload({
  config: configPromise,
})
export async function getPostsCollection() {
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

import { Post } from 'payload-types'

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
