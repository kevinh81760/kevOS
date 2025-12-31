export interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
  image: string;
  fileExtension: string; // e.g., "tsx", "js", "ts"
}

export const projects: Project[] = [
  {
    id: "project-1",
    name: "pointpal.tsx",
    description: "An AI-powered travel platform that helps users discover and plan their perfect trips.",
    type: "Web Application",
    image: "/pointpal.png",
    fileExtension: "tsx",
  },
  {
    id: "project-2",
    name: "project-2.tsx",
    description: "A placeholder project description. Replace with your actual project details.",
    type: "Web Application",
    image: "/pointpal.png", // Placeholder - replace with actual project image
    fileExtension: "tsx",
  },
  {
    id: "project-3",
    name: "project-3.js",
    description: "Another placeholder project description. Replace with your actual project details.",
    type: "Mobile Application",
    image: "/pointpal.png", // Placeholder - replace with actual project image
    fileExtension: "js",
  },
];

