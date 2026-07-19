import type { PackageItem as PackageItemData } from "@/lib/content";

export function PackageItem({ title, description, icon: Icon }: PackageItemData) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-dim">
        <Icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-medium text-ink">{title}</h3>
        <p className="mt-1 text-sm text-ink-soft">{description}</p>
      </div>
    </div>
  );
}
