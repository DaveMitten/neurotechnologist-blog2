import React from 'react'

type Size =
  | 'LETTER'
  | 'LEGAL'
  | 'TABLOID'
  | 'LEDGER'
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6'
  | 'Letter'
  | 'Legal'
  | 'Tabloid'
  | 'Ledger'

export type PayloadInput = {
  html: string
  output?: 'pdf' | 'png' | 'jpeg' | 'webp'
  size?: Size | string // or i.e 12x10in
  scale?: number // 1 - 6
  engine?: 'handlebars' | 'ejs'
  data?: Record<string, any> // required if engine provided
  style?: string
  scripts?: { src: string }[]
  links?: { href: string }[]
}

const apiUrl = `https://api.tailwindstream.io`

export function downloadToBrowser(blob: Blob) {
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = new Date().toISOString() + '.' + blob.type.split('/')[1]
  document.body.appendChild(a)
  a.click()
  a.remove()
}

async function requestDownload(payload: PayloadInput) {
  const response = await fetch(apiUrl + '/request', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  return (await response.json()) as { requestId?: string; error?: string }
}

interface DownloadResult {
  blob?: Blob
  error?: string
}

export async function downloadDocument(
  requestId: string,
  { attempts = 10, interval = 2000 } = {},
): Promise<DownloadResult> {
  let attempt = 0
  const downloadAttempt = async (): Promise<DownloadResult> => {
    try {
      const response = await fetch(`${apiUrl}/request/${requestId}/download`)
      if (response.ok) {
        const blob = await response.blob()
        return { blob }
      } else if (attempt < attempts) {
        console.error('Download failed, retrying...')
        attempt++
        await new Promise((resolve) => setTimeout(resolve, interval))
        return await downloadAttempt()
      } else {
        throw new Error('Maximum download attempts exceeded.')
      }
    } catch (error) {
      return { error: error instanceof Error ? error?.message : String(error) }
    }
  }

  return downloadAttempt()
}

export function useDownload(
  data?: PayloadInput,
  options?: { attempts?: number; interval?: number },
) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<null | string>(null)

  const mutateAsync = async (payload?: PayloadInput) => {
    try {
      setIsLoading(true)
      const response = await requestDownload((payload ?? data)!)
      if (response.error) return setError(response.error)
      if (response.requestId) {
        const { blob, error } = await downloadDocument(response.requestId, options)
        if (error) return setError(error)
        if (blob) {
          setError(null)
          downloadToBrowser(blob)
        }
      }
    } catch (error) {
      setError('Something went wrong.')
      console.error({ error })
    } finally {
      setIsLoading(false)
    }
  }

  const mutateAsyncMemoized = React.useCallback(mutateAsync, [data])

  return { isLoading, error, mutateAsync: mutateAsyncMemoized }
}
