import { Globe2, BadgeCheck, PhoneCall } from "lucide-react";

export default function CoverageOverview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-tv-navy">
              Designed for wholesale voice traffic
            </h2>

            <p className="mt-4 text-base leading-7 text-tv-slate">
              Our coverage model is built for carriers, wholesalers, and enterprise
              voice providers that require predictable routing across global
              destinations. We support both CLI and Non-CLI traffic profiles,
              with flexible route availability depending on destination and
              regulatory requirements.
            </p>

            <p className="mt-4 text-base leading-7 text-tv-slate">
              Europe remains a strategic focus for TransitVox, supported by
              strong upstream partnerships and quality-focused route selection.
            </p>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard
              icon={Globe2}
              title="A–Z Destination Coverage"
              body="Global reach across multiple regions, with availability varying by destination and route type."
            />
            <InfoCard
              icon={BadgeCheck}
              title="CLI & Non-CLI Options"
              body="Support for both CLI and Non-CLI termination, aligned with regional policies and traffic profiles."
            />
            <InfoCard
              icon={PhoneCall}
              title="Wholesale Termination"
              body="Carrier-to-carrier routing designed for scale, stability, and transparent performance."
            />
            <InfoCard
              icon={Globe2}
              title="Region-Specific Routing"
              body="Route availability and quality metrics are tailored per region to meet operational expectations."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
