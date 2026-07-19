import type { PricingRow } from "@/lib/content";

export function PricingBreakdown({ rows, total }: { rows: PricingRow[]; total: PricingRow }) {
  return (
    <div className="rounded-md2 border border-line bg-paper p-6 shadow-soft sm:p-8">
      <dl className="divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-4 first:pt-0">
            <dt className="text-ink-soft">{row.label}</dt>
            <dd className="font-medium text-ink">{row.value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 pt-4">
          <dt className="font-display text-lg text-ink">{total.label}</dt>
          <dd className="font-display text-lg text-accent-dark">{total.value}</dd>
        </div>
      </dl>
    </div>
  );
}
