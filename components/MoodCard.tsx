import type { Mood } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Button } from "@/components/Button";

const accentBorder: Record<Mood["key"], string> = {
  playful: "border-t-mood-playful",
  romantic: "border-t-mood-romantic",
  meaningful: "border-t-mood-meaningful",
};

export function MoodCard({ mood, imageRotation = false }: { mood: Mood; imageRotation?: boolean }) {
  const Icon = mood.icon;

  return (
    <div className={`flex h-full flex-col gap-5 rounded-md2 border border-line border-t-4 bg-paper p-6 shadow-soft ${accentBorder[mood.key]}`}>
      <ImagePlaceholder
        label={`${mood.title} date`}
        tone={mood.key}
        aspect="aspect-[3/2]"
        className={imageRotation ? "-rotate-1" : undefined}
      />
      <div className="flex items-center gap-2">
        <Icon aria-hidden="true" className="h-5 w-5 text-ink-soft" strokeWidth={1.5} />
        <h3 className="font-display text-2xl text-ink">{mood.title}</h3>
      </div>
      <p className="font-display text-lg italic text-ink-soft">{mood.tagline}</p>
      <p className="flex-1 text-ink-soft">{mood.description}</p>
      <Button href={mood.href} variant="secondary" analyticsId={mood.analyticsId} className="w-full sm:w-auto">
        {mood.ctaLabel}
      </Button>
    </div>
  );
}
