import Link from "next/link";
import { navLinks, policyLinks, socialLinks } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-paper-dim">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8 dt:px-12">
        <div className="flex flex-col items-center gap-8 dt:flex-row dt:justify-between">
          <Link href="/" aria-label="The Better Date Co home">
            <Logo />
          </Link>

          <nav aria-label="Footer" className="order-3 dt:order-none">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a href={link.href} className="text-nav text-ink-soft transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-nav text-ink-soft transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <social.icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-divider pt-6 text-small text-ink-muted dt:flex-row">
          <p>© {year} The Better Date Co. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
