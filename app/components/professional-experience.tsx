import ExperienceCard from './experience-card'
import { experiences } from '../data/experiences'

export { experiences }

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

