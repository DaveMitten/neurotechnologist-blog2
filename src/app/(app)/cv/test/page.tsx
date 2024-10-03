import React from 'react'
import { CV } from '../page'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="bg-white w-full text-left">
      <div className="text-gray-500 text-sm italic ml-2 p-4">
        This CV was generated on the spot from the underlying React components meaning its always up
        to date. Thank you for taking interest in my site and my cv.
      </div>
      <CV />
    </div>
  )
}

export default page
