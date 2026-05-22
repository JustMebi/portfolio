import { useState } from 'react';
import { Lock, CheckCircle, Users, Code2 } from 'lucide-react';

const ndaContributions = [
  'Developed and shipped production features for web applications',
  'Fixed complex bugs and implemented performance improvements',
  'Collaborated with cross-functional teams on feature delivery',
  'Maintained and improved existing codebases',
  'Participated in code reviews and technical discussions',
];

const ndaTechnologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'REST APIs',
  'Wordpress',
  'PHP',
  'Git',
  'Agile/Scrum',
];

const leadContributions = [
  'Led development of multiple production-grade multi-role mobile applications from build to client handover',
  'Organized and facilitated daily standups and written progress reports across the team',
  'Oversaw architecture decisions, feature scoping, and delivery timelines for concurrent projects',
  'Coordinated developer workstreams to ensure all apps were production-ready before handoff',
  'BrodaMeko and Leti originated from work done during this engagement',
];

const leadTechnologies = [
  'React Native',
  'JavaScript',
  'REST APIs',
  'WebSocket',
  'Agile/Scrum',
  'Team Leadership',
  'Project Management',
];

const juniorContributions = [
  'Worked alongside senior developers, contributing to active projects and picking up team workflows',
  'Performed quality assurance across web applications — identifying, documenting, and verifying bug fixes',
  'Tested UI components for correctness, responsiveness, and cross-browser consistency',
  'Built and customised WordPress themes, plugins, and page templates for client sites',
  'Gained hands-on exposure to the full delivery cycle from local development to live deployment',
];

const juniorTechnologies = [
  'WordPress',
  'PHP',
  'HTML/CSS',
  'JavaScript',
  'Git',
  'QA & Testing',
];

type Tab = 'lead' | 'junior' | 'nda';

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('lead');

  return (
    <section id="experience" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{'// Work History'}</span>
      </div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">Roles and contributions</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 border-b border-border overflow-x-auto scrollbar-none">
        {([
          { id: 'lead',   label: 'Technical Lead' },
          { id: 'junior', label: 'Junior Developer' },
          { id: 'nda',    label: 'NDA-Protected Work' },
        ] as { id: Tab; label: string }[]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px whitespace-nowrap shrink-0 ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Technical Lead */}
      {activeTab === 'lead' && (
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary rounded-md text-muted-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Technical Team Lead</h3>
              <p className="text-sm text-muted-foreground">Short-term engagement</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Led a team of developers building multiple concurrent multi-role mobile applications.
            Managed the full delivery cycle — from daily standups and progress reporting through
            to production setup and client handover. Apps shipped under this engagement
            included BrodaMeko and Leti.
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-primary mb-3">Key Contributions</h4>
            <ul className="space-y-2">
              {leadContributions.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-secondary-foreground">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono text-primary mb-3">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {leadTechnologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Junior Developer */}
      {activeTab === 'junior' && (
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary rounded-md text-muted-foreground">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Junior Developer</h3>
              <p className="text-sm text-muted-foreground">Early-career role</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Started out assisting on team projects, doing QA, testing components, and
            building WordPress themes, plugins, and templates for client sites. This period
            covered the full range from learning team workflows to independently delivering
            client-facing work.
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-primary mb-3">Key Contributions</h4>
            <ul className="space-y-2">
              {juniorContributions.map((item, index) => (
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
              {juniorTechnologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NDA-Protected */}
      {activeTab === 'nda' && (
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary rounded-md text-muted-foreground">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">NDA-Protected Work</h3>
              <p className="text-sm text-muted-foreground">Details cannot be disclosed</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Contributed to multiple production web applications for clients across various industries.
            Work involved feature development, bug fixing, performance optimization, and team collaboration.
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-mono text-primary mb-3">Key Contributions</h4>
            <ul className="space-y-2">
              {ndaContributions.map((item, index) => (
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
              {ndaTechnologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
