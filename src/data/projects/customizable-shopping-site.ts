import { Project } from './types';

export const customizableShoppingSiteProject: Project = {
  id: 'customizable-shopping-site',
  name: 'Storefront UI',
  platform: 'Web',
  shortDescription: 'Brand-neutral, customizable shopping UI template',
  problemStatement:
    'Teams need a flexible storefront UI that can be themed and reshaped without rebuilding core shopping flows.',
  status: 'Personal Project',
  hasDemo: true,
  hasGithub: true,
  githubUrl: 'https://github.com/JustMebi/CustomizableShoppingSite.git',
  techStack: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
  role: 'Sole Designer & Developer',
  overview:
    'Storefront UI is a customizable commerce template focused on visual flexibility and layout experimentation. It ships with neutral branding, demo data, and a configurable theme system so teams can test looks quickly before backend integration.',
  features: [
    'Multi-layout product browsing (grid, list, cards)',
    'Category filtering and search with sort controls',
    'Theme mode with adjustable accent colors',
    'Demo cart flow with local state persistence',
    'Responsive, touch-friendly layout',
  ],
  technicalDecisions: [
    {
      title: 'CSS variable theming',
      description:
        'Theme tokens and accent colors are driven by CSS variables to enable quick brand swaps without refactoring components.',
    },
    {
      title: 'Composable layout cards',
      description:
        'Product cards are modular components so layouts can switch between grid, list, and stacked styles with minimal logic.',
    },
    {
      title: 'Local-only data model',
      description:
        'Mock data and client-only state keep the template lightweight and easy to adapt for real APIs later.',
    },
  ],
  demoContent: {
    videoUrl: 'https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768568413/CustomShop_1_1_xz8rnh.mp4',
    videoDescription:
      'Walkthrough of palette and theme switching, layout changes between card styles, and the add-to-cart flow.',
    screenshots: [],
    highlights: [
      {
        title: 'Theme Flexibility',
        description: 'Swap palettes and light/dark modes to preview brand directions fast.',
      },
      {
        title: 'Layout Variants',
        description: 'Toggle product card presentations without changing the underlying data.',
      },
      {
        title: 'Cart Flow',
        description: 'Add items to cart and see totals update with local state.',
      },
    ],
  },
};
