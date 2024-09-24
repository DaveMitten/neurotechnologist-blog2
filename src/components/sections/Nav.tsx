'use client'

import React from 'react'
import { ColorScheme } from '../../types/general'
import { useState } from 'react'
import clsx from 'clsx'

const MobileMenu = ({
  navItems,
  text,
  header,
}: {
  navItems: string[]
  text: string
  header: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="relative md:hidden px-4 sm:px-0 py-6 flex justify-between items-center">
      <div onClick={() => setIsOpen(!isOpen)}>
        <svg
          className={`${header} transition-colors duration-300`}
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
      </div>
      <ul
        className={clsx(
          'fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-primary z-50 space-y-4',
          isOpen ? 'block' : 'hidden',
        )}
      >
        {navItems.map((item) => {
          const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
          return (
            <li key={item} className={`${text} hover:${header} transition-colors duration-300`}>
              <a href={href}>{item}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

//

const DesktopMenu = ({
  navItems,
  text,
  header,
}: {
  navItems: string[]
  text: string
  header: string
}) => {
  return (
    <nav className="px-4 sm:px-0 py-6 hidden md:flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg
          className={`${header} transition-colors duration-300`}
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
        <span
          className={` hidden md:block text-xl font-bold ${header} transition-colors duration-300`}
        >
          David James Mitten
        </span>
      </div>

      <ul className="hidden md:flex space-x-4">
        {navItems.map((item) => {
          const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
          return (
            <li key={item}>
              <a href={href} className={`${text} hover:${header} transition-colors duration-300`}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Nav = ({ text, header }: ColorScheme) => {
  const navItems = ['Home', 'About', 'Projects', 'Blog']
  return (
    <>
      <MobileMenu navItems={navItems} text={text} header={header} />
      <DesktopMenu navItems={navItems} text={text} header={header} />
    </>
  )
}

export default Nav
