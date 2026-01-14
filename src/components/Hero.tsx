import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/personalInfo';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export const Hero = () => {
  const { name, role, professionalSummary, hero, socialLinks } = personalInfo;

  return (
    <section className="min-h-[90vh] flex items-center section-container">
      <div className="max-w-3xl">
        <div className="mb-6 animate-fade-in">
          <span className="text-primary font-mono text-sm">
            {hero.greeting}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
          <span className="text-foreground">{name.first}</span>
          <span className="gradient-text block mt-2">{name.last}</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {role}
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {professionalSummary.lead}
          <span className="text-foreground">{professionalSummary.highlights[0]}</span> and{' '}
          <span className="text-foreground">{professionalSummary.highlights[1]}</span>
          {professionalSummary.tail}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {hero.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="terminal" asChild>
            <a href={hero.cta.href}>
              {hero.cta.label}
            </a>
          </Button>
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.id as keyof typeof socialIcons];
            const isExternal = link.href.startsWith('http');

            return (
              <Button key={link.id} variant="ghost" size="icon" asChild>
                <a
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
