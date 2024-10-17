// app/actions/generatePdf.ts
'use server'

import { FileforgeClient } from '@fileforge/client'

const ff = new FileforgeClient({
  apiKey: process.env.FILEFORGE_API_KEY,
})
export async function generatePdf(htmlContent: string): Promise<Buffer> {
  try {
    const pdfStream = await ff.pdf.generate(htmlContent, {
      options: {
        host: false,
      },
    })

    // Convert the ReadableStream to a Buffer
    const chunks: Buffer[] = []
    for await (const chunk of pdfStream) {
      chunks.push(Buffer.from(chunk))
    }
    return Buffer.concat(chunks)
  } catch (error) {
    console.error('PDF generation error:', error)
    throw new Error('Failed to generate PDF')
  }
}
