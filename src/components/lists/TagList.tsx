import React from 'react'
import { Button } from '../ui/button'

interface TagListProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

const TagList: React.FC<TagListProps> = ({ tags, onTagClick }) => {
  // Remove duplicates and sort tags alphabetically
  const uniqueTags = Array.from(new Set(tags)).sort()

  return (
    <div className="flex flex-col space-y-2">
      {uniqueTags.map((tag) => (
        <Button
          key={tag}
          variant="outline"
          size="sm"
          onClick={() => onTagClick(tag)}
          className="justify-start"
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}

export default TagList
