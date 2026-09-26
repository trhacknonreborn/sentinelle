import { nationalStats } from "@/data/catalog";
import { SourceCite } from "@/components/source-cite";

export function StatGrid({ limit }: { limit?: number }) {
  const items = limit ? nationalStats.slice(0, limit) : nationalStats;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <article
          key={s.id}
          className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
        >
          <p className="font-mono text-3xl tabular-nums tracking-tight text-fg">{s.value}</p>
          <h3 className="mt-2 font-sans text-base font-medium leading-snug text-fg">{s.label}</h3>
          <p className="mt-1 text-sm text-muted">{s.detail}</p>
          <p className="mt-3">
            <SourceCite cite={s.cite} compact />
          </p>
        </article>
      ))}
    </div>
  );
}
