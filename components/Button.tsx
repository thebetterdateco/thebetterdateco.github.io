import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "default" | "compact";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  analyticsId?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-1.5 rounded-[5px] text-btn transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-[48px] px-[26px]",
  compact: "min-h-[44px] px-6",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border border-accent bg-accent text-white hover:-translate-y-px hover:border-accent-dark hover:bg-accent-dark",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  link: "text-accent hover:text-accent-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  analyticsId,
}: ButtonProps) {
  const classes =
    variant === "link"
      ? `inline-flex items-center gap-1.5 text-btn transition ${variantStyles.link} ${className}`.trim()
      : `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  const content =
    variant === "link" ? (
      <>
        {children}
        <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
      </>
    ) : (
      children
    );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} data-analytics-id={analyticsId}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-analytics-id={analyticsId}>
      {content}
    </Link>
  );
}
