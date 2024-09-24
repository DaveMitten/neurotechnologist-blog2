'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Hero from '../../components/sections/Hero'
import { ColorScheme } from '../../types/general'
import getScheme from '../actions/getScheme'
import { useEffect, useState } from 'react'
import LogoGrid from '../../components/grids/LogoGrid'
import ExperienceList from '../../components/lists/ExperienceList'
import SVGContainer from '../../components/elements/SVGContainer'
import JavascriptSVG from '../../components/logos/JavascriptSVG'
import NextjsSVG from '../../components/logos/NextjsSVG'
import PayloadSVG from '../../components/logos/PayloadcmsSVG'
import ReactSVG from '../../components/logos/ReactSVG'
import TailwindSVG from '../../components/logos/TailwindSVG'
import TypescriptSVG from '../../components/logos/TypescriptSVG'
import VercelSVG from '../../components/logos/VercelSVG'

export default function Page() {
  const [colorSchemeChoice, setColorSchemeChoice] = useState<ColorScheme | null>(null)

  const handleColorSchemeChange = async () => {
    const { colorSchemeChoice } = await getScheme()
    setColorSchemeChoice(colorSchemeChoice)
  }
  useEffect(() => {
    handleColorSchemeChange()
  }, [])

  if (!colorSchemeChoice) return null

  const { card } = colorSchemeChoice

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
    vercel: { svg: <SVGContainer svg={VercelSVG} />, link: 'https://vercel.com/' },
    payloadcms: { svg: <SVGContainer svg={PayloadSVG} />, link: 'https://payloadcms.com/' },
  }

  return (
    <main className="container mx-auto">
      <Hero {...colorSchemeChoice} />
      <section className="flex justify-center mx-auto mb-16">
        <Card size="lg" className={`${card} border-transparent transition-colors duration-300`}>
          <CardTitle className={`${colorSchemeChoice.header} text-center`}>
            Current Tech Stack
          </CardTitle>
          <CardContent>
            <LogoGrid bgColor={card} logos={logos} />
          </CardContent>
        </Card>
      </section>
      <ExperienceList {...colorSchemeChoice} />
    </main>
  )
}
