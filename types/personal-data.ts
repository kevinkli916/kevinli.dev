export interface PersonalData {
  name: string
  title: string
  bio: string
  location: string
  email: string
  github: string
  linkedin: string
  twitter: string
  resume?: string // Path to resume file
  skillCategories: {
    category: string
    skills: string[]
  }[]
  projects: {
    title: string
    description: string
    link: string
    tags: string[] // For filtering
  }[]
  experience: {
    company: string
    position: string
    period: string
    description: string
    bulletPoints?: string[] // Added bullet points for detailed experience
    tags: string[] // Added tags for experience filtering
  }[]
  education: {
    institution: string
    degree: string
    period: string
    description?: string
    tags?: string[] // Optional tags for filtering
  }[]
}

