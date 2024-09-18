'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
interface ButtonProps {
  children: React.ReactNode | string
  href: string
}

const Button = ({ children, href }: ButtonProps) => {
  const router = useRouter()
  return (
    <button onClick={() => router.push(href)} className="btn btn-primary group relative">
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
    </button>
  )
}

export default Button
