import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkLintListItemBulletIndent from 'remark-lint-list-item-bullet-indent'
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
            return <li className="list-item list-inside list-disc">{props.children}</li>
          },
          ul: (props: any) => {
            return <ul className="my-2">{props.children}</ul>
          },
          ol: (props: any) => {
            return <ol className="my-2">{props.children}</ol>
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
