import { createFileRoute } from "@tanstack/react-router";
import { SeizureChart } from "@/components/charts";
import { SourceCite } from "@/components/source-cite";
import { cites, timeline } from "@/data/catalog";

export const Route = createFileRoute("/evolution")({ component: EvolutionPage });

function EvolutionPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Série temporelle</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
        Comment le marché a changé d’échelle
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        En vingt ans : des bandes locales à des réseaux transnationaux, d’un cannabis marocain à une
        offre mondialisée, d’une cocaïne rare à 1,1 million d’usagers dans l’année.
      </p>

      <section className="mt-10 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
        <h2 className="font-display text-xl text-fg">Saisies, 2023–2025 (tonnes)</h2>
        <p className="mt-1 text-sm text-muted">
          Une saisie record mesure l’offre au moins autant que l’efficacité. Cocaïne 2025 : +58 %
          sur 2024.
        </p>
        <div className="mt-4">
          <SeizureChart />
        </div>
        <p className="mt-3">
          <SourceCite cite={cites.nunezSaisies} compact />
        </p>
      </section>

      <ol className="mt-12 flex flex-col">
        {timeline.map((ev) => (
          <li key={ev.year} className="relative border-l border-border pl-6 pb-10 last:pb-0">
            <span className="absolute -left-1.5 top-1 size-3 rounded-full bg-primary" />
            <p className="font-mono text-xs tabular-nums text-accent">{ev.year}</p>
            <h2 className="mt-1 font-display text-xl text-fg">{ev.title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{ev.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm text-muted">
        Les volumes 2023 de cocaïne (23,3 t) sont déduits du +130 % annoncé pour 2024 (53,5 t) dans
        la note OFAST telle que relayée par la presse — à lire comme un ordre de grandeur.
      </p>
      <p className="mt-2">
        <SourceCite cite={cites.ofastPresse} />
      </p>
    </main>
  );
}
