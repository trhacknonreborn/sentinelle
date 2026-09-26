import type { Cite } from "@/data/catalog";

export function SourceCite({ cite, compact }: { cite: Cite; compact?: boolean }) {
  return (
    <a
      href={cite.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-1 text-accent underline decoration-accent/30 underline-offset-4 transition-opacity duration-150 hover:decoration-accent"
    >
      <span className={compact ? "text-xs" : "text-sm"}>
        {compact ? `${cite.label} (${cite.year})` : `Source : ${cite.label} · ${cite.year}`}
      </span>
    </a>
  );
}
