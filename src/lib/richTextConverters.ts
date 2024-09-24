'use server'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import SyntaxHighlighter from 'react-syntax-highlighter'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'

const classMap = {
  SyntaxHighlighter: 'typescript',
}

const bindings = Object.keys(classMap).map((key) => ({
  type: 'output',
  regex: new RegExp(`<pre><code(.*)>([\\s\\S]*?)</code></pre>`, 'g'),
  replace: (match: string, p1: string, p2: string) => {
    const element = React.createElement(SyntaxHighlighter, {
      language: classMap.SyntaxHighlighter,
      children: p2, // Add the children property
    })
    return ReactDOMServer.renderToStaticMarkup(element)
  },
}))

export const showdownConverterWithSyntaxHighlighting = async (text: string): Promise<string> => {
  const converter = new showdown.Converter({
    extensions: [
      ...bindings,
      showdownHighlight({
        pre: true,
        auto_detection: true,
      }),
    ],
  })
  return converter.makeHtml(text)
}
