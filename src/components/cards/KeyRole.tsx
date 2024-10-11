import React from 'react'
import Image from 'next/image'
import type { KeyRole as KeyRoleType } from '@/types/general'
import { Card, CardContent } from '@/components/ui/card'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import ProjectsAndContributionsList from '../lists/ProjectsAndContributionsList'
import { Badge } from '../ui/badge'
import onetribeLogo from '@/public/images/onetribelogo.png'
const KeyRoleListRenderer = ({ data, title }: { data: string[]; title: string }) => {
  return (
    <div className="space-y-2">
      <h4 className={'text-lg text-[#2DD4BF] font-bold pr-1'}>{title}:</h4>
      <ul className="space-y-2">
        {data.map((item) => (
          <li className="list-disc list-inside" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const KeyRole = ({ role }: { role: KeyRoleType }) => {
  const {
    company,
    title,
    logo,
    date,
    overview,
    keyResponsibilities,
    technicalExpertise,
    majorAchievements,
    projectsAndContributions,
    skillsDeveloped,
  } = role

  return (
    <Card
      key={role.title}
      className={clsx(
        'bg-gray-800 border-transparent transition-colors duration-300 max-w-screen-lg mx-auto p-10',
      )}
    >
      <CardContent className="flex flex-col gap-4 space-y-2">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 ">
          <div>
            <h3 className={'text-[#d9dada] text-4xl font-semibold mb-2'}>{company}</h3>
            <h3 className={'text-[#d9dada] text-2xl font-semibold mb-2'}>{title}</h3>
          </div>
          {/* logo */}
          <div className="mb-4 md:mb-0 relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <Image src={onetribeLogo} alt={role.title} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="flex flex-col text-sm mb-1">
          <h4 className={'text-lg text-[#2DD4BF] font-bold pr-1'}>Duration:</h4>
          <div className="flex flex-row items-center">
            <span className={'text-[#d9dada]'}>{date.start}</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className={'text-[#d9dada]'}>{date.end}</span>
          </div>
        </div>
        <div>
          <h4 className={'text-lg text-[#2DD4BF] font-bold pr-1'}>Overview:</h4>
          <span className={'text-[#d9dada]'}>{overview}</span>
        </div>
        <KeyRoleListRenderer data={keyResponsibilities} title="Key Responsibilities" />
        {/* needs to be a logo list */}

        <h4 className="text-[#2DD4BF] text-sm font-bold mb-1">Technical Expertise:</h4>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {technicalExpertise?.map((skill, index) => (
              <Badge key={skill} variant={'secondary'} className={'bg-gray-700 text-para'}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        {/* major achievements  */}
        <KeyRoleListRenderer data={majorAchievements} title="Major Achievements" />
        {/* projects and contributions */}
        <KeyRoleListRenderer data={skillsDeveloped} title="Skills Developed" />
        <ProjectsAndContributionsList
          data={projectsAndContributions}
          title="Projects and Contributions"
        />
        {/* {description && full && <MarkdownRenderer cv={true} content={description} />} */}
        {/* {skills && (
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
          )} */}
      </CardContent>
    </Card>
  )
}

export default KeyRole
