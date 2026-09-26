import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as seizureSeries, u as thcSeries } from "./catalog-B0dwwvSc.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/charts-C3llintk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useMounted() {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	return on;
}
var tooltipStyle = {
	background: "#161617",
	border: "1px solid #2c2c2e",
	borderRadius: 8,
	color: "#f1efe8",
	fontSize: 12
};
function SeizureChart() {
	if (!useMounted()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 rounded-xl bg-surface" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: seizureSeries,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "#2c2c2e",
						strokeDasharray: "3 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						stroke: "#8b8a84",
						tick: {
							fill: "#8b8a84",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						stroke: "#8b8a84",
						tick: {
							fill: "#8b8a84",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						fontSize: 12,
						color: "#8b8a84"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "cocaine",
						name: "Cocaïne (tonnes saisies)",
						stroke: "#c5cdd8",
						strokeWidth: 2,
						dot: { r: 3 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "cannabis",
						name: "Cannabis (tonnes saisies)",
						stroke: "#7a9a84",
						strokeWidth: 2,
						dot: { r: 3 }
					})
				]
			})
		})
	});
}
function ThcChart() {
	if (!useMounted()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56 rounded-xl bg-surface" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: thcSeries,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "#2c2c2e",
						strokeDasharray: "3 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "year",
						stroke: "#8b8a84",
						tick: {
							fill: "#8b8a84",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						stroke: "#8b8a84",
						tick: {
							fill: "#8b8a84",
							fontSize: 12
						},
						unit: "%",
						domain: [0, 40]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						fontSize: 12,
						color: "#8b8a84"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "herbe",
						name: "THC herbe (%)",
						stroke: "#c5cdd8",
						strokeWidth: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "resine",
						name: "THC résine (%)",
						stroke: "#c45c4a",
						strokeWidth: 2
					})
				]
			})
		})
	});
}
//#endregion
export { ThcChart as n, SeizureChart as t };
