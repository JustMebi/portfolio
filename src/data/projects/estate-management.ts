import { Project } from './types';

export const estateManagementProject: Project = {
  id: 'estate-management',
  name: 'Estate Management System',
  platform: 'Web & Mobile',
  shortDescription: 'Multi-role Property Management Platform',
  problemStatement:
    'Streamlining estate operations for managers while supporting tenant and security workflows.',
  status: 'Active Development',
  hasDemo: true,
  hasGithub: false,
  techStack: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'React Query',
    'React Native (JavaScript)',
    'Node.js',
    'PostgreSQL',
  ],
  role: 'Primary Frontend Developer',
  overview:
    'A multi-system estate management platform with a manager-facing web application and companion mobile apps for tenants and security personnel. The manager web app is the primary product surface, and it is the only part available for demo.',
  features: [
    'Role-based access control (Manager, Tenant, Security)',
    'Tenant registration and unit assignment',
    'Maintenance request ticketing system',
    'Billing and payment tracking',
    'Visitor management and access logs',
    'Announcement and communication hub',
    'Operational dashboard with payment snapshots',
  ],
  technicalDecisions: [
    {
      title: 'Role-Based Architecture',
      description: 'Implemented granular permission system at both route and component level. Different dashboard views and capabilities based on user role.',
    },
    {
      title: 'State Management',
      description: 'React Query for server state with optimistic updates for ticket status changes. Context API for UI state like active filters and view modes.',
    },
    {
      title: 'Data Visualization',
      description: 'Recharts for financial dashboards and occupancy metrics. Designed for quick insights on estate health and pending tasks.',
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error boundaries with fallback UI. Form validation with Zod schemas matching backend contracts.',
    },
  ],
  demoContent: {
    videoUrl: '',
    videoDescription:
      'Demonstration of the manager web app showcasing tenant management, billing, and maintenance workflows.',
    screenshots: [
      { caption: 'Dashboard Overview', description: 'At-a-glance view of estate health, occupancy rates, and pending tasks.' },
      { caption: 'Tenant Management', description: 'Register tenants, assign units, and manage lease agreements.' },
      { caption: 'Maintenance Tickets', description: 'Track and resolve maintenance requests with status updates.' },
      { caption: 'Billing & Payments', description: 'Generate invoices and track payment history per tenant.' },
    ],
    highlights: [
      { title: 'Role-Based Access', description: 'Different views and capabilities for managers, tenants, and security.' },
      { title: 'Financial Insights', description: 'Real-time dashboards for revenue tracking and expense management.' },
      { title: 'Communication Hub', description: 'Announcements for tenants and resident updates.' },
    ],
  },
};
