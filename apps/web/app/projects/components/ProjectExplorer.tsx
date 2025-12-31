"use client";

import ProjectItem from "./ProjectItem";
import { Project } from "../data";

interface ProjectExplorerProps {
  projects: Project[];
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
}

export default function ProjectExplorer({
  projects,
  selectedProjectId,
  onSelectProject,
}: ProjectExplorerProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-sm text-white/60 uppercase tracking-wide mb-2">Files</h2>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            fileExtension={project.fileExtension}
            isSelected={selectedProjectId === project.id}
            onClick={() => onSelectProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

