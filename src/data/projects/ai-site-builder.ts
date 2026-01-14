import { Project } from './types';

export const aiSiteBuilderProject: Project = {
  id: 'ai-site-builder',
  name: 'AI Site Builder',
  platform: 'Web',
  shortDescription: 'AI-Driven Website Generator',
  problemStatement: 'Enabling rapid website creation through conversational AI interface.',
  status: 'Active Development',
  hasDemo: false,
  hasGithub: true,
  githubUrl: 'https://github.com',
  techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI/LLM APIs', 'Monaco Editor'],
  role: 'Sole Developer',
  overview: 'An experimental project exploring AI-assisted website generation. Users describe their desired website through a conversational interface, and the system generates functional React components with styling.',
  features: [
    'Conversational interface for site requirements',
    'Real-time component generation and preview',
    'Code editor with syntax highlighting',
    'Export to standalone React project',
    'Template library for common patterns',
  ],
  technicalDecisions: [
    {
      title: 'Code Generation Architecture',
      description: 'Structured output prompting for consistent, parseable component generation. Validation layer to ensure generated code compiles.',
    },
    {
      title: 'Live Preview',
      description: 'Sandboxed iframe for safe code execution. Hot reload on generation for immediate visual feedback.',
    },
    {
      title: 'Editor Integration',
      description: 'Monaco editor for code viewing and manual adjustments. Syntax highlighting and basic IntelliSense for generated components.',
    },
    {
      title: 'Iteration Loop',
      description: 'Context preservation for follow-up modifications. Ability to reference and modify previously generated components.',
    },
  ],
};
