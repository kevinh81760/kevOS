"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Experience } from "../data";

interface ExperienceSidebarProps {
  experiences: Experience[];
  activeId: string;
  onCompanyClick: (id: string) => void;
}

export default function ExperienceSidebar({
  experiences,
  activeId,
  onCompanyClick,
}: ExperienceSidebarProps) {
  const activeIndex = experiences.findIndex((exp) => exp.id === activeId);
  const barHeight = 20; // Height of the white bar
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [barY, setBarY] = useState(0);

  // Measure actual button positions for accurate alignment
  useEffect(() => {
    const updateBarPosition = () => {
      const activeButton = buttonRefs.current[activeIndex];
      const container = containerRef.current;
      
      if (activeButton && container) {
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const relativeTop = buttonRect.top - containerRect.top;
        const buttonCenter = relativeTop + buttonRect.height / 2;
        const newBarY = buttonCenter - barHeight / 2;
        setBarY(newBarY);
      }
    };

    // Update immediately
    updateBarPosition();

    // Update on resize
    window.addEventListener("resize", updateBarPosition);
    return () => window.removeEventListener("resize", updateBarPosition);
  }, [activeIndex, barHeight]);

  return (
    <div className="fixed top-[126px] left-[34px] w-64 pr-8 z-10" ref={containerRef}>
      <div className="relative">
          {/* White bar indicator */}
          <motion.div
            className="absolute bg-white"
            initial={false}
            animate={{
              y: barY,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              left: "0px",
              width: "3px",
              height: `${barHeight}px`,
            }}
          />
          
          {/* Company list */}
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                onClick={() => onCompanyClick(experience.id)}
                className={`text-left w-full transition-colors duration-200 text-xl ${
                  activeId === experience.id
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                style={{
                  paddingLeft: "16px",
                  lineHeight: "1.5",
                  minHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {experience.company}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}

