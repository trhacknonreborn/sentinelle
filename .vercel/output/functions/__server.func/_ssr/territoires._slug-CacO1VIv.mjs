import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/territoires._slug-CacO1VIv.js
var import_jsx_runtime = require_jsx_runtime();
function TerritoryNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-fg",
			children: "Territoire introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/territoires",
			className: "mt-4 inline-flex min-h-11 items-center text-accent",
			children: "Retour aux dossiers"
		})]
	});
}
//#endregion
export { TerritoryNotFound as notFoundComponent };
