import { j as jsxRuntimeExports, L as Link } from "./index-CPaoRdoP.js";
import { S as Slot, c as cn, a as cva, B as Button, C as Card, b as CardContent } from "./card-BJseFv3P.js";
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const IMAGES = {
  heroFarm: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&auto=format&fit=crop",
  soilTestCard: "https://images.unsplash.com/photo-1589928954104-44193e5c1f83?w=800&auto=format&fit=crop",
  agriKitCard: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
  farmBanner: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop",
  greenField: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&auto=format&fit=crop",
  // Soil health section
  degradedSoil: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&auto=format&fit=crop",
  healthyCropland: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
  farmerSoil: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
  // Farm scene strip
  plowing: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=800&auto=format&fit=crop",
  irrigation: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop",
  harvesting: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
  seedlings: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop"
};
const FARM_SCENES = [
  { img: IMAGES.plowing, label: "Field Plowing", caption: "Soil preparation" },
  {
    img: IMAGES.irrigation,
    label: "Crop Irrigation",
    caption: "Water management"
  },
  {
    img: IMAGES.harvesting,
    label: "Harvest Time",
    caption: "Bountiful yields"
  },
  {
    img: IMAGES.seedlings,
    label: "Young Seedlings",
    caption: "New beginnings"
  }
];
const SOIL_HEALTH_CARDS = [
  {
    img: IMAGES.degradedSoil,
    alt: "Dry, cracked and degraded soil showing signs of nutrient depletion",
    title: "Degraded Soil",
    caption: "Nutrient-poor, compacted soil leads to poor crop yields and wasted resources.",
    tag: "The Problem",
    tagColor: "bg-destructive/10 text-destructive border-destructive/20"
  },
  {
    img: IMAGES.healthyCropland,
    alt: "Lush green cropland with healthy thriving plants",
    title: "Healthy Cropland",
    caption: "Balanced NPK levels and organic matter create conditions for vigorous plant growth.",
    tag: "The Goal",
    tagColor: "bg-primary/10 text-primary border-primary/20"
  },
  {
    img: IMAGES.farmerSoil,
    alt: "A farmer carefully examining soil texture and quality in the field",
    title: "Farmer's Insight",
    caption: "Data-driven decisions based on soil analysis lead to smarter, cost-effective farming.",
    tag: "The Solution",
    tagColor: "bg-accent/15 text-accent border-accent/20"
  }
];
function LeafDecor({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 80 80",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 70 Q20 20 70 10 Q60 55 10 70Z",
            fill: "oklch(0.52 0.14 155)",
            opacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 70 Q35 45 70 10",
            stroke: "oklch(0.42 0.14 155)",
            strokeWidth: "1.5",
            fill: "none",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M40 40 Q30 32 22 45",
            stroke: "oklch(0.42 0.14 155)",
            strokeWidth: "1",
            fill: "none",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M54 26 Q48 36 38 38",
            stroke: "oklch(0.42 0.14 155)",
            strokeWidth: "1",
            fill: "none",
            opacity: "0.4"
          }
        )
      ]
    }
  );
}
function StatBadge({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl bg-white/15 border border-white/25 shadow-subtle backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-display font-semibold text-white", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80 font-body", children: label })
  ] });
}
function ServiceCard({
  image,
  imageAlt,
  title,
  description,
  features,
  ctaLabel,
  ctaOcid,
  badge,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: `relative flex flex-col overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-elevated ${highlight ? "border-primary/40 shadow-card" : "shadow-subtle"}`,
      children: [
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs font-body font-medium", children: badge }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              alt: imageAlt,
              loading: "lazy",
              className: "w-full h-full object-cover transition-smooth hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col flex-1 gap-4 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed", children: description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 text-sm text-foreground/80 font-body",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 mt-0.5 shrink-0 text-primary",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M3 8.5l3 3 7-7",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    )
                  }
                ),
                f
              ]
            },
            f
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/soil-testing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": ctaOcid,
              className: `w-full font-body font-medium transition-smooth ${!highlight ? "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border" : ""}`,
              variant: highlight ? "default" : "outline",
              size: "lg",
              children: ctaLabel
            }
          ) }) })
        ] })
      ]
    }
  );
}
function ProcessStep({
  num,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display font-bold text-primary", children: num }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5 leading-relaxed", children: desc })
    ] })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "hero.section",
        className: "relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.30 0.10 158) 0%, oklch(0.38 0.12 155) 50%, oklch(0.46 0.13 148) 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeafDecor, { className: "absolute top-6 left-4 w-24 h-24 rotate-12 opacity-60 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeafDecor, { className: "absolute bottom-10 right-6 w-32 h-32 -rotate-45 opacity-40 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeafDecor, { className: "absolute top-1/3 right-12 w-16 h-16 rotate-[70deg] opacity-25 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-pattern-grain pointer-events-none opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 animate-fade-up", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border backdrop-blur-sm",
                  style: {
                    background: "oklch(1 0 0 / 0.10)",
                    borderColor: "oklch(1 0 0 / 0.20)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-body",
                      style: { color: "oklch(1 0 0 / 0.80)" },
                      children: "🌱 YSP University of Horticulture and Forestry"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight",
                  style: { color: "oklch(0.97 0.01 155)" },
                  children: [
                    "Empowering Farmers Through",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "em",
                      {
                        style: { color: "oklch(0.88 0.14 100)", fontStyle: "italic" },
                        children: "Precision"
                      }
                    ),
                    " ",
                    "Soil Science"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-lg leading-relaxed max-w-lg",
                  style: { color: "oklch(0.97 0.01 155 / 0.80)" },
                  children: "Professional soil analysis and curated AgriKits delivered to your doorstep — helping you grow healthier crops with data-driven insights."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/soil-testing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "hero.get_started_button",
                    size: "lg",
                    className: "font-body font-semibold transition-smooth shadow-elevated px-8",
                    style: {
                      background: "oklch(0.97 0.01 155)",
                      color: "oklch(0.30 0.10 158)"
                    },
                    children: "Get Started"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/soil-testing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "hero.place_order_button",
                    size: "lg",
                    variant: "outline",
                    className: "font-body font-semibold transition-smooth px-8",
                    style: {
                      borderColor: "oklch(1 0 0 / 0.40)",
                      color: "oklch(0.97 0.01 155)",
                      background: "oklch(1 0 0 / 0.05)"
                    },
                    children: "Place Order"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-4 animate-fade-up delay-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatBadge, { value: "500+", label: "Farmers Served" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatBadge, { value: "12+", label: "Parameters Tested" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatBadge, { value: "7–10", label: "Days Turnaround" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex justify-center items-center animate-fade-in delay-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative w-full max-w-md rounded-3xl overflow-hidden border shadow-elevated",
                style: { borderColor: "oklch(1 0 0 / 0.15)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: IMAGES.heroFarm,
                      alt: "Tilled brown farmland soil ready for planting",
                      loading: "lazy",
                      className: "w-full h-80 object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm border",
                      style: {
                        background: "oklch(0 0 0 / 0.45)",
                        borderColor: "oklch(1 0 0 / 0.15)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-body",
                          style: { color: "oklch(0.95 0.03 155)" },
                          children: "🧪 Rich soil = richer harvest"
                        }
                      )
                    }
                  ) })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 1440 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none",
              className: "w-full h-12",
              role: "presentation",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Wave divider" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60Z",
                    fill: "oklch(0.96 0.015 75)"
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "farm_banner.section",
        className: "relative h-56 sm:h-72 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.farmBanner,
              alt: "Sweeping view of a lush green farmland at golden hour",
              loading: "lazy",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-8 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-3xl font-bold text-primary-foreground max-w-md leading-snug drop-shadow", children: "From healthy soil springs every harvest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body mt-2 text-primary-foreground/80 max-w-sm", children: "Science-backed soil insights, delivered for every Indian farmer." })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "services.section",
        className: "bg-background py-20 px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs", children: "Our Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "Choose Your Path to Better Soil" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed", children: "Whether you need a detailed soil report or a complete farming starter kit, we have you covered." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6 animate-fade-up delay-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ServiceCard,
              {
                image: IMAGES.soilTestCard,
                imageAlt: "Soil sample in a lab flask for nutrient analysis",
                title: "Soil Testing",
                description: "Send your soil sample and receive a comprehensive analysis report with detailed nutrient profiles and expert recommendations.",
                features: [
                  "pH, NPK & micronutrient analysis",
                  "Organic matter & texture assessment",
                  "Crop-specific fertilizer advisory",
                  "Detailed PDF report in 7–10 days"
                ],
                ctaLabel: "Get Started",
                ctaOcid: "services.soil_testing.get_started_button"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ServiceCard,
              {
                image: IMAGES.agriKitCard,
                imageAlt: "Assorted seeds and agricultural kit components",
                title: "Soil Testing + AgriKit",
                description: "Complete package — soil testing plus a curated kit of seeds, fertilizers, and organic amendments tailored to your results.",
                features: [
                  "Full soil testing analysis report",
                  "Customized seed selection (normal & hybrid)",
                  "Targeted fertilizer recommendations",
                  "Organic matter application guide"
                ],
                ctaLabel: "Place Order",
                ctaOcid: "services.agrikit.place_order_button",
                badge: "Popular",
                highlight: true
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "soil_health.section",
        className: "bg-muted/30 py-20 px-4 sm:px-6 lg:px-8 section-divider",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-accent/15 text-accent border-accent/25 font-body text-xs", children: "Why It Matters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Why Soil Health Matters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed", children: "Understanding your soil is the first step toward a thriving farm. See the difference soil science can make." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6 animate-fade-up delay-200", children: SOIL_HEALTH_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `soil_health.item.${i + 1}`,
              className: "rounded-2xl overflow-hidden border border-border shadow-card bg-card transition-smooth hover:-translate-y-1 hover:shadow-elevated",
              style: { animationDelay: `${i * 0.12}s` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: card.img,
                      alt: card.alt,
                      loading: "lazy",
                      className: "w-full h-full object-cover transition-smooth hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-xs font-body border ${card.tagColor}`,
                      children: card.tag
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground", children: card.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body leading-relaxed", children: card.caption })
                ] })
              ]
            },
            card.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "how_it_works.section",
        className: "bg-background py-20 px-4 sm:px-6 lg:px-8 section-divider",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs", children: "Simple Process" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "From Field to Lab in 4 Easy Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm leading-relaxed mb-8", children: "Our streamlined process makes soil testing accessible for every farmer — from small plots to large fields." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProcessStep,
                {
                  num: "1",
                  title: "Collect your soil sample",
                  desc: "Dig a V-shaped pit 0–15 cm deep, gather 10–15 samples per field unit and mix into a 500g composite."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProcessStep,
                {
                  num: "2",
                  title: "Fill out the request form",
                  desc: "Complete your sender details and select your preferred service — Soil Testing or Soil Testing + AgriKit."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProcessStep,
                {
                  num: "3",
                  title: "Ship to our lab",
                  desc: "Send the labelled sample to YSP University of Horticulture and Forestry, Nauni, Solan – 173230."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProcessStep,
                {
                  num: "4",
                  title: "Receive your report",
                  desc: "Get a full nutrient analysis report and, if ordered, your personalized AgriKit delivered within 7–10 days."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 animate-fade-in delay-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-card border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: IMAGES.greenField,
                alt: "Lush green crop field showing healthy plant growth",
                loading: "lazy",
                className: "w-full h-52 object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full rounded-3xl bg-card border border-border shadow-card overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gradient-to-r from-primary via-[oklch(0.52_0.14_145)] to-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "w-5 h-5 text-primary",
                      fill: "none",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "12",
                            cy: "12",
                            r: "9",
                            stroke: "currentColor",
                            strokeWidth: "2"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M12 7v5l3 3",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: "Sample Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Received & in analysis" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-primary/10 text-primary border-primary/20 text-xs font-body", children: "Active" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  "Sample received",
                  "Initial screening",
                  "Nutrient analysis",
                  "Report generation"
                ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${i < 2 ? "bg-primary" : "bg-muted border border-border"}`,
                      children: i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          viewBox: "0 0 12 12",
                          className: "w-3 h-3",
                          fill: "none",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: "M2 6.5l2.5 2.5 5.5-5.5",
                              stroke: "white",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs font-body ${i < 2 ? "text-foreground font-medium" : "text-muted-foreground"}`,
                      children: step
                    }
                  )
                ] }, step)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body", children: [
                  "Estimated completion:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "7–10 days" })
                ] }) })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "farm_scenes.section",
        className: "bg-muted/20 py-12 px-4 sm:px-6 lg:px-8 section-divider overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-widest text-muted-foreground font-body mb-6", children: "Life on the farm — from soil to harvest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up", children: FARM_SCENES.map((scene, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": `farm_scenes.item.${i + 1}`,
              className: "rounded-xl overflow-hidden border border-border shadow-subtle group",
              style: { animationDelay: `${i * 0.1}s` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 sm:h-36 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: scene.img,
                    alt: scene.label,
                    loading: "lazy",
                    className: "w-full h-full object-cover transition-smooth group-hover:scale-108"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-2.5 pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-primary-foreground font-medium drop-shadow", children: scene.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary-foreground/70", children: scene.caption })
                ] })
              ] })
            },
            scene.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "institution.section",
        className: "bg-background py-16 px-4 sm:px-6 lg:px-8 section-divider",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-6 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 20 20",
                className: "w-4 h-4 text-primary",
                fill: "currentColor",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
                    clipRule: "evenodd"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground", children: "Receiver's Details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground", children: "Send Your Samples To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block text-left bg-card border border-border rounded-2xl shadow-subtle px-8 py-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: "Vanshika" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: "YSP University of Horticulture and Forestry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: "Nauni, Solan – 173230, Himachal Pradesh" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/soil-testing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "institution.get_started_button",
              size: "lg",
              className: "font-body font-semibold transition-smooth shadow-subtle px-10",
              children: "Start Your Soil Test"
            }
          ) }) })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
