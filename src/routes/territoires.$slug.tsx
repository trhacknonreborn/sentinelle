import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SourceCite } from "@/components/source-cite";
import { territoryBySlug } from "@/data/catalog";

export const Route = createFileRoute("/territoires/$slug")({
  component: TerritoryPage,
  notFoundComponent: TerritoryNotFound,
});

function TerritoryNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl text-fg">Territoire introuvable</h1>
      <Link to="/territoires" className="mt-4 inline-flex min-h-11 items-center text-accent">
        Retour aux dossiers
      </Link>
    </main>
  );
}

function TerritoryPage() {
  const { slug } = Route.useParams();
  const t = territoryBySlug(slug);
  if (!t) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link
        to="/territoires"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Tous les territoires
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">
        {t.region} · {t.dept}
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-fg">{t.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{t.summary}</p>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Faits établis</h2>
        <div className="mt-6 flex flex-col gap-8">
          {t.facts.map((f) => (
            <article key={f.title} className="border-t border-border pt-6">
              <h3 className="font-display text-xl text-fg">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{f.body}</p>
              <p className="mt-3">
                <SourceCite cite={f.cite} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-fg">Exemples précis</h2>
        <p className="mt-2 text-sm text-muted">
          Cas publics, déjà médiatisés ou jugés. Pas d’enquête amateur : lire, comprendre, ne pas
          « aller voir ».
        </p>
        <div className="mt-6 flex flex-col gap-6">
          {t.examples.map((ex) => (
            <article key={ex.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-xs tabular-nums text-accent">{ex.year}</p>
              <h3 className="mt-1 font-display text-xl text-fg">{ex.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{ex.body}</p>
              <p className="mt-3">
                <SourceCite cite={ex.cite} />
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
