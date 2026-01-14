import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Monitor, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

const statusClasses = {
  'Production': 'status-production',
  'Active Development': 'status-active',
  'Personal Project': 'status-personal',
};

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'Mobile') return <Smartphone className="h-5 w-5" />;
  if (platform === 'Web') return <Monitor className="h-5 w-5" />;
  return (
    <div className="flex gap-1">
      <Monitor className="h-5 w-5" />
      <Smartphone className="h-5 w-5" />
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Project Not Found</h1>
          <Button variant="terminal" asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Projects</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary rounded-md text-muted-foreground">
                <PlatformIcon platform={project.platform} />
              </div>
              <span className={`status-badge ${statusClasses[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-glow" />
                {project.status}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {project.hasDemo && (
                <Button variant="terminal" asChild>
                  <Link to={`/project/${project.id}/demo`}>
                    <ExternalLink className="h-4 w-4" />
                    View Demo
                  </Link>
                </Button>
              )}
              {project.hasGithub && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">01.</span>
              Overview
            </h2>
            <div className="h-px bg-border mb-6" />
            <p className="text-secondary-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* My Role */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">02.</span>
              My Role
            </h2>
            <div className="h-px bg-border mb-6" />
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground font-medium mb-2">{project.role}</p>
              <p className="text-muted-foreground">
                Responsible for architecture decisions, state management, API integration, 
                and complete feature development lifecycle.
              </p>
            </div>
          </section>

          {/* Core Features */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">03.</span>
              Core Features
            </h2>
            <div className="h-px bg-border mb-6" />
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span className="text-secondary-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Decisions */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">04.</span>
              Technical Decisions
            </h2>
            <div className="h-px bg-border mb-6" />
            <div className="space-y-6">
              {project.technicalDecisions.map((decision, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-mono text-primary text-sm mb-2">{decision.title}</h3>
                  <p className="text-secondary-foreground">{decision.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Code Access */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">05.</span>
              Code Access
            </h2>
            <div className="h-px bg-border mb-6" />
            <div className="bg-card border border-border rounded-lg p-6">
              {project.hasGithub ? (
                <div className="flex items-center justify-between">
                  <p className="text-secondary-foreground">Source code available on GitHub</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  </Button>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Private repository due to client ownership. Code samples available upon request.
                </p>
              )}
            </div>
          </section>

          {/* Navigation */}
          <div className="pt-8 border-t border-border">
            <Button variant="terminal" asChild>
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
