import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { personalInfo } from '../data/personalInfo';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export const Hero = () => {
  const { name, profilePicUrl, role, professionalSummary, hero, socialLinks } =
    personalInfo;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="min-h-[90vh] flex items-center section-container">
      <div className="w-full">
        <div className="mb-4 animate-fade-in">
          <span className="text-primary font-mono text-sm">
            {hero.greeting}
          </span>
        </div>

        <div className="flex items-start gap-4 sm:gap-6">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
              <span className="text-foreground">{name.first}</span>
              <span className="gradient-text block mt-2">{name.last}</span>
            </h1>

            <h2
              className="text-xl md:text-2xl text-muted-foreground font-mono mb-2 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {role}
            </h2>
          </div>

          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
              {!imageLoaded && (
                <Skeleton className="absolute inset-0 rounded-full" />
              )}
              <img
                src={profilePicUrl}
                alt={name.full}
                className={`w-full h-full rounded-full object-cover border border-border shadow-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-slide-up mt-6"
          style={{ animationDelay: '0.2s' }}
        >
          {professionalSummary.lead}
          <span className="text-foreground">
            {professionalSummary.highlights[0]}
          </span>{' '}
          and{' '}
          <span className="text-foreground">
            {professionalSummary.highlights[1]}
          </span>
          {professionalSummary.tail}
        </p>

        <div
          className="flex flex-wrap gap-2 mb-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {hero.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-4 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button variant="terminal" asChild>
            <a href={hero.cta.href}>{hero.cta.label}</a>
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
