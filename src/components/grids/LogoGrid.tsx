import React from 'react'
import JavascriptSVG from '../logos/JavascriptSVG'
import NextjsSVG from '../logos/NextjsSVG'
import ReactSVG from '../logos/ReactSVG'
import TailwindSVG from '../logos/TailwindSVG'
import TypescriptSVG from '../logos/TypescriptSVG'
import VercelSVG from '../logos/VercelSVG'
import SVGContainer from '../elements/SVGContainer'

const logos = {
  react: <SVGContainer svg={ReactSVG} />,
  javascript: <SVGContainer svg={JavascriptSVG} />,
  nextjs: <SVGContainer svg={NextjsSVG} />,
  tailwindcss: <SVGContainer svg={TailwindSVG} />,
  typescript: <SVGContainer svg={TypescriptSVG} />,
  vercel: <SVGContainer svg={VercelSVG} />,
}
Object.entries(logos).map((logo) => {
  console.log(logo)
})
const LogoGrid = () => {
  return (
    <div className="bg-gradient-to-r from-main via-para to-main p-0.5">
      <div className="grid grid-cols-3 gap-2 p-5 justify-center bg-background h-full min-w-[250px] sm:min-w-[300px] bg-main">
        {Object.entries(logos).map((logo) => {
          return (
            <div className="w-auto h-auto flex justify-center items-center" key={logo[0]}>
              {logo[1]}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LogoGrid
