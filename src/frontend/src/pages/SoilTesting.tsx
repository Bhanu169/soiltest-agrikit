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
import { useFormStore } from "@/store/formStore";
import {
  PAYMENT_MODE_LABELS,
  type PaymentMode,
  type QueryType,
  RECEIVER_INFO,
} from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  FlaskConical,
  Info,
  Leaf,
  MapPin,
  Package,
  Sprout,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ── Image URLs ────────────────────────────────────────────────────────────────
const IMAGES = {
  headerBanner:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&auto=format&fit=crop",
  soilClose:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
  soilLab:
    "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=800&auto=format&fit=crop",
  seeds:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
  fertilizer:
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop",
  organic:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop",
  soilFact:
    "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop",
};

// ── Soil sampling instruction items ──────────────────────────────────────────
const SOIL_INSTRUCTIONS = [
  {
    step: 1,
    title: "Selection of the Sampling Area",
    detail:
      "Divide the field into uniform units based on crop type, soil colour, and topography.",
  },
  {
    step: 2,
    title: "Remove Surface Litter",
    detail: "Clear away leaves, stones, and other debris before digging.",
  },
  {
    step: 3,
    title: "Dig a V-Shaped Pit",
    detail:
      "Go 0–15 cm deep for most crops, or 15–30 cm for deeper root analysis.",
  },
  {
    step: 4,
    title: "Collect 10–15 Random Samples",
    detail:
      "Take sub-samples from across each uniform unit — avoid field edges.",
  },
  {
    step: 5,
    title: "Create a Composite Sample",
    detail: "Thoroughly mix all sub-samples in a clean plastic bucket.",
  },
  {
    step: 6,
    title: "Take ~500 g for Testing",
    detail: "Spread the mix and take a quarter-sample of about 500 grams.",
  },
  {
    step: 7,
    title: "Label Clearly",
    detail: "Include: Farmer's name, Field number, and Date of sampling.",
  },
];

// ── ReceiverInfoCard ──────────────────────────────────────────────────────────
function ReceiverInfoCard() {
  return (
    <Card className="border-primary/20 bg-primary/5 shadow-subtle">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-display text-primary">
          <Building2 size={18} className="shrink-0" />
          Receiver's Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <User size={15} className="mt-0.5 shrink-0 text-muted-foreground" />
          <div>
            <span className="text-muted-foreground">Name: </span>
            <span className="font-medium text-foreground">
              {RECEIVER_INFO.name}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Building2
            size={15}
            className="mt-0.5 shrink-0 text-muted-foreground"
          />
          <div>
            <span className="text-muted-foreground">Institution: </span>
            <span className="font-medium text-foreground">
              {RECEIVER_INFO.institution}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <MapPin size={15} className="mt-0.5 shrink-0 text-muted-foreground" />
          <div>
            <span className="text-muted-foreground">Location: </span>
            <span className="font-medium text-foreground">
              {RECEIVER_INFO.location}
            </span>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground italic">
          Your soil sample will be sent to this address for testing.
        </p>
      </CardContent>
    </Card>
  );
}

// ── Soil photo panel ──────────────────────────────────────────────────────────
function SoilPhotoPanel() {
  return (
    <div
      className="grid sm:grid-cols-2 gap-3 animate-fade-in"
      data-ocid="soil_photos.panel"
    >
      <div className="rounded-xl overflow-hidden border border-border shadow-subtle group">
        <div className="relative h-36 overflow-hidden">
          <img
            src={IMAGES.soilClose}
            alt="Farmer's hands closely examining dark, fertile soil quality in field"
            loading="lazy"
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute bottom-2 left-3">
            <p className="text-xs text-primary-foreground font-body font-medium drop-shadow">
              Field Sampling
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden border border-border shadow-subtle group">
        <div className="relative h-36 overflow-hidden">
          <img
            src={IMAGES.soilLab}
            alt="Soil sample being analyzed in a scientific laboratory setting"
            loading="lazy"
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute bottom-2 left-3">
            <p className="text-xs text-primary-foreground font-body font-medium drop-shadow">
              Lab Analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Did You Know fact card ────────────────────────────────────────────────────
function SoilFactCard() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-primary/20 bg-primary/5 shadow-subtle animate-fade-in"
      data-ocid="soil_fact.card"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={IMAGES.soilFact}
          alt="Close-up of rich dark agricultural soil showing healthy texture and moisture"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-body text-primary-foreground/90 leading-snug drop-shadow">
            🔬 One gram of healthy soil contains up to 1 billion bacteria
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs font-display font-semibold text-primary uppercase tracking-wide mb-1">
          Did You Know?
        </p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Soil is a living ecosystem. A single teaspoon can harbour more
          microorganisms than there are people on Earth — yet poor farming
          practices kill these essential communities every season.
        </p>
      </div>
    </div>
  );
}

// ── SoilInstructionsSection ───────────────────────────────────────────────────
function SoilInstructionsSection() {
  return (
    <section
      className="animate-fade-in space-y-4"
      data-ocid="soil_instructions.section"
      aria-label="Soil sampling instructions"
    >
      <div className="flex items-center gap-2 mb-1">
        <Info size={16} className="text-primary" />
        <h3 className="text-base font-display font-semibold text-foreground">
          How to Send Soil for Testing
        </h3>
      </div>

      {/* Photo panel above instructions */}
      <SoilPhotoPanel />

      <div className="space-y-3 mt-4">
        {SOIL_INSTRUCTIONS.map((item) => (
          <div
            key={item.step}
            className="flex gap-3 rounded-lg border border-primary/15 bg-primary/5 p-3"
            data-ocid={`soil_instructions.item.${item.step}`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {item.step}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fact card at bottom */}
      <SoilFactCard />
    </section>
  );
}

// ── AgriKit option with image ─────────────────────────────────────────────────
interface AgriKitOptionImageProps {
  image: string;
  alt: string;
  caption: string;
}

function AgriKitOptionImage({ image, alt, caption }: AgriKitOptionImageProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-subtle group">
      <div className="relative h-36 overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover animate-fade-in transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>
      <div className="px-3 py-2 bg-card">
        <p className="text-xs text-muted-foreground font-body">{caption}</p>
      </div>
    </div>
  );
}

// ── Yes / No toggle ───────────────────────────────────────────────────────────
interface YesNoToggleProps {
  value: boolean | null;
  onChange: (val: boolean) => void;
  ocidPrefix: string;
}

function YesNoToggle({ value, onChange, ocidPrefix }: YesNoToggleProps) {
  return (
    <div className="flex gap-2">
      {[
        { label: "Yes", bool: true },
        { label: "No", bool: false },
      ].map(({ label, bool }) => {
        const isSelected = value === bool;
        return (
          <button
            key={label}
            type="button"
            data-ocid={`${ocidPrefix}.${label.toLowerCase()}_button`}
            onClick={() => onChange(bool)}
            className={`flex items-center gap-1.5 rounded-lg border px-5 py-2 text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isSelected
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
            }`}
            aria-pressed={isSelected}
          >
            {isSelected && <CheckCircle2 size={14} className="shrink-0" />}
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ── AgriKitSection ────────────────────────────────────────────────────────────
interface AgriKitSectionProps {
  deliveryAddress: string;
  agriKitSeeds: "" | "normal" | "hybrid";
  agriKitFertilizer: string;
  agriKitOrganic: boolean;
  agriKitComments: string;
  onChange: (field: string, value: string | boolean) => void;
  errors: Record<string, string>;
}

function AgriKitSection({
  deliveryAddress,
  agriKitSeeds,
  agriKitFertilizer,
  agriKitOrganic,
  agriKitComments,
  onChange,
  errors,
}: AgriKitSectionProps) {
  // Local state: null = not yet chosen, true = Yes, false = No
  const [fertilizerWanted, setFertilizerWanted] = useState<boolean | null>(
    agriKitFertilizer !== "" ? true : null,
  );

  function handleFertilizerToggle(val: boolean) {
    setFertilizerWanted(val);
    if (!val) onChange("agriKitFertilizer", "");
  }

  return (
    <div className="animate-fade-in space-y-6" data-ocid="agrikit.section">
      {/* Delivery address */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Package size={16} className="text-primary" />
          <h3 className="text-base font-display font-semibold text-foreground">
            Where Should We Send Your Kit?
          </h3>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="deliveryAddress" className="text-sm font-medium">
            Delivery Address <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="deliveryAddress"
            data-ocid="agrikit.delivery_address.textarea"
            placeholder="House No / Street, Village / Town, District, State, PIN"
            value={deliveryAddress}
            onChange={(e) => onChange("deliveryAddress", e.target.value)}
            rows={3}
            className={
              errors.deliveryAddress
                ? "border-destructive ring-1 ring-destructive"
                : ""
            }
          />
          {errors.deliveryAddress && (
            <p
              className="text-xs text-destructive"
              data-ocid="agrikit.delivery_address.field_error"
            >
              {errors.deliveryAddress}
            </p>
          )}
        </div>
      </div>

      {/* AgriKit options */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Sprout size={16} className="text-primary" />
          <h3 className="text-base font-display font-semibold text-foreground">
            AgriKit Options
          </h3>
        </div>

        {/* Seeds with image */}
        <div className="space-y-3">
          <AgriKitOptionImage
            image={IMAGES.seeds}
            alt="Lush green farmland showing successful crop growth from quality seeds"
            caption="Seeds — choose normal or hybrid varieties suited to your crop and soil conditions"
          />
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-foreground">
              Seeds
            </legend>
            <div className="flex flex-wrap gap-3">
              {[
                { val: "normal", label: "Normal Seeds" },
                { val: "hybrid", label: "Hybrid Seeds" },
              ].map(({ val, label }) => (
                <label
                  key={val}
                  data-ocid={`agrikit.seeds_${val}.toggle`}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-smooth ${
                    agriKitSeeds === val
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="agriKitSeeds"
                    value={val}
                    checked={agriKitSeeds === val}
                    onChange={() => onChange("agriKitSeeds", val)}
                    className="sr-only"
                  />
                  {agriKitSeeds === val && <CheckCircle2 size={14} />}
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Fertilizer with image */}
        <div className="space-y-3">
          <AgriKitOptionImage
            image={IMAGES.fertilizer}
            alt="Assorted seed packets and agricultural fertilizer products laid out on a farm"
            caption="Fertilizer — targeted nutrients (NPK, micronutrients) based on your soil report"
          />
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium">
                Fertilizer – Dose &amp; Type (if necessary)
              </Label>
              <p className="text-xs text-muted-foreground">
                Would you like fertilizer dose and type recommendations?
              </p>
            </div>
            <YesNoToggle
              value={fertilizerWanted}
              onChange={handleFertilizerToggle}
              ocidPrefix="agrikit.fertilizer"
            />
            {fertilizerWanted === true && (
              <div className="animate-fade-in space-y-1.5">
                <Label
                  htmlFor="agriKitFertilizerDetail"
                  className="text-sm font-medium"
                >
                  Specify dose &amp; type
                </Label>
                <Input
                  id="agriKitFertilizerDetail"
                  data-ocid="agrikit.fertilizer.input"
                  placeholder="e.g. Urea – 50 kg/ha, DAP – 25 kg/ha"
                  value={agriKitFertilizer}
                  onChange={(e) =>
                    onChange("agriKitFertilizer", e.target.value)
                  }
                />
              </div>
            )}
          </div>
        </div>

        {/* Organic matter with image */}
        <div className="space-y-3">
          <AgriKitOptionImage
            image={IMAGES.organic}
            alt="Rich dark organic compost and organic matter improving soil structure and fertility"
            caption="Organic matter — compost or manure to improve soil structure and microbiome health"
          />
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium">
                Organic Matter Application
              </Label>
              <p className="text-xs text-muted-foreground">
                Include organic compost or manure recommendations?
              </p>
            </div>
            <YesNoToggle
              value={agriKitOrganic}
              onChange={(val) => onChange("agriKitOrganic", val)}
              ocidPrefix="agrikit.organic"
            />
          </div>
        </div>

        {/* Comments */}
        <div className="space-y-1.5">
          <Label htmlFor="agriKitComments" className="text-sm font-medium">
            Others / Additional Comments
          </Label>
          <Textarea
            id="agriKitComments"
            data-ocid="agrikit.comments.textarea"
            placeholder="Any other requirements or special requests…"
            value={agriKitComments}
            onChange={(e) => onChange("agriKitComments", e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SoilTesting() {
  const navigate = useNavigate();
  const { soilTestingData, updateSoilTesting, prefillOrderFromSoilTesting } =
    useFormStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const queryType = soilTestingData.queryType as QueryType | "";
  const isAgriKit = queryType === "soil-testing-agrikit";
  const isSoilOnly = queryType === "soil-testing-only";

  function handleChange(field: string, value: string | boolean) {
    updateSoilTesting({ [field]: value } as Parameters<
      typeof updateSoilTesting
    >[0]);
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields before continuing.", {
        description: "Check highlighted fields above.",
      });
      return;
    }
    prefillOrderFromSoilTesting();
    navigate({ to: "/order" });
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="soil_testing.page">
      {/* Page header with photo banner */}
      <div className="relative overflow-hidden">
        <img
          src={IMAGES.headerBanner}
          alt="Farmer's hands gently holding and examining dark fertile soil in open field"
          loading="lazy"
          className="w-full h-56 sm:h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-2xl px-4 w-full">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30">
                <FlaskConical size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-primary-foreground">
                  Soil Testing Form
                </h1>
               <p className="text-sm text-gray-100">
                  Fill in the details below to request your analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="mx-auto max-w-2xl px-4 py-8">
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* ── Receiver info ── */}
          <section
            className="animate-fade-up"
            data-ocid="receiver_info.section"
          >
            <ReceiverInfoCard />
          </section>

          {/* ── Sender info ── */}
          <section
            className="space-y-4 animate-fade-up delay-100"
            data-ocid="sender_info.section"
          >
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-primary" />
              <h2 className="text-base font-display font-semibold text-foreground">
                Your Information
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="senderName" className="text-sm font-medium">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="senderName"
                  data-ocid="sender.name.input"
                  placeholder="e.g. Ramesh Kumar"
                  value={soilTestingData.senderName}
                  onChange={(e) => handleChange("senderName", e.target.value)}
                  className={
                    errors.senderName
                      ? "border-destructive ring-1 ring-destructive"
                      : ""
                  }
                />
                {errors.senderName && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="sender.name.field_error"
                  >
                    {errors.senderName}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="senderPlace" className="text-sm font-medium">
                  Place <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="senderPlace"
                  data-ocid="sender.place.input"
                  placeholder="e.g. Shimla, Himachal Pradesh"
                  value={soilTestingData.senderPlace}
                  onChange={(e) => handleChange("senderPlace", e.target.value)}
                  className={
                    errors.senderPlace
                      ? "border-destructive ring-1 ring-destructive"
                      : ""
                  }
                />
                {errors.senderPlace && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="sender.place.field_error"
                  >
                    {errors.senderPlace}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="senderAddress" className="text-sm font-medium">
                Full Address <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="senderAddress"
                data-ocid="sender.address.textarea"
                placeholder="House No, Street, Village / Town, District, PIN"
                value={soilTestingData.senderAddress}
                onChange={(e) => handleChange("senderAddress", e.target.value)}
                rows={2}
                className={
                  errors.senderAddress
                    ? "border-destructive ring-1 ring-destructive"
                    : ""
                }
              />
              {errors.senderAddress && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="sender.address.field_error"
                >
                  {errors.senderAddress}
                </p>
              )}
            </div>
          </section>

          {/* ── Query type dropdown ── */}
          <section
            className="space-y-1.5 animate-fade-up delay-200"
            data-ocid="query_type.section"
          >
            <Label htmlFor="queryType" className="text-sm font-medium">
              What are you looking for?{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={queryType}
              onValueChange={(val) => handleChange("queryType", val)}
            >
              <SelectTrigger
                id="queryType"
                data-ocid="query_type.select"
                className={
                  errors.queryType
                    ? "border-destructive ring-1 ring-destructive"
                    : ""
                }
              >
                <SelectValue placeholder="Select a service…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="soil-testing-only"
                  data-ocid="query_type.option.soil_only"
                >
                  🌱 Soil Testing Only
                </SelectItem>
                <SelectItem
                  value="soil-testing-agrikit"
                  data-ocid="query_type.option.agrikit"
                >
                  🌿 Soil Testing + AgriKit
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.queryType && (
              <p
                className="text-xs text-destructive"
                data-ocid="query_type.field_error"
              >
                {errors.queryType}
              </p>
            )}
          </section>

          {/* ── CONDITIONAL: Soil testing instructions ── */}
          {isSoilOnly && (
            <section className="animate-fade-in" data-ocid="soil_only.section">
              <SoilInstructionsSection />
            </section>
          )}

          {/* ── CONDITIONAL: AgriKit section ── */}
          {isAgriKit && (
            <section className="animate-fade-in" data-ocid="agrikit.wrapper">
              <AgriKitSection
                deliveryAddress={soilTestingData.deliveryAddress}
                agriKitSeeds={soilTestingData.agriKitSeeds}
                agriKitFertilizer={soilTestingData.agriKitFertilizer}
                agriKitOrganic={soilTestingData.agriKitOrganic}
                agriKitComments={soilTestingData.agriKitComments}
                onChange={handleChange}
                errors={errors}
              />
            </section>
          )}

          {/* ── Mode of Payment ── */}
          {queryType && (
            <section
              className="space-y-1.5 animate-fade-in"
              data-ocid="payment_mode.section"
            >
              <Label
                htmlFor="paymentMode"
                className="text-sm font-medium flex items-center gap-2"
              >
                <CreditCard size={15} className="text-primary" />
                Mode of Payment <span className="text-destructive">*</span>
              </Label>
              <Select
                value={soilTestingData.paymentMode}
                onValueChange={(val) => handleChange("paymentMode", val)}
              >
                <SelectTrigger
                  id="paymentMode"
                  data-ocid="payment_mode.select"
                  className={
                    errors.paymentMode
                      ? "border-destructive ring-1 ring-destructive"
                      : ""
                  }
                >
                  <SelectValue placeholder="Select payment method…" />
                </SelectTrigger>
                <SelectContent>
                  {(
                    Object.entries(PAYMENT_MODE_LABELS) as [
                      PaymentMode,
                      string,
                    ][]
                  ).map(([val, label]) => (
                    <SelectItem
                      key={val}
                      value={val}
                      data-ocid={`payment_mode.option.${val}`}
                    >
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.paymentMode && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="payment_mode.field_error"
                >
                  {errors.paymentMode}
                </p>
              )}
            </section>
          )}

          {/* ── Submit ── */}
          <div className="pt-2 animate-fade-up">
            <Button
              type="submit"
              data-ocid="soil_testing.submit_button"
              className="w-full h-12 text-base gap-2"
              size="lg"
            >
              Continue to Order
              <ChevronRight size={18} />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              You will review your order details on the next page before
              confirming.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
