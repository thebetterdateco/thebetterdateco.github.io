import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/Button";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur relative">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          The Better Date Co
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#mood-selection" variant="primary" analyticsId="nav_choose_date">
            Choose a date
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
