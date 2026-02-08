import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Globe2, PhoneCall, Layers3 } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-tv-navy via-tv-indigo to-tv-navy" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,theme(colors.tv.teal),transparent_60%)]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
                Page not found
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                We can’t find the page you’re looking for
              </h1>

              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                The page may have moved, the link may be incorrect, or the content is no longer available.
                Use the options below to continue.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15 transition"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go back
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-tv-teal px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-tv-aqua transition"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              {/* BIG 404 */}
              <div className="absolute -top-12 -right-6 text-[140px] font-bold leading-none text-white/10 sm:text-[180px] lg:text-[220px]">
                404
              </div>

              <div className="relative">
                <p className="text-sm font-semibold text-white">Quick links</p>
                <p className="mt-2 text-sm text-white/75">
                  Jump to commonly accessed sections.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <QuickLink to="/services" icon={Layers3} label="Solutions" />
                  <QuickLink to="/coverage" icon={Globe2} label="Coverage" />
                  <QuickLink to="/contact" icon={PhoneCall} label="Support" />
                  <QuickLink to="/request-callback" icon={PhoneCall} label="Request a Callback" />
                </div>

                <div className="mt-6 rounded-2xl bg-black/10 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-white/80">
                    If you believe this is an error, please contact support and share the URL you tried to access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="mt-12 text-xs text-white/60">
            TransitVox — Carrier-grade VoIP • A–Z Routes • CLI / Non-CLI • SIP Interconnects
          </p>
        </div>
      </section>
    </div>
  );
}

function QuickLink({ to, icon: Icon, label }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white/90 hover:bg-white/15 transition"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
        <Icon className="h-5 w-5 text-tv-teal" />
      </div>
      <div className="text-sm font-semibold">{label}</div>
      <span className="ml-auto text-white/60 group-hover:text-white transition">→</span>
    </Link>
  );
}
