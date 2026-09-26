import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as nationalStats, t as cites } from "./catalog-B0dwwvSc.mjs";
import { t as SourceCite } from "./source-cite-B-Q-4X-b.mjs";
import { t as FranceAtlas } from "./france-atlas-72oZnH5A.mjs";
import { t as Button } from "./button-CV8K7AZK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWoWGVb9.js
var import_jsx_runtime = require_jsx_runtime();
function StatGrid({ limit }) {
	const items = limit ? nationalStats.slice(0, limit) : nationalStats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-3xl tabular-nums tracking-tight text-fg",
					children: s.value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-sans text-base font-medium leading-snug text-fg",
					children: s.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: s.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, {
						cite: s.cite,
						compact: true
					})
				})
			]
		}, s.id))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "Observatoire de prévention"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-fg sm:text-5xl",
					children: "Voir le trafic tel qu’il est — et ce qu’il fait aux corps, aux rues, aux enfants."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Sentinelle rassemble des faits publics : observatoires (OFDT), statistiques de police (SSMSI), urgences (Santé publique France), parquets, jugements, enquêtes. Pas de sensationnalisme. Des sources cliquables. Un but : prévenir."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/territoires",
							children: ["Territoires documentés", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sante",
							children: "Risques pour la santé"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "L’état des lieux, en six chiffres"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: "Un marché de stimulants en expansion, un cannabis beaucoup plus dosé, des saisies records qui mesurent l’offre autant que la répression."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatGrid, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Où ça se joue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-muted",
					children: "Sept territoires, choisis parce qu’ils sont abondamment documentés — pas parce que les autres sont épargnés."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/territoires",
					className: "text-sm text-accent underline-offset-4 hover:underline",
					children: "Tous les dossiers"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FranceAtlas, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-fg",
							children: "Ce n’est pas un jeu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Guetteurs de 12 ans, fusillades dans des rues habitées, bus détournés, frères de militants assassinés. Le milieu recrute, intimide, et n’offre presque jamais la fortune qu’il promet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/milieu",
							className: "mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4",
							children: "Lire « Le milieu »"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-fg",
							children: "Le produit a changé"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "THC de la résine quasi triplé en trois ans dans les collectes. Cocaïne plus pure, moins chère, 97 passages aux urgences par semaine. Un « joint comme avant » n’existe plus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sante",
							className: "mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4",
							children: "Risques par substance"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-fg",
							children: "Une chronologie"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Des bandes de quartier aux PME criminelles, de Forceval à la loi de 2025. Pour voir l’évolution, pas seulement le fait divers du jour."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/evolution",
							className: "mt-4 inline-flex min-h-11 items-center text-sm text-fg underline decoration-border underline-offset-4",
							children: "Voir l’évolution"
						})
					] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-sm leading-relaxed text-muted",
				children: "Les saisies records (84,3 tonnes de cocaïne en 2025) ne prouvent pas à elles seules que « ça marche » : l’OFDT y lit surtout un marché qui s’étend. Les chiffres de mis en cause dépendent aussi de l’activité policière. Sentinelle les cite tels quels, avec la source."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, { cite: cites.ofdtOffre2024 })
			})]
		})
	] });
}
//#endregion
export { Home as component };
