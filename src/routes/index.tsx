import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FranceAtlas } from "@/components/france-atlas";
import { SourceCite } from "@/components/source-cite";
import { StatGrid } from "@/components/stat-grid";
import { Button } from "@/components/ui/button";
import { cites } from "@/data/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Observatoire de prévention</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-fg sm:text-5xl">
          Voir le trafic tel qu’il est — et ce qu’il fait aux corps, aux rues, aux enfants.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Sentinelle rassemble des faits publics : observatoires (OFDT), statistiques de police
          (SSMSI), urgences (Santé publique France), parquets, jugements, enquêtes. Pas de
          sensationnalisme. Des sources cliquables. Un but : prévenir.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/territoires">
              Territoires documentés
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/sante">Risques pour la santé</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-2xl text-fg">L’état des lieux, en six chiffres</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Un marché de stimulants en expansion, un cannabis beaucoup plus dosé, des saisies records
          qui mesurent l’offre autant que la répression.
        </p>
        <div className="mt-6">
          <StatGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-fg">Où ça se joue</h2>
            <p className="mt-2 max-w-xl text-muted">
              Sept territoires, choisis parce qu’ils sont abondamment documentés — pas parce que les
              autres sont épargnés.
            </p>
          </div>
          <Link to="/territoires" className="text-sm text-accent underline-offset-4 hover:underline">
            Tous les dossiers
          </Link>
        </div>
        <div className="mt-6">
          <FranceAtlas />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3">
          <article>
            <h2 className="font-display text-xl text-fg">Ce n’est pas un jeu</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Guetteurs de 12 ans, fusillades dans des rues habitées, bus détournés, frères de
              militants assassinés. Le milieu recrute, intimide, et n’offre presque jamais la fortune
              qu’il promet.
            </p>
            <Link
              to="/milieu"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4"
            >
              Lire « Le milieu »
            </Link>
          </article>
          <article>
            <h2 className="font-display text-xl text-fg">Le produit a changé</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              THC de la résine quasi triplé en trois ans dans les collectes. Cocaïne plus pure,
              moins chère, 97 passages aux urgences par semaine. Un « joint comme avant » n’existe
              plus.
            </p>
            <Link
              to="/sante"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4"
            >
              Risques par substance
            </Link>
          </article>
          <article>
            <h2 className="font-display text-xl text-fg">Une chronologie</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Des bandes de quartier aux PME criminelles, de Forceval à la loi de 2025. Pour voir
              l’évolution, pas seulement le fait divers du jour.
            </p>
            <Link
              to="/evolution"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4"
            >
              Voir l’évolution
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          Les saisies records (84,3 tonnes de cocaïne en 2025) ne prouvent pas à elles seules que
          « ça marche » : l’OFDT y lit surtout un marché qui s’étend. Les chiffres de mis en cause
          dépendent aussi de l’activité policière. Sentinelle les cite tels quels, avec la source.
        </p>
        <p className="mt-3">
          <SourceCite cite={cites.ofdtOffre2024} />
        <p className="mt-3">
          By TRHACKNON
        </p>
        </p>
      </section>
    </main>
  );
}
