"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * SmoothScroll Provider Component
 * 
 * Wraps the application with Lenis smooth scroll functionality.
 * Uses default Lenis configuration for optimal performance.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}







