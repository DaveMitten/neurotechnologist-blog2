import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'React',
          value: 'react',
        },
        {
          label: 'Tailwind CSS',
          value: 'tailwindCss',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'Web3',
          value: 'web3',
        },
        {
          label: 'Algorithms',
          value: 'algorithms',
        },
        {
          label: 'Payload CMS',
          value: 'payload',
        },
        {
          label: 'Aesthetics',
          value: 'aesthetics',
        },
        {
          label: 'Learning',
          value: 'learning',
        },
        {
          label: 'Computer Science',
          value: 'computerScience',
        },
        {
          label: 'Stripe',
          value: 'stripe',
        },
        {
          label: 'Next.js',
          value: 'nextJs',
        },
        {
          label: 'Node.js',
          value: 'nodeJs',
        },
        {
          label: 'Tech',
          value: 'tech',
        },
        {
          label: 'Web Development',
          value: 'webDevelopment',
        },
        {
          label: 'General Developer Insight',
          value: 'generalDeveloperInsight',
        },
      ],
    },
     {
      name: 'content',
      type: 'textarea',
    },
    // {
    //   name: 'content',
    //   type: 'richText',
    // },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
}
