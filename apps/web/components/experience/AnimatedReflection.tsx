"use client";

/**
 * AnimatedReflection Component
 * Displays a reflection quote at the bottom of each experience
 * Features italic styling
 */
interface AnimatedReflectionProps {
  reflection: string;
}

export function AnimatedReflection({ reflection }: AnimatedReflectionProps) {
  return (
    <div className="mt-12 pt-8">
      <p className="text-lg text-zinc-400 italic leading-relaxed">
        {reflection}
      </p>
    </div>
  );
}
