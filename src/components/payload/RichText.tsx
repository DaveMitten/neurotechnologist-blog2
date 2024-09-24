'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { showdownConverterWithSyntaxHighlighting } from '../../lib/richTextConverters'
interface RichTextProps {
  text: string
}

const RichText = ({ text }: RichTextProps) => {
  const [html, setHtml] = useState<string>('')

  const convertToHtml = useCallback(async () => {
    if (typeof text === 'string') {
      setHtml(await showdownConverterWithSyntaxHighlighting(text))
    } else {
      setHtml('')
    }
  }, [text])

  useEffect(() => {
    if (text && !html) {
      convertToHtml()
    }
  }, [convertToHtml, text, html])

  return (
    <article
      className="prose prose-headings:text-header prose-p:text-para prose-a:text-link prose-a:underline prose-a:font-mono prose-a:font-bold prose-a:text-sm prose-a:p-0 prose-li:text-para prose-ul:text-para prose-li:list-disc prose-ol:text-para prose-blockquote:text-para prose-blockquote:font-bold prose-code:text-para prose-code:font-mono prose-code:bg-code prose-code:p-1  prose-code:text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
