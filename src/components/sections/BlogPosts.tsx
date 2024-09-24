'use client'

import React, { useEffect, useState } from 'react'
import { Post } from '../../../payload-types'
import getScheme from '../../app/actions/getScheme'
import { ColorScheme } from '../../types/general'
import TimeTag from '../elements/TimeTag'
import { Card, CardContent, CardTitle } from '../ui/card'

interface BlogPostProps {
  posts: Post[]
}

const BlogPosts = ({ posts }: BlogPostProps) => {
  const [colorSchemeChoice, setColorSchemeChoice] = useState<ColorScheme | null>(null)

  const handleColorSchemeChange = async () => {
    const { colorSchemeChoice } = await getScheme()
    setColorSchemeChoice(colorSchemeChoice)
  }
  useEffect(() => {
    handleColorSchemeChange()
  }, [])

  if (!colorSchemeChoice) return null

  const { card } = colorSchemeChoice
  return (
    <section className="space-y-10 w-full">
      <h1 className={`${colorSchemeChoice.header}`}>Blog</h1>
      <div className="grid grid-cols-2 grid-flow-row gap-10">
        {posts.map((post) => {
          return (
            <a key={post.title} href={`/blog/${post.id}`}>
              <Card
                className={`${card} border-transparent transition-colors duration-300 flex justify-center max-w-max`}
              >
                <li className="py-4">
                  <CardContent className="p-6 space-y-2">
                    <CardTitle className={`text-2xl font-bold ${colorSchemeChoice.header}`}>
                      {post.title}
                    </CardTitle>
                    <div className="flex flex-row gap-2 text-xs">
                      {typeof post.author === 'object' ? (
                        <p>{post.author.email}</p>
                      ) : (
                        <p>{post.author}</p>
                      )}

                      <TimeTag date={post.createdAt} />
                    </div>
                  </CardContent>
                </li>
              </Card>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default BlogPosts
