'use client'
import { Badge } from '@/components/ui/badge'
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { workExperience as experience } from '@/data/WorkData'
import { Github, Home, Linkedin, Mail, Twitter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import DownloadTo from '@/components/composite/DownloadTo'
import { useState } from 'react'
import { PayloadInput } from '@/app/actions/tailwindstream'
import { renderToString } from 'react-dom/server'
import WorkExperience from '@/components/cards/WorkexperienceCard'
import Hero from '../../../components/sections/Hero'

function CVTypeSelect({
  label,
  items,
  setPayload,
}: {
  label: string
  items: string[]
  setPayload: (payload: string) => void
}) {
  return (
    <Select defaultValue={items[0]} onValueChange={(value) => setPayload(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select CV Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item: string) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function CVWrapper() {
  const cvHtml = renderToString(
    <div className="bg-white w-full text-left">
      <div className="text-gray-500 text-sm italic ml-2 p-4">
        This CV was generated on the spot from the underlying React components meaning its always up
        to date. I.e. it is written in code and generated from that code. Check my site to see the
        original as this is in alpha stages and page breaks may not be correct. Thank you.
      </div>
      <CV />
    </div>,
  )
  const [payload, setPayload] = useState<PayloadInput>({
    html: cvHtml,
    output: 'pdf',
    size: 'tabloid',
  })
  // const [language, setLanguage] = useState<string>('python')
  // const [area, setArea] = useState<string>('fullstack')
  return (
    <div>
      <Hero
        title="CV"
        description="A CV created with react components and tailwind css. It downloads to a PDF format."
      />

      <div className="max-w-screen-md mx-auto lg:pb-10 flex flex-col items-center justify-center py-4 space-y-4">
        {/* language select
      <CVTypeSelect label="Language" items={['python', 'javascript']} setPayload={setLanguage} />

      <CVTypeSelect
        label="Area"
        items={['fullstack', 'frontend', 'backend']}
        setPayload={setArea}
      /> */}
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
    </div>
  )
}

const leftSideCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="rounded-lg">
      <div className="text-xs mb-1 flex flex-col space-y-2">
        <h4 className="text-[#2DD4BF] text-lg font-semibold">{title}: </h4>
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
const LinkCard = ({
  title,
  icon,
  link,
}: {
  title: string
  icon?: React.ReactNode
  link: string
}) => {
  return (
    <a href={link} target="_blank">
      {icon ? (
        <p className="flex flex-row gap-2 text-gray-500 text-sm">
          {icon}
          <span>{title}</span>
        </p>
      ) : (
        <p className="flex flex-row gap-2 text-gray-500 text-sm">{title}</p>
      )}
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
    title: 'davidjamesmitten.com',
    icon: <Home className="w-4 h-4 text-[#da5d54]" />,
    link: 'https://www.davidjamesmitten.com',
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
      'API Design',
      'Agile Methodologies',
      'CI/CD',
      'Performance Optimization',
      'Responsive Design',
      'System Design',
      'Project Management',
      'Problem Solving',
      'Leadership & Mentoring',
      'Code Reviews',
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
      <div className="max-w-screen-md mx-auto bg-white p-8 space-y-6">
        {/* page 1 */}
        <header className="flex flex-row gap-2 justify-between items-center">
          <div>
            <h1 className="text-3xl text-[#2DD4BF]">David James Mitten</h1>
            <h4 className="text-base text-gray-500 ">Senior Fullstack Developer</h4>
            <LinkCard title="davidmitten88@gmail.com" link="mailto:davidmitten88@gmail.com" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            {[links[0], links[1]].map((link) => LinkCard(link))}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            {[links[2], links[3]].map((link) => LinkCard(link))}
          </div>
        </header>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* left side */}

          <div className="flex flex-col gap-4 w-1/3">
            {[
              leftSideCardDetails[0],
              leftSideCardDetails[1],
              leftSideCardDetails[2],
              leftSideCardDetails[3],
              leftSideCardDetails[4],
            ].map((card, index) => (
              <Card
                size="sm"
                key={index}
                className="bg-white border-transparent transition-colors duration-300 p-2 pt-0 pl-0"
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
          <div className="w-2/3 space-y-4">
            <section>
              <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Professional Summary</h2>
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
              <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Current Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {currentTechStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white text-[#2DD4BF]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="space-y-4 break-after-column">
              <h2 className="text-2xl font-semibold text-[#2DD4BF]">Professional Experience</h2>
              {WorkExperience({ data: experience, limit: 1, full: true, cv: true })}
            </section>
          </div>
        </div>
        {/* page 2 */}
        <div className="break-after-page"></div>
        <section className="space-y-4 ">
          {WorkExperience({
            data: [experience[1], experience[2], experience[3], experience[4]],
            limit: 4,
            full: true,
            cv: true,
          })}
        </section>
      </div>
    </>
  )
}
