import React from 'react'
import LogoCollection from '../images/LogoCollection'

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-main via-para to-main mt-auto pt-0.5 ">
      <section className="flex flex-col mx-auto space-y-4 bg-main text-white pt-4 pb-2">
        <p className="flex flex-col text-center text-para">
          Developed and created by
          <span className="text-center">David James Mitten</span>
        </p>

        <div className="flex justify-center">
          <LogoCollection logos="socials" size="small" opacity="opaque" />
        </div>
      </section>
    </footer>
  )
}

export default Footer
