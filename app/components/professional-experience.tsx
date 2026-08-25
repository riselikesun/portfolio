import ExperienceCard from './experience-card'
import { experiences } from '../data/experiences'

export { experiences }

export default function ProfessionalExperience() {
	// Sort experiences based on priority (lower number = higher priority). Default to 99 if undefined.
	const sortedExps = [...experiences].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

	return (
		<section id="professional-experience" className="py-16 px-4 sm:px-8 w-full my-12">
			<div className="max-w-7xl mx-auto">
				<div className="space-y-10">
					<div className="space-y-2">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Professional Experience</h2>
					<p className="text-slate-400 text-lg">My journey building scalable products and leading engineering teams.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{sortedExps.map((exp, i) => {
						const isFeatured = i === 0;
						return (
							<div key={i} className={isFeatured ? "md:col-span-2" : "col-span-1"}>
								<ExperienceCard exp={exp} isFeatured={isFeatured} />
							</div>
						);
					})}
				</div>
			</div>
			</div>
		</section>
	)
}
