"use client";

import { useState } from "react";
import ProjectExplorer from "./components/ProjectExplorer";
import ProjectDetails from "./components/ProjectDetails";
import { projects } from "./data";

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    projects.length > 0 ? projects[0].id : null
  );

  return (
    <div className="min-h-[calc(100vh-100px)] px-6 pt-[50px] pb-20">
      <div className="max-w-7xl mx-auto ml-[87px] mr-[87px]">
        <h1 className="text-5xl font-black text-white tracking-tighter mb-12" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          PROJECTS
        </h1>
        
        {/* Two-panel layout */}
        <div className="flex gap-8 h-[calc(100vh-250px)]">
          {/* Left Panel - File Explorer (30-40% width) */}
          <div className="w-[35%] shrink-0">
            <ProjectExplorer
              projects={projects}
              selectedProjectId={selectedProjectId}
              onSelectProject={setSelectedProjectId}
            />
          </div>

          {/* Right Panel - Project Details (60-70% width) */}
          <div className="flex-1">
            <ProjectDetails
              project={projects.find((p) => p.id === selectedProjectId) || null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

