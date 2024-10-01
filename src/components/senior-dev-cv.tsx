'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SeniorDevCv() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-teal-400">David James Mitten</h1>
          <p className="text-xl text-teal-300">Senior Fullstack Developer</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Professional Summary</h2>
          <p>
            Experienced fullstack developer with a passion for transforming ideas into robust, scalable solutions.
            Proficient in modern web technologies and committed to creating efficient, user-friendly applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Current Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Javascript", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Payloadcms"].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-gray-700 text-teal-300">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Professional Experience</h2>
          <Card className="bg-gray-800 p-4">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-teal-300 mb-1">Antler Digital</p>
            <p className="text-sm mb-2">Jan 2023 - Present (1 year 9 months)</p>
            <p className="mb-2">Contract | Remote</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Engineering",
                "React",
                "JavaScript",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "Git",
                "GitHub",
                "MongoDB",
                "Stripe",
                "Contentful",
                "Vercel",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-gray-700 text-teal-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Fullstack Development",
              "API Design",
              "Database Management",
              "Cloud Services",
              "Agile Methodologies",
              "CI/CD",
              "Performance Optimization",
              "Responsive Design",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-gray-700 text-teal-300">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}