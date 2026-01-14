import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            Ac {currentYear} ƒ?" Built with React
          </p>
          
          <div className="flex items-center gap-4">
            {personalInfo.socialLinks.map((link) => {
              const Icon = socialIcons[link.id as keyof typeof socialIcons];
              const isExternal = link.href.startsWith('http');

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
