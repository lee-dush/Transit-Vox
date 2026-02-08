import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tv-navy text-white">
      {/* Top */}
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/src/assets/images/logo.png"
                alt="TransitVox"
                className="h-10 w-auto"
              />
              <div className="leading-tight">
                <div className="text-base font-semibold">TransitVox</div>
                <div className="text-xs text-white/70">Carrier-grade VoIP</div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Reliable VoIP services and voice call termination built for carriers,
              wholesalers, and enterprises—designed for scale, transparency, and consistent quality.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
              24×7 NOC Support • Global Routing • Transparent Billing
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <span className="text-white/60">
                  Availability: 24×7
                </span>
              </li>
              <li>
                <span className="text-white/60">
                  Response: SLA-based (as applicable)
                </span>
              </li>
              <li>
                <span className="text-white/60">
                  Escalations: NOC / Engineering
                </span>
              </li>
            </ul>
          </div>

          {/* CTA / Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Talk to Sales
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Get routes, quality metrics, and pricing aligned to your traffic profile.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-tv-teal px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tv-aqua transition-colors"
              >
                Contact Us
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                View all Services
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/70">
              <span className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                High ASR / Low ACD
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                Fraud-aware routing
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                CLI options
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                Transparent reporting
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              © {year} TransitVox. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
              <Link to="/contact" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>

          <p className="mt-4 text-[11px] leading-5 text-white/45">
            Note: Service availability, routes, and quality metrics vary by destination and carrier policies.
            Rates and performance indicators are subject to change based on network conditions and traffic patterns.
          </p>
        </div>
      </div>
    </footer>
  );
}
