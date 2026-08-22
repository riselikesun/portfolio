import React from 'react'
import ExperienceCard from './experience-card'

type Experience = {
	company: string
	role: string
	period: string
	location?: string
	responsibilities: string[]
	tech?: string[]
}

const experiences: Experience[] = [
	{
		company: 'Infoblox',
		role: 'Staff web developer',
		period: '01/2025–08/2025',
		location: 'Remote',
		responsibilities: [
			'Led the migration to a component-driven architecture using Next.js and TypeScript.',
			'Implemented accessibility and performance improvements that increased Lighthouse scores.',
			'Mentored junior engineers and ran regular design + code reviews.'
		],
		tech: ['TypeScript', 'React', 'Next.js', 'Tailwind']
	},
	{
		company: 'QuillBot',
		role: 'Full stack engineer II | Lead Engineer',
		period: '12/2021–09/2024',
		location: 'Remote',
		responsibilities: [
			'Built reusable UI components and a design system used across multiple products.',
			'Collaborated closely with designers to implement polished interactions and animations.',
			'Optimized bundle size and improved load times across primary routes.'
		],
		tech: ['React', 'GraphQL', 'Framer Motion']
	},
	{
		company: 'CloudCover | Currently known as Ollion',
		role: 'Full stack engineer',
		period: '06/2021–11/2021',
		location: 'Remote',
		responsibilities: [
			'Contributed features and bug fixes across the product surface.',
			'Helped migrate legacy JS to modern ES modules and improve test coverage.'
		],
		tech: ['JavaScript', 'Jest', 'Webpack']
	},
	{
		company: 'DataGrokr',
		role: 'Full stack engineer | Team lead',
		period: '04/2018–06/2021',
		location: 'Bangalore, India',
		responsibilities: [
			'Contributed features and bug fixes across the product surface.',
			'Helped migrate legacy JS to modern ES modules and improve test coverage.'
		],
		tech: ['JavaScript', 'Jest', 'Webpack']
	}
]

export default function ProfessionalExperience() {
	return (
		<section id="professional-experience" className="space-y-6 py-8">
			<h2 className="text-2xl font-bold">Professional Experience</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{experiences.map((exp, i) => (
					<ExperienceCard key={i} exp={exp} />
				))}
			</div>
		</section>
	)
}
