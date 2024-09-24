'use client'
import React from 'react'
import { Post as PostProps } from 'payload-types'
import TimeTag from '../elements/TimeTag'
import MarkdownRenderer from '../payload/markdown/MarkdownRenderer'
import Button from '../elements/Button'

const AuthorTag = ({ author }: { author: string }) => {
  return (
    <div className="flex flex-row gap-2">
      Author:
      <span>{author}</span>
    </div>
  )
}

interface InPagePostProps extends PostProps {
  author: string
}

const Post = ({ author, title, createdAt, content }: InPagePostProps) => {
  return (
    <article>
      <Button href="/blog">Back</Button>
      <div className="space-y-4 mt-6">
        <div className="flex justify-between">
          <TimeTag date={createdAt} />
          <AuthorTag author={author} />
        </div>
        <MarkdownRenderer content={content ?? ''} />
      </div>
    </article>
  )
}

export default Post
