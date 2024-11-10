import { WorkExperienceType } from '@/types/general'
export const workExperience: WorkExperienceType[] = [
  {
    title: 'Lead Developer',
    company: 'ONE TRIBE',
    startDate: 'Nov 2020',
    endDate: 'Sept 2024',
    duration: '3 yrs 11 mos',
    location: 'Remote',
    description: `
One Tribe is a carbon credit platform that allows users to track and offset their carbon footprint.
Grew into lead engineering position while partnering with CTO to architect and scale One Tribe's carbon credit platform, enabling businesses to track, monitor, and offset their environmental impact.

**Core Development:**

- Built custom BigCommerce application and engineered multi-platform webhook system integrating 6+ major e-commerce platforms (Magento, WooCommerce, BigCommerce, Shopify, Mailchimp, Gravity forms and more) and marketing tools, processing hundreds, sometimes thousands of daily events
- Contributed to fullstack applications using React, Next.js, and Node.js with TypeScript, supporting 100+ active users
- Collaborated with CTO to implement carbon milestone tracking system, managing environmental impact data for enterprise clients
- Supported UI modernization by implementing Tailwind CSS, reducing stylesheet size by more than40% and accelerating component development
- Developed custom Stripe payment processing handling $100K+ in revenue across multiple pricing tiers and products

**Platform Improvements:**

- Assisted in building internal Next.js admin dashboard replacing Retool, reducing customer support response time and saving a minimum of 15+ engineering hours weekly 
- Helped establish CI/CD pipeline with GitHub Actions and Vercel, reducing deployment time.
- Contributed to testing suite development achieving 75% coverage on critical paths
- Implemented SSR-generated carbon impact pages for 100+ brands, improving load times and SEO considerably.

**Infrastructure & Collaboration:**

- Participated in code reviews and supported junior developers while maintaining quality standards
- Simplified onboarding process by reducing required steps by 60%, significantly decreasing user drop-off rates
-Assisted in migration of 3GB of optimized text-based data from Firebase to Xata with zero downtime, improving query performance and handling 90,000+ cloud function invocations monthly`,

    skills: [
      'JavaScript',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'Node.js',
      'Express.js',
      'Contentful',
      'Vercel',
      'Jest',
      'GCP',
      'Xata',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'NextAuth (Auth.js)',
    ],
  },

  {
    title: 'Software Engineer',
    company: 'Antler Digital',
    startDate: 'Jan 2023',
    endDate: 'Sept 2024',
    duration: '1 yr 9 mos',
    location: 'Remote',
    description: `
Antler digital is a startup that helps companies build digital products.
Expanded One Tribe's development capabilities through Antler Digital partnership, complementing primary role by contributing to diverse client projects in parallel.

- Worked with MetaMask and Web3.js for blockchain integration for an NFT platform.
- Created systems with Payload CMS, ensuring a flexible and scalable content management system.
- Used github actions CI/CD for deployment locally and in production, ensuring a fast and reliable deployment process minimising human error.
- Created unit tests with Jest, ensuring a comprehensive and reliable testing strategy, wherever we had budget to do so.
`,

    skills: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Jest',
      'Python',
      'Django',
      'FastAPI',
      'docker',
      'AWS',
      'Payload CMS',
      'Stripe',
      'CI/CD',
      'Git',
      'GitHub',
      'Contentful',
      'Vercel',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Firstbase',
    startDate: 'Jan 2020',
    endDate: 'Sep 2020',
    duration: '9 mos',
    location: 'Remote',
    description: `
Firstbase is a startup that helps companies bring remote working to their employees.
Joined Firstbase as the founding engineer at pre-product stage, working directly with founders to architect and build the core platform that enabled enterprises to deploy and manage remote work operations at scale.

- Rapidly mastered Java/Spring Boot tech stack, progressing from initial learning to production deployment in one week while maintaining team's development velocity
- Strengthened platform quality through extensive test suite development, achieving 90%+ coverage across React components while implementing critical business features
- Enhanced platform accessibility to WCAG 2.1 AA standards, improving user experience for screen readers and assistive technologies
`,
    skills: [
      'JavaScript',
      'React',
      'Java',
      'Spring Boot',
      'CSS',
      'A11y',
      'WCAG 2.1',
      'Test Automation',
      'Jest',
    ],
  },
  {
    title: 'React Developer',
    company: 'Beatchain',
    startDate: 'Mar 2019',
    endDate: 'Sep 2019',
    duration: '7 mos',
    location: 'London, United Kingdom',
    description: `
Beatchain helps music companies access the $4bn+ unsigned artist market.
Joined Beatchain at early-stage to develop their social media marketing platform, helping capture market share in the $4bn+ unsigned artist space by enabling streamlined multi-platform content management.

- Developed consolidation social media scheduling system using React/Redux/Redux-Saga state management stack.
- Implemented robust state management handling multi-platform posts for musicians in the $4bn+ unsigned artist market, supporting scheduling across 5+ major social networks from a single interface
- Built scalable social media automation platform enabling artists to manage multiple accounts with 60% less time investment, supporting thousands of scheduled posts across Twitter, Instagram, Facebook, and more
- Built and optimized frontend components with SASS, contributing to improved dashboard performance for artists`,
    skills: ['JavaScript', 'React', 'Ant Design', 'HTML', 'CSS', 'React Hooks', 'React Router'],
  },
  {
    title: 'React Developer',
    company: 'Currikula',
    startDate: 'Nov 2018',
    endDate: 'Mar 2019',
    duration: '5 mos',
    location: 'London, United Kingdom',
    description: `
Currikula was a startup that helped students get better grades.
Joined Currikula's founding engineering team, working directly with founders to build and scale an AI-powered educational platform from initial concept to supporting 290+ active students with automated essay improvement tools.

- Spearheaded migration to architected scalable modern React/Typescript stack (CRA, ES6, Ant Design), enabling rapid feature deployment and supporting 290+ active users with zero downtime
- Implemented modern ES6 features and custom hooks that reduced code duplication by 60%
- Collaborated on database schema design and API architecture, resulting in 30% faster query response times and efficient handling of thousands of daily essay submissions
`,
    skills: [
      'JavaScript',
      'React',
      'TypeScript',
      'HTML',
      'CSS',
      'Styled Components',
      'CRA',
      'ES6',
      'Ant Design',
    ],
  },
  {
    title: 'Contract Developer',
    company: 'Tails.com',
    startDate: 'Oct 2018',
    endDate: 'Jan 2019',
    duration: '4 mos',
    location: 'London, United Kingdom',
    description: `
Tails.com is a startup that provides health conscious pet food.
Collaborated with Tails.com's marketing team as dedicated QA engineer, developing and executing A/B testing strategies to enhance user experience across their personalized pet food subscription service.

- Worked with the marketing team to implement A/B testing in the platform.
- Helped with the setup of various analytics tools to track user behavior and improve the platform increasing user conversion rates and reducing user dropoff rates in the signup flow and landing pages.`,

    skills: ['JavaScript', 'A/B Testing', 'HTML', 'CSS', 'jQuery', 'A/B testing'],
  },
  {
    title: 'Code instructor',
    company: "ESCEN - Ecole Supérieure de Commerce et d'Economie Numérique",
    startDate: 'Sep 2018',
    endDate: 'Sep 2018',
    duration: '1 mo',
    location: 'London, United Kingdom',
    description: `
ESCEN is a school for digital business and economics.
Designed and delivered practical frontend development workshop for business students, using interactive demonstrations to teach Bootstrap/HTML5 fundamentals while providing hands-on technical mentorship through project completion.

- Developed and delivered 2-day intensive Bootstrap/HTML5 curriculum for digital business students, using JSFiddle for interactive demonstrations and hands-on learning
- Mentored students through final project development, providing technical guidance on frontend technologies (HTML5, Bootstrap, CSS, JavaScript) and best practices for web development
`,
    skills: ['HTML5', 'Bootstrap', 'CSS', 'JSFiddle'],
  },
  {
    title: 'Code Workshop Instructor',
    company: 'National Film and Television School',
    startDate: 'Jul 2018',
    endDate: 'Jul 2018',
    duration: '1 mo',
    location: 'London, United Kingdom',
    description: `
National Film and Television School is an acclaimed school for film and television.
Designed and delivered practical web development curriculum for digital media students, combining technical instruction with hands-on project mentorship to enable successful delivery of frontend projects using Bootstrap and HTML5.

- Designed and taught practical web development workshop series, guiding business students from basic HTML/CSS concepts to completing functional web projects
- Provided hands-on technical mentorship through JSFiddle demonstrations and real-time project support, enabling non-technical students to successfully deliver frontend projects`,
    skills: ['HTML5', 'Bootstrap', 'CSS', 'JSFiddle'],
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'Honest Brew',
    startDate: 'Aug 2017',
    endDate: 'Oct 2018',
    duration: '1 yr 3 mos',
    location: 'London, United Kingdom',
    description: `
Honest Brew is an online beer subscription service and shop.
Started software engineering career at HonestBrew's rapidly growing e-commerce platform (28% monthly growth), maintaining and optimizing their WordPress/WooCommerce infrastructure while shipping 10,000+ monthly craft beer orders.

- Maintained and optimized WooCommerce platform supporting 28% month-over-month growth and 10,000+ monthly beer shipments, ensuring zero downtime during peak ordering periods through proactive plugin management and performance monitoring
- Collaborated with senior developers to enhance customer experience features, resulting in a 15% increase in average order value and successful deployment of age verification, subscription management, and inventory tracking systems
- Reduced CSS bundle size by 40% and decreased page load time by 2.5s by consolidating multiple CSS files into a streamlined SASS architecture with Gulp automation
- Implemented Git version control system, resulting in 30% fewer deployment errors and enabling 2x faster developer onboarding
`,
    skills: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Wordpress', 'Woocommerce', 'Sass', 'Git'],
  },
]
