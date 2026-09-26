import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/source-cite-B-Q-4X-b.js
var import_jsx_runtime = require_jsx_runtime();
function SourceCite({ cite, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: cite.url,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "inline-flex items-baseline gap-1 text-accent underline decoration-accent/30 underline-offset-4 transition-opacity duration-150 hover:decoration-accent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: compact ? "text-xs" : "text-sm",
			children: compact ? `${cite.label} (${cite.year})` : `Source : ${cite.label} · ${cite.year}`
		})
	});
}
//#endregion
export { SourceCite as t };
