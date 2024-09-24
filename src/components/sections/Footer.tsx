import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { ColorScheme } from '../../types/general'

const Footer = ({
  initialColorScheme,
  colorSchemeChoice,
}: {
  initialColorScheme: string
  colorSchemeChoice: ColorScheme
}) => {
  return (
    <footer className={`${colorSchemeChoice.card} py-8 transition-colors duration-300 w-full`}>
      <div className="px-4 sm:px-0 container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="transition-colors duration-300">
          © 2024 David James Mitten. All rights reserved.
        </p>
        {/* <div className="flex justify-end w-full">
          <ColorSchemeSelector initialScheme={initialColorScheme} scheme={colorSchemeChoice} />
        </div> */}
        <div className="flex space-x-4">
          {[Github, Linkedin, Twitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className={`${colorSchemeChoice.text} hover:${colorSchemeChoice.header} transition-colors duration-300`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
