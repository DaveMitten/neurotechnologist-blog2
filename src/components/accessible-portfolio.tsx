'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function AccessiblePortfolio() {
  const [colorScheme, setColorScheme] = useState('dark')
  const [fontSize, setFontSize] = useState('medium')

  const colorSchemes = {
    dark: {
      bg: 'bg-gray-900',
      text: 'text-gray-300',
      header: 'text-teal-400',
      card: 'bg-gray-800',
      button: 'bg-teal-600 hover:bg-teal-700',
    },
    sepia: {
      bg: 'bg-amber-100',
      text: 'text-amber-900',
      header: 'text-amber-800',
      card: 'bg-amber-200',
      button: 'bg-amber-700 hover:bg-amber-600',
    },
    gray: {
      bg: 'bg-gray-200',
      text: 'text-gray-800',
      header: 'text-gray-700',
      card: 'bg-gray-300',
      button: 'bg-gray-600 hover:bg-gray-500',
    },
  }

  const fontSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }

  const scheme = colorSchemes[colorScheme]

  useEffect(() => {
    console.log('Color scheme changed to:', colorScheme)
  }, [colorScheme])

  const handleColorSchemeChange = (value: string) => {
    console.log('Changing color scheme to:', value)
    setColorScheme(value)
  }

  const handleFontSizeChange = (value: string) => {
    setFontSize(value)
  }
  const scehem = {
    bg: 'bg-gray-900',
    text: 'text-gray-300',
    header: 'text-teal-400',
    card: 'bg-gray-800',
    button: 'bg-teal-600 hover:bg-teal-700',
  }

  const fontSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }
  const fontSize = 'medium'
  return (
    <div
      className={`min-h-screen ${scheme.bg} ${scheme.text} ${fontSizes[fontSize]} font-sans transition-colors duration-300`}
    >
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className={`${scheme.header} transition-colors duration-300`}
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
          </svg>
          <span className={`text-xl font-bold ${scheme.header} transition-colors duration-300`}>
            David James Mitten
          </span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'About', 'Projects', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`${scheme.text} hover:${scheme.header} transition-colors duration-300`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${scheme.header} transition-colors duration-300`}
          >
            Imagine | Create | Adapt
          </h1>
          <p className={`text-xl mb-8 ${scheme.text} transition-colors duration-300`}>
            Transforming ideas into robust, scalable solutions.
          </p>
          <Button
            className={`${scheme.button} text-white font-bold py-2 px-4 rounded transition-colors duration-300`}
          >
            View Projects
          </Button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className={`${scheme.card} border-transparent transition-colors duration-300`}>
            <CardContent className="p-6">
              <h2
                className={`text-2xl font-bold mb-4 ${scheme.header} transition-colors duration-300`}
              >
                7 Years of Experience
              </h2>
              <p className="transition-colors duration-300">
                Seasoned software engineer with a track record of delivering high-quality, scalable
                applications across various industries.
              </p>
            </CardContent>
          </Card>
          <Card className={`${scheme.card} border-transparent transition-colors duration-300`}>
            <CardContent className="p-6">
              <h2
                className={`text-2xl font-bold mb-4 ${scheme.header} transition-colors duration-300`}
              >
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className={`${scheme.bg} ${scheme.text} px-3 py-1 rounded-full text-sm transition-colors duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${scheme.header} transition-colors duration-300`}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card
                key={project}
                className={`${scheme.card} border-transparent transition-colors duration-300`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${scheme.header} transition-colors duration-300`}
                  >
                    Project {project}
                  </h3>
                  <p className="mb-4 transition-colors duration-300">
                    Brief description of the project and its impact.
                  </p>
                  <Button
                    variant="outline"
                    className={`${scheme.text} border-current hover:${scheme.bg} hover:text-white transition-colors duration-300`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className={`${scheme.card} py-8 transition-colors duration-300`}>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="transition-colors duration-300">
            © 2024 David James Mitten. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className={`${scheme.text} hover:${scheme.header} transition-colors duration-300`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 flex gap-2">
        <Select onValueChange={handleColorSchemeChange} defaultValue={colorScheme}>
          <SelectTrigger
            className={`w-[180px] ${scheme.bg} ${scheme.text} transition-colors duration-300`}
          >
            <SelectValue placeholder="Color Scheme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="sepia">Sepia</SelectItem>
            <SelectItem value="gray">Gray</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleFontSizeChange} defaultValue={fontSize}>
          <SelectTrigger
            className={`w-[180px] ${scheme.bg} ${scheme.text} transition-colors duration-300`}
          >
            <SelectValue placeholder="Font Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
