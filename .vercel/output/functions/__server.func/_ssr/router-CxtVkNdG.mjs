import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, O as Outlet, S as Scripts, L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-Dm2kI5g3.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$e = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MediAlert - Professional Medical Alert Systems" },
      { name: "description", content: "MediAlert provides 24/7 medical alert monitoring and emergency response services for seniors and individuals needing protection." },
      { name: "author", content: "MediAlert" },
      { property: "og:title", content: "MediAlert - Professional Medical Alert Systems" },
      { property: "og:description", content: "24/7 medical alert monitoring and emergency response services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@MediAlert" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { suppressHydrationWarning: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$d = () => import("./why-us-DZwK2BzS.mjs");
const Route$d = createFileRoute("/why-us")({
  head: () => ({
    meta: [{
      title: "Why Choose MediAlert — Trusted Medical Alert Protection"
    }, {
      name: "description",
      content: "Discover why families trust MediAlert for 24/7 emergency response, certified monitoring, and comprehensive medical alert solutions."
    }, {
      property: "og:title",
      content: "Why Choose MediAlert"
    }, {
      property: "og:description",
      content: "Professional medical alert protection with cutting-edge technology and compassionate care."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./terms-of-service-CMPZ48rO.mjs");
const Route$c = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [{
      title: "Terms of Service - MediAlert+"
    }, {
      name: "description",
      content: "MediAlert+ terms of service and conditions. Professional medical alert monitoring services agreement."
    }, {
      property: "og:title",
      content: "Terms of Service - MediAlert+"
    }, {
      property: "og:description",
      content: "Professional medical alert services terms and conditions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./renew-plans-BgjKv6ee.mjs");
const Route$b = createFileRoute("/renew-plans")({
  head: () => ({
    meta: [{
      title: "Renew Your Protection Plan - MediAlert+"
    }, {
      name: "description",
      content: "Renew your MediAlert+ protection plan for continued 24/7 medical alert monitoring and emergency response."
    }, {
      property: "og:title",
      content: "Renew Your Plan - MediAlert+"
    }, {
      property: "og:description",
      content: "Continue your protection with MediAlert+ medical alert systems."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./protection-CWkIrqSM.mjs");
const Route$a = createFileRoute("/protection")({
  head: () => ({
    meta: [{
      title: "24/7 Protection - MediAlert+ Medical Alert Systems"
    }, {
      name: "description",
      content: "Comprehensive 24/7 medical alert protection with emergency monitoring, GPS tracking, and nationwide coverage. Stay safe with MediAlert+."
    }, {
      property: "og:title",
      content: "24/7 Protection - MediAlert+"
    }, {
      property: "og:description",
      content: "Round-the-clock medical alert protection for peace of mind."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./programs-BCxrt233.mjs");
const Route$9 = createFileRoute("/programs")({
  head: () => ({
    meta: [{
      title: "Programs & Devices — MediAlert+ Medical Alert Systems"
    }, {
      name: "description",
      content: "Explore our full range of medical alert devices: smart watches, in-home systems, mobile devices, ID jewelry, and more."
    }, {
      property: "og:title",
      content: "Programs & Devices — MediAlert+"
    }, {
      property: "og:description",
      content: "Find the perfect medical alert plan for your lifestyle."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./privacy-policy-Bh4E1ZvU.mjs");
const Route$8 = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy - MediAlert+"
    }, {
      name: "description",
      content: "MediAlert+ privacy policy - How we collect, use, and protect your personal information. HIPAA compliant medical alert services."
    }, {
      property: "og:title",
      content: "Privacy Policy - MediAlert+"
    }, {
      property: "og:description",
      content: "Your privacy is our priority. Learn how we protect your information."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./medical-ids-dzmJVLOf.mjs");
const Route$7 = createFileRoute("/medical-ids")({
  head: () => ({
    meta: [{
      title: "Medical IDs - Engraved Medical Alert Jewelry | MediAlert+"
    }, {
      name: "description",
      content: "Professional engraved medical ID jewelry and accessories that speak for you when you can't. Custom medical alert IDs for all conditions."
    }, {
      property: "og:title",
      content: "Medical IDs - MediAlert+"
    }, {
      property: "og:description",
      content: "Custom engraved medical alert jewelry for your safety."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./how-it-works-BkhArtsf.mjs");
const Route$6 = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [{
      title: "How It Works - MediAlert+ Medical Alert Systems"
    }, {
      name: "description",
      content: "Learn how MediAlert+ medical alert systems work - from setup to 24/7 emergency monitoring. Simple, reliable protection for peace of mind."
    }, {
      property: "og:title",
      content: "How MediAlert+ Works"
    }, {
      property: "og:description",
      content: "Simple setup, 24/7 protection, complete peace of mind."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-K4iRMLpB.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact MediAlert+ — Speak With Our Care Team"
    }, {
      name: "description",
      content: "Talk to a MediAlert+ specialist 24/7 about plans, devices, or partnerships. Call, email, or send a message."
    }, {
      property: "og:title",
      content: "Contact MediAlert+"
    }, {
      property: "og:description",
      content: "Reach our care team 24/7 — we're here to help."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./compare-plans-ByHCwjLc.mjs");
const Route$4 = createFileRoute("/compare-plans")({
  head: () => ({
    meta: [{
      title: "Compare Protection Plans - MediAlert+"
    }, {
      name: "description",
      content: "Compare MediAlert+ medical alert protection plans to find the perfect fit for your needs. Features, pricing, and coverage comparison."
    }, {
      property: "og:title",
      content: "Compare Plans - MediAlert+"
    }, {
      property: "og:description",
      content: "Find the right protection plan for your needs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-snJ2aV4h.mjs");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MediAlert+ — 24/7 Medical Alert Systems & ID Protection"
    }, {
      name: "description",
      content: "Trusted medical alert systems, ID jewelry, and 24/7 emergency monitoring for seniors and people with health conditions."
    }, {
      property: "og:title",
      content: "MediAlert+ — Protection You Trust"
    }, {
      property: "og:description",
      content: "Trusted medical alert systems and 24/7 monitoring for peace of mind."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./guides.personal-alert-device-system-C1Is5ElQ.mjs");
const Route$2 = createFileRoute("/guides/personal-alert-device-system")({
  head: () => ({
    meta: [{
      title: "Personal Alert Device System Setup Guide - MediAlert+"
    }, {
      name: "description",
      content: "Complete setup guide for the Personal Alert Device System with step-by-step instructions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./guides.personal-4g-care-watch-Dp0wOHBB.mjs");
const Route$1 = createFileRoute("/guides/personal-4g-care-watch")({
  head: () => ({
    meta: [{
      title: "Personal 4G Care Watch Setup Guide - MediAlert+"
    }, {
      name: "description",
      content: "Complete setup guide for the Personal 4G Care Watch with step-by-step instructions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./guides.in-home-medical-system-Do2MhqJr.mjs");
const Route = createFileRoute("/guides/in-home-medical-system")({
  head: () => ({
    meta: [{
      title: "In-Home Medical System Setup Guide - MediAlert+"
    }, {
      name: "description",
      content: "Complete setup guide for the In-Home Medical System with step-by-step instructions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WhyUsRoute = Route$d.update({
  id: "/why-us",
  path: "/why-us",
  getParentRoute: () => Route$e
});
const TermsOfServiceRoute = Route$c.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$e
});
const RenewPlansRoute = Route$b.update({
  id: "/renew-plans",
  path: "/renew-plans",
  getParentRoute: () => Route$e
});
const ProtectionRoute = Route$a.update({
  id: "/protection",
  path: "/protection",
  getParentRoute: () => Route$e
});
const ProgramsRoute = Route$9.update({
  id: "/programs",
  path: "/programs",
  getParentRoute: () => Route$e
});
const PrivacyPolicyRoute = Route$8.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$e
});
const MedicalIdsRoute = Route$7.update({
  id: "/medical-ids",
  path: "/medical-ids",
  getParentRoute: () => Route$e
});
const HowItWorksRoute = Route$6.update({
  id: "/how-it-works",
  path: "/how-it-works",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const ComparePlansRoute = Route$4.update({
  id: "/compare-plans",
  path: "/compare-plans",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const GuidesPersonalAlertDeviceSystemRoute = Route$2.update({
  id: "/guides/personal-alert-device-system",
  path: "/guides/personal-alert-device-system",
  getParentRoute: () => Route$e
});
const GuidesPersonal4gCareWatchRoute = Route$1.update({
  id: "/guides/personal-4g-care-watch",
  path: "/guides/personal-4g-care-watch",
  getParentRoute: () => Route$e
});
const GuidesInHomeMedicalSystemRoute = Route.update({
  id: "/guides/in-home-medical-system",
  path: "/guides/in-home-medical-system",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  ComparePlansRoute,
  ContactRoute,
  HowItWorksRoute,
  MedicalIdsRoute,
  PrivacyPolicyRoute,
  ProgramsRoute,
  ProtectionRoute,
  RenewPlansRoute,
  TermsOfServiceRoute,
  WhyUsRoute,
  GuidesInHomeMedicalSystemRoute,
  GuidesPersonal4gCareWatchRoute,
  GuidesPersonalAlertDeviceSystemRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
