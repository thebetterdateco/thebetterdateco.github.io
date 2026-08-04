interface IconProps {
  className?: string;
  strokeWidth?: number | string;
}

// A meandering squiggle — stands in for "playful, spontaneous energy."
export function SquiggleIcon({ className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 14c1.4-4 2.8-4 4.2 0s2.8 4 4.2 0 2.8-4 4.2 0 2.8 4 4.2 0" />
      <path d="M3.5 9.5c1.4-3 2.8-3 4.2 0s2.8 3 4.2 0 2.8-3 4.2 0 2.8 3 4.2 0" opacity="0.5" />
    </svg>
  );
}

// Two overlapping circles — stands in for "two people, one shared moment."
export function VennIcon({ className = "", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="12" r="6.5" />
      <circle cx="14.5" cy="12" r="6.5" />
    </svg>
  );
}
