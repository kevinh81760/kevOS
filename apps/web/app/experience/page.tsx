"use client";

import { useState, useRef } from "react";
import { experiences } from "./data";
import ExperienceSidebar from "./components/ExperienceSidebar";
import ExperienceContent from "./components/ExperienceContent";

export default function ExperiencePage() {
  const [activeExperienceId, setActiveExperienceId] = useState(
    experiences[0]?.id || ""
  );
  const contentScrollRef = useRef<HTMLDivElement>(null);

  const handleCompanyClick = (id: string) => {
    const element = document.getElementById(id);
    const container = contentScrollRef.current;
    
    if (element && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const relativeTop = elementRect.top - containerRect.top;
      const targetScroll = scrollTop + relativeTop - 24; // 24px offset for scroll-mt-24
      
      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handleActiveChange = (id: string) => {
    setActiveExperienceId(id);
  };

  return (
    <>
      {/* Left Sidebar - Fixed position */}
      <ExperienceSidebar
        experiences={experiences}
        activeId={activeExperienceId}
        onCompanyClick={handleCompanyClick}
      />

      {/* Page container */}
      <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="h-full max-w-7xl mx-auto">
          <div className="h-full flex pl-[280px] pr-6">
            {/* Right Content - Scrollable container */}
            <ExperienceContent
              experiences={experiences}
              onActiveChange={handleActiveChange}
              scrollContainerRef={contentScrollRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}
