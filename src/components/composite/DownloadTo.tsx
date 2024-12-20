'use client'

import React, { useCallback, useEffect } from 'react'

import { PayloadInput, useDownload } from '../../app/actions/tailwindstream'
import { Button } from '../ui/button'

export default function DownloadTo({
  payload,
  setPayload,
}: {
  payload: PayloadInput
  setPayload: (value: PayloadInput) => void
}) {
  const { isLoading, error, mutateAsync } = useDownload(payload)

  //   const setHtml = useCallback(
  //     (value: string) => {
  //       setPayload({ ...payload, html: value })
  //     },
  //     [payload],
  //   )

  // const setOutput = (value: PayloadInput['output']) => {
  //   setPayload({ ...payload, output: value })
  // }

  //   useEffect(() => {
  //     if (payload!) {
  //       setHtml(payload.html)
  //     }
  //   }, [payload])

  const btnText = isLoading ? 'Downloading...' : `Download .${payload.output}`

  return (
    <div className="bg-white max-w-fit p-4 space-y-4 rounded-lg flex flex-col items-center">
      {/* <SelectOutput onChange={setOutput} /> */}
      <h4 className="text-lg font-bold ">Download my CV</h4>
      <Button
        disabled={isLoading}
        className={(isLoading && 'animate-pulse pointer-events-none') || 'text-white'}
        onClick={() => mutateAsync()}
      >
        {btnText}
      </Button>
      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
    </div>
  )
}

// const SelectOutput = (props: { onChange: (value: PayloadInput['output']) => void }) => {
//   const [output, setOutput] = React.useState('pdf')

//   const onChange = (event: any) => {
//     const value = event.target.value
//     setOutput(value)
//     props.onChange(value)
//   }

//   return (
//     <div className="flex gap-1 flex-col">
//       <h4>Please select a format:</h4>
//       {['png', 'pdf', 'jpeg', 'webp'].map((format) => (
//         <div key={format}>
//           <input
//             type="radio"
//             id={format}
//             name="fileFormat"
//             value={format}
//             checked={output === format}
//             onChange={onChange}
//           />
//           <label htmlFor={format}>{format.toUpperCase()}</label>
//         </div>
//       ))}
//     </div>
//   )
// }
