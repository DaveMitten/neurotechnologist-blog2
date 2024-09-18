import React from 'react'
import { PiBoxingGlove } from 'react-icons/pi'

const Nav = () => {
  return (
    <nav className="none">
      <div className="grid grid-cols-2 h-[50px] items-center">
        <PiBoxingGlove size={50} color="#ff33a1" title="David James Mitten" />
        <ul className="flex flex-row space-x-4 justify-self-end">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
