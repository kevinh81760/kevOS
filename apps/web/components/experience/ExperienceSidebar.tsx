"use client";

import { SidebarItem } from './SidebarItem';
import type { Experience } from '@/app/experience/data';

/**
 * ExperienceSidebar Component
 * Fixed-height sidebar navigation showing company names
 * Highlights active experience based on scroll position
 */
interface ExperienceSidebarProps {
  experiences: Experience[];
  activeExperienceId: string | null;
  onExperienceClick: (id: string) => void;
}

export function ExperienceSidebar({
  experiences,
  activeExperienceId,
  onExperienceClick
}: ExperienceSidebarProps) {
  return (
    <aside className="w-64 shrink-0 h-full flex flex-col ml-[15px]">
      <nav className="flex flex-col py-8">
        {experiences.map((experience) => (
          <SidebarItem
            key={experience.id}
            company={experience.company}
            active={activeExperienceId === experience.id}
            onClick={() => onExperienceClick(experience.id)}
          />
        ))}
      </nav>
    </aside>
  );
}
