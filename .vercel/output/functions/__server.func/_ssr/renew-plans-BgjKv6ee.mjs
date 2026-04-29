import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout, P as PageHero, B as Button } from "./Layout-43KjouGt.mjs";
import { L as Label, I as Input, T as Textarea } from "./label-Bw5W-nrs.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as CircleCheckBig, d as User, P as Phone, M as MapPin, S as ShieldCheck, b as CreditCard, a as ArrowRight } from "../_libs/lucide-react.mjs";
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
function RenewPlans() {
  const [formData, setFormData] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    plan: "",
    paymentMethod: "",
    message: ""
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  const plans = [{
    name: "Basic Protection",
    price: "$29.99",
    features: ["24/7 Monitoring", "In-Home Base Station", "Help Button"]
  }, {
    name: "Advanced Protection",
    price: "$39.99",
    features: ["Everything in Basic", "Mobile GPS Device", "Advanced Fall Detection"]
  }, {
    name: "Complete Protection",
    price: "$49.99",
    features: ["Everything in Advanced", "Multiple Devices", "Priority Response"]
  }];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Account created successfully! Welcome to MediAlert+ protection.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        plan: "",
        paymentMethod: "",
        message: ""
      });
    }, 2e3);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Renew Your Plan", title: "Continue Your Protection", subtitle: "Renew your MediAlert+ protection plan to maintain 24/7 emergency monitoring and peace of mind." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-brand to-brand/90 p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-6", children: "Choose Your Protection Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold mb-3", children: [
            plan.price,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
          ] }, featureIndex)) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-navy mb-2", children: "Create Your Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fill in your information to activate your protection plan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-navy flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
            "Personal Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "firstName", children: "First Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "firstName", name: "firstName", type: "text", required: true, value: formData.firstName, onChange: handleInputChange, placeholder: "John", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lastName", children: "Last Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "lastName", name: "lastName", type: "text", required: true, value: formData.lastName, onChange: handleInputChange, placeholder: "Doe", className: "mt-1" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-navy flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
            "Contact Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", required: true, value: formData.email, onChange: handleInputChange, placeholder: "john.doe@example.com", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone Number *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", name: "phone", type: "tel", required: true, value: formData.phone, onChange: handleInputChange, placeholder: "(555) 123-4567", className: "mt-1" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-navy flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }),
            "Service Address"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Street Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "address", name: "address", type: "text", required: true, value: formData.address, onChange: handleInputChange, placeholder: "123 Main Street", className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "City *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "city", name: "city", type: "text", required: true, value: formData.city, onChange: handleInputChange, placeholder: "Boston", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "state", name: "state", required: true, value: formData.state, onChange: handleInputChange, className: "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select State" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MA", children: "Massachusetts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NY", children: "New York" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CA", children: "California" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "FL", children: "Florida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TX", children: "Texas" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zip", children: "ZIP Code *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "zip", name: "zip", type: "text", required: true, value: formData.zip, onChange: handleInputChange, placeholder: "02118", className: "mt-1" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-navy flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }),
            "Protection Plan"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "plan", name: "plan", required: true, value: formData.plan, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a Plan" }),
            plans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: plan.name, children: [
              plan.name,
              " - ",
              plan.price,
              "/month"
            ] }, index))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-navy flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
            "Payment Method"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "paymentMethod", name: "paymentMethod", required: true, value: formData.paymentMethod, onChange: handleInputChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "credit-card", children: "Credit Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "debit-card", children: "Debit Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bank-transfer", children: "Bank Transfer" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-navy", children: "Additional Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", value: formData.message, onChange: handleInputChange, placeholder: "Any special requirements or medical conditions we should know about?", className: "min-h-[100px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "terms", required: true, className: "mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "terms", className: "text-sm text-muted-foreground", children: "I agree to the Terms of Service and Privacy Policy. I understand that my protection plan will begin immediately after payment." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: submitting, size: "lg", className: "w-full bg-brand text-brand-foreground hover:bg-brand/90", children: submitting ? "Creating Account..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Create Account & Start Protection ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-green-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900", children: "Secure & Protected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-800", children: "Your information is encrypted and secure. We're HIPAA compliant and protect your privacy." })
          ] })
        ] }) })
      ] }) })
    ] }) }) })
  ] });
}
export {
  RenewPlans as component
};
