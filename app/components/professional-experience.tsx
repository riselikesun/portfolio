import React from 'react'
import ExperienceCard from './experience-card'
import { Experience } from '../types'


const experiences: Experience[] = [
	{
		company: 'Infoblox',
		role: 'Staff web developer',
		period: '01/2025–08/2025',
		location: 'Remote',
		responsibilities: [
			'Led the migration to a component-driven architecture in wordpress.',
			'Implemented accessibility and performance improvements for some of the top blogs.',
		],
		tech: ['PHP', 'Wordpress']
	},
	{
		company: 'QuillBot',
		companyDescription: 'QuillBot is an AI writing assistant that makes writing painless. It has multiple products like paraphraser, grammar checker, summarizer, plagiarism checker, etc. At heart, we use in-house ML models to power the products. Quillbot is available in 22+ languages. We observe user behaviour using Amplitude and make data-driven decisions. To make it simple to release features for separate products, we have put up micro-frontend infrastructure.',
		companyWebsite: 'https://quillbot.com',
		companyDomain: 'AI Writing Assistant Saas Product',
		role: 'Full stack engineer II | Lead Engineer',
		period: '12/2021–09/2024',
		location: 'Remote',
		projects: [
			{
				name: 'Paraphrasing tool',
				projectWebsite: 'https://quillbot.com/paraphrasing-tool',
				teamSize: 8,
				description: 'QuillBot\'s Paraphrasing Tool helps you rewrite and rephrase sentences, paragraphs, and essays. Built with cutting-edge NLP models, it\'s used by millions of students, writers, and professionals worldwide. 90% of quillbot\'s traffic is organic which drive the business model',
				responsibilities: [
					'Take critical decisions on frontend architecture, code quility standards and best practices',
					'Review PRs, provide meaningful feedback and guide developers to write better code. Conduct code reviews for ensuring code quality and best practices.',
					'On major releases, monitor applications using Datadog, find potential bugs, and fix them.',
					'Think not only as a developer but also as a user and suggest changes to the developing features. Observe user behaviour using Amplitude and make data-driven decisions.',
					'Mentor junior developers and help them grow. and take part in hiring process and interview the candidates',
					'Add new Multilingual features on Paraphraser with support for 22+ languages which scale to millions of users',
					'Refactor existing code, fix critical bugs to improve SEO and performance.',
					'Always launch features with A/B tests and make data-driven decisions',
				],
			},
			{
				name: 'AI Detector',
				projectWebsite: 'https://quillbot.com/ai-content-detector',
				teamSize: 8,
				description: 'QuillBot\'s AI Detector helps you identify AI-generated content with high accuracy. Powered by advanced machine learning models, it\'s used by students, educators, and researchers worldwide.',
				responsibilities: [
					'Develop new tool AI Detector within a week with pixel perfect acccuracy as per figma design.',
					'Collaborate with research team to identify and integrate AI models, Achieve 95% accuracy using in-house LLMs and data',
					'Develope backend endpoints and integrate AI models with high accuracy and low latency',
				],
			},
			{
				name: 'External Web properties',
				projectWebsite: 'https://spinbot.com/',
				teamSize: 8,
				description: 'Quillbot has many external properties such as spinbot.com, smallseotools.com, etc.',
				responsibilities: [
					'Leading web properties such as Spinbot and smallseotools.com',
					'Creating and managing scalable infrastructure for web properties in Azure',
					'Manage code quality, features, security and product for web properties',
					'Improve SEO rankings and organic traffic',
				],
			},
			{
				name: 'Plagiarism Checker',
				projectWebsite: 'https://quillbot.com/plagiarism-checker',
				teamSize: 8,
				description: 'QuillBot\'s Plagiarism Checker helps you detect plagiarism in your text with high accuracy. Powered by advanced NLP models, it\'s used by millions of students, writers, and professionals worldwide.',
				responsibilities: [
					'Develop new tool Plagiarism Checker in few weeks using copyleaks APIs.',
					'Designed and developed plagiarism checker APIs like available credits, credits needed to scan a page, history, etc.',
					'Created credit management system for plagiarism checker using chargebee and copyleaks APIs'
				],
			}
		],
		achievements: [
			'Developed and launched an AI detector within a week with collaboration with the research team. It became an instant success with millions of users and ranked second in Google search in just a month.',
			'Developed and launched Plagiarism Checker in just a few weeks. It helped QuillBot get many loyal premium users and grow even bigger.',
			'Developed many crucial features in Paraphraser that greatly enhanced the user experience.',
		],
		tech: ["TypeScript", 'React', 'Node.js', "HTML5", "CSS", "Material UI", "I18n", "system.js", "MongoDB", "Redux", "JavaScript", "Jest", "docker", "AWS", "Amplitude", "DataDog", "New Relic", "Next.js", "Storybook", "kubernates", "Notion", "Python", "LLM", "OpenAI APIs", "Google Analytics", "CopyLeaks", "CloudFlare", "Git", "Gitlab", 'ChargeBee', 'Microsoft Azure'],
		concepts: ["AB Testing", 'Mircro-frontends', "AI/ML", "AI Integration", "LLM", "Microservices", "Multilingual website", "Product development", "Product Analytics", "Performance Optimization", "Web Security", "CSS in JS", "System Design", "UI Design System", "Agile Development", "TDD", "SEO", "Web vitals", "Product ownership", "CI/CD", "Feature Flag", "Unit Testing", "Integration Testing", "Code Review", 'Payment Gateway Integration']
	},
	{
		company: 'CloudCover | Currently known as Ollion',
		companyWebsite: 'https://ollion.com',
		role: 'Full stack engineer',
		period: '06/2021–11/2021',
		location: 'Remote',
		projects: [{
			name: 'DataPipes',
			projectWebsite: 'https://home.datapipes.io/',
			domain: 'Data Engineering—Software as a Service',
			teamSize: 4,
			description: 'Created a web application (SaaS) from scratch called DataPipes. Datapipes is built to easily setup a data center using a simple dashboard. It provides an interface to setup infrastructure and data streams in a multicloud environment. Data engineers can utilize the same dashboard to process and analyse the data as well.',
			responsibilities: [
				'Created intuitive UI designs for DataPipes to enable quick data center setup and seamless multicloud data orchestration',
				'Developed a real-time data streaming UI with live pipeline monitoring, error highlighting, and intuitive data flow visualization',
				'Integrated Google Colab and Jupyter Notebook directly into the dashboard, enabling seamless data analysis and model training within the same platform',
				'Designed and built a data ingestion module to handle structured and unstructured data ingestion from diverse sources',
			],
			tech: ['TypeScript', 'Vue.js', 'JavaScript', 'Jest', 'Webpack', 'Jira', 'Git', 'Agile', 'HTML5', 'CSS', 'Gitlab', 'Python', 'Flask', 'AWS', 'GPC', 'Azure', 'MongoDB', 'SQL', "DataDog"],
			concepts: ["Microservices", "Product development", "System Design", "UI Design System", "Agile Development", "TDD", "Product ownership", "CI/CD", "Unit Testing", "Integration Testing", "Code Review"]
		}],
	},
	{
		company: 'DataGrokr',
		companyWebsite: 'https://www.datagrokr.com',
		role: 'Team Lead | Full stack engineer',
		period: '02/2010–06/2021',
		location: 'Bangalore, India',
		projects: [{
			client: 'Verisk Insurance',
			name: 'QPC Migration',
			domain: 'Insurance',
			teamSize: 6,
			description: 'Migrated 100+ legacy applications of QPC from on-prem to AWS. Enhanced performance of the software suite. Created scalable infrastructure using AWS and deployment tools like Octopus.',
			responsibilities: [
				'Create a plan on how to migrate applications to AWS without breaking any process/application.',
				'Manage client expectations, explain the ongoing migration process, and resolve any queries the client might have.',
				'Led a cross-functional team of 6 developers, conducting code reviews and facilitating sprint planning. Actively contributed to team scaling by interviewing and onboarding new hires.',
				'Spearheaded the migration of on-premise infrastructure to AWS, architected a cost-efficient solution that reduced annual operational costs by 90%(1M USD to 100K USD), improved revenue by 60%.',
				'Tweaked the applications/services so that they run smoothly on the cloud and updated stored procedures as per required for the migration.',
			],
			tech: ['AWS', 'ASG', 'ECS', 'EC2', 'S3', 'Iac', 'AWS CloudFormation', 'Octopus', '.Net Framework', 'MySql', 'Stored Procedures', 'Jira', 'Git', 'Confluence', 'Bitbucket', 'Linux'],
			concepts: ["Product Migration", "System Design", "Agile Development", "CI/CD", "Code Review", 'Client Expectation Management', 'Team Scaling', 'Cost Optimisation']
		}],
		achievements: ['Successfully migrated 100+ applications/services to AWS', 'I impressed the client with my soft and hard skills and scored more projects for the company.'],
	},
	{
		company: 'DataGrokr',
		companyWebsite: 'https://www.datagrokr.com',
		role: 'Full stack engineer',
		period: '04/2018–01/2020',
		location: 'Bangalore, India',
		projects: [
			{
				client: 'Wood Mackanzie',
				clientWebsite: 'https://www.woodmac.com',
				name: 'Energy Resource evaluation and analysis Tool',
				domain: 'Oil & Energy',
				teamSize: 8,
				description: 'Wood Mackanzie had 100+ small tools for analysing oil resources. Each tool had its own specific function and way to use them. For analysing any resources they had to pass data from one small tool to other which was painful and error prone. We combined all tools to create a single multifunctional platform.',
				responsibilities: [
					"Take ownership of the features I build and test them properly before releasing.",
					"Build responsive React components/HOC with test cases.",
					"Create/modify Restful API endpoints",
					"Improve CICD pipeline",
					"Work on client requirements from scratch",
				],
				tech: ['React.js', 'JavaScript', 'Prop-Types', 'Jest', 'Webpack', 'babel', 'node.js', 'C#', '.Net core', 'AWS', 'S3', 'Makefile', 'AWS Lambda', 'Cloudformation', 'Docker', 'Docker Compose', 'GIS', 'MapBox-GL', 'Chart.js', 'Git', 'Jenkins', 'NPM', "NPM Nexus", 'Excel', 'Jira', 'Confluence', 'Bitbucket', 'Linux'],
				concepts: ["Product development", "System Design", "UI Design System", "Agile Development", "Product ownership", "CI/CD", "Unit Testing", "Integration Testing", "Code Review", 'Micro Services', 'Blue Green Deployment',]
			}
		],
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
