import { ComponentType } from "react";

/**
 * Project status types
 */
export type ProjectStatus = 'in-dev' | 'new' | 'coming-soon';

/**
 * Status badge color types
 */
export type StatusColor = 'yellow' | 'green' | 'red';

/**
 * Active section type for navigation
 */
export type ActiveSection = 'home' | 'philosophy' | 'allies';

/**
 * Project interface representing a project in the carousel
 */
export interface Project {
  name: string;
  url?: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  status: ProjectStatus;
  statusColor: StatusColor;
  isInternal?: boolean;
}

/**
 * Mission objective interface
 */
export interface MissionObjective {
  number: string;
  title: string;
  description: string;
}

/**
 * Component order interface for the workflow section
 */
export interface ComponentOrderItem {
  id: string;
  label: string;
  title: string;
  description: string;
  gradient: string;
}
