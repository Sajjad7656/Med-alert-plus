import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, B as Button } from "./Layout-43KjouGt.mjs";
import { P as ProductCard } from "./ProductCard-Dy5-7iY2.mjs";
import { P as PRODUCTS } from "./products-DiCCVl8q.mjs";
import { S as ShieldCheck, a as ArrowRight, P as Phone, j as Star, A as Award, C as Clock, U as Users, M as MapPin, k as HeartPulse, W as Wifi, B as Battery } from "../_libs/lucide-react.mjs";
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
function ScrollAnimation() {
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      }, observerOptions);
      const animatedElements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale");
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isVisible) {
          observer.observe(el);
        }
      });
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
const hero = "/assets/hero-seniors-nDcXplrs.jpg";
const monitoring = "/assets/monitoring-DGDkrYci.jpg";
const caregiver = "/assets/caregiver-MmxtvqCT.jpg";
function HomePage() {
  const featured = PRODUCTS.filter((p) => p.slug === "in-home-medical-system" || p.slug === "personal-4g-care-watch" || p.slug === "personal-alert-device-system");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAnimation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden text-navy-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Medical alert background", className: "w-full h-full object-cover", style: {
        objectPosition: "center",
        filter: "brightness(0.8) saturate(1.3)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-brand/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-brand/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-4xl px-4 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold uppercase tracking-wider border border-white/20 animate-slide-in-right", style: {
          animationDelay: "0.2s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "#1 Trusted Medical Alert Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white animate-slide-in-front", style: {
            animationDelay: "0.4s"
          }, children: "Help is always" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand-foreground animate-slide-in-left", style: {
            animationDelay: "0.6s"
          }, children: "just a button away" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in-scale", style: {
          animationDelay: "0.8s"
        }, children: "24/7 emergency monitoring, GPS-enabled devices, and engraved medical IDs that speak for you when you can't." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-brand text-brand-foreground hover:bg-brand/90 px-8 py-6 text-lg animate-slide-in-up", style: {
            animationDelay: "1s"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/programs", children: [
            "Choose Your Plan",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg animate-slide-in-up", style: {
            animationDelay: "1.2s"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:18005551234", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-5 w-5" }),
            "1-800-555-1234"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 animate-slide-in-right", style: {
            animationDelay: "1.4s"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-brand text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "4.9/5 from 12,000+ reviews" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 animate-slide-in-left", style: {
            animationDelay: "1.6s"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "UL-Certified Monitoring" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4", children: [{
      icon: Clock,
      label: "24/7 Monitoring",
      value: "Always On"
    }, {
      icon: Users,
      label: "Members Protected",
      value: "1M+"
    }, {
      icon: MapPin,
      label: "Nationwide Coverage",
      value: "4G LTE"
    }, {
      icon: Award,
      label: "Certified Safe",
      value: "UL Listed"
    }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center animate-on-scroll", style: {
      animationDelay: `${i * 0.1}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "mx-auto h-8 w-8 text-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl font-bold text-navy", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: stat.label })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-to-b from-background to-cream/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 animate-on-scroll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          "Our Advanced Devices"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl font-bold text-navy md:text-5xl lg:text-6xl", children: [
          "Explore Our Featured",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand", children: "Protection Plans" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed", children: "Comprehensive medical alert systems designed to keep you safe and connected, with 24/7 monitoring and cutting-edge technology." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: featured.map((p, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-on-scroll", style: {
        animationDelay: `${index * 0.2}s`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }) }, p.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand/10 to-brand-foreground/10 px-8 py-4 border border-brand/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-navy", children: "Need help choosing?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Our specialists are here to help" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-brand text-brand-foreground hover:bg-brand/90 ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
          "Get Expert Advice ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-cream to-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-3 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 flex items-center justify-center animate-on-scroll-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: monitoring, alt: "Emergency response specialist", loading: "lazy", width: 1600, height: 1e3, className: "w-full h-auto rounded-3xl shadow-2xl object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 bg-brand text-brand-foreground px-6 py-3 rounded-full shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "24/7 Monitoring" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center animate-on-scroll-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy border border-navy/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-3.5 w-3.5" }),
          "Real People. Real Help."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-navy lg:text-4xl leading-tight", children: [
          "EMT-trained specialists,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand", children: "ready in seconds." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Press the button and you're instantly connected to a US-based, UL-certified response center. Our specialists stay on the line, dispatch help, and notify your loved ones — all in under 30 seconds on average." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
          icon: Users,
          text: "Bilingual support — English & Spanish"
        }, {
          icon: ShieldCheck,
          text: "Personal health profile shared with EMS"
        }, {
          icon: Phone,
          text: "Family notification protocols"
        }, {
          icon: Clock,
          text: "Wellness check-in calls"
        }].map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-3.5 w-3.5 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy leading-relaxed", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/why-us", children: [
          "Why Choose MediAlert+",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-to-b from-white to-cream/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          "Advanced Technology"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-navy lg:text-4xl leading-tight", children: [
          "Cutting-Edge Medical Alert",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand", children: "Technology" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Our state-of-the-art medical alert systems combine advanced GPS tracking, fall detection, and instant communication to keep you safe and connected 24/7." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: [{
          icon: MapPin,
          title: "GPS Tracking",
          desc: "Real-time location monitoring with nationwide coverage"
        }, {
          icon: HeartPulse,
          title: "Fall Detection",
          desc: "Automatic alerts when falls are detected"
        }, {
          icon: Wifi,
          title: "4G LTE Network",
          desc: "Reliable connection anywhere in the country"
        }, {
          icon: Battery,
          title: "Long Battery Life",
          desc: "Extended battery with backup power options"
        }].map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-5 w-5 text-brand" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-navy", children: feature.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pl-13", children: feature.desc })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-brand text-brand-foreground hover:bg-brand/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: [
            "Explore Technology",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-navy/30 text-navy hover:bg-navy/5 px-8 py-4 text-lg", children: "View Demo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-brand/20 to-navy/20 rounded-3xl blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white rounded-3xl shadow-2xl p-8 border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-gradient-to-br from-navy/5 to-brand/5 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "400", height: "400", viewBox: "0 0 400 400", className: "w-full h-full max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "rgba(136, 48, 47, 0.1)", strokeWidth: "1" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "techGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#88302F" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#020742" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "400", fill: "url(#grid)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "60", fill: "url(#techGradient)", opacity: "0.1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "50", fill: "white", stroke: "url(#techGradient)", strokeWidth: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "200", y: "195", textAnchor: "middle", fill: "#020742", fontSize: "14", fontWeight: "bold", children: "MEDICAL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "200", y: "210", textAnchor: "middle", fill: "#020742", fontSize: "14", fontWeight: "bold", children: "ALERT+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(100, 100)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-25", y: "-35", width: "50", height: "70", rx: "10", fill: "white", stroke: "#88302F", strokeWidth: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-20", y: "-30", width: "40", height: "50", rx: "5", fill: "#88302F", opacity: "0.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "15", r: "8", fill: "#88302F" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "45", textAnchor: "middle", fill: "#020742", fontSize: "10", fontWeight: "bold", children: "WATCH" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(300, 100)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-30", y: "-25", width: "60", height: "50", rx: "8", fill: "white", stroke: "#020742", strokeWidth: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-25", y: "-20", width: "50", height: "35", rx: "5", fill: "#020742", opacity: "0.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "10", fill: "#020742" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "35", textAnchor: "middle", fill: "#020742", fontSize: "10", fontWeight: "bold", children: "HOME" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(100, 300)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-20", y: "-30", width: "40", height: "60", rx: "8", fill: "white", stroke: "#88302F", strokeWidth: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-15", y: "-25", width: "30", height: "45", rx: "5", fill: "#88302F", opacity: "0.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "5", r: "6", fill: "#88302F" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "40", textAnchor: "middle", fill: "#020742", fontSize: "10", fontWeight: "bold", children: "MOBILE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(300, 300)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white", stroke: "#020742", strokeWidth: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "20", fill: "#020742", opacity: "0.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "8", fill: "#020742" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "40", textAnchor: "middle", fill: "#020742", fontSize: "10", fontWeight: "bold", children: "PENDANT" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "125", y1: "125", x2: "175", y2: "175", stroke: "#88302F", strokeWidth: "2", strokeDasharray: "5,5", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "275", y1: "125", x2: "225", y2: "175", stroke: "#020742", strokeWidth: "2", strokeDasharray: "5,5", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "125", y1: "275", x2: "175", y2: "225", stroke: "#88302F", strokeWidth: "2", strokeDasharray: "5,5", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "275", y1: "275", x2: "225", y2: "225", stroke: "#020742", strokeWidth: "2", strokeDasharray: "5,5", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "80", fill: "none", stroke: "url(#techGradient)", strokeWidth: "2", opacity: "0.3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "100", fill: "none", stroke: "url(#techGradient)", strokeWidth: "1", opacity: "0.2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "120", fill: "none", stroke: "url(#techGradient)", strokeWidth: "1", opacity: "0.1" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand", children: "99.9%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Uptime" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-navy", children: "<30s" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Response" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand", children: "1M+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Users" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-to-b from-cream/50 to-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy border border-navy/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
          "Get Started Today"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-navy lg:text-4xl leading-tight", children: [
            "Request Your",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-brand", children: "Free Consultation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Fill out the form below and our specialists will contact you within 24 hours to discuss the perfect medical alert solution for your needs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "John Doe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Email *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "john@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Phone *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "(555) 123-4567" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "123 Main Street" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "City *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "New York" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "State *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "NY" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "ZIP *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors", placeholder: "10001" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-none", placeholder: "Tell us about your specific needs or concerns..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300", children: [
            "Request Brochure",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 pt-4 border-t border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Secure & Confidential" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "24-hour Response" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center pl-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-brand/20 to-navy/20 rounded-3xl blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: caregiver, alt: "Medical alert specialist helping customer", loading: "lazy", width: 500, height: 1e3, className: "w-full h-auto rounded-3xl shadow-2xl object-cover", style: {
            minHeight: "700px",
            maxHeight: "800px"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-navy", children: "Call Us" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: "1-800-555-1234" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/80", children: "Available 24/7 for immediate assistance" })
          ] }) })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand", children: "Member Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold text-navy md:text-4xl", children: "Loved by families nationwide" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [{
        name: "Margaret L.",
        role: "Member, 4 years",
        quote: "After my fall last winter, the response was immediate. They called my daughter before the ambulance even arrived."
      }, {
        name: "James & Carol R.",
        role: "Caregivers",
        quote: "Mom finally has her independence back, and we have peace of mind. The watch is discreet and easy for her to use."
      }, {
        name: "Dr. Anne S.",
        role: "Family Physician",
        quote: "I recommend MediAlert+ to every patient over 65. The medical ID has helped EMS respond faster more times than I can count."
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl border border-border bg-card p-8 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-brand", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-brand" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-foreground/80", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl", children: "Ready to feel safer today?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-brand-foreground/85", children: "Free equipment. Free shipping. No long-term contracts." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-navy text-navy-foreground hover:bg-navy/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
        "Get Started Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  HomePage as component
};
