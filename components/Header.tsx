import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-paper/90 backdrop-blur relative">
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-4 px-5 sm:px-8 dt:px-12">
        <Link href="/" aria-label="The Better Date Co home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-11 dt:flex">
          <ul className="flex items-center gap-11">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-nav text-ink-soft transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#mood-selection" variant="primary" size="compact" analyticsId="nav_choose_date">
            Choose a date
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
