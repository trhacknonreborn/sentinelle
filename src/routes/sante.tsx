import { createFileRoute } from "@tanstack/react-router";
import { ThcChart } from "@/components/charts";
import { PreventionQuiz } from "@/components/quiz";
import { SourceCite } from "@/components/source-cite";
import { healthTopics } from "@/data/catalog";

export const Route = createFileRoute("/sante")({ component: SantePage });

function SantePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Prévention sanitaire</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
        Ce que la consommation fait au corps
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Les produits ont changé : plus dosés, plus disponibles, parfois adultérés. Les urgences le
        mesurent. Ci-dessous, par substance, uniquement des effets documentés — pas une
        « hiérarchie du mal ».
      </p>

      <section className="mt-10 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
        <h2 className="font-display text-xl text-fg">THC moyen dans les collectes SINTES</h2>
        <p className="mt-1 text-sm text-muted">
          Herbe et résine, 2021–2024. Un usage identique n’a plus le même impact neurologique.
        </p>
        <div className="mt-4">
          <ThcChart />
        </div>
      </section>

      <div className="mt-12 flex flex-col gap-12">
        {healthTopics.map((topic) => (
          <article key={topic.id} id={topic.id}>
            <h2 className="font-display text-2xl text-fg">{topic.substance}</h2>
            <p className="mt-2 text-muted">{topic.short}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-fg">
              {topic.risks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-4">
              {topic.facts.map((f) => (
                <div key={f.body.slice(0, 40)} className="rounded-lg bg-surface p-4">
                  <p className="leading-relaxed text-muted">{f.body}</p>
                  <p className="mt-2">
                    <SourceCite cite={f.cite} compact />
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-fg">Cinq questions, pour ancrer</h2>
        <p className="mt-2 text-muted">Pas un test de moralité. Un contrôle des faits.</p>
        <div className="mt-6">
          <PreventionQuiz />
        </div>
      </section>
    </main>
  );
}
