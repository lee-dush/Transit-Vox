// src/pages/Solutions/SolutionsHeader.jsx
import { Link } from "react-router-dom";

export default function SolutionsHeader() {
  return (
    <section className="bg-gradient-to-br from-tv-navy via-tv-indigo to-tv-navy">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-tv-teal">Solutions</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Wholesale VoIP solutions built for global voice traffic
          </h1>

          <p className="mt-6 text-lg leading-7 text-white/85">
            TransitVox delivers carrier-grade voice termination, A–Z routing,
            and SIP interconnections designed to support reliable, scalable,
            and transparent wholesale voice operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-tv-teal px-7 py-3 text-sm font-semibold text-white hover:bg-tv-aqua transition"
            >
              Talk to Sales
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
