"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
  triggerOnce?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  yOffset = 20,
  triggerOnce = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

