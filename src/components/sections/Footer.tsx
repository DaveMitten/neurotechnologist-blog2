import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const logoSize = 'w-6 h-6'
  const logos = {
    github: { icon: <Github className={logoSize} />, link: 'https://github.com/DaveMitten' },
    linkedin: {
      icon: <Linkedin className={logoSize} />,
      link: 'https://www.linkedin.com/in/davidjamesmitten/',
    },
    twitter: { icon: <Twitter className={logoSize} />, link: 'https://x.com/DavidJamesMitt1' },
  }
  return (
    <footer className="py-8 transition-colors duration-300 w-full">
      <div className="px-4 sm:px-0 container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="transition-colors duration-300">
          © 2024 David James Mitten. All rights reserved.
        </p>
        {/* <div className="flex justify-end w-full">
          <ColorSchemeSelector initialScheme={initialColorScheme} scheme={colorSchemeChoice} />
        </div> */}
        <div className="flex space-x-4">
          {Object.values(logos).map(({ icon, link }) => (
            <a key={link} href={link} className="transition-colors duration-300">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
