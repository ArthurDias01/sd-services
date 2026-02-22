"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { proxyImageUrlIfNeeded } from "@/lib/image-url";
import { cn } from "@/lib/utils";

type ProjectCarouselProps = {
  urls: string[];
  className?: string;
};

export function ProjectCarousel({ urls, className }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (urls.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {urls.map((url, i) => (
            <div
              key={url}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Image ${i + 1} of ${urls.length}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proxyImageUrlIfNeeded(url)}
                alt=""
                className="size-full object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
      {urls.length > 1 && (
        <>
          <button
            type="button"
            className="border-border bg-background/80 hover:bg-background absolute left-2 top-1/2 z-10 size-10 -translate-y-1/2 rounded-none border shadow-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="size-5 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            className="border-border bg-background/80 hover:bg-background absolute right-2 top-1/2 z-10 size-10 -translate-y-1/2 rounded-none border shadow-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <span className="sr-only">Next</span>
            <svg
              className="size-5 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-1.5 pt-2">
            {urls.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn(
                  "size-2 rounded-none transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  i === selectedIndex
                    ? "bg-primary opacity-100"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60",
                )}
                onClick={() => scrollTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
