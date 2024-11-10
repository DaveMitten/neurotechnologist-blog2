export interface LogoLink {
  icon: LogoName
  url: string
}
export type LogoName = 'github' | 'star' | 'fork' | 'x' | 'instagram' | 'linkedin'

export interface ColorScheme {
  bg: string
  text: string
  header: string
  card: string
  button: string
}

export interface KeyRole {
  company: string
  title: string
  logo: string
  date: {
    start: string
    end: string
  }
  overview: string
  keyResponsibilities: string[]
  technicalExpertise: string[]
  majorAchievements: string[]
  projectsAndContributions: ProjectsAndContributions[]
  skillsDeveloped: string[]
}

export type ProjectsAndContributions = {
  point: string
  subPoints: string[]
}

export type WorkExperienceType = {
  title: string
  company: string
  startDate: string
  endDate: string
  duration: string
  location: string
  description?: string
  skills?: string[]
  links?: {
    github?: string
    personal?: string
  }
  courses?: string[]
}
