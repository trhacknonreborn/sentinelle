import { createFileRoute, Link } from "@tanstack/react-router";
import { FranceAtlas } from "@/components/france-atlas";
import { territories } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/territoires/")({ component: TerritoiresPage });

function TerritoiresPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Dossiers territoriaux</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
        Quartiers, ports, scènes urbaines
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Chaque fiche s’appuie sur un parquet, un bilan préfectoral, un observatoire ou une enquête
        nominative. Ce n’est pas une carte de « tous les points de deal de France » — une telle
        carte n’aurait d’ailleurs rien à faire ici.
      </p>

      <div className="mt-10">
        <FranceAtlas />
      </div>

      <ul className="mt-12 grid gap-4">
        {territories.map((t) => (
          <li key={t.slug}>
            <Link
              to="/territoires/$slug"
              params={{ slug: t.slug }}
              className="block rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl text-fg">{t.name}</h2>
                <span
                  className={cn(
                    "text-xs uppercase tracking-wider",
                    t.intensity === "critique"
                      ? "text-danger"
                      : t.intensity === "élevé"
                        ? "text-accent"
                        : "text-muted",
                  )}
                >
                  {t.intensity} · {t.dept}
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-muted">{t.summary}</p>
              <p className="mt-3 text-sm text-accent">
                {t.facts.length} fait{t.facts.length > 1 ? "s" : ""} · {t.examples.length}{" "}
                exemple{t.examples.length > 1 ? "s" : ""} — ouvrir le dossier
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
