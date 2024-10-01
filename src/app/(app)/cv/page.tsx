'use client'
import { Badge } from '@/components/ui/badge'
import { WorkExperience } from '@/components/lists/ExperienceList'
import { workExperience as experience } from '../../../../data/WorkData'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Card, CardContent } from '../../../components/ui/card'
import DownloadTo from '../../../components/composite/DownloadTo'
import { useState } from 'react'
import { PayloadInput } from '../../actions/tailwindstream'
import { renderToString } from 'react-dom/server'
export default function CVWrapper() {
  const cvHtml = renderToString(
    <div className="bg-gray-900 w-full text-left">
      <span className="text-[#d9dada] text-sm italic ml-2">
        This CV was generated from a React/Typescript tsx component.
      </span>
      <CV />
    </div>,
  )

  const [payload, setPayload] = useState<PayloadInput>({
    html: cvHtml,
    output: 'pdf',
  })
  return (
    <>
      <DownloadTo payload={payload} setPayload={setPayload} />
      <CV />
    </>
  )
}

// const colors = { main: '#201915', header: '#2DD4BF', para: '#d9dada', highlight: '#da5d54' }
function CV() {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-900 text-[#d9dada]graph p-8 space-y-8">
      <header className="flex flex-row gap-2 justify-between">
        <div>
          <h1 className="text-4xl text-[#2DD4BF]">David James Mitten</h1>
          <h4 className="text-xl text-[#d9dada]">Senior Fullstack Developer</h4>
        </div>
        <div>
          <a href="mailto:davidmitten88@gmail.com" target="_blank">
            <p className="flex flex-row gap-2 text-[#d9dada]">
              <Mail className="w-4 h-4 text-[#da5d54]" />
              <span>davidmitten88@gmail.com</span>
            </p>
          </a>
          <a href="https://github.com/DaveMitten" target="_blank">
            <p className="flex flex-row gap-2 text-[#d9dada]">
              <Github className="w-4 h-4 text-[#da5d54]" />
              <span>DaveMitten</span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/davidjamesmitten/" target="_blank">
            <p className="flex flex-row gap-2 text-[#d9dada]">
              <Linkedin className="w-4 h-4 text-[#da5d54]" />
              <span>davidjamesmitten</span>
            </p>
          </a>
          <a href="https://x.com/DavidJamesMitt1" target="_blank">
            <p className="flex flex-row gap-2 text-[#d9dada]">
              <Twitter className="w-4 h-4 text-[#da5d54]" />
              <span>@DavidJamesMitt1</span>
            </p>
          </a>
        </div>
      </header>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 space-y-4">
          <Card key={1} className="bg-gray-800 border-transparent transition-colors duration-300">
            <CardContent>
              <div className="rounded-lg">
                <div className="text-sm mb-1 flex flex-col  space-y-2">
                  <h4 className="text-[#2DD4BF] text-xl font-semibold">Qualifications: </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'BA (Hons) Creative Music Technology',
                      'General Assembly Web Development Immersive Graduate',
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-[#d9dada]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card key={1} className="bg-gray-800 border-transparent transition-colors duration-300">
            <CardContent>
              <div className="rounded-lg">
                <div className="text-sm mb-1 flex flex-col  space-y-2">
                  <h4 className="text-[#2DD4BF] text-xl font-semibold">Certifications: </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Udemy Academy: React Front To Back'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-[#d9dada]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card key={1} className="bg-gray-800 border-transparent transition-colors duration-300">
            <CardContent>
              <div className="rounded-lg">
                <div className="text-sm mb-1 flex flex-col space-y-2">
                  <h4 className="text-[#2DD4BF] text-xl font-semibold">Interests: </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Music Production',
                      'Writing/playing music',
                      'Traveling',
                      'Food',
                      'Cooking',
                      'Tortillas',
                      'Technology',
                      'Strength Training',
                      'Running',
                      'Swimming',
                      'Bouldering',
                      'Hiking',
                      'Biking',
                      'Gaming',
                      'Animals',
                      'Activism',
                      'Learning',
                      'Gardening',
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-[#d9dada]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card key={1} className="bg-gray-800 border-transparent transition-colors duration-300">
            <CardContent>
              <div className="rounded-lg">
                <div className="text-sm mb-1 flex flex-col space-y-2">
                  <h4 className="text-[#2DD4BF] text-xl font-semibold">Conceptual skills: </h4>
                  <div className="flex flex-col  gap-2">
                    {[
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
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="max-w-fit bg-gray-700 text-[#d9dada]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card key={1} className="bg-gray-800 border-transparent transition-colors duration-300">
            <CardContent>
              <div className="rounded-lg">
                <div className="text-sm mb-1 flex flex-col space-y-2">
                  <h4 className="text-[#2DD4BF] text-xl font-semibold">Current Learning: </h4>
                  <div className="flex flex-col  gap-2">
                    {[
                      'Payload CMS',
                      'Next.js 15',
                      'Investigating mobile development',
                      'General AI topics',
                      'Python',
                      'Cyber Security',
                      'Web 3',
                      'nest js',
                      'Blockchain',
                      'Ethereum contract writing',
                      'Solidity',
                      'Software Architecture',
                      'Design Patterns',
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="max-w-fit bg-gray-700 !text-[#d9dada]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4 space-y-4">
          <section>
            <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Professional Summary</h2>
            <p className="text-[#d9dada]">
              Experienced fullstack developer with a passion for transforming ideas into robust,
              scalable solutions. Proficient in modern web technologies and committed to creating
              efficient, user-friendly applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2DD4BF] mb-4">Current Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
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
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-gray-700 text-[#2DD4BF]">
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
  )
}
