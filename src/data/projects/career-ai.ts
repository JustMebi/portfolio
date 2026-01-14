import { Project } from './types';

export const careerAiProject: Project = {
  id: 'career-ai',
  name: 'Career AI',
  platform: 'Web',
  shortDescription: 'AI-Powered Career Advisor',
  problemStatement: 'Helping professionals get personalized career advice and resume analysis.',
  status: 'Personal Project',
  hasDemo: true,
  hasGithub: true,
  githubUrl: 'https://github.com',
  techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenAI API'],
  role: 'Sole Developer',
  overview: "Career AI is a personal project exploring AI integration for career development. The application provides resume analysis, personalized career path recommendations, and interview preparation assistance using OpenAI's language models.",
  features: [
    'Resume upload and AI-powered analysis',
    'Skill gap identification and recommendations',
    'Personalized career path suggestions',
    'Interview question generation based on target role',
    'Cover letter generation assistance',
    'Local-first architecture for privacy',
  ],
  technicalDecisions: [
    {
      title: 'AI Integration',
      description: 'Direct OpenAI API integration with streaming responses for real-time feedback. Implemented prompt engineering patterns for consistent, structured outputs.',
    },
    {
      title: 'Local-First Design',
      description: 'IndexedDB for storing user data locally. API key stored securely in browser. No backend required for MVP.',
    },
    {
      title: 'UX for AI Responses',
      description: 'Streaming text display with markdown rendering. Loading states that communicate AI processing without blocking interaction.',
    },
    {
      title: 'File Processing',
      description: 'Client-side PDF parsing for resume extraction. Chunking strategy for large documents to fit API context limits.',
    },
  ],
  demoContent: {
    videoUrl: '',
    videoDescription: 'Walkthrough of resume analysis and career recommendation features powered by AI.',
    screenshots: [
      { caption: 'Resume Upload', description: 'Drag and drop or browse to upload your resume for analysis.' },
      { caption: 'AI Analysis', description: 'Real-time streaming analysis with actionable insights.' },
      { caption: 'Career Paths', description: 'Personalized career trajectory recommendations.' },
      { caption: 'Interview Prep', description: 'AI-generated interview questions tailored to your target role.' },
    ],
    highlights: [
      { title: 'Privacy First', description: 'All data stays local in your browser - nothing sent to external servers.' },
      { title: 'Streaming Responses', description: 'See AI feedback in real-time as it generates.' },
      { title: 'Actionable Insights', description: 'Specific, implementable recommendations for career growth.' },
    ],
  },
};
