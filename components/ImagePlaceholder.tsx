import { Armchair, Landmark, Wine } from "lucide-react";
import type { ExperienceImageVariant } from "@/lib/content";

interface ImagePlaceholderProps {
  label: string;
  variant: ExperienceImageVariant;
  className?: string;
}

// Placeholder for future brand photography. Swap the contents of this
// component for a real <Image> once photography is available — the
// aspect-ratio wrapper and rounded treatment can stay as-is.
const variantStyles: Record<ExperienceImageVariant, { gradient: string; icon: typeof Landmark }> = {
  landscape: { gradient: "from-[#B7C4D6] via-[#D9CBAE] to-[#E9A874]", icon: Landmark },
  candlelight: { gradient: "from-[#3A2A28] via-[#6B3E2E] to-[#C77A45]", icon: Wine },
  interior: { gradient: "from-[#DCE0C8] via-[#C9C6A6] to-[#8E8B6B]", icon: Armchair },
};

export function ImagePlaceholder({ label, variant, className = "" }: ImagePlaceholderProps) {
  const { gradient, icon: Icon } = variantStyles[variant];

  return (
    <div
      role="img"
      aria-label={`${label} — photography placeholder`}
      className={`relative aspect-[4/3] w-full shrink-0 bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <Icon aria-hidden="true" className="h-8 w-8 text-white/80" strokeWidth={1.25} />
      </div>
    </div>
  );
}
