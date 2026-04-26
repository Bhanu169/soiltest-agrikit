import { a as useFormStore, j as jsxRuntimeExports, L as Link } from "./index-CPaoRdoP.js";
import { C as Card, b as CardContent, B as Button } from "./card-BJseFv3P.js";
import { P as PAYMENT_MODE_LABELS } from "./index-DtrMP1dN.js";
const IMAGES = {
  harvest: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
  sunlitField: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop",
  soilReceiving: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
  soilAnalysis: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop"
};
const SERVICE_LABELS = {
  "soil-testing-only": "Soil Testing Only",
  "soil-testing-agrikit": "Soil Testing + AgriKit"
};
function LeafCheckIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 96 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "w-24 h-24",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "48", r: "46", fill: "oklch(0.91 0.09 158 / 0.25)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "48", r: "36", fill: "oklch(0.82 0.12 158 / 0.35)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M48 22 C58 22 72 32 72 48 C72 56 66 64 56 68 C52 70 50 72 48 74 C46 72 44 70 40 68 C30 64 24 56 24 48 C24 32 38 22 48 22Z",
            fill: "oklch(0.46 0.13 158)",
            opacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M48 28 L48 68",
            stroke: "oklch(0.82 0.12 158)",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M35 48 L44 57 L61 39",
            stroke: "white",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function OrderDetailRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 py-2.5 border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground font-body text-right", children: value })
  ] });
}
function WhatHappensNext() {
  const NEXT_STEPS = [
    {
      img: IMAGES.soilReceiving,
      alt: "Lab technician receiving and registering a soil sample package",
      step: "01",
      title: "Sample Received",
      desc: "Your soil sample arrives at our lab and is registered for analysis."
    },
    {
      img: IMAGES.soilAnalysis,
      alt: "Scientific soil analysis being performed in a university lab",
      step: "02",
      title: "Soil Analysis",
      desc: "Our experts conduct a full nutrient profile — pH, NPK, micronutrients, and more."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "w-full animate-fade-up delay-300",
      "data-ocid": "thankyou.next_steps.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold text-foreground mb-4 text-center", children: "What Happens Next?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: NEXT_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `thankyou.next_step.${i + 1}`,
            className: "rounded-xl overflow-hidden border border-border shadow-subtle bg-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: step.img,
                    alt: step.alt,
                    loading: "lazy",
                    className: "w-full h-full object-cover transition-smooth hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-display font-bold px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.46 0.13 158 / 0.9)",
                      color: "oklch(0.97 0.01 155)"
                    },
                    children: step.step
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold text-foreground", children: step.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-body mt-0.5 leading-relaxed", children: step.desc })
              ] })
            ]
          },
          step.step
        )) })
      ]
    }
  );
}
function ThankYou() {
  const { orderSummary } = useFormStore();
  const hasOrder = orderSummary !== null && orderSummary.refId !== "";
  const serviceName = hasOrder && orderSummary.queryType ? SERVICE_LABELS[orderSummary.queryType] ?? "Soil Testing Service" : null;
  const paymentLabel = hasOrder && orderSummary.paymentMode ? PAYMENT_MODE_LABELS[orderSummary.paymentMode] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      className: "min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-background relative overflow-hidden",
      "data-ocid": "thankyou.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, oklch(0.82 0.12 158 / 0.15) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, oklch(0.56 0.14 42 / 0.08) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-8 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeafCheckIcon, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3 animate-fade-up delay-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight", children: "Thank you for your order!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-base sm:text-lg leading-relaxed", children: "Your request has been successfully submitted. We'll review your details and get back to you soon." })
          ] }),
          hasOrder ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full animate-fade-up delay-200",
                "data-ocid": "thankyou.ref_id",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl px-5 py-4 text-center border",
                    style: {
                      background: "oklch(0.91 0.09 158 / 0.2)",
                      borderColor: "oklch(0.46 0.13 158 / 0.3)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground font-body mb-1", children: "Order Reference" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-2xl font-bold",
                          style: { color: "oklch(0.38 0.13 158)" },
                          children: orderSummary.refId
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-1", children: "Save this ID for tracking your order" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "w-full shadow-card animate-fade-up delay-300",
                "data-ocid": "thankyou.summary_card",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-4 px-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-base font-semibold text-foreground mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block w-2 h-2 rounded-full flex-shrink-0",
                        style: { background: "oklch(0.46 0.13 158)" },
                        "aria-hidden": "true"
                      }
                    ),
                    "Order Summary"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    orderSummary.senderName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      OrderDetailRow,
                      {
                        label: "Sender",
                        value: orderSummary.senderName
                      }
                    ),
                    serviceName && /* @__PURE__ */ jsxRuntimeExports.jsx(OrderDetailRow, { label: "Service", value: serviceName }),
                    paymentLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(OrderDetailRow, { label: "Payment", value: paymentLabel }),
                    orderSummary.deliveryAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      OrderDetailRow,
                      {
                        label: "Delivery To",
                        value: orderSummary.deliveryAddress
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      OrderDetailRow,
                      {
                        label: "Submitted On",
                        value: new Date(orderSummary.timestamp).toLocaleDateString(
                          "en-IN",
                          { day: "numeric", month: "long", year: "numeric" }
                        )
                      }
                    )
                  ] })
                ] })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full rounded-xl px-5 py-5 text-center border animate-fade-up delay-200",
              style: {
                background: "oklch(0.91 0.09 158 / 0.15)",
                borderColor: "oklch(0.46 0.13 158 / 0.25)"
              },
              "data-ocid": "thankyou.generic_success",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-body text-sm leading-relaxed", children: "Your submission has been received. Our team will reach out to you with the next steps shortly." })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatHappensNext, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full animate-fade-up delay-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden shadow-card border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: IMAGES.sunlitField,
                  alt: "Bright sunlit green farmland with rows of healthy crops stretching to the horizon",
                  loading: "lazy",
                  className: "w-full h-full object-cover transition-smooth hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-card flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "🌾" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Better soil today, richer harvests tomorrow" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full animate-fade-up delay-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-subtle border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.harvest,
              alt: "Vibrant green crop field with healthy plants ready for harvest under clear skies",
              loading: "lazy",
              className: "w-full h-32 object-cover"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full animate-fade-up delay-400",
              "data-ocid": "thankyou.back_home_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  className: "w-full font-body font-semibold text-base transition-smooth",
                  style: {
                    background: "oklch(0.46 0.13 158)",
                    color: "oklch(0.97 0.01 155)"
                  },
                  children: "← Back to Home"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body text-center animate-fade-in delay-400", children: "🌱 Growing better farms, one test at a time" })
        ] })
      ]
    }
  );
}
export {
  ThankYou as default
};
