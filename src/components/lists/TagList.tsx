import React from 'react'
import { Button } from '../ui/button'
import { Tag } from '../../../payload-types'
// import { Tags } from '../../types/general'

interface TagListProps {
  tags: Tag[]
  onTagClick: (tag: Tag) => void
}

const TagList: React.FC<TagListProps> = ({ tags, onTagClick }) => {
  return (
    <div className="flex flex-col space-y-2">
      {tags.map((tag: Tag) => (
        <Button
          key={tag.title}
          variant="outline"
          size="sm"
          onClick={() => onTagClick(tag)}
          className="justify-start"
        >
          {tag.title}
        </Button>
      ))}
    </div>
  )
}

export default TagList
