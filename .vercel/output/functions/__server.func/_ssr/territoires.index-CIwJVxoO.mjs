import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-mD6OzPZB.mjs";
import { c as territories } from "./catalog-B0dwwvSc.mjs";
import { t as FranceAtlas } from "./france-atlas-72oZnH5A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/territoires.index-CIwJVxoO.js
var import_jsx_runtime = require_jsx_runtime();
function TerritoiresPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Dossiers territoriaux"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Quartiers, ports, scènes urbaines"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Chaque fiche s’appuie sur un parquet, un bilan préfectoral, un observatoire ou une enquête nominative. Ce n’est pas une carte de « tous les points de deal de France » — une telle carte n’aurait d’ailleurs rien à faire ici."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FranceAtlas, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-4",
				children: territories.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/territoires/$slug",
					params: { slug: t.slug },
					className: "block rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-xs uppercase tracking-wider", t.intensity === "critique" ? "text-danger" : t.intensity === "élevé" ? "text-accent" : "text-muted"),
								children: [
									t.intensity,
									" · ",
									t.dept
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl text-muted",
							children: t.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-accent",
							children: [
								t.facts.length,
								" fait",
								t.facts.length > 1 ? "s" : "",
								" · ",
								t.examples.length,
								" ",
								"exemple",
								t.examples.length > 1 ? "s" : "",
								" — ouvrir le dossier"
							]
						})
					]
				}) }, t.slug))
			})
		]
	});
}
//#endregion
export { TerritoiresPage as component };
