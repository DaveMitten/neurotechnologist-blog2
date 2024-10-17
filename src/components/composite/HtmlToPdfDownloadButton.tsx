// app/components/HtmlToPdfDownloadButton.tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import { generatePdf } from '@/app/actions/generatedPdf'

interface HtmlToPdfDownloadButtonProps {
  htmlContent: string
  fileName?: string
}

const HtmlToPdfDownloadButton: React.FC<HtmlToPdfDownloadButtonProps> = ({
  htmlContent,
  fileName = 'document.pdf',
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async () => {
    setIsLoading(true)
    setError(null)

    try {
      console.log(htmlContent)
      const pdfBuffer = await generatePdf(htmlContent)

      // Create a Blob from the buffer
      const blob = new Blob([pdfBuffer], { type: 'application/pdf' })

      // Create a download link and trigger the download
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up the object URL
      URL.revokeObjectURL(url)
    } catch (err) {
      setError('An error occurred while generating the PDF. Please try again.')
      console.error('PDF generation error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating PDF...
          </>
        ) : (
          'Download PDF'
        )}
      </Button>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default HtmlToPdfDownloadButton
