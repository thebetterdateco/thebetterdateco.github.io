import type { Mood } from "@/lib/content";
import { Button } from "@/components/Button";

export function MoodCard({ mood }: { mood: Mood }) {
  const Icon = mood.icon;

  return (
    <div className="flex min-h-[210px] flex-col items-center gap-4 rounded-[8px] border border-line bg-surface px-7 py-8 text-center shadow-soft">
      <Icon aria-hidden="true" className="h-10 w-10 text-accent" strokeWidth={1.5} />
      <h3 className="font-display text-card text-accent">{mood.title}</h3>
      <p className="flex-1 text-body text-ink-soft">{mood.tagline}</p>
      <Button href={mood.href} variant="link" analyticsId={mood.analyticsId}>
        {mood.ctaLabel}
      </Button>
    </div>
  );
}
