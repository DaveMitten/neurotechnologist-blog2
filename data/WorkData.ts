type WorkExperience = {
  title: string
  company: string
  employmentType: string
  startDate: string
  endDate: string
  duration: string
  location: string
  description?: string
  skills?: string[]
  links?: {
    github?: string
    personal?: string
  }
  courses?: string[]
}
export const workExperience: WorkExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Antler Digital',
    employmentType: 'Contract',
    startDate: 'Jan 2023',
    endDate: 'Present',
    duration: '1 yr 9 mos',
    location: 'Remote',
    skills: [
      'Web Engineering',
      'React',
      'JavaScript',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Payload CMS',
      'Stripe',
      'Node.js',
      'Express.js',
      'Git',
      'GitHub',
      'MongoDB',
      'Stripe',
      'Contentful',
      'Vercel',
    ],
  },
  {
    title: 'Lead Developer',
    company: 'ONE TRIBE',
    employmentType: 'Contract',
    startDate: 'Nov 2020',
    endDate: 'Sep 2024',
    duration: '3 yrs 11 mos',
    location: 'Remote',
    description: `
The role required strong technical expertise, leadership skills, and the ability to balance hands-on development with team management responsibilities.

- Collaborated with the CTO in overall technical direction of the One Tribe product
- Collaborated with other developers in the team joining in with stand-ups and paired programming.
- Wrote high quality code 
- Implemented best practices for coding standards, testing, and deployment
- Conducted regular code reviews, QA, and testing.
- Assisted in designing and building UX flows, UI components, and layouts.
- Overcame complex challenges with simple, accurate solutions.
- Ensures project delivery within specified timelines and budget
- Stayed current with industry trends and emerging technologies

`,
    skills: [
      'JavaScript',
      'Web Engineering',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'payload cms',
      'Stripe',
      'Node.js',
      'Express.js',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Developer',
    company: 'Self employed',
    employmentType: 'Contract',
    startDate: 'Sep 2019',
    endDate: 'Sep 2024',
    duration: '5 yrs 1 mo',
    location: 'Remote',
    description:
      'Working as a freelancer designer and developer through custom coding solutions (HTML5,CSS3, JS, React, Gatsby), including interactions, UI components and their design, UX/UI design. Various builds ranging a wide array of skills, frontend focus with some backend responsibilities. From standard website builds to data manipulation and data visuals.',
    skills: [
      'Deck.gl',
      'Mapbox',
      'React',
      'Gatsby',
      'Spring',
      'Thymeleaf',
      'HTML5',
      'CSS3',
      'SASS',
      'PostCSS',
      'Webpack',
      'JavaScript',
      'Java',
      'Animations',
      'Responsive design',
      'Bulma',
      'Tailwind',
      'Bootstrap',
      'UX/UI design',
      'Framer',
      'Sketch',
    ],
    links: {
      github: 'https://github.com/DaveMitten',
      personal: 'https://davidjamesmitten.com',
    },
  },
  {
    title: 'Frontend Developer',
    company: 'Firstbase',
    employmentType: 'Full-time',
    startDate: 'Jan 2020',
    endDate: 'Sep 2020',
    duration: '9 mos',
    location: 'Remote',
    description:
      'Working as part of a small team creating features, working on Jest/react-testing-framework tests. More recent tasks have included implementing a11y following in part the wai-aria guidelines.',
  },
  {
    title: 'React Developer',
    company: 'Beatchain',
    employmentType: 'Full-time',
    startDate: 'Mar 2019',
    endDate: 'Sep 2019',
    duration: '7 mos',
    location: 'London, United Kingdom',
    description:
      'Working on a section requiring in-depth knowledge of react, redux, redux-saga and general frontend practice, specificly SASS.',
  },
  {
    title: 'Freelance Developer',
    company: 'Freelance, self-employed',
    employmentType: 'Self-employed',
    startDate: 'Jun 2017',
    endDate: 'Sep 2019',
    duration: '2 yrs 4 mos',
    location: 'London',
    courses: ['React Front To Back | Udemy', 'React JS and Redux - Mastering Web Apps | Udemy'],
  },
  {
    title: 'React Developer',
    company: 'Currikula',
    employmentType: 'Contract',
    startDate: 'Nov 2018',
    endDate: 'Mar 2019',
    duration: '5 mos',
    location: 'London, United Kingdom',
    description:
      '- Building version 2.0 with create react app from the ground up.\n- Using antd as a UI library for quick, efficient build.\n- Using NPM and yarn for local development.\n- Working with modern React techniques and ES6.\n- Designing and planning architecture and code base design.\n- Assisted in schema database designs.',
    skills: ['React', 'antd', 'NPM', 'Yarn', 'ES6', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Contract Developer',
    company: 'Tails.com',
    employmentType: 'Contract',
    startDate: 'Oct 2018',
    endDate: 'Jan 2019',
    duration: '4 mos',
    location: 'London, United Kingdom',
    description:
      '- Created landing pages with jQuery, Javascript HTML and CSS from PSD files for A/B tests.\n- Used Monetate testing platform to manipulate the website for tests.\n- Created docs for Monetate for a hand over to the growth and marketing teams.\n- Used http://idangero.us/ swiper.js to create swipe actions for the mobile first landing page. It simulated a mobile app experience for the users for A/B tests. (Examples on personal site)',
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'Honest Brew',
    employmentType: 'Full-time',
    startDate: 'Aug 2017',
    endDate: 'Oct 2018',
    duration: '1 yr 3 mos',
    location: 'London, United Kingdom',
    description:
      '- Maintained the site with updates, plugin updates and general maintenance for the Wordpress and Woocommerce site.\n- Assisted the senior developer with new feature creation using Wordpress, PHP and SASS\n- Converted the entire site from various css files and plugins to a streamlined SASS setup powered with a gulp task runner.\n- Helped setup and put in place the versioning systems',
  },
  {
    title: 'Code instructor',
    company: "ESCEN - Ecole Supérieure de Commerce et d'Economie Numérique",
    employmentType: 'Contract',
    startDate: 'Sep 2018',
    endDate: 'Sep 2018',
    duration: '1 mo',
    location: 'London, United Kingdom',
    description:
      '- Taught and wrote a 2 days introductory course into Bootstrap 4\n- Helped students with demo projects using HTML5, Bootstrap in JSFiddle\n- Marked students work and gave feedback to help them improve',
  },
  {
    title: 'Code Workshop Instructor',
    company: 'National Film and Television School',
    employmentType: 'Contract',
    startDate: 'Jul 2018',
    endDate: 'Jul 2018',
    duration: '1 mo',
    location: 'London, United Kingdom',
    description:
      '- Designed a HTML/CSS course to teach the students basic - intermediate level skills to help them design their final projects\n- Taught lessons over several days within workshops\n- Aided students in building out a project they could use as reference for their final projects',
  },
  {
    title: 'Junior Web Developer',
    company: 'General Assembly',
    employmentType: 'Full-time',
    startDate: 'Mar 2017',
    endDate: 'Jun 2017',
    duration: '4 mos',
    location: 'London, United Kingdom',
    description:
      "Making coffee one day I thought, I NEED TO CODE! Ok, that's not completely true but I did decide I wanted new challenges. I started my interest in computers at an early age and, once a gamer, always a gamer? Right?\n\nMy friend introduced me to General Assembly and after a little research into the market I confirmed my decision to apply. A stressful, intense journey through modern coding languages but with a supportive network of fellow students and a hard working dedicated teaching team the course flashed past. Now, the future, with this unquenchable need to code, I find it is part of my daily routine. With a hands on approach of building web apps I have an incredible grounding to continue.",
    skills: [
      'JavaScript',
      'Ruby',
      'ES6',
      'AngularJS',
      'Node.js',
      'Express.js',
      'JQuery',
      'AJAX',
      'Rails 5',
      'PostgreSQL',
      'NoSQL',
      'MongoDB',
      'JSON',
      'HTML5',
      'CSS3',
      'SCSS',
      'Bootstrap',
      'Tachyons',
      'Wireframing',
      'Sketch',
      'Adobe CC',
      'Trello',
      'npm',
      'Yarn',
      'Gulp',
      'Bower',
      'Git',
      'Github',
      'Heroku',
      'Agile development',
      'RESTful API',
      'CRUD',
      'MVC framework',
      'paired programming',
      'TDD',
      'Responsive web design',
      'DOM',
      'OOP',
    ],
  },
]
