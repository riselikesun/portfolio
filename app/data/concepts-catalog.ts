import { ConceptItem } from '../types/types';

export const conceptsCatalog = {
  // Architecture & System Design
  systemDesign: { name: 'System Design', tags: ['architecture', 'backend', 'frontend', 'engineering practices'], proficiency: 95 },
  microservices: { name: 'Microservices', tags: ['architecture', 'backend', 'devops'], proficiency: 90 },
  microFrontends: { name: 'Micro-frontends', tags: ['architecture', 'frontend', 'engineering practices', 'product & ux'], proficiency: 95 },
  uiDesignSystem: { name: 'UI Design System', tags: ['architecture', 'frontend', 'ui / styling', 'product & ux'], proficiency: 95 },
  cssInJs: { name: 'CSS in JS', tags: ['architecture', 'frontend', 'ui / styling', 'engineering practices'], proficiency: 90 },

  // AI & ML
  aiMl: { name: 'AI/ML', tags: ['ai / ml', 'backend', 'engineering practices'], proficiency: 85 },
  aiIntegration: { name: 'AI Integration', tags: ['ai / ml', 'backend', 'fullstack', 'architecture'], proficiency: 95 },
  llm: { name: 'LLM', tags: ['ai / ml', 'backend', 'architecture'], proficiency: 90 },

  // Product & Analytics
  productDevelopment: { name: 'Product Development', tags: ['product & ux', 'fullstack', 'engineering practices'], proficiency: 95 },
  productOwnership: { name: 'Product Ownership', tags: ['product & ux', 'leadership'], proficiency: 90 },
  productAnalytics: { name: 'Product Analytics', tags: ['product & ux', 'frontend', 'engineering practices'], proficiency: 90 },
  abTesting: { name: 'A/B Testing', tags: ['product & ux', 'frontend', 'engineering practices', 'testing'], proficiency: 90 },
  featureFlag: { name: 'Feature Flagging', tags: ['engineering practices', 'frontend', 'backend', 'devops'], proficiency: 90 },
  multilingualWebsite: { name: 'Multilingual Website', tags: ['frontend', 'product & ux', 'architecture', 'performance & seo'], proficiency: 90 },
  paymentGatewayIntegration: { name: 'Payment Gateway Integration', tags: ['backend', 'frontend', 'architecture', 'product & ux'], proficiency: 85 },

  // Performance, Security & SEO
  performanceOptimization: { name: 'Performance Optimization', tags: ['performance & seo', 'frontend', 'backend', 'architecture'], proficiency: 95 },
  webVitals: { name: 'Web Vitals', tags: ['performance & seo', 'frontend', 'product & ux'], proficiency: 90 },
  seo: { name: 'Technical SEO', tags: ['performance & seo', 'frontend', 'product & ux'], proficiency: 95 },
  webSecurity: { name: 'Web Security', tags: ['engineering practices', 'backend', 'architecture', 'devops'], proficiency: 85 },

  // Engineering Practices & Quality
  agileDevelopment: { name: 'Agile Development', tags: ['engineering practices', 'leadership'], proficiency: 95 },
  codeReview: { name: 'Code Review', tags: ['engineering practices', 'leadership'], proficiency: 95 },
  tdd: { name: 'TDD', tags: ['testing', 'frontend', 'backend', 'engineering practices'], proficiency: 85 },
  unitTesting: { name: 'Unit Testing', tags: ['testing', 'frontend', 'backend', 'engineering practices'], proficiency: 95 },
  integrationTesting: { name: 'Integration Testing', tags: ['testing', 'frontend', 'backend', 'engineering practices'], proficiency: 90 },

  // DevOps, Deployment & Migration
  ciCd: { name: 'CI/CD', tags: ['devops', 'engineering practices'], proficiency: 95 },
  blueGreenDeployment: { name: 'Blue-Green Deployment', tags: ['devops', 'backend', 'architecture'], proficiency: 85 },
  productMigration: { name: 'Product Migration', tags: ['devops', 'backend', 'architecture', 'leadership'], proficiency: 90 },
  costOptimisation: { name: 'Cost Optimisation', tags: ['devops', 'backend', 'leadership', 'architecture'], proficiency: 90 },

  // Leadership
  clientExpectationManagement: { name: 'Client Expectation Management', tags: ['leadership'], proficiency: 90 },
  teamScaling: { name: 'Team Scaling', tags: ['leadership'], proficiency: 90 },
} satisfies Record<string, ConceptItem>;
