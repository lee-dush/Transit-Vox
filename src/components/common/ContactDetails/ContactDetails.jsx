import { Link } from "react-router-dom";
import { PhoneCall, Globe2, ArrowRight } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tv-navy via-tv-indigo to-tv-navy">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.tv.teal)/25,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
              Connect with TransitVox
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s discuss your wholesale voice requirements
            </h2>

            <p className="mt-5 text-base leading-7 text-white/85">
              Our contact form is designed to help carriers, wholesalers, and enterprise
              voice providers connect directly with our team. Share your routing needs,
              destination focus, and preferred traffic type (CLI or Non-CLI), and we’ll
              align the right wholesale solution for you.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Whether you’re evaluating new A–Z routes, expanding European coverage, or
              planning SIP interconnections, our team will guide you through availability,
              quality expectations, and onboarding steps.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-tv-teal px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-tv-aqua transition-colors"
              >
                Go to Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/coverage"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View all Coverage
              </Link>
            </div>
          </div>

          {/* Right info cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard
              icon={PhoneCall}
              title="Wholesale Voice Routes"
              body="Discuss A–Z termination, CLI / Non-CLI options, and traffic profiles suited to your business."
            />
            <InfoCard
              icon={Globe2}
              title="Regional Coverage"
              body="Get clarity on route availability, quality focus, and coverage across Europe and other global regions."
            />
            <InfoCard
              icon={PhoneCall}
              title="SIP Interconnections"
              body="Explore SIP trunking, direct interconnects, redundancy planning, and technical onboarding."
            />
            <InfoCard
              icon={Globe2}
              title="Onboarding & Support"
              body="Understand testing, quality validation, monitoring, and ongoing NOC support expectations."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
          <Icon className="h-5 w-5 text-tv-teal" />
        </div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">{body}</p>
    </div>
  );
}
