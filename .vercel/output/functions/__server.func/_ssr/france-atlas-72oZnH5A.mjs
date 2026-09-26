import { C as require_jsx_runtime, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-mD6OzPZB.mjs";
import { c as territories } from "./catalog-B0dwwvSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/france-atlas-72oZnH5A.js
var import_jsx_runtime = require_jsx_runtime();
var W = 280;
var H = 300;
var LABEL_OFF = {
	paris: {
		dx: -42,
		dy: -10
	},
	"seine-saint-denis": {
		dx: 12,
		dy: 6
	},
	lyon: {
		dx: -34,
		dy: 0
	},
	grenoble: {
		dx: 10,
		dy: 14
	},
	marseille: {
		dx: 10,
		dy: 4
	},
	"le-havre": {
		dx: 10,
		dy: 4
	}
};
function project(lat, lng) {
	return {
		x: (lng - -5.2) / 14.8 * W,
		y: (51.2 - lat) / 9 * H
	};
}
function FranceAtlas() {
	const navigate = useNavigate();
	const mainland = territories.filter((t) => t.slug !== "guyane");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `-8 -8 320 316`,
				className: "h-auto w-full",
				role: "img",
				"aria-label": "Carte de France avec les territoires documentés",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M108 8 L128 14 L140 28 L168 48 L186 70 L190 96 L182 128 L176 158 L180 188 L168 214 L142 228 L108 234 L78 226 L48 214 L28 196 L16 168 L10 132 L8 98 L18 68 L36 42 L62 22 L86 10 Z",
						fill: "#1e1e20",
						stroke: "#9aa8b8",
						strokeOpacity: "0.35",
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "228",
						cy: "210",
						rx: "14",
						ry: "22",
						fill: "#1e1e20",
						stroke: "#9aa8b8",
						strokeOpacity: "0.35",
						strokeWidth: "1.2"
					}),
					mainland.map((t) => {
						const { x, y } = project(t.lat, t.lng);
						const off = LABEL_OFF[t.slug] ?? {
							dx: 10,
							dy: 4
						};
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "cursor-pointer",
							role: "link",
							tabIndex: 0,
							onClick: () => navigate({
								to: "/territoires/$slug",
								params: { slug: t.slug }
							}),
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									navigate({
										to: "/territoires/$slug",
										params: { slug: t.slug }
									});
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: x,
								cy: y,
								r: t.intensity === "critique" ? 7 : 5.5,
								fill: "#c5cdd8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: x + off.dx,
								y: y + off.dy,
								fill: "#f1efe8",
								fontSize: "11",
								fontFamily: "Source Sans 3, sans-serif",
								children: t.name.split("—")[0]?.trim()
							})]
						}, t.slug);
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 px-1 text-xs text-muted",
				children: "Carte schématique. Les points marquent des territoires documentés, pas une liste exhaustive des points de vente."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: territories.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => navigate({
					to: "/territoires/$slug",
					params: { slug: t.slug }
				}),
				className: "flex min-h-14 w-full items-center justify-between rounded-lg bg-surface px-3 py-2 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-fg",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted",
					children: t.dept
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-xs uppercase tracking-wider", t.intensity === "critique" ? "text-danger" : t.intensity === "élevé" ? "text-accent" : "text-muted"),
					children: t.intensity
				})]
			}) }, t.slug))
		})]
	});
}
//#endregion
export { FranceAtlas as t };
