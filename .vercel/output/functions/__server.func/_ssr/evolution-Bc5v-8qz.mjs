import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as timeline, t as cites } from "./catalog-B0dwwvSc.mjs";
import { t as SeizureChart } from "./charts-C3llintk.mjs";
import { t as SourceCite } from "./source-cite-B-Q-4X-b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evolution-Bc5v-8qz.js
var import_jsx_runtime = require_jsx_runtime();
function EvolutionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Série temporelle"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Comment le marché a changé d’échelle"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: "En vingt ans : des bandes locales à des réseaux transnationaux, d’un cannabis marocain à une offre mondialisée, d’une cocaïne rare à 1,1 million d’usagers dans l’année."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-fg",
						children: "Saisies, 2023–2025 (tonnes)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Une saisie record mesure l’offre au moins autant que l’efficacité. Cocaïne 2025 : +58 % sur 2024."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeizureChart, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, {
							cite: cites.nunezSaisies,
							compact: true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 flex flex-col",
				children: timeline.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative border-l border-border pl-6 pb-10 last:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-1.5 top-1 size-3 rounded-full bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tabular-nums text-accent",
							children: ev.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl text-fg",
							children: ev.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: ev.body
						})
					]
				}, ev.year))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "Les volumes 2023 de cocaïne (23,3 t) sont déduits du +130 % annoncé pour 2024 (53,5 t) dans la note OFAST telle que relayée par la presse — à lire comme un ordre de grandeur."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, { cite: cites.ofastPresse })
			})
		]
	});
}
//#endregion
export { EvolutionPage as component };
