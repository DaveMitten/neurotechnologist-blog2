import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import LogoCollection from '../../components/images/LogoCollection'
import Nav from '../../components/sections/Nav'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Neurotechonologist',
  description: 'Imagine | Create | Adapt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen flex flex-col px-12 lg:px-24 xl:px-48 pt-10 pb-4
        `}
      >
        <Nav />
        <div className="grow flex">{children}</div>
        <footer className="none">
          <div className="bg-gradient-to-r from-main via-para to-main mt-auto pt-0.5 ">
            <section className="flex flex-col mx-auto space-y-4 bg-main text-white pt-4 pb-2">
              <p className="flex flex-col text-center text-para">
                Developed and created by
                <span className="text-center">David James Mitten</span>
              </p>

              <div className="flex justify-center">
                <LogoCollection logos="socials" size="small" opacity="opaque" />
              </div>
            </section>
          </div>
        </footer>
      </body>
    </html>
  )
}
