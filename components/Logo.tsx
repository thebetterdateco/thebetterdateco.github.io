import { asset } from "@/lib/asset";

// Canonical brand assets (public/brand/*.svg), provided as source-of-truth
// vector files. logo-icon.svg is the same artwork cropped to just the mark
// via viewBox (see that file) for spots that need the icon on its own.

export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={asset("/brand/logo-full.svg")} alt="The Better Date Co" className={`h-auto w-[240px] ${className}`} />
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset("/brand/logo-icon.svg")} alt="" aria-hidden="true" className={className} />;
}
