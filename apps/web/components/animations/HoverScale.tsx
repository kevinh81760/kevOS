"use client";

import { motion } from "framer-motion";

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export default function HoverScale({
  children,
  scale = 1.02,
  duration = 0.4,
  className = "",
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
}

