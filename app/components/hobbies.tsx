import React from 'react'

type Hobby = {
    title: string
    description: string
    icon?: React.ReactNode
}

const hobbies: Hobby[] = [
    {
        title: '3D Printing',
        description: 'Designing and fabricating functional prototypes and parts with iterative prints.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: 'Woodworking',
        description: 'Building furniture and small projects — planning, joinery, and finishing.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 21l18-18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: 'Aviation Projects',
        description: 'Designing and building small aircraft and learning aerodynamics.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
]

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-10">
            <h2 className="text-2xl font-bold mb-6">Hobbies & Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((h, i) => (
                    <article key={i} className="bg-white/5 border border-white/6 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3 text-slate-200">
                            <span className="w-10 h-10 rounded-md bg-slate-700 flex items-center justify-center text-white">{h.icon}</span>
                            <h3 className="text-lg font-semibold">{h.title}</h3>
                        </div>
                        <p className="text-sm text-slate-300">{h.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
