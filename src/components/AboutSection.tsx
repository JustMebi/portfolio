import { personalInfo } from '../data/personalInfo';

export const AboutSection = () => {
  const { about } = personalInfo;

  return (
    <section id="about" className="section-container">
      <div className="mb-2">
        <span className="text-primary font-mono text-sm">{about.eyebrow}</span>
      </div>
      <h2 className="section-title">{about.title}</h2>
      <p className="section-subtitle">
        {about.subtitle}
      </p>
      
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
