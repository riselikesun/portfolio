import { Company } from '../types/types';

export const companies = {
  infoblox: {
    name: 'Infoblox',
    website: 'https://infoblox.com',
    domain: 'Cyber Security',
    description: 'Infoblox is a leader in DDI (DNS, DHCP, and IPAM) solutions, providing core infrastructure services that power hybrid and multi-cloud networks worldwide.',
  },
  quillbot: {
    name: 'QuillBot',
    website: 'https://quillbot.com',
    domain: 'AI Writing Assistant SaaS Product',
    description: 'QuillBot is an AI writing assistant that makes writing painless. It has multiple products like a paraphraser, grammar checker, summarizer, and plagiarism checker. At its core, we use in-house ML models to power these products. QuillBot is available in 22+ languages. We observe user behavior using Amplitude and make data-driven decisions. To streamline feature releases across products, we architected a micro-frontend infrastructure.',
  },
  cloudCover: {
    name: 'CloudCover | Currently known as Ollion',
    website: 'https://ollion.com',
    domain: 'Cloud Architecture & Consulting',
    description: 'CloudCover (now Ollion) is a cloud-native consulting and engineering company specializing in DevOps, cloud migrations, and data platforms.',
  },
  dataGrokr: {
    name: 'DataGrokr',
    website: 'https://www.datagrokr.com',
    domain: 'Software and Services',
    description: 'DataGrokr is a specialized data engineering and cloud consulting firm providing enterprise digital transformation services.',
  },
} satisfies Record<string, Company>;

