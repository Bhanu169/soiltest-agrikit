import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

// ── Image URLs ────────────────────────────────────────────────────────────────
const IMAGES = {
  heroFarm:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&auto=format&fit=crop",
  soilTestCard: "/assets/images/soilTesting.jpeg",
  agriKitCard:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
  farmBanner:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop",
  greenField:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&auto=format&fit=crop",
  // Soil health section
  degradedSoil:
    "assets/images/handSoil.jpeg",
  healthyCropland:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
  farmerSoil:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
  // Farm scene strip
  plowing:
    "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=800&auto=format&fit=crop",
  irrigation:
    "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop",
  harvesting:
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop",
  seedlings:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
};

// ── Farm scene strip data ─────────────────────────────────────────────────────
const FARM_SCENES = [
  { img: IMAGES.plowing, label: "Field Plowing", caption: "Soil preparation" },
  {
    img: IMAGES.irrigation,
    label: "Crop Irrigation",
    caption: "Water management",
  },
  {
    img: IMAGES.harvesting,
    label: "Harvest Time",
    caption: "Bountiful yields",
  },
  {
    img: IMAGES.seedlings,
    label: "Young Seedlings",
    caption: "New beginnings",
  },
];

// ── Soil health cards data ────────────────────────────────────────────────────
const SOIL_HEALTH_CARDS = [
  {
    img: IMAGES.degradedSoil,
    alt: "Dry, cracked and degraded soil showing signs of nutrient depletion",
    title: "Degraded Soil",
    caption:
      "Nutrient-poor, compacted soil leads to poor crop yields and wasted resources.",
    tag: "The Problem",
tagColor: "bg-white/10 text-white border border-white/20",  },
  {
    img: IMAGES.healthyCropland,
    alt: "Lush green cropland with healthy thriving plants",
    title: "Healthy Cropland",
    caption:
      "Balanced NPK levels and organic matter create conditions for vigorous plant growth.",
    tag: "The Goal",
tagColor: "bg-white text-green-700 border border-white",  },
  {
    img: IMAGES.farmerSoil,
    alt: "A farmer carefully examining soil texture and quality in the field",
    title: "Farmer's Insight",
    caption:
      "Data-driven decisions based on soil analysis lead to smarter, cost-effective farming.",
    tag: "The Solution",
tagColor: "bg-green-100 text-green-700 border border-green-200",  },
];

// ── Leaf decoration SVG ───────────────────────────────────────────────────────
function LeafDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 70 Q20 20 70 10 Q60 55 10 70Z"
        fill="oklch(0.52 0.14 155)"
        opacity="0.35"
      />
      <path
        d="M10 70 Q35 45 70 10"
        stroke="oklch(0.42 0.14 155)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M40 40 Q30 32 22 45"
        stroke="oklch(0.42 0.14 155)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M54 26 Q48 36 38 38"
        stroke="oklch(0.42 0.14 155)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

// ── Stat badge ────────────────────────────────────────────────────────────────
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl bg-white/15 border border-white/25 shadow-subtle backdrop-blur-sm">
      <span className="text-xl font-display font-semibold text-white">
        {value}
      </span>
      <span className="text-xs text-white/80 font-body">{label}</span>
    </div>
  );
}

// ── Service card ──────────────────────────────────────────────────────────────
interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaOcid: string;
  badge?: string;
  highlight?: boolean;
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
  highlight,
}: ServiceCardProps) {
  return (
    <Card
      className={`relative flex flex-col overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-elevated ${highlight ? "border-primary/40 shadow-card" : "shadow-subtle"}`}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-accent text-accent-foreground text-xs font-body font-medium">
            {badge}
          </Badge>
        </div>
      )}
      {/* Card image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
      </div>
      <CardContent className="flex flex-col flex-1 gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-display font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {description}
          </p>
        </div>
        <ul className="space-y-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-foreground/80 font-body"
            >
              <svg
                className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Link to="/soil-testing">
            <Button
              data-ocid={ctaOcid}
              className={`w-full font-body font-medium transition-smooth ${!highlight ? "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border" : ""}`}
              variant={highlight ? "default" : "outline"}
              size="lg"
            >
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Process step ──────────────────────────────────────────────────────────────
function ProcessStep({
  num,
  title,
  desc,
}: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
        <span className="text-sm font-display font-bold text-primary">
          {num}
        </span>
      </div>
      <div className="min-w-0">
        <p className="font-display font-semibold text-foreground text-sm">
          {title}
        </p>
        <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

// ── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section
        data-ocid="hero.section"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.10 158) 0%, oklch(0.38 0.12 155) 50%, oklch(0.46 0.13 148) 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative leaves */}
        <LeafDecor className="absolute top-6 left-4 w-24 h-24 rotate-12 opacity-60 pointer-events-none" />
        <LeafDecor className="absolute bottom-10 right-6 w-32 h-32 -rotate-45 opacity-40 pointer-events-none" />
        <LeafDecor className="absolute top-1/3 right-12 w-16 h-16 rotate-[70deg] opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-pattern-grain pointer-events-none opacity-60" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6 animate-fade-up">
            <div
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border backdrop-blur-sm"
              style={{
                background: "oklch(1 0 0 / 0.10)",
                borderColor: "oklch(1 0 0 / 0.20)",
              }}
            >
              <span
                className="text-xs font-body"
                style={{ color: "oklch(1 0 0 / 0.80)" }}
              >
                🌱 YSP University of Horticulture and Forestry
              </span>
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "oklch(0.97 0.01 155)" }}
            >
              Empowering Farmers Through{" "}
              <em
                style={{ color: "oklch(0.88 0.14 100)", fontStyle: "italic" }}
              >
                Precision
              </em>{" "}
              Soil Science
            </h1>

            <p
              className="font-body text-lg leading-relaxed max-w-lg"
              style={{ color: "oklch(0.97 0.01 155 / 0.80)" }}
            >
              Professional soil analysis and curated AgriKits delivered to your
              doorstep — helping you grow healthier crops with data-driven
              insights.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/soil-testing">
                <Button
                  data-ocid="hero.get_started_button"
                  size="lg"
                  className="font-body font-semibold transition-smooth shadow-elevated px-8"
                  style={{
                    background: "oklch(0.97 0.01 155)",
                    color: "oklch(0.30 0.10 158)",
                  }}
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/soil-testing">
                <Button
                  data-ocid="hero.place_order_button"
                  size="lg"
                  variant="outline"
                  className="font-body font-semibold transition-smooth px-8"
                  style={{
                    borderColor: "oklch(1 0 0 / 0.40)",
                    color: "oklch(0.97 0.01 155)",
                    background: "oklch(1 0 0 / 0.05)",
                  }}
                >
                  Place Order
                </Button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 pt-4 animate-fade-up delay-200">
              <StatBadge value="500+" label="Farmers Served" />
              <StatBadge value="12+" label="Parameters Tested" />
              <StatBadge value="7–10" label="Days Turnaround" />
            </div>
          </div>

          {/* Hero photo — real farm photography */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in delay-300">
            <div
              className="relative w-full max-w-md rounded-3xl overflow-hidden border shadow-elevated"
              style={{ borderColor: "oklch(1 0 0 / 0.15)" }}
            >
              <img
                src={IMAGES.heroFarm}
                alt="Tilled brown farmland soil ready for planting"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm border"
                  style={{
                    background: "oklch(0 0 0 / 0.45)",
                    borderColor: "oklch(1 0 0 / 0.15)",
                  }}
                >
                  <span
                    className="text-xs font-body"
                    style={{ color: "oklch(0.95 0.03 155)" }}
                  >
                    🧪 Rich soil = richer harvest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12"
            role="presentation"
          >
            <title>Wave divider</title>
            <path
              d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60Z"
              fill="oklch(0.96 0.015 75)"
            />
          </svg>
        </div>
      </section>

      {/* ── Farm landscape banner ── */}
      <section
        data-ocid="farm_banner.section"
        className="relative h-56 sm:h-72 overflow-hidden"
      >
        <img
          src={IMAGES.farmBanner}
          alt="Sweeping view of a lush green farmland at golden hour"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full">
            <p className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground max-w-md leading-snug drop-shadow">
              From healthy soil springs every harvest
            </p>
            <p className="text-sm font-body mt-2 text-primary-foreground/80 max-w-sm">
              Science-backed soil insights, delivered for every Indian farmer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        data-ocid="services.section"
        className="bg-background py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs">
              Our Services
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Choose Your Path to Better Soil
            </h2>
            <p className="mt-3 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
              Whether you need a detailed soil report or a complete farming
              starter kit, we have you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-up delay-200">
            <ServiceCard
              image={IMAGES.soilTestCard}
              imageAlt="Soil sample in a lab flask for nutrient analysis"
              title="Soil Testing"
              description="Send your soil sample and receive a comprehensive analysis report with detailed nutrient profiles and expert recommendations."
              features={[
                "pH, NPK & micronutrient analysis",
                "Organic matter & texture assessment",
                "Crop-specific fertilizer advisory",
                "Detailed PDF report in 7–10 days",
              ]}
              ctaLabel="Get Started"
              ctaOcid="services.soil_testing.get_started_button"
            />
            <ServiceCard
              image={IMAGES.agriKitCard}
              imageAlt="Assorted seeds and agricultural kit components"
              title="Soil Testing + AgriKit"
              description="Complete package — soil testing plus a curated kit of seeds, fertilizers, and organic amendments tailored to your results."
              features={[
                "Full soil testing analysis report",
                "Customized seed selection (normal & hybrid)",
                "Targeted fertilizer recommendations",
                "Organic matter application guide",
              ]}
              ctaLabel="Place Order"
              ctaOcid="services.agrikit.place_order_button"
              badge="Popular"
              highlight
            />
          </div>
        </div>
      </section>

      {/* ── Why Soil Health Matters ── */}
      <section
        data-ocid="soil_health.section"
        className="bg-muted/30 py-20 px-4 sm:px-6 lg:px-8 section-divider"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <Badge className="mb-3 bg-accent/15 text-accent border-accent/25 font-body text-xs">
              Why It Matters
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Why Soil Health Matters
            </h2>
            <p className="mt-3 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
              Understanding your soil is the first step toward a thriving farm.
              See the difference soil science can make.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 animate-fade-up delay-200">
            {SOIL_HEALTH_CARDS.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`soil_health.item.${i + 1}`}
                className="rounded-2xl overflow-hidden border border-border shadow-card bg-card transition-smooth hover:-translate-y-1 hover:shadow-elevated"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`text-xs font-body border ${card.tagColor}`}
                    >
                      {card.tag}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {card.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        data-ocid="how_it_works.section"
        className="bg-background py-20 px-4 sm:px-6 lg:px-8 section-divider"
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs">
              Simple Process
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              From Field to Lab in 4 Easy Steps
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              Our streamlined process makes soil testing accessible for every
              farmer — from small plots to large fields.
            </p>
            <div className="space-y-5">
              <ProcessStep
                num="1"
                title="Collect your soil sample"
                desc="Dig a V-shaped pit 0–15 cm deep, gather 10–15 samples per field unit and mix into a 500g composite."
              />
              <ProcessStep
                num="2"
                title="Fill out the request form"
                desc="Complete your sender details and select your preferred service — Soil Testing or Soil Testing + AgriKit."
              />
              <ProcessStep
                num="3"
                title="Ship to our lab"
                desc="Send the labelled sample to YSP University of Horticulture and Forestry, Nauni, Solan – 173230."
              />
              <ProcessStep
                num="4"
                title="Receive your report"
                desc="Get a full nutrient analysis report and, if ordered, your personalized AgriKit delivered within 7–10 days."
              />
            </div>
          </div>

          {/* Green field photo + status card */}
          <div className="flex flex-col gap-6 animate-fade-in delay-200">
            {/* Field photo */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={IMAGES.greenField}
                alt="Lush green crop field showing healthy plant growth"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>
            {/* Status card */}
            <div className="w-full rounded-3xl bg-card border border-border shadow-card overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-primary via-[oklch(0.52_0.14_145)] to-accent" />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 7v5l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      Sample Status
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      Received & in analysis
                    </p>
                  </div>
                  <Badge className="ml-auto bg-primary/10 text-primary border-primary/20 text-xs font-body">
                    Active
                  </Badge>
                </div>
                <div className="space-y-2">
                  {[
                    "Sample received",
                    "Initial screening",
                    "Nutrient analysis",
                    "Report generation",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${i < 2 ? "bg-primary" : "bg-muted border border-border"}`}
                      >
                        {i < 2 && (
                          <svg
                            viewBox="0 0 12 12"
                            className="w-3 h-3"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 6.5l2.5 2.5 5.5-5.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-xs font-body ${i < 2 ? "text-foreground font-medium" : "text-muted-foreground"}`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground font-body">
                    Estimated completion:{" "}
                    <strong className="text-foreground">7–10 days</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Farm scene photo strip ── */}
      <section
        data-ocid="farm_scenes.section"
        className="bg-muted/20 py-12 px-4 sm:px-6 lg:px-8 section-divider overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground font-body mb-6">
            Life on the farm — from soil to harvest
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up">
            {FARM_SCENES.map((scene, i) => (
              <div
                key={scene.label}
                data-ocid={`farm_scenes.item.${i + 1}`}
                className="rounded-xl overflow-hidden border border-border shadow-subtle group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-28 sm:h-36 overflow-hidden">
                  <img
                    src={scene.img}
                    alt={scene.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-2">
                    <p className="text-xs font-body text-primary-foreground font-medium drop-shadow">
                      {scene.label}
                    </p>
                    <p className="text-[10px] text-primary-foreground/70">
                      {scene.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Institution / CTA ── */}
      <section
        data-ocid="institution.section"
        className="bg-background py-16 px-4 sm:px-6 lg:px-8 section-divider"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 text-primary"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-body text-muted-foreground">
              Receiver's Details
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Send Your Samples To
          </h2>
          <div className="inline-block text-left bg-card border border-border rounded-2xl shadow-subtle px-8 py-6 space-y-2">
            <p className="font-display font-semibold text-lg text-foreground">
              Vanshika
            </p>
            <p className="font-body text-sm text-muted-foreground">
              YSP University of Horticulture and Forestry
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Nauni, Solan – 173230, Himachal Pradesh
            </p>
          </div>
          <div className="pt-4">
            <Link to="/soil-testing">
              <Button
                data-ocid="institution.get_started_button"
                size="lg"
                className="font-body font-semibold transition-smooth shadow-subtle px-10"
              >
                Start Your Soil Test
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
