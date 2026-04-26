import { c as createLucideIcon, u as useNavigate, a as useFormStore, r as reactExports, j as jsxRuntimeExports, b as ue, M as MapPin, S as Sprout } from "./index-D4RKLqip.js";
import { B as Button, C as Card, d as CardHeader, e as CardTitle, b as CardContent } from "./card-C6AEzvBc.js";
import { L as Leaf, a as Label, I as Input, T as Textarea, S as Select, b as SelectTrigger, c as SelectValue, d as SelectContent, e as SelectItem, C as CreditCard, U as User, f as CircleCheck } from "./textarea-BCx6lSEX.js";
import { P as PAYMENT_MODE_LABELS, R as RECEIVER_INFO } from "./index-DtrMP1dN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
const IMAGES = {
  headerBanner: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&auto=format&fit=crop",
  soilClose: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
  soilLab: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=800&auto=format&fit=crop",
  seeds: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
  fertilizer: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop",
  organic: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop",
  soilFact: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop"
};
const SOIL_INSTRUCTIONS = [
  {
    step: 1,
    title: "Selection of the Sampling Area",
    detail: "Divide the field into uniform units based on crop type, soil colour, and topography."
  },
  {
    step: 2,
    title: "Remove Surface Litter",
    detail: "Clear away leaves, stones, and other debris before digging."
  },
  {
    step: 3,
    title: "Dig a V-Shaped Pit",
    detail: "Go 0–15 cm deep for most crops, or 15–30 cm for deeper root analysis."
  },
  {
    step: 4,
    title: "Collect 10–15 Random Samples",
    detail: "Take sub-samples from across each uniform unit — avoid field edges."
  },
  {
    step: 5,
    title: "Create a Composite Sample",
    detail: "Thoroughly mix all sub-samples in a clean plastic bucket."
  },
  {
    step: 6,
    title: "Take ~500 g for Testing",
    detail: "Spread the mix and take a quarter-sample of about 500 grams."
  },
  {
    step: 7,
    title: "Label Clearly",
    detail: "Include: Farmer's name, Field number, and Date of sampling."
  }
];
function ReceiverInfoCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/20 bg-primary/5 shadow-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-display text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 18, className: "shrink-0" }),
      "Receiver's Information"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 15, className: "mt-0.5 shrink-0 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Name: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: RECEIVER_INFO.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Building2,
          {
            size: 15,
            className: "mt-0.5 shrink-0 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Institution: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: RECEIVER_INFO.institution })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "mt-0.5 shrink-0 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Location: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: RECEIVER_INFO.location })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground italic", children: "Your soil sample will be sent to this address for testing." })
    ] })
  ] });
}
function SoilPhotoPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "grid sm:grid-cols-2 gap-3 animate-fade-in",
      "data-ocid": "soil_photos.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.soilClose,
              alt: "Farmer's hands closely examining dark, fertile soil quality in field",
              loading: "lazy",
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground font-body font-medium drop-shadow", children: "Field Sampling" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.soilLab,
              alt: "Soil sample being analyzed in a scientific laboratory setting",
              loading: "lazy",
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground font-body font-medium drop-shadow", children: "Lab Analysis" }) })
        ] }) })
      ]
    }
  );
}
function SoilFactCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl overflow-hidden border border-primary/20 bg-primary/5 shadow-subtle animate-fade-in",
      "data-ocid": "soil_fact.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.soilFact,
              alt: "Close-up of rich dark agricultural soil showing healthy texture and moisture",
              loading: "lazy",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-primary-foreground/90 leading-snug drop-shadow", children: "🔬 One gram of healthy soil contains up to 1 billion bacteria" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold text-primary uppercase tracking-wide mb-1", children: "Did You Know?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body leading-relaxed", children: "Soil is a living ecosystem. A single teaspoon can harbour more microorganisms than there are people on Earth — yet poor farming practices kill these essential communities every season." })
        ] })
      ]
    }
  );
}
function SoilInstructionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "animate-fade-in space-y-4",
      "data-ocid": "soil_instructions.section",
      "aria-label": "Soil sampling instructions",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground", children: "How to Send Soil for Testing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SoilPhotoPanel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-4", children: SOIL_INSTRUCTIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-3 rounded-lg border border-primary/15 bg-primary/5 p-3",
            "data-ocid": `soil_instructions.item.${item.step}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground", children: item.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.detail })
              ] })
            ]
          },
          item.step
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SoilFactCard, {})
      ]
    }
  );
}
function AgriKitOptionImage({ image, alt, caption }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: image,
          alt,
          loading: "lazy",
          className: "w-full h-full object-cover animate-fade-in transition-smooth group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: caption }) })
  ] });
}
function YesNoToggle({ value, onChange, ocidPrefix }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [
    { label: "Yes", bool: true },
    { label: "No", bool: false }
  ].map(({ label, bool }) => {
    const isSelected = value === bool;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": `${ocidPrefix}.${label.toLowerCase()}_button`,
        onClick: () => onChange(bool),
        className: `flex items-center gap-1.5 rounded-lg border px-5 py-2 text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isSelected ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"}`,
        "aria-pressed": isSelected,
        children: [
          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "shrink-0" }),
          label
        ]
      },
      label
    );
  }) });
}
function AgriKitSection({
  deliveryAddress,
  agriKitSeeds,
  agriKitFertilizer,
  agriKitOrganic,
  agriKitComments,
  onChange,
  errors
}) {
  const [fertilizerWanted, setFertilizerWanted] = reactExports.useState(
    agriKitFertilizer !== "" ? true : null
  );
  function handleFertilizerToggle(val) {
    setFertilizerWanted(val);
    if (!val) onChange("agriKitFertilizer", "");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in space-y-6", "data-ocid": "agrikit.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground", children: "Where Should We Send Your Kit?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "deliveryAddress", className: "text-sm font-medium", children: [
          "Delivery Address ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "deliveryAddress",
            "data-ocid": "agrikit.delivery_address.textarea",
            placeholder: "House No / Street, Village / Town, District, State, PIN",
            value: deliveryAddress,
            onChange: (e) => onChange("deliveryAddress", e.target.value),
            rows: 3,
            className: errors.deliveryAddress ? "border-destructive ring-1 ring-destructive" : ""
          }
        ),
        errors.deliveryAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs text-destructive",
            "data-ocid": "agrikit.delivery_address.field_error",
            children: errors.deliveryAddress
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground", children: "AgriKit Options" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AgriKitOptionImage,
          {
            image: IMAGES.seeds,
            alt: "Lush green farmland showing successful crop growth from quality seeds",
            caption: "Seeds — choose normal or hybrid varieties suited to your crop and soil conditions"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "text-sm font-medium text-foreground", children: "Seeds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: [
            { val: "normal", label: "Normal Seeds" },
            { val: "hybrid", label: "Hybrid Seeds" }
          ].map(({ val, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              "data-ocid": `agrikit.seeds_${val}.toggle`,
              className: `flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-smooth ${agriKitSeeds === val ? "border-primary bg-primary/10 text-primary font-medium" : "border-border bg-card text-foreground hover:border-primary/40"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "agriKitSeeds",
                    value: val,
                    checked: agriKitSeeds === val,
                    onChange: () => onChange("agriKitSeeds", val),
                    className: "sr-only"
                  }
                ),
                agriKitSeeds === val && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 }),
                label
              ]
            },
            val
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AgriKitOptionImage,
          {
            image: IMAGES.fertilizer,
            alt: "Assorted seed packets and agricultural fertilizer products laid out on a farm",
            caption: "Fertilizer — targeted nutrients (NPK, micronutrients) based on your soil report"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Fertilizer – Dose & Type (if necessary)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Would you like fertilizer dose and type recommendations?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YesNoToggle,
            {
              value: fertilizerWanted,
              onChange: handleFertilizerToggle,
              ocidPrefix: "agrikit.fertilizer"
            }
          ),
          fertilizerWanted === true && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "agriKitFertilizerDetail",
                className: "text-sm font-medium",
                children: "Specify dose & type"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "agriKitFertilizerDetail",
                "data-ocid": "agrikit.fertilizer.input",
                placeholder: "e.g. Urea – 50 kg/ha, DAP – 25 kg/ha",
                value: agriKitFertilizer,
                onChange: (e) => onChange("agriKitFertilizer", e.target.value)
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AgriKitOptionImage,
          {
            image: IMAGES.organic,
            alt: "Rich dark organic compost and organic matter improving soil structure and fertility",
            caption: "Organic matter — compost or manure to improve soil structure and microbiome health"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Organic Matter Application" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Include organic compost or manure recommendations?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YesNoToggle,
            {
              value: agriKitOrganic,
              onChange: (val) => onChange("agriKitOrganic", val),
              ocidPrefix: "agrikit.organic"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "agriKitComments", className: "text-sm font-medium", children: "Others / Additional Comments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "agriKitComments",
            "data-ocid": "agrikit.comments.textarea",
            placeholder: "Any other requirements or special requests…",
            value: agriKitComments,
            onChange: (e) => onChange("agriKitComments", e.target.value),
            rows: 3
          }
        )
      ] })
    ] })
  ] });
}
function SoilTesting() {
  const navigate = useNavigate();
  const { soilTestingData, updateSoilTesting, prefillOrderFromSoilTesting } = useFormStore();
  const [errors, setErrors] = reactExports.useState({});
  const queryType = soilTestingData.queryType;
  const isAgriKit = queryType === "soil-testing-agrikit";
  const isSoilOnly = queryType === "soil-testing-only";
  function handleChange(field, value) {
    updateSoilTesting({ [field]: value });
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }
  function validate() {
    const next = {};
    if (!soilTestingData.senderName.trim())
      next.senderName = "Your name is required.";
    if (!soilTestingData.senderPlace.trim())
      next.senderPlace = "Place is required.";
    if (!soilTestingData.senderAddress.trim())
      next.senderAddress = "Address is required.";
    if (!queryType) next.queryType = "Please select a query type.";
    if (!soilTestingData.paymentMode)
      next.paymentMode = "Please select a payment mode.";
    if (isAgriKit && !soilTestingData.deliveryAddress.trim()) {
      next.deliveryAddress = "Delivery address is required for AgriKit orders.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      ue.error("Please fill in all required fields before continuing.", {
        description: "Check highlighted fields above."
      });
      return;
    }
    prefillOrderFromSoilTesting();
    navigate({ to: "/order" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "soil_testing.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: IMAGES.headerBanner,
          alt: "Farmer's hands gently holding and examining dark fertile soil in open field",
          loading: "lazy",
          className: "w-full h-56 sm:h-72 object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 22, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-primary-foreground", children: "Soil Testing Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80", children: "Fill in the details below to request your analysis" })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          className: "animate-fade-up",
          "data-ocid": "receiver_info.section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiverInfoCard, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "space-y-4 animate-fade-up delay-100",
          "data-ocid": "sender_info.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 16, className: "text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-semibold text-foreground", children: "Your Information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "senderName", className: "text-sm font-medium", children: [
                  "Your Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "senderName",
                    "data-ocid": "sender.name.input",
                    placeholder: "e.g. Ramesh Kumar",
                    value: soilTestingData.senderName,
                    onChange: (e) => handleChange("senderName", e.target.value),
                    className: errors.senderName ? "border-destructive ring-1 ring-destructive" : ""
                  }
                ),
                errors.senderName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs text-destructive",
                    "data-ocid": "sender.name.field_error",
                    children: errors.senderName
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "senderPlace", className: "text-sm font-medium", children: [
                  "Place ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "senderPlace",
                    "data-ocid": "sender.place.input",
                    placeholder: "e.g. Shimla, Himachal Pradesh",
                    value: soilTestingData.senderPlace,
                    onChange: (e) => handleChange("senderPlace", e.target.value),
                    className: errors.senderPlace ? "border-destructive ring-1 ring-destructive" : ""
                  }
                ),
                errors.senderPlace && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs text-destructive",
                    "data-ocid": "sender.place.field_error",
                    children: errors.senderPlace
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "senderAddress", className: "text-sm font-medium", children: [
                "Full Address ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "senderAddress",
                  "data-ocid": "sender.address.textarea",
                  placeholder: "House No, Street, Village / Town, District, PIN",
                  value: soilTestingData.senderAddress,
                  onChange: (e) => handleChange("senderAddress", e.target.value),
                  rows: 2,
                  className: errors.senderAddress ? "border-destructive ring-1 ring-destructive" : ""
                }
              ),
              errors.senderAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "sender.address.field_error",
                  children: errors.senderAddress
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "space-y-1.5 animate-fade-up delay-200",
          "data-ocid": "query_type.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "queryType", className: "text-sm font-medium", children: [
              "What are you looking for?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: queryType,
                onValueChange: (val) => handleChange("queryType", val),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "queryType",
                      "data-ocid": "query_type.select",
                      className: errors.queryType ? "border-destructive ring-1 ring-destructive" : "",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a service…" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "soil-testing-only",
                        "data-ocid": "query_type.option.soil_only",
                        children: "🌱 Soil Testing Only"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "soil-testing-agrikit",
                        "data-ocid": "query_type.option.agrikit",
                        children: "🌿 Soil Testing + AgriKit"
                      }
                    )
                  ] })
                ]
              }
            ),
            errors.queryType && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "query_type.field_error",
                children: errors.queryType
              }
            )
          ]
        }
      ),
      isSoilOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", "data-ocid": "soil_only.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SoilInstructionsSection, {}) }),
      isAgriKit && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", "data-ocid": "agrikit.wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AgriKitSection,
        {
          deliveryAddress: soilTestingData.deliveryAddress,
          agriKitSeeds: soilTestingData.agriKitSeeds,
          agriKitFertilizer: soilTestingData.agriKitFertilizer,
          agriKitOrganic: soilTestingData.agriKitOrganic,
          agriKitComments: soilTestingData.agriKitComments,
          onChange: handleChange,
          errors
        }
      ) }),
      queryType && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "space-y-1.5 animate-fade-in",
          "data-ocid": "payment_mode.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "paymentMode",
                className: "text-sm font-medium flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 15, className: "text-primary" }),
                  "Mode of Payment ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: soilTestingData.paymentMode,
                onValueChange: (val) => handleChange("paymentMode", val),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "paymentMode",
                      "data-ocid": "payment_mode.select",
                      className: errors.paymentMode ? "border-destructive ring-1 ring-destructive" : "",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select payment method…" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(PAYMENT_MODE_LABELS).map(([val, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectItem,
                    {
                      value: val,
                      "data-ocid": `payment_mode.option.${val}`,
                      children: label
                    },
                    val
                  )) })
                ]
              }
            ),
            errors.paymentMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "payment_mode.field_error",
                children: errors.paymentMode
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            "data-ocid": "soil_testing.submit_button",
            className: "w-full h-12 text-base gap-2",
            size: "lg",
            children: [
              "Continue to Order",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "You will review your order details on the next page before confirming." })
      ] })
    ] }) })
  ] });
}
export {
  SoilTesting as default
};
