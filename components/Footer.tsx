import Link from "next/link";
import { footerLinkGroups } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg text-ink">The Better Date Co</p>
            <p className="mt-3 max-w-sm text-sm text-ink-soft">
              Curated date experiences for couples who want to connect, have fun and create meaningful memories.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wide text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                        {...(link.label === "Waitlist" ? { "data-analytics-id": "footer_waitlist" } : {})}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                        {...(link.label === "Waitlist" ? { "data-analytics-id": "footer_waitlist" } : {})}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-ink">Contact</h3>
            {/* TODO: replace with a real contact channel before launch */}
            <p className="mt-4 text-sm text-ink-soft">Contact details coming soon</p>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-ink-soft">
          © {year} The Better Date Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
