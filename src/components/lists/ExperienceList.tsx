'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import WorkExperienceCard from '../cards/WorkexperienceCard'
import { WorkExperienceType } from '@/types/WorkExperienceType'

const ExperienceList = ({ initialData }: { initialData: WorkExperienceType[] }) => {
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
        <WorkExperienceCard data={initialData} limit={limit} />
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
