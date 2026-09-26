import { createFileRoute, Link } from "@tanstack/react-router";
import { SourceCite } from "@/components/source-cite";
import { milieuChapters } from "@/data/catalog";

export const Route = createFileRoute("/milieu")({ component: MilieuPage });

function MilieuPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Ce que le milieu implique</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
        Plus large que la dose
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Le trafic n’est pas seulement un produit et un acheteur. C’est un système d’emploi des
        mineurs, de terreur de proximité, d’argent sale et de silence. Six chapitres, tous sourcés.
      </p>

      <div className="mt-12 flex flex-col gap-14">
        {milieuChapters.map((ch, i) => (
          <article key={ch.id} id={ch.id}>
            <p className="font-mono text-xs tabular-nums text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-1 font-display text-2xl text-fg">{ch.title}</h2>
            <p className="mt-3 font-display text-lg italic text-fg">{ch.lead}</p>
            <p className="mt-4 leading-relaxed text-muted">{ch.body}</p>
            <p className="mt-3">
              <SourceCite cite={ch.cite} />
            </p>
          </article>
        ))}
      </div>

      <aside className="mt-16 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-xl text-fg">Si vous êtes concerné</h2>
        <p className="mt-3 text-muted">
          Un proche mineur qu’on « embauche », une dette, une menace, une consommation qui bascule :
          il existe des portes de sortie, y compris anonymes. Ce n’est pas « balancer le quartier ».
          C’est ne pas rester seul.
        </p>
        <Link
          to="/aide"
          className="mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4"
        >
          Numéros et lieux de soin
        </Link>
      </aside>
    </main>
  );
}
