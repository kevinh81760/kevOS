"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export default function HeroAnimation() {
  return (
    <div className="relative h-[calc(100vh-112px)] overflow-hidden">
      <motion.div
        className="absolute left-1/2 whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={{ scale: 0.3, top: "50%", y: "-50%" }}
        animate={{ scale: 1, top: 16, y: 0 }}
        transition={{
          scale: { duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
          top: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <TextReveal>
          <h1 className="text-[7.5rem] font-bold text-white uppercase tracking-tight">KEVIN HA</h1>
        </TextReveal>
      </motion.div>
    </div>
  );
}

