'use client'
import React from 'react'
import { Post as PostProps } from 'payload-types'
import TimeTag from '@/components/elements/TimeTag'

import Button from '@/components/elements/Button'
import MarkdownRenderer from '../payload/markdown/MarkdownRenderer'

const AuthorTag = ({ author }: { author: string }) => {
  return (
    <div className="flex flex-row gap-2">
      Author:
      <span>{author}</span>
    </div>
  )
}

interface InPagePostProps extends Omit<PostProps, 'tags'> {
  author: string
  tags: string[]
  updatedAt: string
  createdAt: string
  content: string
  title: string
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
