import { useState, useEffect } from "react";
import { Project } from "../types";
import { INITIAL_PROJECTS } from "../constants";
import { fetchProjectDescription } from "../utils/projectDescription";

/**
 * Custom hook for fetching and managing project descriptions
 * @returns Array of projects with updated descriptions
 */
export function useProjectDescriptions(): Project[] {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  useEffect(() => {
    const fetchDescriptions = async () => {
      const updatedProjects = await Promise.all(
        INITIAL_PROJECTS.map(async (project) => {
          if (project.url && !project.isInternal) {
            const description = await fetchProjectDescription(project.url);
            if (description) {
              // Summarize to one sentence (first sentence or first 120 chars)
              const summarized = description.split('.')[0].substring(0, 120).trim();
              return {
                ...project,
                description: summarized || project.description,
              };
            }
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    };

    fetchDescriptions();
  }, []);

  return projects;
}

