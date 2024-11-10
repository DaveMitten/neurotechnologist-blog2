'use client'

import Hero from '@/components/sections/Hero'
import ExperienceList from '@/components/lists/ExperienceList'

import { workExperience as experience } from '@/data/WorkData'
import { CurrentTechStack } from '@/components/cards/CurrentTechStack'
import { logos } from '@/components/cards/CurrentTechStack'

export default function Page() {
  return (
    <main className="container mx-auto">
      <Hero
        title="Imagine | Create | Adapt"
        description="Transforming ideas into robust, scalable solutions."
      />
      <CurrentTechStack logos={logos} />
      <ExperienceList initialData={experience} />
    </main>
  )
}
