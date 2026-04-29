import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as Phone, k as HeartPulse, X, q as Menu, S as ShieldCheck, C as Clock, A as Award, r as Facebook, s as Twitter, I as Instagram, e as Mail, M as MapPin, t as ChevronDown, H as Heart, o as Watch, p as House, a as ArrowRight } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function DropdownMenu() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const medicalIDProducts = [
    {
      name: "Medical ID Bracelets",
      icon: ShieldCheck,
      description: "Stylish engraved bracelets for everyday wear",
      href: "/medical-ids#bracelets"
    },
    {
      name: "Medical ID Necklaces",
      icon: Heart,
      description: "Elegant necklaces with custom engraving",
      href: "/medical-ids#necklaces"
    },
    {
      name: "Medical ID Watches",
      icon: Watch,
      description: "Functional watches with medical alert features",
      href: "/medical-ids#watches"
    },
    {
      name: "Medical ID Accessories",
      icon: House,
      description: "Keychains, wallet cards and more",
      href: "/medical-ids#accessories"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
        className: "flex items-center gap-1 text-navy hover:text-brand transition-colors py-2",
        children: [
          "Medical IDs",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
        className: "absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-navy text-sm", children: "Medical ID Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Engraved protection for any emergency" })
          ] }),
          medicalIDProducts.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: product.href,
              className: "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(product.icon, { className: "h-5 w-5 text-brand" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-navy text-sm group-hover:text-brand transition-colors", children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: product.description })
                ] })
              ]
            },
            index
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-gray-100 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/medical-ids",
              className: "flex items-center justify-center w-full bg-brand text-brand-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-brand/90 transition-colors",
              children: "View All Medical IDs"
            }
          ) })
        ]
      }
    )
  ] });
}
function ProtectionDropdown() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const protectionOptions = [
    {
      name: "Renew Plans",
      description: "Continue or upgrade your protection plan",
      href: "/renew-plans",
      icon: ShieldCheck
    },
    {
      name: "Compare Plans",
      description: "Find the perfect protection plan for your needs",
      href: "/compare-plans",
      icon: ArrowRight
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
        className: "flex items-center gap-1 text-navy hover:text-brand transition-colors py-2",
        children: [
          "24/7 Protection",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
        className: "absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-navy text-sm", children: "Protection Options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Manage your medical alert protection" })
          ] }),
          protectionOptions.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: option.href,
              className: "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(option.icon, { className: "h-5 w-5 text-brand" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-navy text-sm group-hover:text-brand transition-colors", children: option.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: option.description })
                ] })
              ]
            },
            index
          ))
        ]
      }
    )
  ] });
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact Us" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy text-navy-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Trusted protection for over 1 million members worldwide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:18005551234", className: "inline-flex items-center gap-2 font-medium hover:text-brand-foreground/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
        " 1-800-555-1234"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-navy", children: [
            "MediAlert",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Protection You Trust" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-1 lg:flex", children: [
        NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-brand",
            activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-brand bg-accent" },
            activeOptions: { exact: item.to === "/" },
            children: item.label
          },
          item.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenu, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectionDropdown, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/programs", children: "Get Protected" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl flex-col px-4 py-3", children: [
      NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-brand",
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/medical-ids",
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-brand",
          children: "Medical IDs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-2 bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/programs", onClick: () => setOpen(false), children: "Get Protected" }) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "UL-Certified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy-foreground/70", children: "Professional Monitoring" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "24/7 Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy-foreground/70", children: "Always Here to Help" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white", children: "BBB A+ Rated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy-foreground/70", children: "Trusted Service" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold", children: [
            "MediAlert",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-navy-foreground/70 mb-4 max-w-md", children: "Your trusted partner in medical alert systems and emergency monitoring. Providing peace of mind for families across the nation with cutting-edge technology and compassionate care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-brand transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-brand transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-brand transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/medical-ids", className: "hover:text-brand transition-colors", children: "Medical IDs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-brand transition-colors", children: "Alert Systems" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-brand transition-colors", children: "Mobile Devices" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-brand transition-colors", children: "Home Monitoring" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-brand transition-colors", children: "Accessories" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/medical-ids", className: "hover:text-brand transition-colors", children: "Medical IDs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/protection", className: "hover:text-brand transition-colors", children: "24/7 Protection" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/programs", className: "hover:text-brand transition-colors", children: "Programs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/why-us", className: "hover:text-brand transition-colors", children: "Why Choose Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "hover:text-brand transition-colors", children: "How It Works" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-navy-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 text-brand flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "24/7 Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "1-800-555-1234" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 text-brand flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Email Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "care@medialertplus.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-brand flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Headquarters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "100 Health Plaza, Boston, MA" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 text-xs text-navy-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " MediAlert+. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-brand transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms-of-service", className: "hover:text-brand transition-colors", children: "Terms of Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-brand transition-colors", children: "HIPAA Compliance" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand/20 px-2 py-1 rounded text-brand", children: "HIPAA Compliant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand/20 px-2 py-1 rounded text-brand", children: "UL Certified" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand/20 px-2 py-1 rounded text-brand", children: "BBB A+" })
      ] })
    ] }) })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function PageHero({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 md:py-28 text-center", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-foreground/80", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-6xl text-balance", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-navy-foreground/80 text-balance", children: subtitle })
  ] }) });
}
export {
  Button as B,
  Layout as L,
  PageHero as P,
  cn as c
};
