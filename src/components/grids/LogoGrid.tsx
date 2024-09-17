import React from 'react'
import JavascriptSVG from '../logos/JavascriptSVG'
import NextjsSVG from '../logos/NextjsSVG'
import ReactSVG from '../logos/ReactSVG'
import TailwindSVG from '../logos/TailwindSVG'
import TypescriptSVG from '../logos/TypescriptSVG'
import VercelSVG from '../logos/VercelSVG'

const logos = {
  react: <ReactSVG width={'w-12'} />,
  javascript: <JavascriptSVG width={'w-12'} />,
  nextjs: <NextjsSVG width={'w-12'} />,
  tailwindcss: <TailwindSVG width={'w-12'} />,
  typescript: <TypescriptSVG width={'w-12'} />,
  vercel: <VercelSVG width={'w-12'} />,
}
Object.entries(logos).map((logo) => {
  console.log(logo)
})
const LogoGrid = () => {
  return (
    <div className="bg-gradient-to-r from-main via-para to-main p-0.5">
      <div className="grid grid-cols-3 gap-2 p-5 justify-center bg-background h-full w-full bg-main">
        {Object.entries(logos).map((logo) => {
          console.log(logo)
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
