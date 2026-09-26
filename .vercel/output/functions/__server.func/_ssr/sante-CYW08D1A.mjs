import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-mD6OzPZB.mjs";
import { n as healthTopics, o as quiz } from "./catalog-B0dwwvSc.mjs";
import { n as ThcChart } from "./charts-C3llintk.mjs";
import { t as SourceCite } from "./source-cite-B-Q-4X-b.mjs";
import { t as Button } from "./button-CV8K7AZK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sante-CYW08D1A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PreventionQuiz() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const item = quiz[step];
	if (!item) return null;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-2xl text-fg",
				children: [
					score,
					" / ",
					quiz.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: score >= 4 ? "Vous avez les bons ordres de grandeur. Le plus utile : les transmettre, et connaître le 0 800 23 13 13." : "L’essentiel : le produit a changé, le marché est violent, et l’aide existe — anonyme."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5",
				variant: "outline",
				onClick: () => {
					setStep(0);
					setPicked(null);
					setScore(0);
					setDone(false);
				},
				children: "Recommencer"
			})
		]
	});
	const revealed = picked !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: [
					"Question ",
					step + 1,
					" / ",
					quiz.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-xl text-fg",
				children: item.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-col gap-2",
				children: item.options.map((opt, i) => {
					const isAnswer = i === item.answer;
					const isPick = i === picked;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: revealed,
						onClick: () => {
							setPicked(i);
							if (i === item.answer) setScore((s) => s + 1);
						},
						className: cn("flex min-h-12 w-full items-center rounded-md px-3 py-2 text-left text-sm transition-colors duration-150", !revealed && "bg-surface-2 text-fg hover:shadow-[var(--shadow-border)]", revealed && isAnswer && "bg-ok/20 text-fg", revealed && isPick && !isAnswer && "bg-danger/20 text-fg", revealed && !isAnswer && !isPick && "bg-surface-2 text-muted"),
						children: opt
					}) }, opt);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: item.explain
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: () => {
						if (step + 1 >= quiz.length) setDone(true);
						else {
							setStep((s) => s + 1);
							setPicked(null);
						}
					},
					children: step + 1 >= quiz.length ? "Voir le score" : "Question suivante"
				})]
			}) : null
		]
	});
}
function SantePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Prévention sanitaire"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Ce que la consommation fait au corps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: "Les produits ont changé : plus dosés, plus disponibles, parfois adultérés. Les urgences le mesurent. Ci-dessous, par substance, uniquement des effets documentés — pas une « hiérarchie du mal »."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-fg",
						children: "THC moyen dans les collectes SINTES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Herbe et résine, 2021–2024. Un usage identique n’a plus le même impact neurologique."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThcChart, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-12",
				children: healthTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: topic.id,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: topic.substance
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: topic.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 list-disc space-y-1 pl-5 text-sm text-fg",
							children: topic.risks.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-col gap-4",
							children: topic.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "leading-relaxed text-muted",
									children: f.body
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCite, {
										cite: f.cite,
										compact: true
									})
								})]
							}, f.body.slice(0, 40)))
						})
					]
				}, topic.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "Cinq questions, pour ancrer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Pas un test de moralité. Un contrôle des faits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreventionQuiz, {})
					})
				]
			})
		]
	});
}
//#endregion
export { SantePage as component };
