import { c as createLucideIcon, u as useNavigate, a as useFormStore, r as reactExports, j as jsxRuntimeExports, S as Sprout, M as MapPin } from "./index-D4RKLqip.js";
import { C as Card, d as CardHeader, e as CardTitle, b as CardContent, B as Button } from "./card-C6AEzvBc.js";
import { L as Leaf, U as User, a as Label, I as Input, T as Textarea, C as CreditCard, S as Select, b as SelectTrigger, c as SelectValue, d as SelectContent, e as SelectItem, f as CircleCheck } from "./textarea-BCx6lSEX.js";
import { P as PAYMENT_MODE_LABELS } from "./index-DtrMP1dN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const BANNER_IMAGE = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop";
const TRUST_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    alt: "Freshly plowed farmland with rich brown soil ready for planting",
    label: "Field Ready"
  },
  {
    src: "https://images.unsplash.com/photo-1581093803456-15d8db88c99d?w=800&auto=format&fit=crop",
    alt: "Soil sample being carefully analyzed in a lab environment",
    label: "Lab Analysis"
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
    alt: "Green crop field thriving with healthy plants after soil treatment",
    label: "Healthy Growth"
  }
];
const QUERY_TYPE_LABELS = {
  "soil-testing-only": "Soil Testing Only",
  "soil-testing-agrikit": "Soil Testing + AgriKit"
};
function SummaryRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground min-w-[110px] shrink-0", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground break-words min-w-0", children: value })
  ] });
}
function FieldError({ message }) {
  if (!message) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "p",
    {
      className: "flex items-center gap-1 text-xs text-destructive mt-1",
      "data-ocid": "order.field_error",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3 shrink-0" }),
        message
      ]
    }
  );
}
function generateRefId() {
  const prefix = "AGR";
  const num = Math.floor(1e4 + Math.random() * 9e4);
  return `${prefix}${num}`;
}
function placeOrderMock(_data) {
  return new Promise(
    (resolve) => setTimeout(() => resolve(generateRefId()), 1200)
  );
}
function TrustImageStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "grid grid-cols-3 gap-2 animate-fade-in",
      "data-ocid": "order.trust_strip",
      children: [
        TRUST_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": `order.trust_image.${i + 1}`,
            className: "rounded-xl overflow-hidden border border-border shadow-subtle group",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-20 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.src,
                  alt: img.alt,
                  loading: "lazy",
                  className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1.5 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary-foreground font-body font-medium drop-shadow", children: img.label }) })
            ] })
          },
          img.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground font-body py-1", children: "🌱 Trusted by 500+ farmers across Himachal Pradesh" }) })
      ]
    }
  );
}
function Order() {
  const navigate = useNavigate();
  const {
    soilTestingData,
    orderData,
    updateOrder,
    setOrderSummary,
    prefillOrderFromSoilTesting
  } = useFormStore();
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!soilTestingData.queryType) {
      navigate({ to: "/soil-testing" });
    }
  }, [soilTestingData.queryType, navigate]);
  reactExports.useEffect(() => {
    prefillOrderFromSoilTesting();
  }, [prefillOrderFromSoilTesting]);
  const queryLabel = soilTestingData.queryType ? QUERY_TYPE_LABELS[soilTestingData.queryType] ?? soilTestingData.queryType : "—";
  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.place.trim()) errs.place = "Place is required";
    if (!data.address.trim()) errs.address = "Address is required";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(data.phone.trim()))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!data.paymentMode) errs.paymentMode = "Please select a payment mode";
    return errs;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate(orderData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitting(true);
    try {
      const refId = await placeOrderMock({
        ...orderData,
        queryType: soilTestingData.queryType
      });
      setOrderSummary({
        refId,
        queryType: soilTestingData.queryType,
        senderName: orderData.name,
        paymentMode: orderData.paymentMode,
        deliveryAddress: soilTestingData.deliveryAddress || void 0,
        timestamp: Date.now()
      });
      navigate({ to: "/thank-you" });
    } catch {
      setSubmitError(
        "Something went wrong while placing your order. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }
  function handleFieldChange(field, value) {
    updateOrder({ [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background", "data-ocid": "order.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 sm:h-64 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: BANNER_IMAGE,
          alt: "Sweeping panoramic view of rolling green farmland under a golden sunset sky",
          loading: "lazy",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-primary-foreground/90 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-primary-foreground/20 border border-primary-foreground/40 backdrop-blur-sm text-primary-foreground flex items-center justify-center text-xs font-semibold", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-primary-foreground/90", children: "Step 3 of 4 · Order Details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-primary-foreground drop-shadow", children: "Confirm Your Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-primary-foreground/80 mt-1 max-w-sm", children: "Review your details and complete your order securely" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-8 space-y-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-primary rounded-full transition-all duration-500",
          style: { width: "75%" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustImageStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "order.summary.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-display text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-5 h-5 text-primary" }),
              "Order Summary"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20", children: [
                soilTestingData.queryType === "soil-testing-agrikit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-4 h-4 text-primary shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: queryLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryRow,
                  {
                    label: "Sender Name",
                    value: soilTestingData.senderName || "—"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryRow,
                  {
                    label: "Place",
                    value: soilTestingData.senderPlace || "—"
                  }
                ),
                soilTestingData.queryType === "soil-testing-agrikit" && soilTestingData.deliveryAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryRow,
                  {
                    label: "Delivery To",
                    value: soilTestingData.deliveryAddress
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "order.form.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-display text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }),
                "Confirm Your Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Review and complete your contact information below." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "order-name",
                    className: "flex items-center gap-1.5 text-sm font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                      "Full Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "order-name",
                    "data-ocid": "order.name.input",
                    placeholder: "Your full name",
                    value: orderData.name,
                    onChange: (e) => handleFieldChange("name", e.target.value),
                    className: errors.name ? "border-destructive focus-visible:ring-destructive" : "",
                    "aria-invalid": !!errors.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "order-place",
                    className: "flex items-center gap-1.5 text-sm font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                      "Place / City ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "order-place",
                    "data-ocid": "order.place.input",
                    placeholder: "Your city or town",
                    value: orderData.place,
                    onChange: (e) => handleFieldChange("place", e.target.value),
                    className: errors.place ? "border-destructive focus-visible:ring-destructive" : "",
                    "aria-invalid": !!errors.place
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.place })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "order-address",
                    className: "flex items-center gap-1.5 text-sm font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                      "Full Address ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "order-address",
                    "data-ocid": "order.address.input",
                    placeholder: "Village / Street / District / Pincode",
                    value: orderData.address,
                    onChange: (e) => handleFieldChange("address", e.target.value),
                    rows: 3,
                    className: errors.address ? "border-destructive focus-visible:ring-destructive" : "",
                    "aria-invalid": !!errors.address
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.address })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "order-phone",
                    className: "flex items-center gap-1.5 text-sm font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                      "Phone Number ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "order-phone",
                    "data-ocid": "order.phone.input",
                    type: "tel",
                    placeholder: "10-digit mobile number",
                    inputMode: "numeric",
                    maxLength: 10,
                    value: orderData.phone,
                    onChange: (e) => handleFieldChange(
                      "phone",
                      e.target.value.replace(/\D/g, "")
                    ),
                    className: errors.phone ? "border-destructive focus-visible:ring-destructive" : "",
                    "aria-invalid": !!errors.phone
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "order-payment",
                    className: "flex items-center gap-1.5 text-sm font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                      "Mode of Payment ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: orderData.paymentMode,
                    onValueChange: (val) => {
                      updateOrder({ paymentMode: val });
                      if (errors.paymentMode)
                        setErrors((prev) => ({
                          ...prev,
                          paymentMode: void 0
                        }));
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          id: "order-payment",
                          "data-ocid": "order.payment.select",
                          className: errors.paymentMode ? "border-destructive focus-visible:ring-destructive" : "",
                          "aria-invalid": !!errors.paymentMode,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select payment method" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(PAYMENT_MODE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value,
                          "data-ocid": `order.payment.option.${value}`,
                          children: label
                        },
                        value
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.paymentMode })
              ] }),
              submitError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive",
                  "data-ocid": "order.error_state",
                  role: "alert",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: submitError })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    disabled: submitting,
                    "data-ocid": "order.place_order.primary_button",
                    className: "w-full gap-2 font-semibold text-base py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated transition-smooth",
                    children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        LoaderCircle,
                        {
                          className: "w-5 h-5 animate-spin",
                          "data-ocid": "order.loading_state"
                        }
                      ),
                      "Placing Order…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                      "Place Order"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-3", children: "By placing your order, you confirm your soil sample details are accurate." })
              ] })
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  Order as default
};
