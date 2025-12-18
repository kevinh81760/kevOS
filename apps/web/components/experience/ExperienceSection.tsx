"use client";

import { useRef } from 'react';
import { AnimatedHeader } from './AnimatedHeader';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedReflection } from './AnimatedReflection';
import type { Experience } from '@/app/experience/data';

/**
 * ExperienceSection Component
 * Displays a single work experience
 */
interface ExperienceSectionProps {
  experience: Experience;
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRef?: (el: HTMLDivElement | null) => void;
}

export function ExperienceSection({ 
  experience, 
  containerRef, 
  sectionRef 
}: ExperienceSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={(el) => {
        ref.current = el;
        if (sectionRef) sectionRef(el);
      }}
      data-experience-id={experience.id}
      className="min-h-screen pb-12 first:pt-0 pt-8"
    >
      {/* Job Title, Company, and Dates */}
      <AnimatedHeader
        title={experience.title}
        company={experience.company}
        dates={experience.dates}
      />

      {/* What I Did Section - Overview paragraph */}
      <AnimatedSection heading="What I Did">
        <p className="text-lg text-zinc-300 leading-relaxed">
          {experience.whatIDid}
        </p>
      </AnimatedSection>

      {/* How I Did It Section - Bulleted list of accomplishments */}
      <AnimatedSection heading="How I Did It">
        <ul className="space-y-4">
          {experience.howIDidIt.map((item, index) => (
            <li key={index} className="text-lg text-zinc-300 leading-relaxed ml-5 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* What I Used Section - Technologies and tools */}
      <AnimatedSection heading="What I Used">
        <ul className="space-y-4">
          {experience.whatIUsed.map((item, index) => (
            <li key={index} className="text-lg text-zinc-300 leading-relaxed ml-5 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Reflection Quote - Personal takeaway */}
      <AnimatedReflection reflection={experience.reflection} />
    </div>
  );
}
