'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { workExperience as experience } from '../../../data/WorkData'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

const WorkExperience = ({ data, limit }: { data: typeof experience; limit: number }) => {
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
      <Card key={work.company} className="border-transparent transition-colors duration-300">
        <CardContent>
          <div className="rounded-lg ">
            <h3 className="text-2xl font-semibold text-para mb-2">{title}</h3>
            <div className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Company: </h4>
              <span className="text-para">{company}</span>
            </div>
            <div className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Employment Type: </h4>
              <span className="text-para">{employmentType}</span>
            </div>
            <div className="flex items-center text-sm mb-1">
              <h4 className="text-sm font-bold pr-1">Dates: </h4>
              <span className="text-para">{startDate}</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-para">{endDate}</span>
            </div>
            <div className="text-sm mb-1 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Duration: </h4>
              <span className="text-para">{duration}</span>
            </div>
            <div className="text-sm mb-3 flex flex-row items-center">
              <h4 className="text-sm font-bold pr-1">Location: </h4>
              <span className="text-para">{location}</span>
            </div>
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
const ExperienceList = () => {
  const [limit, setLimit] = useState(1)

  const handleMore = () => {
    // if (limit >= experience.length || limit >= 3) {
    if (limit >= 3) {
      return
    }
    setLimit(limit + 1)
  }

  const handleLess = () => {
    if (limit === 1) {
      return
    }
    console.log('less', limit)
    setLimit(limit - 1)
  }
  return (
    <section className="mx-auto min-w-[350px] max-w-screen-md">
      <h2 className="mb-8 text-center transition-colors duration-300">Most Recent Roles</h2>
      <div className="flex flex-col gap-4">
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
