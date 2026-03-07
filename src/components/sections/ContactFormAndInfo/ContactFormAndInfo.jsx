import { useState } from "react";
import { Mail, Globe2, PhoneCall } from "lucide-react";

// Encodes form data for Netlify's expected format
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function ContactFormAndInfo() {
  const [formData, setFormData] = useState({
    companyName: "",
    businessEmail: "",
    trafficType: "",
    regions: "",
    message: "",
  });

  // idle | submitting | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });
      setStatus("success");
      setFormData({
        companyName: "",
        businessEmail: "",
        trafficType: "",
        regions: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-tv-navy">
              Send us your requirements
            </h2>
            <p className="mt-3 text-sm text-tv-slate">
              Share your traffic profile and coverage needs. Our team will
              respond with relevant route and onboarding details.
            </p>

            {/* ── Success Banner ── */}
            {status === "success" && (
              <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                ✅ Request sent! We'll get back to you within 24 hours.
              </div>
            )}

            {/* ── Error Banner ── */}
            {status === "error" && (
              <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                ❌ Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
              <input type="text"  name="companyName" />
              <input type="email" name="businessEmail" />
              <input type="text"  name="trafficType" />
              <input type="text"  name="regions" />
              <textarea          name="message" />
            </form>

            {/* ── Visible React form ── */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />   {/* honeypot – stops basic bots */}

              <Input
                label="Company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <Input
                label="Business email"
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                required
              />
              <Input
                label="Traffic type (CLI / Non-CLI)"
                name="trafficType"
                value={formData.trafficType}
                onChange={handleChange}
              />
              <Input
                label="Regions of interest"
                name="regions"
                value={formData.regions}
                onChange={handleChange}
              />
              <Textarea
                label="Message / traffic details"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 w-full rounded-full bg-tv-teal px-6 py-3 text-sm font-semibold text-white hover:bg-tv-aqua transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Submit request"}
              </button>
            </form>
          </div>

          {/* ─── Info ─────────────────────────────────────────────────── */}
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

// ── Sub-components (unchanged styling, added controlled input props) ──────────

function Input({ label, type = "text", name, value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-tv-teal focus:outline-none"
      />
    </div>
  );
}

function Textarea({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
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