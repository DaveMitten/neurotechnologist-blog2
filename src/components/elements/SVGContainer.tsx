import { ReactNode } from 'react'

const SVGContainer = ({ width = 'w-8 md:w-12', svg }: { width?: string; svg: ReactNode }) => {
  return <div className={width}>{svg}</div>
}
export default SVGContainer
