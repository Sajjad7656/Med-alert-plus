import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, B as Button } from "./Layout-43KjouGt.mjs";
import { S as ShieldCheck, C as Clock, P as Phone, U as Users, c as CircleCheckBig, W as Wifi, B as Battery, M as MapPin, g as Headphones, H as Heart, T as TriangleAlert } from "../_libs/lucide-react.mjs";
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
const howItWorksBg = "/assets/1-DJel-qBS.jpg";
function HowItWorks() {
  const steps = [{
    number: 1,
    title: "Choose Your Plan",
    description: "Select the perfect medical alert system for your needs - in-home, mobile, or comprehensive protection.",
    icon: ShieldCheck,
    features: ["Free consultation", "Expert recommendations", "Flexible pricing plans"]
  }, {
    number: 2,
    title: "Quick Setup",
    description: "Our team helps you set up your device in minutes. No complicated installation or technical knowledge needed.",
    icon: Clock,
    features: ["Professional installation", "User training", "24/7 support"]
  }, {
    number: 3,
    title: "Press for Help",
    description: "In an emergency, simply press your alert button. Instantly connect to our EMT-trained monitoring center.",
    icon: Phone,
    features: ["One-touch activation", "Voice communication", "GPS tracking"]
  }, {
    number: 4,
    title: "24/7 Response",
    description: "Our certified specialists assess your situation, contact emergency services, and notify your loved ones.",
    icon: Users,
    features: ["EMT-trained staff", "Emergency coordination", "Family notifications"]
  }];
  const features = [{
    icon: Wifi,
    title: "Nationwide Coverage",
    description: "4G LTE connectivity ensures you're protected anywhere in the country, at home or on the go."
  }, {
    icon: Battery,
    title: "Long Battery Life",
    description: "Extended battery life with backup power ensures protection even during power outages."
  }, {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Advanced GPS technology pinpoints your location for faster emergency response."
  }, {
    icon: Headphones,
    title: "Two-Way Communication",
    description: "Speak directly with our monitoring team through your device's built-in speaker."
  }];
  const technology = [{
    title: "UL-Certified Monitoring",
    description: "Our monitoring centers meet the highest safety standards in the industry.",
    icon: ShieldCheck
  }, {
    title: "EMT-Trained Specialists",
    description: "Every response specialist is medically trained to handle emergencies professionally.",
    icon: Heart
  }, {
    title: "Advanced Fall Detection",
    description: "Automatic fall detection technology calls for help even if you can't press the button.",
    icon: TriangleAlert
  }, {
    title: "Medical Information Storage",
    description: "Your critical medical information is securely stored and instantly available to responders.",
    icon: CircleCheckBig
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden text-navy-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: howItWorksBg, alt: "Medical alert how it works background", className: "w-full h-full object-cover", style: {
        objectPosition: "center",
        filter: "brightness(0.7) saturate(1.3)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/40 z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse", children: "How It Works" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200", children: "Simple Setup, Complete Protection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400", children: "From choosing your plan to 24/7 emergency monitoring, MediAlert+ makes staying safe simple and reliable." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "4 Simple Steps to Protection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Getting started with MediAlert+ is easy. From consultation to 24/7 monitoring, we're with you every step of the way." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:grid-cols-4", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full text-2xl font-bold mx-auto mb-6", children: step.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-brand/10 text-brand rounded-full mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: step.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-brand flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
          ] }, featureIndex)) })
        ] }),
        index < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand/20 -translate-x-1/2" })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Advanced Protection Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Our medical alert systems combine cutting-edge technology with human compassion to keep you safe." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-brand/10 text-brand rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-navy mb-3", children: feature.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: feature.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: howItWorksBg, alt: "Medical alert technology background", className: "w-full h-full object-cover", style: {
        objectPosition: "center",
        filter: "brightness(0.9) saturate(1.2)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/90 z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-4", children: "Trusted Technology & Expert Care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/90 max-w-2xl mx-auto", children: "We combine certified technology with medical expertise to provide the most reliable protection available." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: technology.map((tech, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(tech.icon, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-white mb-3", children: tech.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80", children: tech.description })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Emergency Response Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "When you need help, every second counts. Here's how our rapid response system works." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-10 w-10 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "Alert Received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your alert signal is instantly received at our monitoring center. We know who you are and where you are." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-20 h-20 bg-brand/10 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-10 w-10 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "Immediate Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our EMT-trained specialist speaks with you through your device to assess the situation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-10 w-10 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-3", children: "Help Dispatched" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Emergency services are contacted with your location and medical information. Family is notified." })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-brand to-brand/90 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-4", children: "Ready to Get Protected?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-lg mb-8", children: "Join thousands of families who trust MediAlert+ for their safety and peace of mind." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-brand hover:bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/programs", children: "Choose Your Plan" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Speak with a Specialist" }) })
      ] })
    ] }) })
  ] });
}
export {
  HowItWorks as component
};
