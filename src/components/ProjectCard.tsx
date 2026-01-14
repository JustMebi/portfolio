import { ExternalLink, Github, FileText, Monitor, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const statusClasses = {
  'Production': 'status-production',
  'Active Development': 'status-active',
  'Personal Project': 'status-personal',
};

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'Mobile') return <Smartphone className="h-4 w-4" />;
  if (platform === 'Web') return <Monitor className="h-4 w-4" />;
  return (
    <div className="flex gap-1">
      <Monitor className="h-4 w-4" />
      <Smartphone className="h-4 w-4" />
    </div>
  );
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group relative bg-card border border-border rounded-lg p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary rounded-md text-muted-foreground">
            <PlatformIcon platform={project.platform} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.platform}</p>
          </div>
        </div>
        <span className={`status-badge ${statusClasses[project.status]}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-glow" />
          {project.status}
        </span>
      </div>
      
      <p className="text-secondary-foreground mb-4">
        {project.shortDescription}
      </p>
      
      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
        {project.problemStatement}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs font-mono text-muted-foreground">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button variant="terminal" size="sm" asChild>
          <Link to={`/project/${project.id}`}>
            <FileText className="h-4 w-4" />
            Case Study
          </Link>
        </Button>
        {project.hasDemo && (
          <Button variant="outline" size="sm" asChild>
            <Link to={`/project/${project.id}/demo`}>
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
        {project.hasGithub && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};
