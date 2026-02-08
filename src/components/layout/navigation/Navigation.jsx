import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/solutions", label: "Solutions" },
      { to: "/coverage", label: "Coverage" }, // update later to /coverage
      { to: "/contact", label: "Support" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full transition-all",
        // ✅ always readable on white background
        "bg-white/95 backdrop-blur border-b border-slate-200",
        // slight shadow only when scrolled
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/src/assets/images/logo.png"
              alt="TransitVox"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-semibold text-tv-navy">TransitVox</div>
              <div className="text-xs text-tv-slate">Carrier-grade VoIP</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.slice(0, 4).map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cx(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-tv-navy font-semibold"
                      : "text-tv-navy/75 hover:text-tv-navy"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-tv-teal px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tv-aqua transition-colors"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-tv-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden mb-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cx(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-tv-teal/10 text-tv-navy font-semibold"
                        : "text-tv-navy/80 hover:bg-slate-50"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-tv-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-tv-aqua transition-colors"
              >
                Talk to Sales
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
