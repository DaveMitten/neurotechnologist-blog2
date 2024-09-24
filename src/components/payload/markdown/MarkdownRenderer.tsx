import React from 'react'
import { Remark } from 'react-remark'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <Remark
      rehypeReactOptions={{
        components: {
          pre: (props: any) => {
            return (
              <SyntaxHighlighter
                showLineNumbers
                wrapLongLines
                customStyle={{
                  padding: '1.5rem 1.5rem 1.5rem 1rem',
                  width: 'fit-content',
                }}
                language="typescript"
                style={codeStyle}
              >
                {props.children[0].props.children}
              </SyntaxHighlighter>
            )
          },
        },
      }}
    >
      {content}
    </Remark>
  )
}

export default MarkdownRenderer
