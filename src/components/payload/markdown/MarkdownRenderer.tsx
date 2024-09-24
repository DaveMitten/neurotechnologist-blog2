import { useEffect } from 'react'
import { useRemark, useRemarkSync } from 'react-remark'

const MarkdownRenderer = ({ content }: { content: string }) => {
  const [reactContent, setMarkdownSource] = useRemark({})

  useEffect(() => {
    setMarkdownSource(content)
  }, [content, setMarkdownSource])

  return reactContent
}

export default MarkdownRenderer
