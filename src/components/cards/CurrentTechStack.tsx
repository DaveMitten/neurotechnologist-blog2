import SVGContainer from '../elements/SVGContainer'
import LogoGrid from '../grids/LogoGrid'
import JavascriptSVG from '../logos/JavascriptSVG'
import JestSVG from '../logos/JestSVG'
import NextjsSVG from '../logos/NextjsSVG'
import PayloadSVG from '../logos/PayloadcmsSVG'
import ReactSVG from '../logos/ReactSVG'
import TailwindSVG from '../logos/TailwindSVG'
import TypescriptSVG from '../logos/TypescriptSVG'
import VercelSVG from '../logos/VercelSVG'
import { Card, CardTitle, CardContent } from '../ui/card'

export const logos: { [key: string]: { svg: React.ReactNode; link: string } } = {
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

export const CurrentTechStack = ({
  logos,
}: {
  logos: { [key: string]: { svg: React.ReactNode; link: string } }
}) => {
  return (
    <section className="flex justify-center mx-auto mb-16">
      <Card size="lg" className="border-transparent transition-colors duration-300">
        <CardTitle className="text-center">Current Tech Stack</CardTitle>
        <CardContent>
          <LogoGrid logos={logos} />
        </CardContent>
      </Card>
    </section>
  )
}
