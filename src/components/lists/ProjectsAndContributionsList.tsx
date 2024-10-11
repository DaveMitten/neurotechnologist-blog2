import React from 'react'
import { ProjectsAndContributions } from '../../types/general'

const ProjectsAndContributionsList = ({
  data,
  title,
}: {
  data: ProjectsAndContributions[]
  title: string
}) => {
  return (
    <div className="space-y-2">
      <h4 className={'text-lg text-[#2DD4BF] font-bold pr-1'}>{title}:</h4>
      <ol className="space-y-4 list-decimal list-inside">
        {data.map((item) => (
          <li className="list-decimal list-inside text-base" key={item.point}>
            {item.point}
            <ul className="pt-2 list-disc list-inside space-y-2">
              {item.subPoints.map((subPoint) => (
                <li className="list-disc list-inside pl-4 text-base" key={subPoint}>
                  {subPoint}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ProjectsAndContributionsList
