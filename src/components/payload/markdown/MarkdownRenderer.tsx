import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const MarkdownRenderer = ({ content }: { content: string }) => {
  if (!content) return null

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkParse]}
        rehypePlugins={[remarkRehype, rehypeSanitize, rehypeStringify]}
        components={{
          li: (props: any) => {
            return (
              <li className="text-[#d9dada] list-item list-inside list-disc">{props.children}</li>
            )
          },
          ul: (props: any) => {
            return <ul className="my-2 text-[#d9dada]">{props.children}</ul>
          },
          ol: (props: any) => {
            return <ol className="my-2 text-[#d9dada]">{props.children}</ol>
          },
          p: (props: any) => {
            return <p className="text-[#d9dada]">{props.children}</p>
          },
          pre: (props: any) => {
            return (
              <SyntaxHighlighter
                showLineNumbers
                wrapLongLines
                customStyle={{
                  padding: '1.5rem 1.5rem 1.5rem 1rem',
                  width: 'fit-content',
                  margin: '20px auto',
                }}
                language="typescript"
                style={codeStyle}
              >
                {props.children.props.children}
              </SyntaxHighlighter>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  )
}

export default MarkdownRenderer
