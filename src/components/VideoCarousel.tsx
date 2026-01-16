import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export interface VideoCarouselItem {
  url: string;
  title?: string;
  description: string;
}

interface VideoCarouselProps {
  items: VideoCarouselItem[];
  mediaFrameClass: string;
  projectName: string;
}

export function VideoCarousel({
  items,
  mediaFrameClass,
  projectName,
}: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];
  const total = items.length;
  const isDirectVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(activeItem.url);

  const goPrev = () => {
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % total);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [activeIndex]);

  useEffect(() => {
    if (isDirectVideo && videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, [activeIndex, isDirectVideo]);

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className={`${mediaFrameClass} relative`}>
          {isLoading && (
            <div className="absolute inset-0">
              <Skeleton className="h-full w-full" />
            </div>
          )}
          <div
            className={`h-full w-full transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          >
            {isDirectVideo ? (
              <video
                key={activeItem.url}
                ref={videoRef}
                src={activeItem.url}
                className="h-full w-full"
                controls
                onLoadedData={() => setIsLoading(false)}
              />
            ) : (
              <iframe
                key={activeItem.url}
                src={activeItem.url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${projectName} Demo Video ${activeIndex + 1}`}
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm hover:bg-accent transition"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm hover:bg-accent transition"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="mt-3">
        <h3 className="font-medium">
          {activeItem.title ?? `Clip ${activeIndex + 1}`}
        </h3>
        <p className="text-sm text-muted-foreground">
          {activeItem.description}
        </p>
      </div>
    </div>
  );
}
