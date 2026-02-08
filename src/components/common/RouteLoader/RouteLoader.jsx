import { useEffect, useState } from "react";

export default function RouteLoader() {
  const [hint, setHint] = useState("Establishing voice route…");

  useEffect(() => {
    const hints = [
      "Establishing voice route…",
      "Negotiating SIP session…",
      "Optimizing A–Z path…",
      "Validating CLI/Non-CLI profile…",
    ];
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % hints.length;
      setHint(hints[i]);
    }, 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      {/* Top loading bar */}
      <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-slate-100">
        <div className="tv-loader-bar h-full w-[40%] bg-gradient-to-r from-tv-teal via-tv-aqua to-tv-indigo" />
      </div>

      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-tv-navy">TransitVox</div>
            <div className="text-xs text-tv-slate">Loading</div>
          </div>

          {/* Waveform */}
          <div className="mt-6 flex items-end justify-center gap-1.5">
            {Array.from({ length: 11 }).map((_, idx) => (
              <span
                key={idx}
                className="tv-wave w-1.5 rounded-full bg-tv-teal/80"
                style={{
                  height: `${10 + (idx % 5) * 6}px`,
                  animationDelay: `${idx * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-tv-navy">{hint}</p>
            <p className="mt-2 text-sm text-tv-slate">
              Preparing your experience with carrier-grade routing.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .tv-loader-bar {
            animation: tvBar 1.2s ease-in-out infinite;
          }
          @keyframes tvBar {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(320%); }
          }

          .tv-wave {
            animation: tvWave 0.9s ease-in-out infinite;
          }
          @keyframes tvWave {
            0%, 100% { transform: scaleY(0.5); opacity: 0.55; }
            50% { transform: scaleY(1.6); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
