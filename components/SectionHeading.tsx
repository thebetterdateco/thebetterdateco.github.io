interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  heading: string;
  supporting?: string;
  align?: "left" | "center";
}

export function SectionHeading({ id, eyebrow, heading, supporting, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="font-display text-3xl leading-tight text-ink sm:text-4xl">
        {heading}
      </h2>
      {supporting ? <p className="mt-4 text-base text-ink-soft sm:text-lg">{supporting}</p> : null}
    </div>
  );
}
