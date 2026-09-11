import config from '../config'

export default function Footer() {

    return (
        <footer className="w-full bg-[#050816]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="text-end space-x-4 p-4">
                    <a href={`mailto:${config.email}`} className="hover:underline" aria-label="Email">Email</a>
                    <a href={config.github} target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="GitHub">GitHub</a>
                    <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="LinkedIn">LinkedIn</a>
                    <a href="/privacy" className="hover:underline" aria-label="Privacy Policy">Privacy</a>
                </div> */}
                <p className="text-center space-x-4 p-4 text-slate-300">
                    <span>© {new Date().getFullYear()}</span>
                    <span>·</span>
                    <a href={config.siteURL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:underline">{config.domainName}</a>
                    <span>·</span>
                    <span>All rights reserved</span>
                </p>
            </div>
        </footer>
    )
}
