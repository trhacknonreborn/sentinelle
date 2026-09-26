import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cites } from "./catalog-B0dwwvSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sources-B9OyRUBQ.js
var import_jsx_runtime = require_jsx_runtime();
function SourcesPage() {
	const list = Object.values(cites);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Méthode"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Sources et limites"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-4 text-muted leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sentinelle ne produit pas de données originales. Chaque chiffre ou exemple pointe vers un document public : OFDT, SSMSI (ministère de l’Intérieur), Santé publique France, ANSM, parquets, préfectures, Ville de Paris, ministères, presse d’enquête." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Limites assumées : les mis en cause mesurent l’activité des forces de l’ordre autant que le phénomène ; les saisies, l’offre et les contrôles ; la presse, des cas saillants, pas une moyenne. Les noms de réseaux criminels n’apparaissent que lorsqu’ils ont déjà été cités par la justice ou des médias établis." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cette application n’est pas un outil d’investigation, ni une aide à commettre des infractions. Elle ne localise pas de points de vente opérationnels." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 flex flex-col gap-4",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-fg",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs text-muted",
							children: c.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: c.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-2 inline-flex min-h-11 items-center break-all text-sm text-accent underline decoration-accent/30 underline-offset-4",
							children: c.url
						})
					]
				}, c.url))
			})
		]
	});
}
//#endregion
export { SourcesPage as component };
