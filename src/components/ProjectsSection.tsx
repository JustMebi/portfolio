import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{'// Selected Work'}</span>
      </div>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Production applications and client-shipped work
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
