export interface DemoScreenshot {
  imageUrl?: string;
  caption: string;
  description?: string;
}

export interface DemoHighlight {
  title: string;
  description: string;
}

export interface DemoContent {
  videoUrl?: string;
  videoDescription: string;
  screenshots: DemoScreenshot[];
  highlights: DemoHighlight[];
}

export interface Project {
  id: string;
  name: string;
  platform: 'Mobile' | 'Web' | 'Web & Mobile';
  shortDescription: string;
  problemStatement: string;
  status: 'Production' | 'Active Development' | 'Personal Project';
  hasDemo: boolean;
  demoUrl?: string;
  hasGithub: boolean;
  githubUrl?: string;
  techStack: string[];
  role: string;
  overview: string;
  features: string[];
  technicalDecisions: {
    title: string;
    description: string;
  }[];
  demoContent?: DemoContent;
}
