import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, P as PageHero, B as Button } from "./Layout-43KjouGt.mjs";
import { j as Star, c as CircleCheckBig, X, a as ArrowRight, P as Phone } from "../_libs/lucide-react.mjs";
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
function ComparePlans() {
  const plans = [{
    name: "Basic Protection",
    price: "$29.99",
    period: "per month",
    recommended: false,
    features: {
      "24/7 Emergency Monitoring": true,
      "In-Home Base Station": true,
      "Help Button": true,
      "Family Notifications": true,
      "Basic Fall Detection": true,
      "Mobile GPS Device": false,
      "Advanced Fall Detection": false,
      "Voice Communication": false,
      "Medication Reminders": false,
      "Multiple Devices": false,
      "Daily Check-in Calls": false,
      "Priority Response": false,
      "Premium Support": false,
      "Waterproof Device": false,
      "Battery Backup": true
    }
  }, {
    name: "Advanced Protection",
    price: "$39.99",
    period: "per month",
    recommended: true,
    features: {
      "24/7 Emergency Monitoring": true,
      "In-Home Base Station": true,
      "Help Button": true,
      "Family Notifications": true,
      "Basic Fall Detection": true,
      "Mobile GPS Device": true,
      "Advanced Fall Detection": true,
      "Voice Communication": true,
      "Medication Reminders": true,
      "Multiple Devices": false,
      "Daily Check-in Calls": false,
      "Priority Response": false,
      "Premium Support": false,
      "Waterproof Device": true,
      "Battery Backup": true
    }
  }, {
    name: "Complete Protection",
    price: "$49.99",
    period: "per month",
    recommended: false,
    features: {
      "24/7 Emergency Monitoring": true,
      "In-Home Base Station": true,
      "Help Button": true,
      "Family Notifications": true,
      "Basic Fall Detection": true,
      "Mobile GPS Device": true,
      "Advanced Fall Detection": true,
      "Voice Communication": true,
      "Medication Reminders": true,
      "Multiple Devices": true,
      "Daily Check-in Calls": true,
      "Priority Response": true,
      "Premium Support": true,
      "Waterproof Device": true,
      "Battery Backup": true
    }
  }];
  const featureCategories = {
    "Core Protection": ["24/7 Emergency Monitoring", "In-Home Base Station", "Help Button", "Family Notifications"],
    "Detection Technology": ["Basic Fall Detection", "Advanced Fall Detection", "Waterproof Device"],
    "Mobile Features": ["Mobile GPS Device", "Voice Communication", "Battery Backup"],
    "Advanced Services": ["Medication Reminders", "Multiple Devices", "Daily Check-in Calls", "Priority Response", "Premium Support"]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Compare Plans", title: "Find Your Perfect Protection", subtitle: "Compare our medical alert protection plans side-by-side to choose the best coverage for your needs and budget." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full bg-white rounded-2xl shadow-xl border border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-6 font-semibold text-navy", children: "Features" }),
        plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `p-6 text-center ${plan.recommended ? "bg-brand/10" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand", children: plan.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: plan.period }),
          plan.recommended && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
            "RECOMMENDED"
          ] })
        ] }) }, index))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.entries(featureCategories).map(([category, features]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "p-4 font-semibold text-navy", children: category }) }),
        features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium text-navy", children: feature }),
          plans.map((plan, planIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: plan.features[feature] ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-green-600" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-gray-300" }) }) }, planIndex))
        ] }, feature))
      ] }, category)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6" }),
        plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: `w-full ${plan.recommended ? "bg-brand text-brand-foreground" : "bg-gray-100 text-navy hover:bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/renew-plans", children: [
          plan.recommended ? "Get Started" : "Choose Plan",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) }) }, index))
      ] }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Choose Your Protection Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Select the perfect plan for your needs with comprehensive protection features." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: "Basic Protection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-brand", children: "$29.99" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "24/7 Monitoring" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "In-Home Base Station" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Help Button" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full bg-gray-100 text-navy hover:bg-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/renew-plans", children: [
            "Choose Plan ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl border-2 border-brand ring-2 ring-brand/20 overflow-hidden hover:shadow-2xl transition-shadow relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold", children: "RECOMMENDED" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: "Advanced Protection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-brand", children: "$39.99" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/month" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Everything in Basic" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mobile GPS Device" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Advanced Fall Detection" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/renew-plans", children: [
              "Choose Plan ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: "Complete Protection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-brand", children: "$49.99" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Everything in Advanced" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Multiple Devices" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Priority Response" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full bg-gray-100 text-navy hover:bg-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/renew-plans", children: [
            "Choose Plan ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Need Help Choosing?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Our protection specialists can help you select the perfect plan based on your specific needs and lifestyle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Speak with a Specialist" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:18005551234", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
          "Call 1-800-555-1234"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  ComparePlans as component
};
