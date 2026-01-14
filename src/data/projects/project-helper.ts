import { Project } from './types';

export const projectHelper: Project = {
  id: 'project-helper',
  name: 'Project Helper',
  platform: 'Web',
  shortDescription: 'Template project entry for quick duplication',
  problemStatement: 'Provides a ready-to-edit project file for new additions.',
  status: 'Personal Project',
  hasDemo: false,
  hasGithub: false,
  techStack: ['React', 'TypeScript'],
  role: 'Sole Developer',
  overview: 'This project exists to make adding a new portfolio project faster. Duplicate this file and replace the content with your own project details.',
  features: [
    'Clear structure for project metadata',
    'Easy duplication workflow',
  ],
  technicalDecisions: [
    {
      title: 'Single-File Template',
      description: 'Keeps the starter content in one place so you can copy and edit quickly.',
    },
  ],
};
