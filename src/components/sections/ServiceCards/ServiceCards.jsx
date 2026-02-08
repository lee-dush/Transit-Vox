import { Link } from "react-router-dom";
import {
  PhoneCall,
  Globe2,
  BadgeCheck,
  PlugZap,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    title: "Wholesale VoIP Termination",
    desc: "Carrier-grade voice transit and routing between operators—built for scale, stability, and consistent delivery.",
    highlights: ["Carrier-to-carrier routing", "Quality-focused termination", "Scalable capacity"],
    icon: PhoneCall,
    accent: "from-tv-teal/20 to-transparent",
  },
  {
    title: "A–Z Voice Routes",
    desc: "Global destination coverage with a strong focus on Europe—designed for predictable performance and transparent routing.",
    highlights: ["Global destinations", "Europe emphasis", "Route transparency"],
    icon: Globe2,
    accent: "from-tv-indigo/20 to-transparent",
  },
  {
    title: "CLI & Non-CLI Termination",
    desc: "Support for both CLI and Non-CLI traffic—choose the right route profile based on compliance, quality, and pricing.",
    highlights: ["CLI supported", "Non-CLI options", "Flexible route profiles"],
    icon: BadgeCheck,
    accent: "from-tv-teal/15 to-transparent",
  },
  {
    title: "SIP Trunking & Interconnections",
    desc: "Secure SIP trunking and direct interconnects—engineered for redundancy, low latency, and operational reliability.",
    highlights: ["SIP trunking", "Direct interconnect", "Redundancy-ready"],
    icon: PlugZap,
    accent: "from-tv-indigo/15 to-transparent",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {/* Section header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-tv-teal">Solutions</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-tv-navy sm:text-3xl">
              Core services built for wholesale voice
            </h2>
            <p className="mt-3 text-base text-tv-slate">
              From carrier-grade termination to SIP interconnects, TransitVox is designed to
              support reliable voice delivery across global destinations—especially Europe.
            </p>
          </div>

          <div className="mt-4 flex gap-3 sm:mt-0">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-tv-navy hover:bg-slate-50 transition-colors"
            >
              View all solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-tv-teal px-5 py-2 text-sm font-semibold text-white hover:bg-tv-aqua transition-colors"
            >
              Talk to sales
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* subtle accent wash */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent}`} />

                {/* icon */}
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tv-navy/5 ring-1 ring-tv-navy/10">
                    <Icon className="h-5 w-5 text-tv-indigo" />
                  </div>
                  <span className="text-xs font-semibold text-tv-navy/70">
                    TransitVox
                  </span>
                </div>

                {/* title/desc */}
                <h3 className="relative mt-5 text-lg font-semibold text-tv-navy">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-tv-slate">
                  {s.desc}
                </p>

                {/* highlights */}
                <ul className="relative mt-5 space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-tv-navy/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-tv-teal" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* link */}
                <div className="relative mt-6">
                  <Link
                    to="/solutions"
                    className="inline-flex items-center text-sm font-semibold text-tv-indigo hover:text-tv-navy transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip (optional trust line) */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-tv-navy">
              Built for carriers, wholesalers, and enterprise voice traffic.
            </p>
            <p className="text-sm text-tv-slate">
              Global coverage • Europe focus • 24×7 NOC support • Transparent billing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
