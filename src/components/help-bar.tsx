import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HelpBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5">
        <p className="text-sm text-muted">
          Écoute anonyme 7j/7 · 8h–2h
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:0800231313"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ok px-3.5 text-sm font-medium text-bg"
          >
            <Phone className="size-4" strokeWidth={2} />
            0 800 23 13 13
          </a>
          <Link
            to="/aide"
            className="inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4"
          >
            Tous les secours
          </Link>
        </div>
      </div>
    </div>
  );
}
