import { Image as ImageIcon } from "lucide-react";
import type { MoodKey } from "@/lib/content";

type PlaceholderTone = MoodKey | "neutral";

interface ImagePlaceholderProps {
  label: string;
  tone?: PlaceholderTone;
  aspect?: string;
  className?: string;
}

// Placeholder for future brand photography. Swap the contents of this
// component for a real <Image> once photography is available — the
// aspect-ratio wrapper and rounded/border treatment can stay as-is.
const toneStyles: Record<PlaceholderTone, string> = {
  neutral: "from-paper-dim to-paper border-line",
  playful: "from-mood-playful/15 to-paper-dim border-mood-playful/30",
  romantic: "from-mood-romantic/15 to-paper-dim border-mood-romantic/30",
  meaningful: "from-mood-meaningful/15 to-paper-dim border-mood-meaningful/30",
};

export function ImagePlaceholder({ label, tone = "neutral", aspect = "aspect-[4/3]", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — photography placeholder`}
      className={`relative ${aspect} w-full overflow-hidden rounded-md2 border bg-gradient-to-br ${toneStyles[tone]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon aria-hidden="true" className="h-6 w-6 text-ink-soft/50" strokeWidth={1.5} />
        <span className="font-display text-xs uppercase tracking-[0.15em] text-ink-soft/70">{label}</span>
      </div>
    </div>
  );
}
