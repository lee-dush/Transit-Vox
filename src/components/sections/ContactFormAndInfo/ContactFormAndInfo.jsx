import { Mail, Globe2, PhoneCall } from "lucide-react";

export default function ContactFormAndInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-tv-navy">
              Send us your requirements
            </h2>
            <p className="mt-3 text-sm text-tv-slate">
              Share your traffic profile and coverage needs. Our team will respond
              with relevant route and onboarding details.
            </p>

            <form className="mt-6 space-y-4">
              <Input label="Company name" />
              <Input label="Business email" type="email" />
              <Input label="Traffic type (CLI / Non-CLI)" />
              <Input label="Regions of interest" />
              <Textarea label="Message / traffic details" />

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-tv-teal px-6 py-3 text-sm font-semibold text-white hover:bg-tv-aqua transition"
              >
                Submit request
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <InfoCard
              icon={Mail}
              title="Email"
              value="transitvox@outlook.com"
            />
            <InfoCard
              icon={PhoneCall}
              title="Support"
              value="24×7 NOC (for active partners)"
            />
            <InfoCard
              icon={Globe2}
              title="Coverage"
              value="Global A–Z routes with Europe focus"
            />

            <p className="text-sm text-tv-slate">
              Note: Support channels and SLAs may vary based on partnership
              level and active traffic agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">
        {label}
      </label>
      <input
        type={type}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-tv-teal focus:outline-none"
      />
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">
        {label}
      </label>
      <textarea
        rows={4}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-tv-teal focus:outline-none"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-navy/5 ring-1 ring-tv-navy/10">
          <Icon className="h-5 w-5 text-tv-indigo" />
        </div>
        <div>
          <p className="text-sm font-semibold text-tv-navy">{title}</p>
          <p className="text-sm text-tv-slate">{value}</p>
        </div>
      </div>
    </div>
  );
}