'use client'
import { Badge } from '@/components/ui/badge'

import { workExperience as experience } from '../../../data/WorkData'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Card, CardContent } from '../../../components/ui/card'
import DownloadTo from '../../../components/composite/DownloadTo'
import { useState } from 'react'
import { PayloadInput } from '../../actions/tailwindstream'
import { renderToString } from 'react-dom/server'
import WorkExperience from '../../../components/cards/WorkexperienceCard'

export default function CVWrapper() {
  const cvHtml = renderToString(
    <div className="bg-white w-full text-left">
      <div className="text-gray-500 text-sm italic ml-2 p-4">
        This CV was generated on the spot from the underlying React components meaning its always up
        to date. Thank you for taking interest in my site and my cv.
      </div>
      <CV />
    </div>,
  )
  const [payload, setPayload] = useState<PayloadInput>({
    html: cvHtml,
    output: 'pdf',
  })
  return (
    <div className="bg-gray-900 w-full lg:pb-10 flex flex-col items-center justify-center p-4 space-y-4">
      <DownloadTo payload={payload} setPayload={setPayload} />
      <div className="text-center flex lg:hidden max-w-screen-md mx-auto bg-white text-gray-500 p-8 mb-10  flex-col items-center justify-center">
        You are trying to view my CV which is optimised for print and desktop screens. Please
        download it to view it.
        <span className="text-sm mt-6">Thank you.</span>
      </div>
      <div className="hidden lg:block">
        <CV />
      </div>
    </div>
  )
}

const leftSideCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="rounded-lg">
      <div className="text-sm mb-1 flex flex-col  space-y-2">
        <h4 className="text-[#2DD4BF] text-xl font-semibold">{title}: </h4>
        <div className="flex flex-wrap gap-2">
          {items.map((skill: string) => (
            <Badge key={skill} variant="outline" className="bg-white text-gray-500">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
const linkCard = ({
  title,
  icon,
  link,
}: {
  title: string
  icon: React.ReactNode
  link: string
}) => {
  return (
    <a href={link} target="_blank">
      <p className="flex flex-row gap-2 text-gray-500">
        {icon}
        <span>{title}</span>
      </p>
    </a>
  )
}
const links = [
  {
    title: 'DaveMitten',
    icon: <Github className="w-4 h-4 text-[#da5d54]" />,
    link: 'https://github.com/DaveMitten',
  },
  {
    title: 'davidjamesmitten',
    icon: <Linkedin className="w-4 h-4 text-[#da5d54]" />,
    link: 'https://www.linkedin.com/in/davidjamesmitten/',
  },
  {
    title: '@DavidJamesMitt1',
    icon: <Twitter className="w-4 h-4 text-[#da5d54]" />,
    link: 'https://x.com/DavidJamesMitt1',
  },
  {
    title: 'davidmitten88@gmail.com',
    icon: <Mail className="w-4 h-4 text-[#da5d54]" />,
    link: 'mailto:davidmitten88@gmail.com',
  },
]

const leftSideCardDetails = [
  {
    title: 'Qualifications',
    items: [
      'BA (Hons) Creative Music Technology',
      'General Assembly Web Development Immersive Graduate',
    ],
  },
  {
    title: 'Certifications',
    items: ['Udemy Academy: React Front To Back', 'Javascript Algorithms and Data Structures'],
  },
  {
    title: 'Something you might now know:',
    items: [
      'In a previous life I was a frontman in a band. I still write and record music.',
      'I am a keen cook and love to try new recipes.',
    ],
  },
  {
    title: 'Conceptual skills',
    items: [
      'Fullstack Development',
      'API Design',
      'Database Management',
      'Cloud Services',
      'Agile Methodologies',
      'CI/CD',
      'Performance Optimization',
      'Responsive Design',
      'System Design',
      'Project Management',
      'Team Collaboration',
      'Client Communication',
      'Problem Solving',
      'Continuous Learning',
      'Leadership',
      'Mentoring',
      'Code Reviews',
      'Code Quality',
      'Code Security',
      'Code Performance',
      'Code Scalability',
      'Code Maintainability',
      'Code Readability',
    ],
  },
  {
    title: 'Current Learning',
    items: [
      'Payload CMS',
      'Next.js 15',
      'React Native',
      'Flutter',
      'General AI topics',
      'Python',
      'Cyber Security',
      'Web3',
      'Nest.js',
      'Blockchain',
      'Ethereum contract writing',
      'Solidity',
      'Software Architecture',
      'Design Patterns',
    ],
  },
]

const currentTechStack = [
  'React',
  'Javascript',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Vercel',
  'Payload CMS',
  'Stripe',
  'MongoDB',
  'Express',
  'Node',
  'Firebase',
  'Git',
  'GCP',
  'GitHub',
  'Mongoose',
  'PostgreSQL',
  'Xata',
  'HTML',
  'CSS',
]

// const colors = { main: '#201915', header: '#2DD4BF', para: '#d9dada', highlight: '#da5d54' }
function CV() {
  return (
    <>
      <div className=" max-w-screen-md mx-auto bg-white p-8 space-y-6 ">
        <header className="flex flex-row gap-2 justify-between">
          <div>
            <h1 className="text-4xl text-[#2DD4BF]">David James Mitten</h1>
            <h4 className="text-xl text-gray-500 ">Senior Fullstack Developer</h4>
          </div>
          <div>{links.map((link) => linkCard(link))}</div>
        </header>
        <div className="grid grid-cols-6 gap-4">
          {/* left side */}

          <div className="col-span-2">
            {leftSideCardDetails.map((card, index) => (
              <Card
                size="sm"
                key={index}
                className="bg-white border-transparent transition-colors duration-300"
              >
                <CardContent>
                  {leftSideCard({
                    title: card.title,
                    items: card.items,
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
          {/* right side */}
          <div className="col-span-4 space-y-4">
            <section>
              <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Professional Summary</h2>
              <p className="text-gray-500">
                Experienced fullstack developer with a passion for transforming ideas into robust,
                scalable solutions. Proficient in modern web technologies and committed to creating
                efficient, user-friendly applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Current Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {currentTechStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white text-[#2DD4BF]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2DD4BF]">Professional Experience</h2>
              {WorkExperience({ data: experience, limit: 3, full: true, cv: true })}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
