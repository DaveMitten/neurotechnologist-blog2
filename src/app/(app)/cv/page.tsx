'use client'
import { Badge } from '@/components/ui/badge'
import { WorkExperience } from '@/components/lists/ExperienceList'
import { workExperience as experience } from '../../../../data/WorkData'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Card, CardContent } from '../../../components/ui/card'
export default function CV() {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-900 text-paragraph p-8 space-y-8">
      <header className="flex flex-row gap-2 justify-between">
        <div>
          <h1>David James Mitten</h1>
          <h4 className="text-para">Senior Fullstack Developer</h4>
        </div>
        <div>
          <a href="mailto:david@mitten.dev">
            <p className="flex flex-row gap-2">
              <Mail className="w-4 h-4 text-highlight" />
              <span>davidmitten88@gmail.com</span>
            </p>
          </a>
          <a href="https://github.com/davidmitten88">
            <p className="flex flex-row gap-2">
              <Github className="w-4 h-4 text-highlight" />
              <span>DaveMitten</span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/davidmitten88/">
            <p className="flex flex-row gap-2">
              <Linkedin className="w-4 h-4 text-highlight" />
              <span>davidmitten88</span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/davidmitten88/">
            <p className="flex flex-row gap-2">
              <Twitter className="w-4 h-4 text-highlight" />
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
                  <h4>Qualifications: </h4>
                  <div className="flex flex-wrap gap-2">
                    {/* <ul className="text-para list-inside">
                    <li className="list-disc ">BA (Hons) Creative Music Technology</li>
                    <li className="list-disc ">
                      General Assembly Web Development Immersive Graduate
                    </li>
                  </ul> */}
                    {[
                      'BA (Hons) Creative Music Technology',
                      'General Assembly Web Development Immersive Graduate',
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-para">
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
                  <h4>Certifications: </h4>
                  {/* <ul className="text-para list-inside">
                    <li className="list-disc ">Udemy Academy: React Front To Back</li>
                  </ul> */}
                  <div className="flex flex-wrap gap-2">
                    {['Udemy Academy: React Front To Back'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-para">
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
                  <h4>Interests: </h4>
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
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-para">
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
                  <h4>Conceptual skills: </h4>
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
                        className="max-w-fit bg-gray-700 text-para"
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
                  <h4>Current Learning: </h4>
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
                        className="max-w-fit bg-gray-700 text-para"
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
            <h2 className="mb-4">Professional Summary</h2>
            <p>
              Experienced fullstack developer with a passion for transforming ideas into robust,
              scalable solutions. Proficient in modern web technologies and committed to creating
              efficient, user-friendly applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Current Tech Stack</h2>
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
                <Badge key={tech} variant="secondary" className="bg-gray-700 text-header">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-teal-400">Professional Experience</h2>
            {WorkExperience({ data: experience, limit: 3, full: true })}
          </section>
        </div>
      </div>
    </div>
  )
}
