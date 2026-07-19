import type { HowItWorksStep as HowItWorksStepData } from "@/lib/content";

export function HowItWorksStep({ number, title, description, icon: Icon }: HowItWorksStepData) {
  return (
    <div className="flex flex-col gap-4 border-t border-line pt-6">
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl text-accent">{number}</span>
        <Icon aria-hidden="true" className="h-5 w-5 text-ink-soft" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="text-ink-soft">{description}</p>
    </div>
  );
}
