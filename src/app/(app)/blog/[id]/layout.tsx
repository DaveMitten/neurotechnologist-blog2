import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return <div className="pt-6 pb-20">{children}</div>
}

export default layout
