import { Clock, MapPin } from "lucide-react";
import type { Experience } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[7px] border border-line bg-surface shadow-soft">
      <ImagePlaceholder label={experience.title} variant={experience.imageVariant} />

      <div className="flex flex-1 flex-col gap-3 p-[18px]">
        <div>
          <h3 className="text-[16px] font-semibold text-ink">{experience.title}</h3>
          <p className="mt-2 text-small text-ink-soft">{experience.description}</p>
        </div>

        <div className="flex items-center gap-4 text-[13px] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            {experience.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            {experience.location}
          </span>
        </div>

        <p className="mt-auto pt-1 text-ink">
          <span className="text-[22px] font-semibold">{experience.price}</span>{" "}
          <span className="text-[13px] text-ink-muted">+ {experience.additionalSpend}</span>
        </p>
      </div>
    </div>
  );
}
