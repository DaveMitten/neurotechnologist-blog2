import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
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
    // Email added by default
    // Add more fields as needed
  ],
}
