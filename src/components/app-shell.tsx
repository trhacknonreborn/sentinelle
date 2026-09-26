import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { HelpBar } from "@/components/help-bar";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "État des lieux" },
  { to: "/territoires", label: "Territoires" },
  { to: "/sante", label: "Santé" },
  { to: "/milieu", label: "Le milieu" },
  { to: "/evolution", label: "Évolution" },
  { to: "/aide", label: "Aide" },
  { to: "/sources", label: "Sources" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        Aller au contenu
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-display text-xl tracking-tight text-fg">Sentinelle</span>
            <span className="hidden text-xs uppercase tracking-[0.16em] text-muted sm:inline">
              Faits · Prévention
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "inline-flex min-h-11 items-center px-2.5 text-sm transition-opacity duration-150",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-border px-4 py-3 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex min-h-12 items-center text-base text-fg"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <HelpBar />
      <div id="contenu">{children}</div>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted">
          <p>
            Sentinelle compile des faits publics (OFDT, SSMSI, Santé publique France, parquets,
            presse d’enquête). Ce n’est pas une carte du crime en temps réel, ni un guide
            opérationnel. Objectif : documenter les risques sanitaires et sociaux.
          </p>
          <p>
            En danger immédiat : 15, 17, 112. Écoute addictions : 0 800 23 13 13. Mineur en danger :
            119.
          </p>
        </div>
      </footer>
    </div>
  );
}
