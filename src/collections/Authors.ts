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
      label: 'Full Name',
      admin: {
        readOnly: true,
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
      required: true,
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      required: true,
      type: 'text',
    },
  ],
}
