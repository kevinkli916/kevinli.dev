export interface PersonalData {
  name: string
  title: string
  bio: string
  location: string
  email: string
  github: string
  linkedin: string
  twitter?: string
  resume?: string
  skillCategories: {
    category: string
    skills: string[]
  }[]
  projects: {
    title: string
    description: string
    link: string
    tags: string[]
  }[]
  experience: {
    company: string
    position: string
    period: string
    description: string
    bulletPoints?: string[]
    tags: string[]
  }[]
  education: {
    institution: string
    degree: string
    period: string
    description?: string
    tags?: string[]
  }[]
}
