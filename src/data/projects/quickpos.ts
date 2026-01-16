import { Project } from './types';

export const quickposProject: Project = {
  id: 'quickpos',
  name: 'QuickPOS',
  platform: 'Web',
  shortDescription: 'Modern, touch-first POS for small and mid-sized businesses',
  problemStatement:
    'Small retail teams need a fast, tablet-friendly checkout flow with inventory, payments, and reporting in one place.',
  status: 'Personal Project',
  hasDemo: false,
  hasGithub: false,
  techStack: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'shadcn/ui',
    'React Router',
    'Recharts',
  ],
  role: 'Sole Developer',
  overview:
    'QuickPOS is a web-based point of sale system with a tablet-first interface, real-time inventory tracking, and multi-payment support. It focuses on speed at checkout while keeping reporting, customer profiles, and settings close at hand.',
  features: [
    'Touch-optimized checkout with fast cart edits and discounts',
    'Multiple payment methods with automatic change calculation',
    'Real-time inventory tracking with low-stock alerts',
    'Customer profiles with purchase history and loyalty metrics',
    'Sales and profit reporting with export-ready summaries',
    'Role-based access for admins, managers, and cashiers',
    'Light and dark theming with business customization',
  ],
  technicalDecisions: [
    {
      title: 'Tablet-first layout',
      description:
        'Designed core flows for touch inputs and larger tap targets to keep checkout fast on tablets.',
    },
    {
      title: 'React Context state management',
      description:
        'Used Context for shared cart, inventory, and settings state to keep the UI responsive without extra libraries.',
    },
    {
      title: 'Component system',
      description:
        'Adopted shadcn/ui with Tailwind CSS for consistent, reusable UI components across POS and dashboard screens.',
    },
    {
      title: 'Build tooling',
      description:
        'Vite provides quick iteration cycles and fast cold starts for a smoother dev workflow.',
    },
  ],
};
