import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, B as Button } from "./Layout-43KjouGt.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as inhome } from "./product-inhome-Dnc7O9La.mjs";
import { m as ArrowLeft, S as ShieldCheck, p as House, W as Wifi, B as Battery, U as Users } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
function InHomeGuide() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Home"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
            "Setup Guide"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-navy md:text-5xl mb-4", children: "In-Home Medical System" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Complete setup instructions for your 24/7 push-button help station with wireless range and battery backup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: inhome, alt: "In-Home Medical System", className: "w-full rounded-2xl shadow-xl" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 bg-gradient-to-br from-navy/10 to-brand/10 rounded-2xl p-8 border border-navy/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: "CL52-4G PENDANT Setup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "MedGuard Alert, Inc." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        step: "1",
        instruction: "Press and hold the Multifunction Button for 6 seconds until it enters 'Learning Mode'."
      }, {
        step: "2",
        instruction: "Press the Personal Help Button."
      }, {
        step: "3",
        instruction: "Press the Multifunction Button again to exit 'Learning Mode'."
      }, {
        step: "4",
        instruction: "Test the device."
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground font-bold text-sm", children: item.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy leading-relaxed", children: item.instruction })
      ] }, item.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-yellow-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
        " Used buttons must be returned."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-navy mb-6", children: "Complete Setup Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: [{
        icon: House,
        title: "Base Station Setup",
        desc: "Place the base station in a central location with access to power and phone line.",
        steps: ["Connect power adapter", "Connect phone line", "Wait for green status light"]
      }, {
        icon: Wifi,
        title: "Button Pairing",
        desc: "Pair your wireless help buttons with the base station using learning mode.",
        steps: ["Enter learning mode", "Press help button", "Confirm pairing", "Exit learning mode"]
      }, {
        icon: Battery,
        title: "Battery Backup",
        desc: "Ensure 4-day battery backup is properly installed and functional.",
        steps: ["Install backup batteries", "Test power outage", "Verify backup status"]
      }, {
        icon: Users,
        title: "Test Connection",
        desc: "Test the connection to our monitoring center to ensure proper operation.",
        steps: ["Press help button", "Speak with operator", "Confirm emergency contact", "Complete test"]
      }].map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-border/50 shadow-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(section.icon, { className: "h-5 w-5 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy", children: section.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: section.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.steps.map((step, stepIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-navy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-brand" }),
          step
        ] }, stepIndex)) })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-brand/10 to-brand-foreground/10 rounded-2xl p-8 border border-brand/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-navy mb-4", children: "Need Help?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Our support team is available 24/7 to help you set up your device and answer any questions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-brand text-brand-foreground hover:bg-brand/90", children: "Call Support: 1-800-555-1234" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-brand/30 text-brand hover:bg-brand/10", children: "Live Chat Support" })
      ] })
    ] })
  ] }) });
}
export {
  InHomeGuide as component
};
