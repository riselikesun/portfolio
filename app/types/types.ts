export type Project = {
    client?: string
    clientWebsite?: string
    domain?: string
    projectWebsite?: string
	name: string
	description: string
	responsibilities?: string[]
	tech?: string[]
	concepts?: string[]
    teamSize?: number
}

export type Experience = {
	company: string
	companyDomain?: string
    companyWebsite?: string
	companyDescription?: string
	role: string
	period: string
	location?: string
	projects?:Project[]
	responsibilities?: string[]
	tech?: string[]
	concepts?: string[]
	achievements?: string[]
}