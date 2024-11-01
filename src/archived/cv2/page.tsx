'use client'
import { Badge } from '@/components/ui/badge'

import React, { useCallback, useEffect, useState } from 'react'
import { Tailwind, CSS, Latex, PageBreak, Footnote, Markdown } from '@fileforge/react-print'
import { workExperience as experience } from '@/data/WorkData'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import WorkExperience from '@/components/cards/WorkexperienceCard'
import HtmlToPdfDownloadButton from '@/components/composite/HtmlToPdfDownloadButton'
import { compile } from '@fileforge/react-print'

export default function CVWrapper() {
  const [convertedHtml, setConvertedHtml] = useState<string>('')

  const convertToHtml = useCallback(async () => {
    const compiledHtml = await compile(<CV />, { emotion: true })
    if (compiledHtml) {
      setConvertedHtml(compiledHtml)
    }
    return ''
  }, [])

  useEffect(() => {
    if (convertToHtml) {
      convertToHtml()
    }
  }, [convertToHtml])

  return (
    <div className="bg-gray-900 w-full lg:pb-10 flex flex-col items-center justify-center p-4 space-y-4">
      <HtmlToPdfDownloadButton htmlContent={convertedHtml} />
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
        <div className="flex flex-wrap space-2">
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
      <p className="flex flex-row space-x-2 text-gray-500 items-center">
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
    title: 'Something you might now know',
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
    title: 'Expanding on',
    items: [
      'Payload CMS',
      'Next.js 15',
      'Nest.js',
      'React Native',
      'Jest',
      'General AI topics',
      'Python',
      'Django',
      'FastAPI',
      'Cyber Security',
      'Web3',
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
  'Jest',
  'Python',
  'Django',
  'FastAPI',
  'Pytest',
  'React native',
  'Tailwind CSS',
  'TypeScript',
  'Vercel',
  'Payload CMS',
  'Contentful',
  'Stripe',
  'MongoDB',
  'Mongoose',
  'Express',
  'Node',
  'Firebase',
  'Git',
  'GCP',
  'AWS',
  'GitHub',
  'PostgreSQL',
  'Xata',
  'HTML',
  'CSS',
  'Github CI/CD',
]

// const colors = { main: '#201915', header: '#2DD4BF', para: '#d9dada', highlight: '#da5d54' }
function CV() {
  return (
    <>
      {/* A CSS snippet to define the page size, margins, fonts, etc.
      It also enforce the space between line to be small*/}
      <CSS>
        {String.raw`
          @page {
            size: A4;
            margin: 2cm;
          }
          body {
            line-height: 1.1;
          }

        `}
      </CSS>
      <Tailwind>
        <div className="max-w-screen-md mx-auto bg-white p-4 space-y-6 ">
          <header className="flex flex-row space-2 justify-between">
            <div>
              <h1 className="text-4xl text-[#2DD4BF]">David James Mitten</h1>
              <h4 className="text-xl text-gray-500 ">Senior Fullstack Developer</h4>
            </div>
            <div>{links.map((link) => linkCard(link))}</div>
          </header>
          {/* <div className="grid grid-cols-6 space-4"> */}
          <div className="flex flex-row space-4">
            {/* left side */}

            <div className="flex flex-col space-4 w-1/3">
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
            <div className="flex flex-col space-4 w-2/3">
              <section>
                <h2 className="text-2xl font-semibold text-[#2DD4BF] pb-4">Professional Summary</h2>
                <p className={'text-gray-500 text-sm'}>
                  {/* Experienced fullstack developer with a passion for transforming ideas into robust,
                scalable solutions. Proficient in modern web technologies and committed to creating
                efficient, user-friendly applications. */}
                  Experienced fullstack developer with a strong background in Node.js, TypeScript,
                  React, and cloud technologies. Proven track record of designing and implementing
                  scalable microservices architectures and working with large data volumes. Adept at
                  rapidly delivering value through efficient system design and best practices
                  implementation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2DD4BF] pb-4">Current Tech Stack</h2>
                <div className="flex flex-wrap space-2">
                  {currentTechStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-white text-[#2DD4BF]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#2DD4BF]">Professional Experience</h2>
                {WorkExperience({ data: experience, limit: 100, full: true, cv: true })}
              </section>
            </div>
          </div>
        </div>
      </Tailwind>
    </>
  )
}
