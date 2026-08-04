import type { HowItWorksStep as HowItWorksStepData } from "@/lib/content";
import { IconBadge } from "@/components/IconBadge";

export function HowItWorksStep({ number, title, description, icon }: HowItWorksStepData) {
  return (
    <div className="flex flex-col items-center gap-4 px-4 text-center">
      <IconBadge icon={icon} />
      <h3 className="font-display text-card text-ink">
        {number}. {title}
      </h3>
      <p className="text-body text-ink-soft">{description}</p>
    </div>
  );
}
