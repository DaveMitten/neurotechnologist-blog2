import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
