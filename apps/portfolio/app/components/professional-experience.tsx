"use client";

import { motion, Variants } from 'motion/react';
import ExperienceCard from './experience-card'
import { experiences } from '../data/experiences'

export { experiences }

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Custom smooth easing
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ProfessionalExperience() {
	// Sort experiences based on priority (lower number = higher priority). Default to 99 if undefined.
	const sortedExps = [...experiences].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

	return (
		<section id="professional-experience" className="py-16 px-4 sm:px-8 w-full my-12">
			<div className="max-w-7xl mx-auto">
				<div className="space-y-10">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
						className="space-y-2"
					>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Professional Experience</h2>
						<p className="text-slate-400 text-lg">My journey building scalable products and leading engineering teams.</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{sortedExps.map((exp, i) => {
							const isFeatured = i === 0;
							return (
								<motion.div 
									variants={itemVariants} 
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-50px" }}
									key={i} 
									className={isFeatured ? "md:col-span-2" : "col-span-1"}
								>
									<ExperienceCard exp={exp} isFeatured={isFeatured} />
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
