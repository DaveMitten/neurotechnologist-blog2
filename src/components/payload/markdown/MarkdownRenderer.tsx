import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import clsx from 'clsx'

const MarkdownRenderer = ({ content, cv = false }: { content: string; cv?: boolean }) => {
  if (!content) return null

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkParse]}
        rehypePlugins={[remarkRehype, rehypeSanitize, rehypeStringify]}
        components={{
          li: (props: any) => {
            return (
              <li
                className={clsx(
                  cv ? 'text-xs text-gray-500' : 'text-[#d9dada]',
                  'list-item list-inside list-disc',
                )}
              >
                {props.children}
              </li>
            )
          },
          ul: (props: any) => {
            return (
              <ul className={clsx(cv ? 'text-xs text-gray-500' : 'text-[#d9dada]', 'my-2')}>
                {props.children}
              </ul>
            )
          },
          ol: (props: any) => {
            return (
              <ol className={clsx(cv ? 'text-xs text-gray-500' : 'text-[#d9dada]', 'my-2')}>
                {props.children}
              </ol>
            )
          },
          p: (props: any) => {
            return (
              <p className={clsx(cv ? 'text-xs text-gray-500' : 'text-[#d9dada]')}>
                {props.children}
              </p>
            )
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
