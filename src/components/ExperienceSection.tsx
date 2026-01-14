import { Lock, CheckCircle } from 'lucide-react';

const contributions = [
  'Developed and shipped production features for web applications',
  'Fixed complex bugs and implemented performance improvements',
  'Collaborated with cross-functional teams on feature delivery',
  'Maintained and improved existing codebases',
  'Participated in code reviews and technical discussions',
];

const technologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'REST APIs',
  'Wordpress',
  'PHP',
  'Git',
  'Agile/Scrum',
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{'// Work History'}</span>
      </div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Contributions under NDA
      </p>
      
      <div className="bg-card border border-border rounded-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-secondary rounded-md text-muted-foreground">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">NDA-Protected Work</h3>
            <p className="text-sm text-muted-foreground">
              Details cannot be disclosed
            </p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Contributed to multiple production web applications for clients across various industries. 
          Work involved feature development, bug fixing, performance optimization, and team collaboration.
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-mono text-primary mb-3">Key Contributions</h4>
          <ul className="space-y-2">
            {contributions.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-secondary-foreground">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-mono text-primary mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
