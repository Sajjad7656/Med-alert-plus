import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, P as PageHero } from "./Layout-43KjouGt.mjs";
import { S as ShieldCheck, F as FileText, b as CreditCard, T as TriangleAlert, C as Clock, U as Users, c as CircleCheckBig, H as Heart } from "../_libs/lucide-react.mjs";
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
function TermsOfService() {
  const sections = [{
    title: "Service Agreement",
    icon: FileText,
    content: ["MediAlert+ provides 24/7 medical alert monitoring services", "Services are provided on a subscription basis with monthly billing", "You must be at least 18 years old to subscribe to our services", "Services are intended for personal emergency response use only", "You agree to provide accurate and complete information"]
  }, {
    title: "Payment Terms",
    icon: CreditCard,
    content: ["Monthly subscription fees are billed in advance", "Payment methods include credit card, debit card, or bank transfer", "All fees are non-refundable except as required by law", "Prices may change with 30 days written notice", "Late payments may result in service interruption"]
  }, {
    title: "Service Limitations",
    icon: TriangleAlert,
    content: ["MediAlert+ is not a substitute for professional medical care", "We do not provide medical diagnosis or treatment", "Service availability depends on cellular network coverage", "Devices require regular maintenance and battery replacement", "We are not liable for device malfunction or user error"]
  }, {
    title: "Emergency Response",
    icon: Clock,
    content: ["We coordinate with emergency services when appropriate", "Response times depend on local emergency services", "We notify designated emergency contacts during emergencies", "Medical information is shared only with authorized personnel", "We stay on the line until help arrives when possible"]
  }, {
    title: "User Responsibilities",
    icon: Users,
    content: ["Maintain your device in good working condition", "Keep your contact information up to date", "Test your device regularly as recommended", "Use the service only for legitimate emergency situations", "Follow all device usage and safety guidelines"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Terms of Service", title: "Professional Medical Alert Services Agreement", subtitle: "Terms and conditions for MediAlert+ medical alert monitoring services and emergency response." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-navy", children: "Terms and Conditions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Welcome to MediAlert+. These Terms of Service govern your use of our medical alert monitoring services. By subscribing to our services, you agree to these terms and conditions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Please read these terms carefully before using our services. If you have any questions, please contact our customer service team." })
      ] }),
      sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(section.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy", children: section.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: section.content.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-brand flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item })
        ] }, itemIndex)) })
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-2xl p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6 text-red-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-red-900", children: "Important Disclaimers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-red-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medical Emergency:" }),
            " MediAlert+ is not a substitute for professional medical care. In case of a medical emergency, always call 911 or your local emergency services first."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Device Limitations:" }),
            " Our devices depend on cellular networks and power sources. Service may be interrupted due to technical issues, network outages, or power failures."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Response Times:" }),
            " While we strive for rapid response, actual emergency response times depend on local emergency services and factors beyond our control."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-6", children: "Liability and Warranty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-navy mb-2", children: "Limited Liability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "To the fullest extent permitted by law, MediAlert+ shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-navy mb-2", children: "Service Warranty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We warrant that our services will be performed in a professional manner. If you're not satisfied with our services, we will work to resolve the issue or offer a prorated refund." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-navy mb-2", children: "Indemnification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "You agree to indemnify and hold MediAlert+ harmless from any claims arising from your use or misuse of our services." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-4", children: "Service Termination" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• You may cancel your subscription at any time with 30 days written notice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• MediAlert+ may terminate service for violations of these terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Upon termination, you must return all MediAlert+ equipment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Final billing will include any outstanding charges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Emergency contact information will be securely disposed of" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy", children: "Questions About Our Terms?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "If you have any questions about these Terms of Service, please contact our legal department:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy", children: "Email: legal@medialertplus.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy", children: "Phone: 1-800-555-1234" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy", children: "Address: 100 Health Plaza, Boston, MA 02118" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-6", children: [
          "Last updated: ",
          (/* @__PURE__ */ new Date()).toLocaleDateString()
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TermsOfService as component
};
