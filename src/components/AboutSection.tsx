import { personalInfo } from '../data/personalInfo';

export const AboutSection = () => {
  const { about, careerStart } = personalInfo;
  const yearsOfExperience = new Date().getFullYear() - careerStart;

  const stats = [
    { value: `${yearsOfExperience}+`, label: 'Years Experience' },
    { value: '5+',                    label: 'Clients Shipped To' },
    { value: '2',                     label: 'Apps in Production' },
  ];

  return (
    <section id="about" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{about.eyebrow}</span>
      </div>
      <h2 className="section-title">{about.title}</h2>
      <p className="section-subtitle">
        {about.subtitle}
      </p>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-4 text-center">
            <p className="text-3xl font-bold font-mono text-primary leading-none mb-1">{value}</p>
            <p className="text-xs text-muted-foreground leading-tight">{label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl">
        <div className="space-y-4 text-secondary-foreground">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-card border border-border rounded-lg">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">const</span> focus = [
          </p>
          {about.focusItems.map((item, index) => (
            <p key={item} className="font-mono text-sm text-muted-foreground pl-4">
              <span className="text-foreground">'{item}'</span>
              {index < about.focusItems.length - 1 ? ',' : ''}
            </p>
          ))}
          <p className="font-mono text-sm text-muted-foreground">];</p>
        </div>
      </div>
    </section>
  );
};
