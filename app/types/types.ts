export type Tag =
  | 'frontend'
  | 'frontend tool'
  | 'backend'
  | 'backend tool'
  | 'fullstack'
  | 'ai / ml'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'testing'
  | 'ui / styling'
  | 'tooling'
  | 'architecture'
  | 'engineering practices'
  | 'product & ux'
  | 'leadership'
  | 'performance & seo';

export type Proficiency = number; // 1 to 100

export type TechItem = {
  name: string;
  tags?: Tag[];
  proficiency?: Proficiency;
};

export type ConceptItem = {
  name: string;
  tags?: Tag[];
  proficiency?: Proficiency;
};



export type Company = {
  name: string;
  website?: string;
  description?: string;
  domain?: string;
  location?: string;
};

export type Project = {
  client?: string;
  clientWebsite?: string;
  domain?: string;
  projectWebsite?: string;
  name: string;
  description: string;
  responsibilities?: string[];
  tech?: TechItem[];
  concepts?: ConceptItem[];
  teamSize?: number;
};

export type Experience = {
  company: Company;
  role: string;
  period: string;
  location?: string;
  projects?: Project[];
  responsibilities?: string[];
  tech?: TechItem[];
  concepts?: ConceptItem[];
  achievements?: string[];
  priority?: number;
};