import { Heart, Sprout, Sword, Code } from "lucide-react";
import { Project, MissionObjective } from "../types";

/**
 * Carousel configuration constants
 */
export const CAROUSEL_CONFIG = {
  AUTO_ROTATE_INTERVAL: 6500, // 6.5 seconds
  INITIALIZATION_DELAY: 500, // 500ms
} as const;

/**
 * External URLs
 */
export const EXTERNAL_URLS = {
  GITHUB: "https://github.com/PratejraTech",
  EMAIL: "mailto:core@pratejra.build",
  TIMELESS_LOVE: "https://timelesslove.ai",
  RISE_STRONG: "https://risestrong.app",
  X0A_DEV: "https://x0a.dev",
} as const;

/**
 * Image URLs
 */
export const IMAGE_URLS = {
  BUDDHA_MEDITATION: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGElMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2MDk1NTU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
} as const;

/**
 * Initial projects data
 */
export const INITIAL_PROJECTS: Project[] = [
  {
    name: 'Timeless Love',
    url: EXTERNAL_URLS.TIMELESS_LOVE,
    icon: Heart,
    description: 'A platform dedicated to preserving and celebrating timeless connections and love.',
    status: 'in-dev',
    statusColor: 'yellow',
  },
  {
    name: 'Rise Strong',
    url: EXTERNAL_URLS.RISE_STRONG,
    icon: Sprout,
    description: 'Empowering growth and resilience through supportive community and resources.',
    status: 'in-dev',
    statusColor: 'yellow',
  },
  {
    name: 'Pratejra',
    icon: Sword,
    description: 'Through the unseen, we protect the sacred.',
    status: 'new',
    statusColor: 'green',
    isInternal: true,
  },
  {
    name: 'x0a.dev',
    url: EXTERNAL_URLS.X0A_DEV,
    icon: Code,
    description: 'Developer tools and resources for the modern web.',
    status: 'coming-soon',
    statusColor: 'red',
  },
];

/**
 * Mission objectives data
 */
export const MISSION_OBJECTIVES: MissionObjective[] = [
  {
    number: "01",
    title: "Humanitarian Protection",
    description: "Shielding communities from harm, both physical and digital.",
  },
  {
    number: "02",
    title: "Preservation of Heritage",
    description: "Protecting cultural, historical, and environmental treasures.",
  },
  {
    number: "03",
    title: "Countering Exploitation",
    description: "Identifying and disrupting systems of corruption, oppression, and exploitation.",
  },
  {
    number: "04",
    title: "Empowering the Aligned",
    description: "Providing operational and business capabilities to organizations who act for benevolent causes.",
  },
];

