import React from 'react'
import TimeTag from '../elements/TimeTag'
import { Card, CardContent, CardTitle } from '../ui/card'

interface PostCardProps {
  title: string
  id: string
  author: string | { fullName: string }
  createdAt: string
}

const PostCard = ({ title, id, author, createdAt }: PostCardProps) => {
  return (
    <a key={title} href={`/blog/${id}`}>
      <Card className=" border-transparent transition-colors duration-300">
        <li className="">
          <CardContent className=" space-y-2">
            <CardTitle className="text-2xl font-bold group relative">
              {title}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 group-hover:transition-all"></span>
            </CardTitle>
            <div className="flex flex-row gap-2 text-xs">
              {typeof author === 'object' ? <p>{author.fullName}</p> : <p>{author}</p>}

              <TimeTag date={createdAt} />
            </div>
          </CardContent>
        </li>
      </Card>
    </a>
  )
}

export default PostCard
