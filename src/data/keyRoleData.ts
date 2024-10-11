import type { KeyRole } from '@/types/general'

const keyRoles: KeyRole[] = [
  {
    company: 'One Tribe',
    title: 'Senior Full Stack Developer',
    logo: '@/public/images/onetribelogo.png',
    date: {
      start: 'October 2021',
      end: 'September 2024',
    },
    overview:
      'One Tribe is a company focused on helping companies reduce their carbon footprint. As a Senior Full Stack Developer, I played a crucial role in shaping the technical direction and implementation of the One Tribe product, balancing hands-on development with team leadership responsibilities.',
    keyResponsibilities: [
      'Collaborated with the CTO on overall technical direction of the One Tribe product',
      'Led and participated in developer team activities, including stand-ups and paired programming',
      'Wrote high-quality code and implemented best practices for coding standards, testing, and deployment',
      'Conducted regular code reviews, QA, and testing',
      'Assisted in designing and building UX flows, UI components, and layouts',
      'Overcame complex challenges with simple, accurate solutions',
      'Ensured project delivery within specified timelines and budget',
      'Stayed current with industry trends and emerging technologies',
    ],
    technicalExpertise: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Firebase',
      'Xata',
      'Google Cloud Platform (GCP)',
      'Stripe SDK',
      'Auth.js (formerly NextAuth)',
      'Tailwind CSS',
      'Contentful CMS',
      'React Hook Form',
      'Recoil',
      'React Email',
      'Postmark',
      'Stripo',
    ],
    majorAchievements: [
      'Successfully migrated the database from Firebase to Xata, improving performance and scalability',
      'Implemented a comprehensive payment system using Stripe SDK, enabling one-time purchases and subscriptions',
      'Developed a Next.js admin app to replace the existing Retool solution, enhancing functionality and user experience',
      'Initiated and led the migration to an atomic project structure, improving code organization and maintainability',
    ],
    projectsAndContributions: [
      {
        point: 'Payment System Overhaul',
        subPoints: [
          'Built out payment flows with Stripe SDK',
          'Created dynamic pricing and subscription prices/products in Stripe, generated from JavaScript and the Stripe SDK',
          'Implemented a system for one-time purchases and subscriptions of carbon or trees',
        ],
      },
      {
        point: 'Authentication and User Management',
        subPoints: [
          'Implemented sign-in/registration flows using Auth.js',
          'Created a Retool app for user account management, later replaced with a custom Next.js admin app',
        ],
      },
      {
        point: 'Database Migration and Management',
        subPoints: [
          'Led the migration from Firebase to Xata database',
          'Worked with GCP to manage Firebase data: logs, buckets, backups, etc.',
        ],
      },
      {
        point: 'Frontend Development and Optimization',
        subPoints: [
          'Moved the project to Tailwind CSS for improved styling efficiency',
          'Created a Next.js app to statically generate brand pages',
          'Implemented a Contentful CMS to manage custom brand pages',
          'Evolved state management from Context API to Recoil, and finally to Next.js with React hooks, useSWR, and server actions',
        ],
      },
      {
        point: 'Email System Implementation',
        subPoints: [
          'Developed an emailing system using React Email, Postmark, and Stripo',
          'Created a milestone celebration email cron event',
        ],
      },
    ],
    skillsDeveloped: [
      'Advanced proficiency in Next.js and React ecosystem',
      'Expertise in payment integration using Stripe',
      'Database migration and management (Firebase to Xata)',
      'Cloud services management (GCP)',
      'Implementation of headless CMS (Contentful)',
      'Advanced state management techniques in React applications',
      'Email system development and automation',
    ],
  },
]

export { keyRoles }
