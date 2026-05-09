"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ResearchProject } from "@/lib/types";

interface ResearchCarouselProps {
  projects: ResearchProject[];
}

export default function ResearchCarousel({ projects }: ResearchCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (projects.length === 0) return null;

  return (
    <div className="relative" aria-label="Research carousel">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-full relative"
              style={{ minWidth: "100%" }}
            >
              <div className="relative h-72 md:h-96 bg-gray-800">
                <Image
                  src={project.carouselImage}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={`/research#${project.id}`}
                    className="inline-block bg-[#011F5B] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#022a7a] transition-colors w-fit"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <HiChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <HiChevronRight size={24} />
      </button>
    </div>
  );
}
