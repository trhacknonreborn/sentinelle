import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as milieuChapters } from "./catalog-B0dwwvSc.mjs";
import { t as SourceCite } from "./source-cite-B-Q-4X-b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/milieu-JCs5IgZc.js
var import_jsx_runtime = require_jsx_runtime();
function MilieuPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Ce que le milieu implique"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Plus large que la dose"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: "Le trafic n’est pas seulement un produit et un acheteur. C’est un système d’emploi des mineurs, de terreur de proximité, d’argent sale et de silence. Six chapitres, tous sourcés."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-14",
				children: milieuChapters.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: ch.id,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tabular-nums text-accent",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl text-fg",
							children: ch.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-lg italic text-fg",
							children: ch.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: ch.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, { cite: ch.cite })
						})
					]
				}, ch.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-16 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-fg",
						children: "Si vous êtes concerné"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Un proche mineur qu’on « embauche », une dette, une menace, une consommation qui bascule : il existe des portes de sortie, y compris anonymes. Ce n’est pas « balancer le quartier ». C’est ne pas rester seul."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/aide",
						className: "mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4",
						children: "Numéros et lieux de soin"
					})
				]
			})
		]
	});
}
//#endregion
export { MilieuPage as component };
