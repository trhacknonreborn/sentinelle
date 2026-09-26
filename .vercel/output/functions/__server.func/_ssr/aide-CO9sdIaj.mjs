import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-mD6OzPZB.mjs";
import { r as helpResources } from "./catalog-B0dwwvSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aide-CO9sdIaj.js
var import_jsx_runtime = require_jsx_runtime();
function AidePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Orientation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg",
				children: "Parler, se soigner, protéger"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: "Rien de ce qui suit n’est une dénonciation forcée. Les CSAPA reçoivent sans jugement, les lignes d’écoute sont anonymes, le 119 protège les enfants. Si c’est urgent, composez avant de finir la page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 flex flex-col gap-3",
				children: helpResources.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-fg",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs uppercase tracking-wider", r.kind === "urgence" ? "text-danger" : "text-accent"),
								children: r.kind
							})]
						}),
						r.phone.startsWith("0") || r.phone === "15" || r.phone === "119" || r.phone === "3114" || r.phone.startsWith("17") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${r.phone.replace(/\s/g, "").split("/")[0]}`,
							className: "mt-2 inline-flex min-h-11 items-center font-mono text-lg tabular-nums text-primary",
							children: r.phone
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-sm text-muted",
							children: r.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: r.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: r.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-3 inline-flex min-h-11 items-center text-sm text-accent underline decoration-accent/30 underline-offset-4",
							children: "Ouvrir le site"
						})
					]
				}, r.name))
			})
		]
	});
}
//#endregion
export { AidePage as component };
