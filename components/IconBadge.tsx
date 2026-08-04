import type { ComponentType } from "react";

interface IconBadgeProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  className?: string;
}

// Matches the "How it works" icon circle spec exactly: 56px circle,
// white surface, 1px divider border, 24px accent icon.
export function IconBadge({ icon: Icon, className = "" }: IconBadgeProps) {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-divider bg-surface ${className}`}
    >
      <Icon aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.5} />
    </div>
  );
}
