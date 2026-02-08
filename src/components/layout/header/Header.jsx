import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tv-navy via-tv-indigo to-tv-navy">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,theme(colors.tv.teal),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20">
            Carrier-grade VoIP platform
          </p>

          {/* Main heading */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            VoIP services & voice call termination,
            <span className="block text-tv-teal">built end-to-end (A–Z)</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            TransitVox provides reliable, scalable, and transparent voice termination
            solutions for carriers, wholesalers, and enterprises worldwide.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-tv-teal px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-tv-aqua transition-colors"
            >
              Contact Us
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View all Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <TrustItem label="Global Coverage" />
            <TrustItem label="High ASR / Low ACD" />
            <TrustItem label="24×7 NOC Support" />
            <TrustItem label="Transparent Billing" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ label }) {
  return (
    <div className="text-sm font-medium text-white/80">
      {label}
    </div>
  );
}
