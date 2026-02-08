export default function SolutionSection({
  index,
  title,
  description,
  bullets,
  highlight,
  reverse,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-tv-teal">
              Solution {index}
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-tv-navy">
              {title}
            </h2>

            <p className="mt-5 text-base leading-7 text-tv-slate">
              {description}
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-tv-navy"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-tv-teal" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlight panel */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold text-tv-navy">
              Why this matters
            </p>
            <p className="mt-3 text-sm leading-6 text-tv-slate">
              {highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
