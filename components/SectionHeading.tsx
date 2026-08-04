interface SectionHeadingProps {
  id: string;
  heading: string;
  supporting?: string;
  align?: "left" | "center";
}

export function SectionHeading({ id, heading, supporting, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 id={id} className="font-display text-heading-mobile text-ink dt:text-heading">
        {heading}
      </h2>
      {supporting ? <p className="mt-3 text-body text-ink-soft">{supporting}</p> : null}
    </div>
  );
}
