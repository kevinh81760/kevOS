"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import StarIcon from "@/components/icons/StarIcon";

export default function HeroAnimation() {
  return (
    <div className="relative h-[calc(100vh-112px)] overflow-hidden">
      <motion.div
        className="absolute left-1/2 whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={{ scale: 0.3, top: "45%", y: "-50%" }}
        animate={{ scale: 1, top: 16, y: 0 }}
        transition={{
          scale: { duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
          top: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <TextReveal>
          <h1 className="text-[7.5rem] font-bold text-white uppercase tracking-tight">KEVIN HA</h1>
        </TextReveal>
      </motion.div>
      <div className="absolute top-[calc(7.5rem+16px+2.5rem+2rem)] left-0 w-full flex items-center px-6">
        <TextReveal delay={2.4} duration={0.4} direction="down" className="translate-x-[1in]">
          <span className="text-white text-2xl font-normal tracking-wide">Product Engineer</span>
        </TextReveal>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <TextReveal delay={2.2} duration={0.4} direction="down">
            <StarIcon size={32} />
          </TextReveal>
        </div>
        <TextReveal delay={2.4} duration={0.4} className="ml-auto -translate-x-[1in]" direction="down">
          <span className="text-white text-2xl font-normal tracking-wide">San Francisco, CA</span>
        </TextReveal>
      </div>
    </div>
  );
}

