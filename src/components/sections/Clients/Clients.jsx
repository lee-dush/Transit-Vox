import { useRef } from "react";

const CLIENTS = [
  "/src/assets/images/clients/didww.png",
  "/src/assets/images/clients/idt.jpg",
  "/src/assets/images/clients/LANCK_Telecom.webp",
  "/src/assets/images/clients/Orange-Emblem.png",
  "/src/assets/images/clients/ringcentral.avif",
  "/src/assets/images/clients/voda.png",
];

export default function Clients() {
  const marqueeRef = useRef(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-tv-teal">Trusted by</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-tv-navy sm:text-3xl">
            Trusted by carriers and voice partners worldwide
          </h2>
          <p className="mt-3 text-base text-tv-slate">
            TransitVox works with carriers, wholesalers, and enterprise voice providers
            across global regions, supporting CLI and Non-CLI wholesale traffic.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-6"
          onMouseEnter={() => marqueeRef.current?.classList.add("paused")}
          onMouseLeave={() => marqueeRef.current?.classList.remove("paused")}
        >
          {/* fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div
            ref={marqueeRef}
            className="marquee flex w-max items-center gap-14 px-6"
          >
            {[...CLIENTS, ...CLIENTS].map((logo, i) => (
              <div key={i} className="flex h-14 items-center justify-center">
                <img
                  src={logo}
                  alt="Client logo"
                  draggable={false}
                  className="
                    h-full w-auto
                    grayscale opacity-70
                    transition-all duration-300
                    hover:grayscale-0 hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-tv-slate">
          Client logos are shown for representation purposes. Actual partnerships may vary by region and service type.
        </p>
      </div>

      {/* marquee animation */}
      <style>
        {`
          .marquee {
            animation: scroll 40s linear infinite;
          }
          .marquee.paused {
            animation-play-state: paused;
          }
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
