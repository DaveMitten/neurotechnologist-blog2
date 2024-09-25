'use client'

import React from 'react'
import { Post } from '../../../payload-types'
import TimeTag from '../elements/TimeTag'
import { Card, CardContent, CardTitle } from '../ui/card'

interface BlogPostProps {
  posts: Post[]
}

const BlogPosts = ({ posts }: BlogPostProps) => {
  return (
    <section className="space-y-10 w-full">
      <h1>Blog</h1>
      <div className="grid grid-cols-2 grid-flow-row gap-10">
        {posts.map((post) => {
          return (
            <a key={post.title} href={`/blog/${post.id}`}>
              <Card className=" border-transparent transition-colors duration-300 flex justify-center max-w-max">
                <li className="py-4">
                  <CardContent className="p-6 space-y-2">
                    <CardTitle className="text-2xl font-bold group relative">
                      {post.title}
                      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
                      <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
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
