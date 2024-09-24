import React from 'react'

const LogoGrid = ({ bgColor, logos }: { bgColor: string; logos: { [key: string]: any } }) => {
  return (
    <div
      className={`grid grid-cols-3  md:flex md:flex-wrap gap-y-4 md:gap-y-0 space-x-0 md:space-x-4 ${bgColor} h-full `}
    >
      {Object.entries(logos).map((logo) => {
        return (
          <a key={logo[0]} href={logo[1].link} target="_blank" rel="noopener noreferrer">
            <div
              className="hover:bg-white/10 p-2 rounded-md hover:scale-110 transition-all duration-300 flex flex-col items-center space-y-2"
              key={logo[0]}
            >
              {logo[1].svg}
              <span className="text-sm text-center capitalize">{logo[0]}</span>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default LogoGrid
