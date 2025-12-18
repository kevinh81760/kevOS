"use client";

/**
 * AnimatedSection Component
 * Generic content block with heading and children
 * Used for "What I Did", "How I Did It", and "What I Used" sections
 */
interface AnimatedSectionProps {
  heading: string;
  children: React.ReactNode;
}

export function AnimatedSection({ heading, children }: AnimatedSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
        {heading}
      </h3>
      {children}
    </div>
  );
}
