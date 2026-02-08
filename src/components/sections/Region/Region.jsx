import { Globe2, BadgeCheck, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const REGIONS = [
  {
    name: "North America",
    top: "34%",
    left: "23%",
    note: "CLI & Non-CLI routes",
  },
  {
    name: "South America",
    top: "62%",
    left: "29%",
    note: "Wholesale termination",
  },
  {
    name: "Europe",
    top: "28%",
    left: "52%",
    note: "Strong coverage focus",
    emphasis: true,
  },
  {
    name: "Africa",
    top: "55%",
    left: "52%",
    note: "A–Z destinations",
  },
  {
    name: "Asia",
    top: "36%",
    left: "72%",
    note: "Carrier-grade routing",
  },
  {
    name: "Australia",
    top: "72%",
    left: "82%",
    note: "SIP-ready interconnects",
  },
];

export default function Region() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-tv-teal">Coverage</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-tv-navy sm:text-3xl">
            Global wholesale routes across key regions
          </h2>
          <p className="mt-3 text-base text-tv-slate">
            TransitVox provides A–Z wholesale termination with both <span className="font-semibold text-tv-navy">CLI</span> and{" "}
            <span className="font-semibold text-tv-navy">Non-CLI</span> options across six major regions—designed for
            consistent delivery, transparent routing, and scalable carrier interconnects.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Globe */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-tv-navy">
                <Globe2 className="h-4 w-4 text-tv-teal" />
                Regional coverage map
              </div>
              <div className="text-xs text-tv-slate">
                CLI & Non-CLI availability varies by destination
              </div>
            </div>

            <div className="relative mt-5">
              <img
                src="globe.png"
                alt="TransitVox global coverage"
                className="mx-auto w-full max-w-xl select-none"
                draggable={false}
              />

              {/* Points */}
              {REGIONS.map((r) => (
                <div
                  key={r.name}
                  className="absolute"
                  style={{ top: r.top, left: r.left }}
                >
                  <div className="relative">
                    {/* pulse ring */}
                    <span className="absolute -inset-2 rounded-full bg-tv-teal/25 blur-[2px]" />
                    <span className="absolute -inset-3 rounded-full border border-tv-teal/30" />

                    {/* dot */}
                    <span
                      className={`relative block h-3 w-3 rounded-full ${
                        r.emphasis ? "bg-tv-aqua" : "bg-tv-teal"
                      }`}
                    />

                    {/* label */}
                    <div className="mt-2 w-max -translate-x-1/2 rounded-full bg-tv-navy/90 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-white/10">
                      {r.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard
              icon={PhoneCall}
              title="Wholesale Termination"
              body="Carrier-to-carrier routing optimized for stable delivery and scalable capacity."
            />
            <InfoCard
              icon={BadgeCheck}
              title="CLI & Non-CLI Options"
              body="Choose route profiles based on compliance, quality targets, and pricing."
            />
            <InfoCard
              icon={Globe2}
              title="A–Z Destination Coverage"
              body="Global reach across six key regions, with strong coverage emphasis on Europe."
              highlight
            />
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-tv-navy">
                Need a region-specific route list?
              </h3>
              <p className="mt-2 text-sm leading-6 text-tv-slate">
                Contact our team for available destinations, route types, and quality expectations per region.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-tv-teal px-5 py-2 text-sm font-semibold text-white hover:bg-tv-aqua transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/coverage"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-tv-navy hover:bg-slate-50 transition-colors"
                >
                  View Coverage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-sm text-tv-slate">
          Note: Route availability, CLI support, and performance metrics can vary by destination and upstream carrier policies.
        </p>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body, highlight }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
        highlight ? "ring-1 ring-tv-teal/25" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-navy/5 ring-1 ring-tv-navy/10">
          <Icon className="h-5 w-5 text-tv-indigo" />
        </div>
        <h3 className="text-sm font-semibold text-tv-navy">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-tv-slate">{body}</p>
    </div>
  );
}
