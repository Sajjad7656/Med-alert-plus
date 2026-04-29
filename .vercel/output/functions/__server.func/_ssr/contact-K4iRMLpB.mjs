import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, B as Button } from "./Layout-43KjouGt.mjs";
import { L as Label, T as Textarea, I as Input } from "./label-Bw5W-nrs.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Phone, e as Mail, h as MessageCircle, M as MapPin, S as ShieldCheck, i as Send } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const caregiver = "/assets/4-CaR6itYv.jpg";
function Contact() {
  const [sending, setSending] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! Our care team will reach out within 1 business day.");
      e.target.reset();
    }, 800);
  };
  const contactMethods = [{
    icon: Phone,
    title: "Call Us",
    primary: "1-800-555-1234",
    secondary: "Available 24/7/365",
    description: "Speak directly with our care specialists"
  }, {
    icon: Mail,
    title: "Email Support",
    primary: "care@medialertplus.com",
    secondary: "Replies within 1 business day",
    description: "Send detailed inquiries and documentation"
  }, {
    icon: MessageCircle,
    title: "Live Chat",
    primary: "Chat Available Now",
    secondary: "Average wait: < 2 minutes",
    description: "Get instant answers to your questions"
  }, {
    icon: MapPin,
    title: "Visit Us",
    primary: "100 Health Plaza",
    secondary: "Boston, MA 02118",
    description: "Schedule an in-person consultation"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden text-navy-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: caregiver, alt: "Contact MediAlert background", className: "w-full h-full object-cover", style: {
        objectPosition: "center",
        filter: "brightness(0.6) saturate(1.3)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/25 via-navy/15 to-navy/25 z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse animate-bounce-in", children: "Contact Us" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200 animate-slide-in-left", children: "We're Here to Help, 24/7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 animate-slide-in-right", children: "Speak with real people who care. No automated systems, just compassionate support from our expert team." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Multiple Ways to Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Choose the contact method that works best for you. We're always available when you need us." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: contactMethods.map((method, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(method.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-navy mb-2", children: method.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy mb-1", children: method.primary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-3", children: method.secondary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: method.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-navy mb-4", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Have questions about our medical alert systems? Need help choosing the right plan? Our team is ready to provide personalized assistance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-white rounded-2xl border border-gray-200 shadow-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "first-name", label: "First Name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "last-name", label: "Last Name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "email", label: "Email Address", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "phone", label: "Phone Number", type: "tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "subject", label: "Subject", required: true, placeholder: "How can we help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "urgency", label: "Urgency", placeholder: "Select urgency level" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", required: true, className: "mt-2 min-h-[160px]", placeholder: "Please provide details about your inquiry..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "best-time", children: "Best Time to Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "best-time", className: "mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Any time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Morning (9AM - 12PM)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Afternoon (12PM - 5PM)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Evening (5PM - 8PM)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "inline h-4 w-4 mr-1" }),
              "Your information is secure and confidential"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: sending, size: "lg", className: "bg-brand text-brand-foreground hover:bg-brand/90 px-8", children: sending ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: caregiver, alt: "MediAlert+ care team member helping a senior", className: "w-full h-auto object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/95 backdrop-blur-sm rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-navy mb-2", children: "24/7 Support Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Our dedicated team is always here to help you and your loved ones." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-brand font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              "1-800-555-1234"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: [{
          icon: Phone,
          title: "Call Us",
          info: "1-800-555-1234",
          sub: "24/7 Available"
        }, {
          icon: Mail,
          title: "Email",
          info: "care@medialertplus.com",
          sub: "Quick Response"
        }, {
          icon: MapPin,
          title: "Visit",
          info: "Boston, MA",
          sub: "By Appointment"
        }].map((method, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(method.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-navy", children: method.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-brand font-medium", children: method.info }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: method.sub })
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-red-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-red-900", children: "Emergency Support" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-800 text-sm mb-3", children: "For immediate medical emergencies, please call 911 or press your medical alert button." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-900 font-semibold", children: "24/7 Emergency Monitoring Available" })
        ] })
      ] })
    ] }) }) })
  ] });
}
function Field({
  id,
  label,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: id, children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id, type, required, placeholder, className: "mt-2" })
  ] });
}
export {
  Contact as component
};
