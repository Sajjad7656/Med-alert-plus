import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./Layout-43KjouGt.mjs";
import { l as Check } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          width: 900,
          height: 900,
          className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-gradient-to-r from-brand to-brand/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-foreground shadow-lg border border-white/20", children: product.badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy shadow-md border border-white/50", children: product.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy leading-tight", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: product.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-foreground/90", children: product.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2", children: "Starting from" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold text-brand leading-none", children: [
            "$",
            product.priceFrom.toFixed(2),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: "/mo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "flex-1 bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300", children: "Buy Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              variant: "outline",
              className: "flex-1 border-brand/30 text-brand hover:bg-brand/5 px-4 py-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/guides/${product.slug}`, children: "Setup Guide" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  ProductCard as P
};
