import { Clock, MapPin } from "lucide-react";
import type { Experience } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Button } from "@/components/Button";

const moodLabelStyles: Record<Experience["mood"], string> = {
  playful: "bg-mood-playful/15",
  romantic: "bg-mood-romantic/15",
  meaningful: "bg-mood-meaningful/15",
};

const moodDotStyles: Record<Experience["mood"], string> = {
  playful: "bg-mood-playful",
  romantic: "bg-mood-romantic",
  meaningful: "bg-mood-meaningful",
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-md2 border border-line bg-paper p-6 shadow-soft">
      <ImagePlaceholder label={experience.title} tone={experience.mood} aspect="aspect-[4/3]" />

      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-sm2 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-ink ${moodLabelStyles[experience.mood]}`}
      >
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${moodDotStyles[experience.mood]}`} />
        {experience.moodLabel}
      </span>

      <h3 className="font-display text-xl text-ink">{experience.title}</h3>
      <p className="flex-1 text-ink-soft">{experience.description}</p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
        <div className="col-span-2 flex items-center gap-2 text-ink-soft">
          <Clock aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          <dt className="sr-only">Duration</dt>
          <dd>{experience.duration}</dd>
        </div>
        <div className="col-span-2 flex items-center gap-2 text-ink-soft">
          <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          <dt className="sr-only">Location</dt>
          <dd>{experience.location}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Experience price</dt>
          <dd className="font-medium text-ink">{experience.price}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Additional spend</dt>
          <dd className="font-medium text-ink">{experience.additionalSpend}</dd>
        </div>
      </dl>

      <Button
        href={experience.href}
        variant="secondary"
        analyticsId={experience.analyticsId}
        className="w-full sm:w-auto"
      >
        {experience.ctaLabel}
      </Button>
    </div>
  );
}
