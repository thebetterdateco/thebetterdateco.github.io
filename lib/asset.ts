// Prefixes public/ asset paths with the deployment base path (needed on GitHub
// Pages project sites, where the site lives under /<repo>).
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
