import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, c as cn } from "./Layout-43KjouGt.mjs";
import { P as ProductCard } from "./ProductCard-Dy5-7iY2.mjs";
import { P as PRODUCTS, C as CATEGORIES } from "./products-DiCCVl8q.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "./product-watch-BinhcwnV.mjs";
import "./product-inhome-Dnc7O9La.mjs";
import "./product-mobile-BcmcaEHR.mjs";
const programsBg = "/assets/3-VjHJheQg.jpg";
function Programs() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden text-navy-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: programsBg, alt: "MediAlert Programs background", className: "w-full h-full object-cover", style: {
        objectPosition: "center",
        filter: "brightness(0.7) saturate(1.2)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/15 to-navy/20 z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse", children: "Programs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200", children: "Find the protection that fits your life." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400", children: "From discreet ID jewelry to smart watches with GPS — every plan includes free equipment, free shipping, and no contract." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: cn("rounded-full border px-5 py-2 text-sm font-medium transition", active === c ? "border-brand bg-brand text-brand-foreground shadow-card" : "border-border bg-background text-foreground/70 hover:border-brand hover:text-brand"), children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.slug)) })
    ] }) })
  ] });
}
export {
  Programs as component
};
