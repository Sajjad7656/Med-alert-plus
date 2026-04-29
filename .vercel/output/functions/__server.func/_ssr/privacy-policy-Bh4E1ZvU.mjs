import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, P as PageHero } from "./Layout-43KjouGt.mjs";
import { S as ShieldCheck, D as Database, E as Eye, L as Lock, d as User, P as Phone, e as Mail } from "../_libs/lucide-react.mjs";
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
function PrivacyPolicy() {
  const sections = [{
    title: "Information We Collect",
    icon: Database,
    content: ["Personal identification information (name, address, phone, email)", "Medical information relevant to emergency response", "Payment and billing information", "Device usage and monitoring data", "Emergency response history and communications"]
  }, {
    title: "How We Use Your Information",
    icon: Eye,
    content: ["Provide 24/7 emergency monitoring and response", "Maintain and improve our medical alert services", "Communicate with you about your account and services", "Process payments and manage your subscription", "Comply with legal and regulatory requirements"]
  }, {
    title: "Information Protection",
    icon: Lock,
    content: ["HIPAA-compliant data protection and security measures", "Encrypted data transmission and storage", "Limited access to authorized personnel only", "Regular security audits and updates", "Secure backup systems and disaster recovery"]
  }, {
    title: "Your Rights and Choices",
    icon: User,
    content: ["Access to your personal information", "Correction of inaccurate information", "Opt-out of non-essential communications", "Request deletion of your information (where permitted)", "Control over emergency contact preferences"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Privacy Policy", title: "Your Privacy Is Our Priority", subtitle: "Learn how MediAlert+ protects your personal information while providing life-saving medical alert services." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-navy", children: "Our Privacy Commitment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "At MediAlert+, we understand that protecting your personal and medical information is as important as protecting your health. This Privacy Policy explains how we collect, use, and safeguard your information when you use our medical alert services." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We are committed to maintaining the highest standards of privacy and data protection, complying with HIPAA regulations and industry best practices to ensure your information remains secure and confidential." })
      ] }),
      sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(section.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy", children: section.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: section.content.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "✓" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item })
        ] }, itemIndex)) })
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-blue-900", children: "Emergency Information Sharing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-800 mb-4", children: "In emergency situations, we may share your relevant medical and location information with:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Emergency medical services (911, paramedics)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Your designated emergency contacts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Healthcare providers involved in your emergency care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Family members you've authorized to receive notifications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-800 mt-4", children: "This sharing is limited to what's necessary for your emergency care and is done with your explicit consent." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-4", children: "Questions About Your Privacy?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "If you have questions about this Privacy Policy or how we handle your information, please contact our Privacy Officer:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy", children: "privacy@medialertplus.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy", children: "1-800-555-1234" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-4", children: "Policy Updates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Posting the updated policy on our website" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sending email notifications to registered users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Including notices in our monthly newsletters" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-4", children: [
          "Last updated: ",
          (/* @__PURE__ */ new Date()).toLocaleDateString()
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PrivacyPolicy as component
};
