"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down";
}

export default function TextReveal({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "",
  direction = "up"
}: TextRevealProps) {
  const initialY = direction === "down" ? "-100%" : "100%";
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: initialY }}
        animate={{ y: 0 }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

