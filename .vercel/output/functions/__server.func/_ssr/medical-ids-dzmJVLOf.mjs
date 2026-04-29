import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, P as PageHero, B as Button } from "./Layout-43KjouGt.mjs";
import { P as PRODUCTS } from "./products-DiCCVl8q.mjs";
import { S as ShieldCheck, H as Heart, U as Users, C as Clock, f as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "./product-watch-BinhcwnV.mjs";
import "./product-inhome-Dnc7O9La.mjs";
import "./product-mobile-BcmcaEHR.mjs";
function MedicalIDs() {
  const medicalIDProducts = PRODUCTS.filter((p) => p.category === "medical-id" || p.name.toLowerCase().includes("medical id") || p.name.toLowerCase().includes("jewelry"));
  const features = [{
    icon: ShieldCheck,
    title: "Custom Engraving",
    description: "Personalized medical information engraved for durability and clarity"
  }, {
    icon: Heart,
    title: "Stylish Designs",
    description: "Modern and traditional medical ID jewelry for every lifestyle"
  }, {
    icon: Users,
    title: "All Ages",
    description: "Medical IDs suitable for children, adults, and seniors"
  }, {
    icon: Clock,
    title: "Quick Access",
    description: "Emergency responders can instantly access your critical medical information"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Medical IDs", title: "Protection That Speaks When You Can't", subtitle: "Professional engraved medical alert jewelry and accessories that communicate your critical medical information in any emergency situation." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold text-navy", children: feature.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: feature.description })
    ] }, index)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-to-b from-background to-cream/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-bold text-navy md:text-5xl", children: [
          "Our Medical ID",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand", children: "Collection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto text-lg text-muted-foreground", children: "Choose from our wide selection of medical alert jewelry and accessories, each professionally engraved with your critical medical information." })
      ] }),
      medicalIDProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: medicalIDProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-brand", children: "Medical ID" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-2", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4 line-clamp-2", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-navy", children: [
                "$",
                product.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/mo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/products/${product.slug}`, children: [
              "View Details ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 h-4 w-4" })
            ] }) })
          ] })
        ] })
      ] }, product.slug)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mx-auto h-16 w-16 text-brand mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-navy mb-2", children: "Medical ID Products Coming Soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We're currently expanding our medical ID collection. Check back soon!" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-brand to-brand/90 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-4", children: "Need Help Choosing the Right Medical ID?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-lg mb-8", children: "Our specialists can help you select the perfect medical alert jewelry that fits your lifestyle and medical needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-brand hover:bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Speak with a Specialist" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:18005551234", children: "Call 1-800-555-1234" }) })
      ] })
    ] }) })
  ] });
}
export {
  MedicalIDs as component
};
