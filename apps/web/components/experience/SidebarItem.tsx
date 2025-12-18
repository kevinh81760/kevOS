"use client";

import { cn } from '@/lib/utils';

/**
 * SidebarItem Component
 * Individual clickable sidebar item showing company name
 * Highlights with white vertical bar and white text when active
 */
interface SidebarItemProps {
  company: string;
  active: boolean;
  onClick: () => void;
}

export function SidebarItem({ company, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left py-3 px-4 transition-colors duration-200",
        "focus:outline-none",
        active
          ? "text-lg text-white border-l-4 border-white pl-3"
          : "text-lg text-zinc-400 hover:text-zinc-300 pl-4"
      )}
    >
      {company}
    </button>
  );
}
