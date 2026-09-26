import { C as require_jsx_runtime, Y as notFound, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-mD6OzPZB.mjs";
import { l as territoryBySlug } from "./catalog-B0dwwvSc.mjs";
import { t as SourceCite } from "./source-cite-B-Q-4X-b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/territoires._slug-BBWSWpMu.js
var import_jsx_runtime = require_jsx_runtime();
function TerritoryPage() {
	const { slug } = Route.useParams();
	const t = territoryBySlug(slug);
	if (!t) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/territoires",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Tous les territoires"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-xs uppercase tracking-[0.2em] text-accent",
				children: [
					t.region,
					" · ",
					t.dept
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight text-fg",
				children: t.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: t.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Faits établis"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-col gap-8",
					children: t.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-border pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-fg",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted",
								children: f.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, { cite: f.cite })
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "Exemples précis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Cas publics, déjà médiatisés ou jugés. Pas d’enquête amateur : lire, comprendre, ne pas « aller voir »."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-col gap-6",
						children: t.examples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tabular-nums text-accent",
									children: ex.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl text-fg",
									children: ex.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 leading-relaxed text-muted",
									children: ex.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, { cite: ex.cite })
								})
							]
						}, ex.title))
					})
				]
			})
		]
	});
}
//#endregion
export { TerritoryPage as component };
