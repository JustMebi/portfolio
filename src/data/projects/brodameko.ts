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
    'BrodaMeko is a production-grade mobile marketplace built and shipped to the client for deployment. It connects car owners with qualified mechanics through role-based navigation for three user types — car owners, mechanics, and admins — with real-time chat powered by WebSocket, a job matching system, Paystack wallet integration, and a comprehensive mechanic onboarding flow including KYC document uploads and bank account verification.',
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
        imageUrl: 'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430653/Home_ebpjxk.png',
      },
      {
        caption: 'Report an Issue',
        description:
          'Car owners describe their issue, select car details, and attach photos to create a job request.',
        imageUrl: [
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430647/Support_center_lpioog.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430646/Chat_hygrv1.png',
        ],
      },
      {
        caption: 'Find a Mechanic',
        description:
          'Browse matched mechanics, view profiles and ratings, then hire or initiate a chat.',
        imageUrl: [
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430647/Mechanic_matching_lezcyy.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430646/Waiting_screen_sdqoqp.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430655/Live_tracking_rhwrn2.png',
        ],
      },
      {
        caption: 'Mechanic Onboarding',
        description:
          'Step-by-step verification flow covering profile photo, ID, certificate, bank details, and pricing.',
        imageUrl: [
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430652/KYC_y05krx.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430651/KYC_1_pmt6d5.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430650/KYC_2_hmxan6.png',
          'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430649/KYC_3_fzu4xo.png',
        ],
      },
      {
        caption: 'Wallet & Payments',
        description:
          'Top up wallet via Paystack, view transaction history, and manage payouts (mechanics).',
        imageUrl: 'https://res.cloudinary.com/dzgtaqwwk/image/upload/v1779430649/Wallet_screen_qls12a.png',
      },
    ],
    highlights: [
      {
        title: 'Three-Role Platform',
        description:
          'A single codebase serves car owners, mechanics, and admins with fully isolated navigation stacks and role-specific UX.',
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
