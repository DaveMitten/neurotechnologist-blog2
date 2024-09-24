import type { Metadata } from 'next'

import './globals.css'
import Header from '../../components/sections/Header'

import getScheme from '../actions/getScheme'
import Footer from '../../components/sections/Footer'

import { Roboto, Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})
export const metadata: Metadata = {
  title: 'Neurotechonologist',
  description: 'Imagine | Create | Adapt',
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { colorSchemeChoice, fontSchemeChoice, initialColorScheme } = await getScheme()

  return (
    <html lang="en" className={`${roboto.className} ${robotoMono.className}`}>
      <body
        className={` min-h-screen ${colorSchemeChoice.bg} ${colorSchemeChoice.text} ${fontSchemeChoice} font-sans transition-colors duration-300 flex flex-col`}
      >
        <div className="container mx-auto flex-grow px-4 sm:px-0 mb-16">
          <Header {...colorSchemeChoice} />
          {children}
        </div>
        <Footer initialColorScheme={initialColorScheme} colorSchemeChoice={colorSchemeChoice} />
      </body>
    </html>
  )
}
