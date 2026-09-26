import { createFileRoute } from "@tanstack/react-router";
import { cites } from "@/data/catalog";

export const Route = createFileRoute("/sources")({ component: SourcesPage });

function SourcesPage() {
  const list = Object.values(cites);
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Méthode</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">Sources et limites</h1>
      <div className="mt-4 space-y-4 text-muted leading-relaxed">
        <p>
          Sentinelle ne produit pas de données originales. Chaque chiffre ou exemple pointe vers un
          document public : OFDT, SSMSI (ministère de l’Intérieur), Santé publique France, ANSM,
          parquets, préfectures, Ville de Paris, ministères, presse d’enquête.
        </p>
        <p>
          Limites assumées : les mis en cause mesurent l’activité des forces de l’ordre autant que
          le phénomène ; les saisies, l’offre et les contrôles ; la presse, des cas saillants, pas
          une moyenne. Les noms de réseaux criminels n’apparaissent que lorsqu’ils ont déjà été
          cités par la justice ou des médias établis.
        </p>
        <p>
          Cette application n’est pas un outil d’investigation, ni une aide à commettre des
          infractions. Elle ne localise pas de points de vente opérationnels.
        </p>
      </div>
      <ol className="mt-10 flex flex-col gap-4">
        {list.map((c) => (
          <li key={c.url} className="border-t border-border pt-4">
            <p className="text-fg">{c.label}</p>
            <p className="mt-1 font-mono text-xs text-muted">{c.year}</p>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center break-all text-sm text-accent underline decoration-accent/30 underline-offset-4"
            >
              {c.url}
            </a>
          </li>
        ))}
      </ol>
    </main>
  );
}
