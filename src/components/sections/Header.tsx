'use client'

import React from 'react'
import Nav from './Nav'

import { ColorScheme } from '../../types/general'

const Header = (colorSchemeChoice: ColorScheme) => {
  return (
    <header>
      <Nav {...colorSchemeChoice} />
    </header>
  )
}

export default Header
