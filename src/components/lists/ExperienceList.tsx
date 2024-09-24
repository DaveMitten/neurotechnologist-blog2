'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { workExperience as experience } from '../../../data/WorkData'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

const WorkExperience = ({
  card,
  data,
  limit,
}: {
  card: string
  data: typeof experience
  limit: number
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
        className={`${card} border-transparent transition-colors duration-300`}
      >
        <CardContent>
          <div className="bg-gray-800 rounded-lg text-gray-300">
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">{title}</h3>
            <p className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Company: </h4>
              <span className="text-para">{company}</span>
            </p>
            <p className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Employment Type: </h4>
              <span className="text-para">{employmentType}</span>
            </p>
            <div className="flex items-center text-sm mb-1">
              <h4 className="text-sm font-bold pr-1">Dates: </h4>
              <span className="text-para">{startDate}</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-para">{endDate}</span>
            </div>
            <p className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Duration: </h4>
              <span className="text-para">{duration}</span>
            </p>
            <p className="text-sm mb-3 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Location: </h4>
              <span className="text-para">{location}</span>
            </p>
            {/* {description && <p className="text-sm mb-3 text-wrap">{description}</p>} */}
            {skills && (
              <div className="pt-4">
                <h4 className="text-sm font-bold mb-1">Skills:</h4>
                <div className="flex flex-wrap">
                  {skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-teal-400 rounded-full px-3 py-1 text-xs mr-2 mb-2"
                    >
                      {skill}
                    </span>
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
const ExperienceList = ({ header, card }: { header: string; card: string }) => {
  const [limit, setLimit] = useState(3)

  const handleMore = () => {
    if (limit >= experience.length) {
      return
    }
    setLimit(limit + 3)
  }

  const handleLess = () => {
    if (limit <= 3) {
      return
    }
    setLimit(limit - 3)
  }
  return (
    <section className="mx-auto min-w-[350px] max-w-screen-md">
      <h2 className={`mb-8 text-center ${header} transition-colors duration-300`}>
        Most Recent Roles
      </h2>
      <div className="flex flex-col gap-4">
        {WorkExperience({ card, data: experience, limit })}
        <div className="flex justify-center gap-4">
          <Button
            className={limit > 3 ? 'bg-teal-400' : 'bg-gray-400 pointer-events-none'}
            onClick={handleLess}
          >
            -
          </Button>
          <Button
            className={
              limit !== experience.length ? 'bg-teal-400' : 'bg-gray-400 pointer-events-none'
            }
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
