import { CollectionConfig } from 'payload'

function slugify(text: string) {
  // Remove special characters and replace spaces with hyphens
  const slug = text
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^\w\s-]/g, '')
    ?.replace(/\s+/g, '-')
  return slug
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          async ({ data }) => {
            return `${slugify(data?.title)}`
          },
        ],
      },
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
