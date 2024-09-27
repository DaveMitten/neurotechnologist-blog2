import React from 'react'
import TimeTag from '../elements/TimeTag'
import { Card, CardContent, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Post } from '../../../payload-types'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="border-transparent transition-colors duration-300">
        <li className="">
          <CardContent className=" space-y-2">
            <CardTitle className="text-2xl font-bold group relative">
              {post.title}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
            </CardTitle>
            <div className="flex flex-row gap-2 text-xs">
              {typeof post.author === 'object' ? (
                <p>{post.author.fullName}</p>
              ) : (
                <p>{post.author}</p>
              )}

              <TimeTag date={post.createdAt} />
            </div>
          </CardContent>
        </li>
      </Card>
    </Link>
  )
}

export default PostCard
