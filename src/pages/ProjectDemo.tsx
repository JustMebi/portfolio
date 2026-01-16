import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Image as ImageIcon,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoCarousel } from "@/components/VideoCarousel";

export default function ProjectDemo() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild variant="terminal">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const demoContent = project.demoContent || {
    videoUrl: "",
    videoDescription:
      "Full walkthrough of the application features and user flows.",
    screenshots: [],
    highlights: [],
  };
  const mediaType =
    demoContent.mediaType ?? (project.platform === "Mobile" ? "mobile" : "web");
  const isMobileMedia = mediaType === "mobile";
  const mediaFrameClass = isMobileMedia
    ? "aspect-[9/16] max-w-sm mx-auto"
    : "aspect-video";
  const mediaImageClass = isMobileMedia ? "object-contain" : "object-cover";
  const videoClips =
    demoContent.videoClips ??
    (demoContent.videoUrl
      ? [
          {
            url: demoContent.videoUrl,
            title: "Video Walkthrough",
            description: demoContent.videoDescription,
          },
        ]
      : []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Back Navigation */}
        <div className="section-container mb-8">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Study
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-container mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              DEMO
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {project.platform}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.name}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            {project.shortDescription} — Visual breakdown of features and
            functionality.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="terminal" asChild>
              <Link to={`/project/${project.id}`}>View Case Study</Link>
            </Button>
            {project.hasGithub && project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </section>

        {/* Video Demo Section */}
        {videoClips.length > 0 ? (
          <section className="section-container mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Play className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Video Walkthrough</h2>
            </div>

            <VideoCarousel
              items={videoClips}
              mediaFrameClass={mediaFrameClass}
              projectName={project.name}
            />
          </section>
        ) : null}

        {/* Key Highlights */}
        {demoContent.highlights && demoContent.highlights.length > 0 && (
          <section className="section-container mb-8">
            <h2 className="text-2xl font-semibold mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {demoContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-medium">{highlight.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {demoContent.screenshots && demoContent.screenshots.length > 0 ? (
          <section className="section-container mb-8">
            <div className="flex items-center gap-2 mb-6">
              <ImageIcon className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Screenshots</h2>
            </div>

            <div className="grid gap-8">
              {demoContent.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  <div
                    className={`${mediaFrameClass} bg-secondary/50 flex items-center justify-center`}
                  >
                    {screenshot.imageUrl ? (
                      <img
                        src={screenshot.imageUrl}
                        alt={screenshot.caption}
                        className={`w-full h-full ${mediaImageClass}`}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="p-4 bg-muted rounded-full inline-block mb-4">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          Screenshot placeholder
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-medium">{screenshot.caption}</h3>
                    </div>
                    {screenshot.description && (
                      <p className="text-sm text-muted-foreground">
                        {screenshot.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Feature Breakdown */}
        <section className="section-container mb-8">
          <h2 className="text-2xl font-semibold mb-6">Features Demonstrated</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-secondary-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Want to learn more?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Dive deeper into the technical decisions and architecture behind
              this project.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="terminal" asChild>
                <Link to={`/project/${project.id}`}>Read Case Study</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

