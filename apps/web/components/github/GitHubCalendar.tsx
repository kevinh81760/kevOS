"use client";

import { motion } from "framer-motion";
import { GitHubCalendar as GitHubCalendarLib } from "react-github-calendar";

interface GitHubCalendarWrapperProps {
  className?: string;
}

export default function GitHubCalendar({ className = "" }: GitHubCalendarWrapperProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .github-calendar-wrapper svg text[dominant-baseline="hanging"] {
            fill: #a1a1aa !important;
          }
        `
      }} />
      <motion.div
        className={`w-full max-w-[1400px] bg-[#111111] border border-[#242424] rounded-lg p-6 md:p-8 lg:p-10 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="github-calendar-wrapper">
          <GitHubCalendarLib
            username="kevinh81760"
            colorScheme="dark"
            blockSize={16}
            blockMargin={5}
            fontSize={16}
            theme={{
              dark: ["#0a0a0a", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              color: "#e4e4e7",
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
