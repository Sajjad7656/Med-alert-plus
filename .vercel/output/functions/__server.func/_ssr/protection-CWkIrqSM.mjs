import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, P as PageHero, B as Button } from "./Layout-43KjouGt.mjs";
import { C as Clock, S as ShieldCheck, U as Users, P as Phone, W as Wifi, B as Battery, c as CircleCheckBig, a as ArrowRight, T as TriangleAlert } from "../_libs/lucide-react.mjs";
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
function Protection() {
  const features = [{
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Our UL-certified monitoring center is always staffed with EMT-trained specialists ready to help.",
    highlight: true
  }, {
    icon: ShieldCheck,
    title: "Emergency Response",
    description: "Instant connection to emergency services with your location and medical information.",
    highlight: false
  }, {
    icon: Users,
    title: "Family Notifications",
    description: "Your loved ones are immediately informed during any emergency situation.",
    highlight: false
  }, {
    icon: Phone,
    title: "Two-Way Communication",
    description: "Speak directly with our monitoring team through your device's built-in speaker.",
    highlight: false
  }, {
    icon: Wifi,
    title: "Nationwide Coverage",
    description: "4G LTE connectivity ensures protection anywhere in the country.",
    highlight: false
  }, {
    icon: Battery,
    title: "Reliable Power",
    description: "Extended battery life with backup power for continuous protection.",
    highlight: false
  }];
  const plans = [{
    name: "Basic Protection",
    price: "$29.99",
    features: ["24/7 Emergency Monitoring", "In-Home Base Station", "Help Button", "Family Notifications", "Basic Fall Detection"],
    recommended: false
  }, {
    name: "Advanced Protection",
    price: "$39.99",
    features: ["Everything in Basic", "Mobile GPS Device", "Advanced Fall Detection", "Voice Communication", "Medication Reminders"],
    recommended: true
  }, {
    name: "Complete Protection",
    price: "$49.99",
    features: ["Everything in Advanced", "Multiple Devices", "Daily Check-in Calls", "Priority Response", "Premium Support"],
    recommended: false
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "24/7 Protection", title: "Always There When You Need Us Most", subtitle: "Round-the-clock medical alert monitoring with instant emergency response. Your safety is our priority, 24 hours a day, 365 days a year." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Complete Protection Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Our comprehensive protection system combines advanced technology with human care to keep you safe." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-white rounded-2xl p-6 shadow-lg border ${feature.highlight ? "border-brand" : "border-gray-200"} hover:shadow-xl transition-shadow ${feature.highlight ? "ring-2 ring-brand/20" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center justify-center w-12 h-12 ${feature.highlight ? "bg-brand text-white" : "bg-brand/10 text-brand"} rounded-full mb-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-navy mb-3", children: feature.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: feature.description }),
        feature.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs font-semibold text-brand uppercase tracking-wider", children: "Most Important" })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Choose Your Protection Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Select the plan that best fits your needs. All plans include 24/7 monitoring and emergency response." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:grid-cols-3", children: plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative bg-white rounded-2xl border ${plan.recommended ? "border-brand ring-2 ring-brand/20" : "border-gray-200"} shadow-lg hover:shadow-xl transition-all`, children: [
        plan.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white px-4 py-1 rounded-full text-sm font-semibold", children: "RECOMMENDED" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-brand", children: plan.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: feature })
          ] }, featureIndex)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: `w-full ${plan.recommended ? "bg-brand text-brand-foreground" : "bg-gray-100 text-navy hover:bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/renew-plans", children: [
            plan.recommended ? "Get Started" : "Choose Plan",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-br from-brand/5 to-brand/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "How 24/7 Protection Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "From alert to response, our system ensures you get help when you need it most." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-8 w-8 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "1. Press for Help" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Press your alert button or our system detects a fall. Instantly connects to our monitoring center." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "2. We Respond" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our EMT-trained specialist speaks with you, assesses the situation, and gets help on the way." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "3. Help Arrives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Emergency services are dispatched with your location and medical information. Family is notified." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-brand to-brand/90 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-4", children: "Ready for Complete Protection?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-lg mb-8", children: "Join thousands of families who trust MediAlert+ for 24/7 safety and peace of mind." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-brand hover:bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/renew-plans", children: "Get Protected Today" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/compare-plans", children: "Compare Plans" }) })
      ] })
    ] }) })
  ] });
}
export {
  Protection as component
};
