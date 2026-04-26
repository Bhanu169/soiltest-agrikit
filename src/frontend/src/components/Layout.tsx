import { Link, useRouterState } from "@tanstack/react-router";
import { MapPin, Menu, Sprout, University, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Soil Testing", href: "/soil-testing" },
];

function NavLink({
  href,
  label,
  onClick,
}: { href: string; label: string; onClick?: () => void }) {
  const routerState = useRouterState();
  const isActive = routerState.location.pathname === href;
  return (
    <Link
      to={href}
      onClick={onClick}
      data-ocid={`nav.${label.toLowerCase().replace(" ", "_")}.link`}
      className={`text-sm font-medium transition-smooth px-3 py-1.5 rounded-lg ${
        isActive
          ? "text-primary bg-primary/10"
          : "text-foreground/70 hover:text-foreground hover:bg-muted"
      }`}
    >
      {label}
    </Link>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.logo.link"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-smooth group-hover:scale-105">
              <Sprout className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-lg text-foreground">
              Agri<span className="text-primary">Kit</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            data-ocid="nav.mobile_menu.toggle"
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-smooth"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  const FOOTER_NAV = [
    { label: "Home", href: "/" },
    { label: "Soil Testing", href: "/soil-testing" },
    { label: "Place Order", href: "/order" },
  ];

  return (
    <footer
      className="bg-primary text-primary-foreground mt-auto"
      data-ocid="footer"
    >
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 group"
              data-ocid="footer.logo.link"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 flex items-center justify-center transition-smooth group-hover:bg-primary-foreground/30">
                <Sprout className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                AgriKit.
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-xs">
              Soil testing and agriculture support in partnership with YSP
              University of Horticulture and Forestry.
            </p>
          </div>

          {/* Navigate column */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-semibold text-primary-foreground uppercase tracking-wide">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}.link`}
                  className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-smooth w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Send Samples To column */}
          <div className="space-y-3">
            <h3 className="text-sm font-display font-semibold text-primary-foreground uppercase tracking-wide">
              Send Samples To
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="font-medium text-primary-foreground">Vanshika</p>
              <div className="flex items-start gap-2">
                <University
                  size={14}
                  className="mt-0.5 shrink-0 text-primary-foreground/60"
                />
                <p className="leading-snug">
                  YSP University of Horticulture and Forestry
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-primary-foreground/60"
                />
                <p>Nauni, Solan – 173230</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/65">
          <p>© 2026 AgriKit. Rooted in science, grown in care.</p>
          <p>Made for the fields of Himachal.</p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
