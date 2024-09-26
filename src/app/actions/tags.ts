'use server'

import { Tag } from 'payload-types'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

const payload = await getPayload({
  config: configPromise,
})
export const getTags = async (): Promise<Tag[]> => {
  try {
    const tags = await payload.find({
      collection: 'tags',
    })
    return tags.docs
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}
