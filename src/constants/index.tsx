import { Heart, Sprout, Sword, Bot } from "lucide-react";
import { Project, MissionObjective, ComponentOrderItem } from "../types";

type IconProps = {
  className?: string;
};

const mergeClassNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const PratejraSwordIcon = ({ className }: IconProps) => (
  <Sword className={mergeClassNames("rotate-12", className)} strokeWidth={1.6} />
);

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
  GITHUB: "https://github.com/pratejratech",
  EMAIL: "mailto:core@pratejratech.build",
  ALLIES_FORM: "https://forms.gle/pratejra-allies-intake",
  TIMELESS_LOVE: "https://timelesslove.ai",
  RISE_STRONG: "https://risestrong.app",
  X0A_XYZ: "https://x0a.xyz",
} as const;

export const ANALYTICS_ENDPOINTS = {
  ALLIES_VISIT: "/api/analytics/allies-visit",
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
    description: 'Stories, software, and playlists that celebrate long-term care and connection.',
    status: 'in-dev',
    statusColor: 'yellow',
  },
  {
    name: 'Rise Strong',
    url: EXTERNAL_URLS.RISE_STRONG,
    icon: Sprout,
    description: 'Supportive resources for people rebuilding after hard seasons.',
    status: 'in-dev',
    statusColor: 'yellow',
  },
   {
    name: 'Pratejra',
    icon: PratejraSwordIcon,
    description: 'Elite cybersecurity protectors serving communities and activists with AI-enhanced security.',
    status: 'new',
    statusColor: 'green',
    isInternal: true,
  },
  {
    name: 'x0a.xyz',
    url: EXTERNAL_URLS.X0A_XYZ,
    icon: Bot,
    description: 'Developer tools and learning resources built in public.',
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
    title: "Keep People Safe",
    description: "Rapid, caring support that gives community teams room to breathe.",
  },
  {
    number: "02",
    title: "Protect Shared Stories",
    description: "Safeguarding archives, testimony, and local knowledge with redundant storage.",
  },
  {
    number: "03",
    title: "Quiet Loud Threats",
    description: "Tracking intimidation, disinformation, or fraud and answering with clarity.",
  },
  {
    number: "04",
    title: "Back the Helpers",
    description: "Operations coaching and lightweight tooling for grassroots orgs doing kind work.",
  },
];

/**
 * Component order workflow data
 */
export const COMPONENT_ORDERS: ComponentOrderItem[] = [
  {
    id: "01",
    label: "Component",
    title: "Listen & Orient",
    description: "We host one calm call to learn about your people, timelines, and sensitivities.",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "02",
    label: "Component",
    title: "Co-Design the Plan",
    description: "Together we sketch the simplest path, agree on safety rails, and pick measurable wins.",
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "03",
    label: "Component",
    title: "Build Quietly",
    description: "We deliver the tools, research, or coverage you need without demanding spotlight.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "04",
    label: "Component",
    title: "Support & Teach",
    description: "We document, train, and hand back ownership so your team can keep moving with confidence.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];
