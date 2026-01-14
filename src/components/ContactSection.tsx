import { Github, Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/personalInfo';

const contactIcons = {
  email: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};

export const ContactSection = () => {
  const { contact } = personalInfo;

  return (
    <section id="contact" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{contact.eyebrow}</span>
      </div>
      <h2 className="section-title">{contact.title}</h2>
      <p className="section-subtitle">
        {contact.subtitle}
      </p>
      
      <div className="max-w-xl">
        <p className="text-secondary-foreground mb-8">
          {contact.intro}
        </p>
        
        <div className="space-y-3">
          {contact.links.map((link) => {
            const Icon = contactIcons[link.id as keyof typeof contactIcons];
            const isExternal = link.href.startsWith('http');

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary rounded-md text-muted-foreground group-hover:text-primary transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-mono text-sm">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>
        
        <div className="mt-10 pt-10 border-t border-border">
          <Button variant="terminal" className="w-full" asChild>
            <a href={contact.cta.href}>
              <Mail className="h-4 w-4" />
              {contact.cta.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
