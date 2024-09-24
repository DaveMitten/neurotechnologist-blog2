'use server'

import { cookies } from 'next/headers'
import { ColorScheme } from '../../types/general'
import { colorSchemes, fontSizes } from '../../lib/colorAndText'

export default async function getScheme(): Promise<{
  initialColorScheme: string
  initialFontSize: string
  colorSchemeChoice: ColorScheme
  fontSchemeChoice: string
}> {
  const cookieStore = cookies()
  const colorSchemeCookie = cookieStore.get('colorScheme')
  const fontSizeCookie = cookieStore.get('fontSize')
  const initialColorScheme =
    colorSchemeCookie?.value === ('dark' || 'sepia' || 'gray') ? colorSchemeCookie?.value : 'dark'

  const initialFontSize =
    fontSizeCookie?.value === ('small' || 'medium' || 'large') ? fontSizeCookie?.value : 'medium'

  const colorSchemeChoice = colorSchemes[initialColorScheme as keyof typeof colorSchemes]
  const fontSchemeChoice = fontSizes[initialFontSize as keyof typeof fontSizes]

  return { initialColorScheme, initialFontSize, colorSchemeChoice, fontSchemeChoice }
}
