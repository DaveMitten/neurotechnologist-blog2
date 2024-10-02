'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { workExperience as experience } from '../../../data/WorkData'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import MarkdownRenderer from '@/components/payload/markdown/MarkdownRenderer'
import clsx from 'clsx'

export const WorkExperience = ({
  data,
  limit,
  full,
  cv,
}: {
  data: typeof experience
  limit: number
  full?: boolean
  cv?: boolean
  className?: string
}) => {
  if (!data) return null
  return data?.slice(0, limit).map((work) => {
    const {
      title,
      company,
      employmentType,
      startDate,
      endDate,
      duration,
      location,
      description,
      skills,
    } = work
    return (
      <Card
        key={work.company}
        size={cv ? 'sm' : 'md'}
        className={clsx(
          cv ? 'bg-white ' : 'bg-gray-800 border-transparent',
          'transition-colors duration-300',
        )}
      >
        <CardContent>
          <div className={clsx(cv ? 'rounded-lg border-gray-500 border-1' : 'rounded-lg')}>
            <h3
              className={clsx(
                cv ? 'text-gray-500  text-lg' : 'text-[#d9dada] text-2xl',
                ' font-semibold mb-2',
              )}
            >
              {title}
            </h3>
            <div className={clsx(cv ? 'text-xs flex flex-row' : 'text-sm', 'mb-1')}>
              <h4 className={clsx(cv ? 'text-xs' : 'text-sm', 'text-[#2DD4BF] font-bold pr-1')}>
                Company:{' '}
              </h4>
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>{company}</span>
            </div>
            <div className="text-sm mb-1 flex flex-row items-center">
              <h4 className={clsx(cv ? 'text-xs' : 'text-sm', 'text-[#2DD4BF] font-bold pr-1')}>
                Employment Type:
              </h4>
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>
                {employmentType}
              </span>
            </div>
            <div className="flex items-center text-sm mb-1">
              <h4 className={clsx(cv ? 'text-xs' : 'text-sm', 'text-[#2DD4BF] font-bold pr-1')}>
                Dates:
              </h4>
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>{startDate}</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>{endDate}</span>
            </div>
            <div className={clsx(cv ? 'text-xs' : 'text-sm', 'mb-1 flex flex-row items-center')}>
              <h4 className={clsx(cv ? 'text-xs' : 'text-sm', 'text-[#2DD4BF] font-bold pr-1')}>
                Duration:
              </h4>
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>{duration}</span>
            </div>
            <div className={clsx(cv ? 'text-xs' : 'text-sm', 'mb-3 flex flex-row items-center')}>
              <h4 className={clsx(cv ? 'text-xs' : 'text-sm', 'text-[#2DD4BF] font-bold pr-1')}>
                Location:
              </h4>
              <span className={clsx(cv ? 'text-gray-500' : 'text-[#d9dada]')}>{location}</span>
            </div>
            {description && full && <MarkdownRenderer cv={true} content={description} />}
            {skills && (
              <div className="pt-4">
                <h4 className="text-[#2DD4BF] text-sm font-bold mb-1">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills?.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant={cv ? 'outline' : 'secondary'}
                      className={clsx(cv ? 'text-xs bg-white' : 'bg-gray-700', 'text-[#2DD4BF]')}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  })
}
const ExperienceList = () => {
  const [limit, setLimit] = useState(1)

  const handleMore = () => {
    if (limit >= 3) {
      return
    }
    setLimit(limit + 1)
  }

  const handleLess = () => {
    if (limit === 1) {
      return
    }
    setLimit(limit - 1)
  }
  return (
    <section className="mx-auto min-w-[350px] max-w-screen-md">
      <h2 className="mb-8 text-center transition-colors duration-300">Most Recent Roles</h2>
      <div className="flex flex-col gap-2">
        {WorkExperience({ data: experience, limit })}
        <div className="flex justify-center gap-4">
          <Button
            className={limit > 1 ? 'bg-teal-400' : 'bg-gray-400 pointer-events-none'}
            onClick={handleLess}
          >
            -
          </Button>
          <Button
            className={limit !== 3 ? 'bg-teal-400' : 'bg-gray-400 pointer-events-none'}
            onClick={handleMore}
          >
            +
          </Button>
        </div>
      </div>
    </section>
  )
}
export default ExperienceList
