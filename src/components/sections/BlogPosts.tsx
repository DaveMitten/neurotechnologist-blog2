'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Post } from '../../../payload-types'
import PostCard from '../cards/PostCard'
import TagList from '../lists/TagList'

interface BlogPostProps {
  posts: Post[]
}

const BlogPosts = ({ posts }: BlogPostProps) => {
  const [mostRecentPost, setMostRecentPost] = useState<Post>()
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const findMostRecentPost = useCallback(() => {
    const mostRecentPost = posts.reduce((mostRecent, current) => {
      return new Date(mostRecent.createdAt) > new Date(current.createdAt) ? mostRecent : current
    })
    return mostRecentPost
  }, [posts])
  const formatTag = (tag: string): string => {
    return tag
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const formattedTags = posts.flatMap((post) => {
    if (!post.tags) {
      return
    }
    return post.tags.map(formatTag)
  })

  useEffect(() => {
    if (posts.length > 0) {
      const mostRecentPost = findMostRecentPost()
      setMostRecentPost(mostRecentPost)
    }
  }, [findMostRecentPost, posts])

  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      // If clicking the active tag, remove the filter
      setActiveTag(null)
      setFilteredPosts(posts)
    } else {
      // Apply the filter
      setActiveTag(tag)
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)))
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
            <h3>Posts {activeTag && `(Filter: ${activeTag})`}</h3>

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
          <TagList tags={posts.map((post) => post.tags).flat()} onTagClick={handleTagClick} />
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
