import { createFileRoute } from "@tanstack/react-router";
import { helpResources } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/aide")({ component: AidePage });

function AidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Orientation</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
        Parler, se soigner, protéger
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Rien de ce qui suit n’est une dénonciation forcée. Les CSAPA reçoivent sans jugement, les
        lignes d’écoute sont anonymes, le 119 protège les enfants. Si c’est urgent, composez avant
        de finir la page.
      </p>

      <ul className="mt-10 flex flex-col gap-3">
        {helpResources.map((r) => (
          <li
            key={r.name}
            className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-xl text-fg">{r.name}</h2>
              <span
                className={cn(
                  "text-xs uppercase tracking-wider",
                  r.kind === "urgence" ? "text-danger" : "text-accent",
                )}
              >
                {r.kind}
              </span>
            </div>
            {r.phone.startsWith("0") || r.phone === "15" || r.phone === "119" || r.phone === "3114" || r.phone.startsWith("17") ? (
              <a
                href={`tel:${r.phone.replace(/\s/g, "").split("/")[0]}`}
                className="mt-2 inline-flex min-h-11 items-center font-mono text-lg tabular-nums text-primary"
              >
                {r.phone}
              </a>
            ) : (
              <p className="mt-2 font-mono text-sm text-muted">{r.phone}</p>
            )}
            <p className="mt-1 text-sm text-muted">{r.detail}</p>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm text-accent underline decoration-accent/30 underline-offset-4"
            >
              Ouvrir le site
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
