import { Project } from './types';

export const brodamekoProject: Project = {
  id: 'brodameko',
  name: 'BrodaMeko',
  platform: 'Mobile',
  shortDescription: 'On-Demand Car Mechanic Marketplace',
  problemStatement:
    'Connecting car owners with verified mechanics for fast, transparent vehicle repairs and diagnostics.',
  status: 'Production',
  hasDemo: true,
  hasGithub: false,
  techStack: [
    'React Native (JavaScript)',
    'React Navigation',
    'Context API',
    'Axios',
    'WebSocket',
    'Paystack',
    'Google Sign-In',
  ],
  role: 'Sole Frontend Developer',
  overview:
    'BrodaMeko is a production-grade mobile marketplace on the Google Play Store and Apple App Store that connects car owners with qualified mechanics. The platform features role-based navigation for three user types — car owners, mechanics, and admins — with real-time chat powered by WebSocket, a job matching system, Paystack wallet integration, and a comprehensive mechanic onboarding flow including KYC document uploads and bank account verification.',
  features: [
    'Role-based app experience for Car Owners, Mechanics, and Admins',
    'Job creation with issue type selection, car details, and image uploads',
    'Real-time chat between car owners and mechanics via WebSocket',
    'Mechanic onboarding with KYC document and certificate uploads',
    'Wallet top-up and payment processing via Paystack',
    'In-app quotation flow — mechanics send quotes, owners accept/decline',
    'Job status tracking (pending, active, completed, cancelled)',
    'Mechanic service pricing management',
    'Bank account resolution and payout management for mechanics',
    'Google Sign-In authentication',
    'Push notifications for job alerts and chat messages',
  ],
  technicalDecisions: [
    {
      title: 'Role-Based Navigation Architecture',
      description:
        'Implemented separate navigation stacks for Car Owner, Mechanic, and Admin roles resolved at runtime from auth state. This keeps each role\'s UX isolated while sharing a single codebase and auth layer.',
    },
    {
      title: 'WebSocket for Real-Time Chat',
      description:
        'Built a dedicated WebSocket service connecting to the backend WSS endpoint for low-latency messaging. Includes reconnection logic and fallback handling for role-switching edge cases.',
    },
    {
      title: 'Context API for State Management',
      description:
        'Used six focused context providers (Auth, Chat, Jobs, MechanicProfile, MechanicServices, Theme) rather than a global store, keeping state co-located with the features that need it and simplifying provider composition.',
    },
    {
      title: 'Multi-Step Mechanic Onboarding',
      description:
        'Designed a gated onboarding checklist persisted to AsyncStorage so mechanics can resume incomplete profiles across sessions. Each step (photo, ID, certificate, bank, pricing) is independently resumable.',
    },
    {
      title: 'Paystack Integration',
      description:
        'Integrated Paystack for wallet top-ups with deep-link callback handling for payment verification. Wallet state is synced via the job and transaction API to reflect real-time balances for both roles.',
    },
  ],
  demoContent: {
    videoDescription:
      'Walkthrough of the car owner job creation flow, mechanic matching, real-time chat, and wallet top-up.',
    screenshots: [
      {
        caption: 'Car Owner Dashboard',
        description:
          'At-a-glance view of active jobs, quick actions, and location-based mechanic availability.',
      },
      {
        caption: 'Report an Issue',
        description:
          'Car owners describe their issue, select car details, and attach photos to create a job request.',
      },
      {
        caption: 'Find a Mechanic',
        description:
          'Browse matched mechanics, view profiles and ratings, then hire or initiate a chat.',
      },
      {
        caption: 'Mechanic Onboarding',
        description:
          'Step-by-step verification flow covering profile photo, ID, certificate, bank details, and pricing.',
      },
      {
        caption: 'Wallet & Payments',
        description:
          'Top up wallet via Paystack, view transaction history, and manage payouts (mechanics).',
      },
    ],
    highlights: [
      {
        title: 'Live on App Stores',
        description:
          'Shipped to production on both the Google Play Store and Apple App Store.',
      },
      {
        title: 'Real-Time Chat',
        description:
          'WebSocket-powered messaging with quotation flow keeps negotiations fast and transparent.',
      },
      {
        title: 'Verified Mechanics',
        description:
          'KYC onboarding with document uploads ensures only credentialed mechanics join the platform.',
      },
    ],
  },
};
