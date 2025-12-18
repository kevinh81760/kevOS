"use client";

/**
 * AnimatedHeader Component
 * Displays the job title, company name, and employment dates
 */
interface AnimatedHeaderProps {
  title: string;
  company: string;
  dates: string;
}

export function AnimatedHeader({ title, company, dates }: AnimatedHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-[2.5rem] font-semibold text-white mb-2 leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-base text-zinc-400 tracking-wide">
        {company} | {dates}
      </p>
    </div>
  );
}
