import { StatusColor } from "../types";

/**
 * Get the background color class for a status badge
 * @param color - The status color
 * @returns Tailwind CSS class for the background color
 */
export function getStatusBadgeColor(color: StatusColor): string {
  switch (color) {
    case 'yellow':
      return 'bg-yellow-400';
    case 'green':
      return 'bg-green-400';
    case 'red':
      return 'bg-red-400';
    default:
      return 'bg-gray-400';
  }
}

