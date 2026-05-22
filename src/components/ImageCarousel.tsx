import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  frameClass: string;
  imageClass: string;
}

export function ImageCarousel({ images, alt, frameClass, imageClass }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <div className={`${frameClass} relative bg-secondary/50 flex items-center justify-center`}>
      <img
        key={images[activeIndex]}
        src={images[activeIndex]}
        alt={`${alt} ${activeIndex + 1}`}
        className={`w-full h-full ${imageClass}`}
      />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-card/80 border border-border flex items-center justify-center shadow hover:bg-card transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-card/80 border border-border flex items-center justify-center shadow hover:bg-card transition"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
