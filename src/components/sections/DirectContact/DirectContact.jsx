import { MessageSquare, Clock } from "lucide-react";

export default function DirectContact() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-tv-navy">
                Need an immediate response?
              </h2>
              <p className="mt-3 text-base text-tv-slate">
                For urgent routing discussions, live traffic issues, or onboarding
                coordination, you can connect directly with our team on Microsoft Teams.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-tv-slate">
                <Clock className="h-4 w-4 text-tv-teal" />
                Typical response time during business hours
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-tv-teal px-7 py-3 text-sm font-semibold text-white hover:bg-tv-aqua transition"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact us on Teams
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
