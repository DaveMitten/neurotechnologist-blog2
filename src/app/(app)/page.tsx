'use client'
import { useRouter } from 'next/navigation'

import LogoGrid from '@/components/grids/LogoGrid'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Hero from '@/components/sections/Hero'
import ExperienceList from '@/components/lists/ExperienceList'

import SVGContainer from '@/components/elements/SVGContainer'
import JavascriptSVG from '@/components/logos/JavascriptSVG'
import NextjsSVG from '@/components/logos/NextjsSVG'
import PayloadSVG from '@/components/logos/PayloadcmsSVG'
import ReactSVG from '@/components/logos/ReactSVG'
import TailwindSVG from '@/components/logos/TailwindSVG'
import TypescriptSVG from '@/components/logos/TypescriptSVG'
import VercelSVG from '@/components/logos/VercelSVG'
import JestSVG from '@/components/logos/JestSVG'

export default function Page() {
  const router = useRouter()

  const logos: { [key: string]: { svg: React.ReactNode; link: string } } = {
    react: { svg: <SVGContainer svg={ReactSVG} />, link: 'https://react.dev/' },
    javascript: {
      svg: <SVGContainer svg={JavascriptSVG} />,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    nextjs: { svg: <SVGContainer svg={NextjsSVG} />, link: 'https://nextjs.org/' },
    tailwindcss: { svg: <SVGContainer svg={TailwindSVG} />, link: 'https://tailwindcss.com/' },
    typescript: {
      svg: <SVGContainer svg={TypescriptSVG} />,
      link: 'https://www.typescriptlang.org/',
    },
    jest: { svg: <SVGContainer svg={JestSVG} />, link: 'https://jestjs.io/' },
    vercel: { svg: <SVGContainer svg={VercelSVG} />, link: 'https://vercel.com/' },
    payloadcms: { svg: <SVGContainer svg={PayloadSVG} />, link: 'https://payloadcms.com/' },
  }

  return (
    <main className="container mx-auto">
      <Hero
        title="Imagine | Create | Adapt"
        description="Transforming ideas into robust, scalable solutions."
      />
      <section className="flex justify-center mx-auto mb-16">
        <Card size="lg" className="border-transparent transition-colors duration-300">
          <CardTitle className="text-center">Current Tech Stack</CardTitle>
          <CardContent>
            <LogoGrid logos={logos} />
          </CardContent>
        </Card>
      </section>
      <ExperienceList />
    </main>
  )
}
