"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="dt:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[5px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-divider bg-paper px-5 pb-6 pt-2 shadow-soft"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] items-center text-body font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href="#mood-selection"
          variant="primary"
          analyticsId="nav_choose_date_mobile"
          className="mt-4 w-full"
        >
          Choose a date
        </Button>
      </nav>
    </div>
  );
}
