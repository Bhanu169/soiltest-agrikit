import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Leaf,
  Loader2,
  MapPin,
  Phone,
  Sprout,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useFormStore } from "../store/formStore";
import type { OrderFormData, PaymentMode } from "../types";
import { PAYMENT_MODE_LABELS } from "../types";

// ── Images ────────────────────────────────────────────────────────────────────
const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop";

const TRUST_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    alt: "Freshly plowed farmland with rich brown soil ready for planting",
    label: "Field Ready",
  },
  {
    src: "https://images.unsplash.com/photo-1581093803456-15d8db88c99d?w=800&auto=format&fit=crop",
    alt: "Soil sample being carefully analyzed in a lab environment",
    label: "Lab Analysis",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
    alt: "Green crop field thriving with healthy plants after soil treatment",
    label: "Healthy Growth",
  },
];

type FormErrors = Partial<Record<keyof OrderFormData, string>>;

const QUERY_TYPE_LABELS: Record<string, string> = {
  "soil-testing-only": "Soil Testing Only",
  "soil-testing-agrikit": "Soil Testing + AgriKit",
};

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="text-muted-foreground min-w-[110px] shrink-0">
        {label}
      </span>
      <span className="font-medium text-foreground break-words min-w-0">
        {value}
      </span>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      className="flex items-center gap-1 text-xs text-destructive mt-1"
      data-ocid="order.field_error"
    >
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  );
}

function generateRefId(): string {
  const prefix = "AGR";
  const num = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}${num}`;
}

function placeOrderMock(
  _data: OrderFormData & { queryType: string },
): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(generateRefId()), 1200),
  );
}

// ── Trust image strip ─────────────────────────────────────────────────────────
function TrustImageStrip() {
  return (
    <div
      className="grid grid-cols-3 gap-2 animate-fade-in"
      data-ocid="order.trust_strip"
    >
      {TRUST_IMAGES.map((img, i) => (
        <div
          key={img.label}
          data-ocid={`order.trust_image.${i + 1}`}
          className="rounded-xl overflow-hidden border border-border shadow-subtle group"
        >
          <div className="relative h-20 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-1.5 left-2">
              <p className="text-[10px] text-primary-foreground font-body font-medium drop-shadow">
                {img.label}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="col-span-3">
        <p className="text-xs text-center text-muted-foreground font-body py-1">
          🌱 Trusted by 500+ farmers across Himachal Pradesh
        </p>
      </div>
    </div>
  );
}

export default function Order() {
  const navigate = useNavigate();
  const {
    soilTestingData,
    orderData,
    updateOrder,
    setOrderSummary,
    prefillOrderFromSoilTesting,
  } = useFormStore();

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Route guard
  useEffect(() => {
    if (!soilTestingData.queryType) {
      navigate({ to: "/soil-testing" });
    }
  }, [soilTestingData.queryType, navigate]);

  // Pre-fill from soil testing
  useEffect(() => {
    prefillOrderFromSoilTesting();
  }, [prefillOrderFromSoilTesting]);

  const queryLabel = soilTestingData.queryType
    ? (QUERY_TYPE_LABELS[soilTestingData.queryType] ??
      soilTestingData.queryType)
    : "—";

  function validate(data: OrderFormData): FormErrors {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.place.trim()) errs.place = "Place is required";
    if (!data.address.trim()) errs.address = "Address is required";
    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(data.phone.trim()))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!data.paymentMode) errs.paymentMode = "Please select a payment mode";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate(orderData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const refId = await placeOrderMock({
        ...orderData,
        queryType: soilTestingData.queryType,
      });
      setOrderSummary({
        refId,
        queryType: soilTestingData.queryType,
        senderName: orderData.name,
        paymentMode: orderData.paymentMode,
        deliveryAddress: soilTestingData.deliveryAddress || undefined,
        timestamp: Date.now(),
      });
      navigate({ to: "/thank-you" });
    } catch {
      setSubmitError(
        "Something went wrong while placing your order. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleFieldChange(field: keyof OrderFormData, value: string) {
    updateOrder({ [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <main className="min-h-screen bg-background" data-ocid="order.page">
      {/* Agricultural landscape panorama banner */}
      <div className="relative h-44 sm:h-64 overflow-hidden">
        <img
          src={BANNER_IMAGE}
          alt="Sweeping panoramic view of rolling green farmland under a golden sunset sky"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          {/* Step indicator */}
          <div className="flex items-center gap-2 text-sm text-primary-foreground/90 mb-2">
            <span className="w-6 h-6 rounded-full bg-primary-foreground/20 border border-primary-foreground/40 backdrop-blur-sm text-primary-foreground flex items-center justify-center text-xs font-semibold">
              3
            </span>
            <span className="font-body text-primary-foreground/90">
              Step 3 of 4 · Order Details
            </span>
          </div>
          <h1 className="font-display text-2xl font-bold text-primary-foreground drop-shadow">
            Confirm Your Order
          </h1>
          <p className="text-sm font-body text-primary-foreground/80 mt-1 max-w-sm">
            Review your details and complete your order securely
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6 animate-fade-up">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: "75%" }}
          />
        </div>

        {/* Trust image strip */}
        <TrustImageStrip />

        {/* Order Summary Card */}
        <Card
          className="border border-border shadow-card bg-card"
          data-ocid="order.summary.card"
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-display text-foreground">
              <ClipboardList className="w-5 h-5 text-primary" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              {soilTestingData.queryType === "soil-testing-agrikit" ? (
                <Sprout className="w-4 h-4 text-primary shrink-0" />
              ) : (
                <Leaf className="w-4 h-4 text-primary shrink-0" />
              )}
              <span className="text-sm font-semibold text-primary">
                {queryLabel}
              </span>
            </div>
            <div className="space-y-2 pt-1">
              <SummaryRow
                label="Sender Name"
                value={soilTestingData.senderName || "—"}
              />
              <SummaryRow
                label="Place"
                value={soilTestingData.senderPlace || "—"}
              />
              {soilTestingData.queryType === "soil-testing-agrikit" &&
                soilTestingData.deliveryAddress && (
                  <SummaryRow
                    label="Delivery To"
                    value={soilTestingData.deliveryAddress}
                  />
                )}
            </div>
          </CardContent>
        </Card>

        {/* Order Details Form */}
        <Card
          className="border border-border shadow-card bg-card"
          data-ocid="order.form.card"
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-display text-foreground">
              <User className="w-5 h-5 text-primary" />
              Confirm Your Details
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Review and complete your contact information below.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="order-name"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="order-name"
                  data-ocid="order.name.input"
                  placeholder="Your full name"
                  value={orderData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  className={
                    errors.name
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                  aria-invalid={!!errors.name}
                />
                <FieldError message={errors.name} />
              </div>

              {/* Place */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="order-place"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  Place / City <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="order-place"
                  data-ocid="order.place.input"
                  placeholder="Your city or town"
                  value={orderData.place}
                  onChange={(e) => handleFieldChange("place", e.target.value)}
                  className={
                    errors.place
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                  aria-invalid={!!errors.place}
                />
                <FieldError message={errors.place} />
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="order-address"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  Full Address <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="order-address"
                  data-ocid="order.address.input"
                  placeholder="Village / Street / District / Pincode"
                  value={orderData.address}
                  onChange={(e) => handleFieldChange("address", e.target.value)}
                  rows={3}
                  className={
                    errors.address
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                  aria-invalid={!!errors.address}
                />
                <FieldError message={errors.address} />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="order-phone"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="order-phone"
                  data-ocid="order.phone.input"
                  type="tel"
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  maxLength={10}
                  value={orderData.phone}
                  onChange={(e) =>
                    handleFieldChange(
                      "phone",
                      e.target.value.replace(/\D/g, ""),
                    )
                  }
                  className={
                    errors.phone
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                  aria-invalid={!!errors.phone}
                />
                <FieldError message={errors.phone} />
              </div>

              {/* Mode of Payment */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="order-payment"
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  <CreditCard className="w-3.5 h-3.5 text-muted-foreground" />
                  Mode of Payment <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={orderData.paymentMode}
                  onValueChange={(val) => {
                    updateOrder({ paymentMode: val as PaymentMode });
                    if (errors.paymentMode)
                      setErrors((prev) => ({
                        ...prev,
                        paymentMode: undefined,
                      }));
                  }}
                >
                  <SelectTrigger
                    id="order-payment"
                    data-ocid="order.payment.select"
                    className={
                      errors.paymentMode
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                    aria-invalid={!!errors.paymentMode}
                  >
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {(
                      Object.entries(PAYMENT_MODE_LABELS) as [
                        PaymentMode,
                        string,
                      ][]
                    ).map(([value, label]) => (
                      <SelectItem
                        key={value}
                        value={value}
                        data-ocid={`order.payment.option.${value}`}
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.paymentMode} />
              </div>

              {/* Submit error */}
              {submitError && (
                <div
                  className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive"
                  data-ocid="order.error_state"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  data-ocid="order.place_order.primary_button"
                  className="w-full gap-2 font-semibold text-base py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated transition-smooth"
                >
                  {submitting ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        data-ocid="order.loading_state"
                      />
                      Placing Order…
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Place Order
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  By placing your order, you confirm your soil sample details
                  are accurate.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
