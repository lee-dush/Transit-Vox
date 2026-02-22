import { useState } from "react";
import { Mail, Globe2, PhoneCall, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactFormAndInfo() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    trafficType: "",
    regions: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ company: "", email: "", trafficType: "", regions: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white">
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="company" />
        <input type="email" name="email" />
        <input type="text" name="trafficType" />
        <input type="text" name="regions" />
        <textarea name="message" />
        <input name="bot-field" />
      </form>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-tv-navy">
              Send us your requirements
            </h2>
            <p className="mt-3 text-sm text-tv-slate">
              Share your traffic profile and coverage needs. Our team will respond
              with relevant route and onboarding details.
            </p>

            {/* ── Success State ── */}
            {status === "success" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Request received!</p>
                  <p className="text-sm text-green-700">
                    We'll get back to you at{" "}
                    <span className="font-medium">transitvox@outlook.com</span> within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* ── Error State ── */}
            {status === "error" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-semibold text-red-800">Something went wrong.</p>
                  <p className="text-sm text-red-700">
                    Please try again or email us directly at{" "}
                    <a
                      href="mailto:transitvox@outlook.com"
                      className="underline underline-offset-2"
                    >
                      transitvox@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* ── The actual form submitted via fetch ── */}
            {status !== "success" && (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" /> {/* honeypot — leave empty */}

                <Input
                  label="Company name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Business email"
                  name="email"
                  type="email"
                  value={formData.email}
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
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-tv-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-tv-aqua disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit request"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Info Cards ── */}
          <div className="space-y-6">
            <InfoCard
              icon={Mail}
              title="Email"
              value="transitvox@outlook.com"
              href="mailto:transitvox@outlook.com"
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

// ─── Sub-components ────────────────────────────────────────────────────────────

function Input({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-tv-teal focus:outline-none focus:ring-2 focus:ring-tv-teal/20"
      />
    </div>
  );
}

function Textarea({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-tv-navy">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-tv-teal focus:outline-none focus:ring-2 focus:ring-tv-teal/20"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-navy/5 ring-1 ring-tv-navy/10">
          <Icon className="h-5 w-5 text-tv-indigo" />
        </div>
        <div>
          <p className="text-sm font-semibold text-tv-navy">{title}</p>
          {href ? (
            <a href={href} className="text-sm text-tv-slate hover:text-tv-teal transition">
              {value}
            </a>
          ) : (
            <p className="text-sm text-tv-slate">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
}