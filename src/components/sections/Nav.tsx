'use client'

import React from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { X } from 'lucide-react'

type NavItem = { name?: string; href?: string; node?: React.ReactNode }
type NavItems = Array<NavItem>

const MobileMenu = ({
  navItems,
  setIsOpen,
  isOpen,
}: {
  navItems: NavItems
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}) => {
  return (
    <nav className="relative md:hidden px-4 sm:px-0 py-6 flex justify-between items-center">
      <div onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="transition-colors duration-300 hover:text-highlight hover:scale-110 text-header"
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
          ' top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-primary z-50 space-y-4',
          isOpen ? 'fixed' : 'hidden',
        )}
      >
        <li>
          <X key="close" className="block md:hidden" onClick={() => setIsOpen(!isOpen)} />
        </li>
        {navItems.map((item) => {
          return (
            <li key={item?.href ? item?.href : 'close'} className="group relative">
              <a href={item?.href}>{item?.name}</a>

              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
          )
        })}
      </ul>
      <div className="absolute inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2DD4BF_100%)]" />
    </nav>
  )
}

//

const DesktopMenu = ({ navItems }: { navItems: NavItems }) => {
  return (
    <nav className="px-4 sm:px-0 py-6 hidden md:flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <a href="/">
          <svg
            className="transition-colors duration-300 text-header hover:text-highlight"
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
        </a>
        <span className="hidden md:block text-xl font-bold transition-colors duration-300">
          David James Mitten
        </span>
      </div>

      <ul className="hidden md:flex space-x-4">
        {navItems.map((item) => {
          return (
            <li className="group relative" key={item?.name}>
              <a href={item?.href} className=" text-para">
                {item?.name}
              </a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
// absolute start-2/3 top-1/3
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems: NavItems = [
    { name: 'Home', href: '/' },
    { name: 'Key Roles', href: '/key-roles' },
    { name: 'CV', href: '/cv' },
    { name: 'Blog', href: '/blog' },
  ]
  return (
    <>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} navItems={navItems} />
      <DesktopMenu navItems={navItems} />
    </>
  )
}

export default Nav
