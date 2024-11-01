import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: '',
  },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      required: true,
    },
    {
      name: 'projectType',
      type: 'select',
      options: [
        // need to think of what the project types could be
        {
          label: 'Type A',
          value: 'typeA',
        },
        {
          label: 'Type B',
          value: 'typeB',
        },
      ],
    },
  ],
}
