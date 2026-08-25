import { Experience } from '../types/types'

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article id="work" className="bg-white/5 border border-white/6 rounded-lg p-6 shadow-sm">
      <header className="mb-3">
        <h3 className="text-lg font-semibold">{exp.role}</h3>
        <p className="text-sm text-slate-300">
          {exp.company.website ? (
            <a
              href={exp.company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300/90 hover:text-amber-200 underline underline-offset-2"
            >
              {exp.company.name}
            </a>
          ) : (
            exp.company.name
          )}{' '}
          • {exp.location ?? exp.company.location ?? 'Remote'}
        </p>
        <p className="text-xs text-slate-400">{exp.period}</p>
      </header>


      <ul className="list-disc list-inside space-y-2 text-sm text-slate-200">
        {exp.responsibilities?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      {exp.tech && exp.tech.length > 0 && (
        <div className="mt-4 text-xs text-slate-300">
          <strong className="font-medium text-amber-300">Tech:</strong>{' '}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {exp.tech.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-amber-400/40 transition-colors"
                title={tech.tags ? `Tags: ${tech.tags.join(', ')} (${tech.proficiency}%)` : undefined}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

    </article>
  )
}



