import { Project } from './types';

export const letiProject: Project = {
  id: 'leti',
  name: 'Leti',
  platform: 'Mobile',
  shortDescription: 'Artisan & Stay Booking Platform',
  problemStatement:
    'Simplifying how Nigerians discover and book local artisans and short-stay accommodations through a single mobile platform.',
  status: 'Active Development',
  hasDemo: true,
  hasGithub: false,
  techStack: [
    'React Native (JavaScript)',
    'React Navigation',
    'Context API',
    'React Hook Form',
    'Axios',
    'WebSocket',
    'Go (Backend)',
    'PostgreSQL',
    'Redis',
    'Cloudinary',
  ],
  role: 'Mobile Developer',
  overview:
    'Leti is a multi-role Nigerian booking app currently in active development. The platform has two core verticals: an artisan marketplace where clients discover and book local service providers (mechanics, electricians, plumbers, etc.), and a stay feature for short-term accommodation bookings. The app supports three user roles — Client, Artisan/Provider, and Owner — each with a dedicated navigation stack. The Go-powered backend handles real-time chat via WebSocket, wallet management, Cloudinary file storage, and Firebase push notifications.',
  features: [
    'Dual-vertical platform — artisan service bookings and short-stay accommodation',
    'Role-based app experience for Clients, Artisans/Providers, and Owners',
    'Artisan discovery with category browsing, search, and ratings',
    'Multi-step service booking flow with arrival confirmation and job tracking',
    'Artisan portfolio management with multi-image uploads via Cloudinary',
    'Availability and schedule management for service providers',
    'Real-time WebSocket chat between clients and providers',
    'Wallet with top-up, withdrawal, and transaction history',
    'In-app reviews and ratings with provider replies',
    'OTP-based authentication with password reset flow',
    'Firebase push notifications for booking and chat updates',
    'Role switching — users can operate as both client and artisan',
  ],
  technicalDecisions: [
    {
      title: 'Go Backend for Performance',
      description:
        'The REST API and WebSocket server are written in Go for high concurrency and low memory footprint. PostgreSQL handles persistence, Redis is used for caching and session management, and gorilla/websocket powers the real-time chat hub.',
    },
    {
      title: 'Nine Context Providers for Feature Isolation',
      description:
        'State is managed through nine focused React Context providers (Auth, Booking, Wallet, Chat, Notifications, etc.) rather than a monolithic store. Each provider owns its own data-fetching and mutation logic, keeping concerns cleanly separated.',
    },
    {
      title: 'Axios Interceptors for Token Management',
      description:
        'Implemented a centralized Axios instance with request/response interceptors that automatically attach JWT tokens and trigger silent refresh on 401 responses — eliminating manual token handling across 8+ service modules.',
    },
    {
      title: 'Multi-Step Service Management Forms',
      description:
        'Artisan onboarding and service creation use react-hook-form across multi-step flows with local state persistence between steps. This avoids re-validation on navigation and keeps form state intact if the user navigates away.',
    },
    {
      title: 'Cloudinary for Media Uploads',
      description:
        'Portfolio images, profile photos, and service media are uploaded directly to Cloudinary from the mobile app. The Go backend stores Cloudinary URLs rather than raw files, keeping storage costs low and CDN delivery fast.',
    },
  ],
  demoContent: {
    videoDescription:
      'Walkthrough of the artisan booking flow — discovery, booking, real-time chat, and job completion.',
    screenshots: [
      {
        caption: 'Client Home',
        description:
          'Explore featured artisans and stays with category-based discovery on the home dashboard.',
      },
      {
        caption: 'Artisan Discovery',
        description:
          'Browse providers by category with ratings, reviews, and real-time availability.',
      },
      {
        caption: 'Service Booking',
        description:
          'Select a service, choose a slot, and confirm booking with in-app payment.',
      },
      {
        caption: 'Artisan Dashboard',
        description:
          'Providers manage incoming job requests, track active jobs, and update availability.',
      },
      {
        caption: 'Wallet & Transactions',
        description:
          'Clients and artisans manage wallet balances, view transaction history, and request withdrawals.',
      },
    ],
    highlights: [
      {
        title: 'Dual-Vertical Platform',
        description:
          'Combines artisan bookings and short-stay accommodations in a single, unified mobile experience.',
      },
      {
        title: 'Go-Powered Backend',
        description:
          'High-performance REST API with WebSocket chat, Redis caching, and Firebase push notifications.',
      },
      {
        title: 'Role Flexibility',
        description:
          'Users can switch between Client and Artisan roles without creating separate accounts.',
      },
    ],
  },
};
