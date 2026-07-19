import type { TrustPointData } from "@/lib/content";

export function TrustPoint({ text, icon: Icon }: TrustPointData) {
  return (
    <div className="flex items-start gap-3">
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
      <p className="text-ink-soft">{text}</p>
    </div>
  );
}
