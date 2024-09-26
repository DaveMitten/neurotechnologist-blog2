'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Post, Tag } from '../../../payload-types'
import PostCard from '../cards/PostCard'
import TagList from '../lists/TagList'
import { getTags } from '../../app/actions/tags'
import { Button } from '../ui/button'

interface BlogPostProps {
  posts: Post[]
  tags: Tag[]
  mostRecentPost: Post
}

const BlogPosts = ({ posts, tags, mostRecentPost }: BlogPostProps) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const [activeTag, setActiveTag] = useState<Tag | null>(null)

  const handleTagClick = (tag: Tag) => {
    if (activeTag?.title === tag.title) {
      // If clicking the active tag, remove the filter
      setActiveTag(null)
      setFilteredPosts(posts)
    } else {
      // Apply the filter
      setActiveTag(tag)
      setFilteredPosts(
        posts.filter((post) => {
          if (!post.tag) return null
          return post?.tag?.includes(tag.title)
        }),
      )
    }
  }

  return (
    <section className="space-y-10 w-full">
      <h1>Blog</h1>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3 flex flex-col gap-10 max-w-2xl space-y-10">
          <div className="space-y-4">
            <h3>Most Recent</h3>
            {mostRecentPost && (
              <PostCard
                key={mostRecentPost.id}
                title={mostRecentPost.title}
                id={mostRecentPost.id}
                author={mostRecentPost.author}
                createdAt={mostRecentPost.createdAt}
              />
            )}
          </div>
          <div>
            <h3 className="flex items-end justify-between gap-2">
              Posts{' '}
              <span className="text-sm text-para/70">
                {activeTag && `Filter: ${activeTag.title}`}
                {activeTag && (
                  <Button
                    onClick={() => {
                      setActiveTag(null)
                      setFilteredPosts(posts)
                    }}
                    size="sm"
                    className="hover:bg-white/70"
                    variant="ghost"
                  >
                    Clear filter
                  </Button>
                )}
              </span>
            </h3>

            {filteredPosts.map((post) => {
              if (post.id === mostRecentPost?.id) return null
              return (
                <PostCard
                  key={post.id}
                  title={post.title}
                  id={post.id}
                  author={post.author}
                  createdAt={post.createdAt}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3>Tags</h3>
          <TagList tags={tags} onTagClick={handleTagClick} />
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
