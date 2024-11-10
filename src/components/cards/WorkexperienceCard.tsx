import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { Badge } from '../ui/badge'
import MarkdownRenderer from '../payload/markdown/MarkdownRenderer'
import { Card, CardContent } from '../ui/card'
import type { WorkExperienceType } from '@/types/general'
export const WorkExperienceCard = ({
  data,
  limit,
  full,
  cv,
}: {
  data: WorkExperienceType[]
  limit?: number
  full?: boolean
  cv?: boolean
  className?: string
}) => {
  let renderData = data
  if (!data) return null
  if (limit) renderData = data.slice(0, limit)
  return renderData?.map((work) => {
    const { title, company, startDate, endDate, duration, location, description, skills } = work
    return (
      <Card
        data-testid="work-experience-card"
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
                cv ? 'text-gray-500  text-base' : 'text-[#d9dada] text-2xl',
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

            {skills ? (
              <div className="pt-4">
                <h4 className="text-[#2DD4BF] text-sm font-bold mb-1">Skills:</h4>
                <div className={clsx(cv ? 'gap-1' : 'gap-2', 'flex flex-wrap')}>
                  {skills?.map((skill, index) => {
                    return cv ? (
                      <div key={skill} className="flex text-xs text-gray-500 ">
                        {skill}
                        {index !== skills.length - 1 && ','}
                      </div>
                    ) : (
                      <Badge
                        key={skill}
                        variant={cv ? 'outline' : 'secondary'}
                        className={clsx(cv ? 'text-xs bg-white' : 'bg-gray-700', 'text-[#2DD4BF]')}
                      >
                        {skill}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </CardContent>
      </Card>
    )
  })
}

export default WorkExperienceCard
