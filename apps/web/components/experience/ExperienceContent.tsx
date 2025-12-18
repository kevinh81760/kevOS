"use client";

import { ExperienceSection } from './ExperienceSection';
import type { Experience } from '@/app/experience/data';

/**
 * ExperienceContent Component
 * Scrollable container displaying experience sections
 * Uses refs for scroll-to functionality
 */
interface ExperienceContentProps {
  experiences: Experience[];
  containerRef: React.RefObject<HTMLDivElement>;
  onSectionRef: (id: string, el: HTMLDivElement | null) => void;
}

export function ExperienceContent({
  experiences,
  containerRef,
  onSectionRef
}: ExperienceContentProps) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceSection
          key={experience.id}
          experience={experience}
          containerRef={containerRef}
          sectionRef={(el) => onSectionRef(experience.id, el)}
        />
      ))}
    </>
  );
}
