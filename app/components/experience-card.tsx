import React from 'react'

type Experience = {
  company: string
  role: string
  period: string
  location?: string
  responsibilities: string[]
  tech?: string[]
}

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article id="work" className="bg-white/5 border border-white/6 rounded-lg p-6 shadow-sm">
      <header className="mb-3">
        <h3 className="text-lg font-semibold">{exp.role}</h3>
        <p className="text-sm text-slate-300">{exp.company} • {exp.location ?? 'Remote'}</p>
        <p className="text-xs text-slate-400">{exp.period}</p>
      </header>

      <ul className="list-disc list-inside space-y-2 text-sm text-slate-200">
        {exp.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      {exp.tech && exp.tech.length > 0 && (
        <p className="mt-4 text-xs text-slate-300">
          <strong className="font-medium">Tech:</strong> {exp.tech.join(', ')}
        </p>
      )}
    </article>
  )
}
