import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  analyticsId?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-sm2 px-6 py-3 text-sm font-medium tracking-wide transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-accent-dark",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
};

export function Button({ href, children, variant = "primary", className = "", analyticsId }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} data-analytics-id={analyticsId}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-analytics-id={analyticsId}>
      {children}
    </Link>
  );
}
