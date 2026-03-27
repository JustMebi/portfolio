import { Project } from './types';

export const zentraProject: Project = {
  id: 'zentra',
  name: 'Zentra',
  platform: 'Web',
  shortDescription: 'Engineering & Technical Services Marketplace',
  problemStatement:
    'Providing a dedicated freelance platform for engineers, CAD specialists, and technical professionals to connect with clients for project-based work.',
  status: 'Production',
  hasDemo: true,
  hasGithub: false,
  techStack: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'shadcn/ui',
    'Redux Toolkit',
    'React Query',
    'NestJS',
    'Supabase (PostgreSQL)',
    'Paystack',
    'Resend',
  ],
  role: 'Sole Full-Stack Developer',
  overview:
    'Zentra is a full-stack freelance marketplace built specifically for engineering and technical talent. The platform handles the complete project lifecycle — from job posting and proposals through contracts, milestone-based payments with escrow, messaging, and dispute resolution. It features separate experiences for clients and expert freelancers, a comprehensive admin dashboard, and a public waitlist deployed as a standalone app. I designed and built the entire system: React frontend, NestJS REST API backend, Supabase database schema (30+ migrations), and the decoupled waitlist mini-app.',
  features: [
    'Dual-role marketplace for Clients and Expert Freelancers',
    'Job posting, proposal submission, and offer management',
    'Contract management with milestone-based escrow payments via Paystack',
    'Contest/competition feature for design and engineering challenges',
    'Service marketplace for pre-defined, fixed-price offerings',
    'Real-time messaging between clients and freelancers',
    'Identity verification via DIDit API',
    'Content moderation powered by OpenAI API',
    'Comprehensive admin dashboard — user management, disputes, payments, broadcasts',
    'Waitlist system as a separate public-facing Netlify deployment',
    'Dispute resolution workflow between clients and freelancers',
    'Portfolio management for expert freelancers',
  ],
  technicalDecisions: [
    {
      title: 'NestJS Backend for Business Logic',
      description:
        'Chose NestJS for its module-based architecture, which maps cleanly to domain boundaries (jobs, proposals, contracts, wallet, admin). Kept complex business rules — escrow logic, dispute flows, milestone validation — in the API layer rather than leaking them to the frontend or database triggers.',
    },
    {
      title: 'Supabase as Data & Auth Layer',
      description:
        'Used Supabase for PostgreSQL, Auth (with Google OAuth), file storage, and edge functions. Supabase Auth tokens are verified in the NestJS API, giving the best of both: managed auth and a proper API layer for business logic.',
    },
    {
      title: 'React Query + Redux Toolkit',
      description:
        'React Query handles all server state (caching, background refetching, optimistic updates), while Redux Toolkit manages complex cross-cutting UI state. Keeping these concerns separate avoids the common pitfall of putting server data in Redux.',
    },
    {
      title: 'Decoupled Waitlist App',
      description:
        'Deployed the public waitlist as a standalone Vite/React app on Netlify, separate from the main platform. This lets the marketing page stay live and fast independently of the main app\'s deploy cycle, while writing directly to the same Supabase waitlist table.',
    },
    {
      title: 'Milestone-Based Escrow Payments',
      description:
        'Designed contract payments around milestones rather than lump sums. Funds are held in escrow and released per milestone completion, reducing dispute risk and giving both parties clear checkpoints throughout the project.',
    },
  ],
  demoContent: {
    videoDescription:
      'Overview of the Zentra platform — job posting, proposal flow, contract management, and admin dashboard.',
    screenshots: [
      {
        caption: 'Landing Page & Waitlist',
        description:
          'Public-facing landing page with a standalone waitlist signup collecting role, skills, and referral data.',
      },
      {
        caption: 'Job Board',
        description:
          'Experts browse open engineering jobs with filters by skill, budget, and project type.',
      },
      {
        caption: 'Proposal & Contract Flow',
        description:
          'Clients review proposals, negotiate via offers, and activate contracts with milestone definitions.',
      },
      {
        caption: 'Admin Dashboard',
        description:
          'Full platform oversight — user verification, dispute resolution, payment tracking, and broadcast messaging.',
      },
      {
        caption: 'Messaging',
        description:
          'Direct messaging between clients and freelancers with file attachment support.',
      },
    ],
    highlights: [
      {
        title: 'Built Full-Stack Solo',
        description:
          'Designed and implemented the entire system — React frontend, NestJS API, Supabase schema, and waitlist app.',
      },
      {
        title: 'Waitlist Live',
        description:
          'Public waitlist deployed and collecting signups at zentragig.com ahead of full platform launch.',
      },
      {
        title: 'Escrow Payments',
        description:
          'Milestone-based escrow via Paystack protects both clients and experts throughout the project lifecycle.',
      },
    ],
  },
};
