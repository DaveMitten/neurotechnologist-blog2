import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          async ({ data }) => {
            return `${data?.firstName} ${data?.lastName}`
          },
        ],
      },
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
    },
  ],
}
