"use client";

// ─── DATA ───────────────────────────────────────────────────────────────────

// x/y are percentages over the panorama, placed above each landmark
const destinations = [
  { city: "New Delhi", country: "India", x: 7, y: 30 },
  { city: "Paris", country: "France", x: 19, y: 6 },
  { city: "New York", country: "USA", x: 31, y: 28 },
  { city: "London", country: "UK", x: 56, y: 28 },
  { city: "Singapore", country: "Singapore", x: 74, y: 32 },
  { city: "Toronto", country: "Canada", x: 88, y: 2 },
];

const stats = [
  { value: "6", label: "Countries" },
  { value: "5", label: "Brands" },
  { value: "1", label: "Vision" },
];

// flight path traced roughly over the gold line in the artwork (viewBox 2000×1072)
const flightPath =
  "M0 225 C 90 280, 140 380, 230 370 S 330 200, 420 205 S 700 120, 860 170 S 1080 190, 1170 135 S 1450 60, 1620 95 S 1900 150, 2000 240";

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function GlobalReach() {
  return (
    <section id="global" className="relative border-t border-paper-06 overflow-hidden py-24">
      <div className="reveal mx-auto mb-12 max-w-7xl px-6 md:px-10">
        <p className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-6 bg-gold/50" /> Global Reach
        </p>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display max-w-xl text-[2rem] font-normal leading-tight text-paper md:text-[2.4rem]">
            Rooted in one place.
            <br />
            Built for <span className="italic text-gold">every horizon.</span>
          </h2>
          <p className="max-w-sm text-[13px] leading-relaxed text-paper-70">
            From Delhi to Toronto — ideas that travel, brands that connect people
            across cities, cultures, and continents.
          </p>
        </div>
      </div>

      {/* panorama */}
      <div className="reveal-scale relative mx-auto aspect-[2000/1072] max-h-[720px] w-full max-w-[1600px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/world-journey.png"
          alt="Skyline of world landmarks reflected in water, connected by a flight path"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* comet travelling the flight path */}
        <svg viewBox="0 0 2000 1072" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <circle className="comet" r="7" fill="#fff6dc">
            <animateMotion dur="9s" repeatCount="indefinite" path={flightPath} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.94;1" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle className="comet" r="18" fill="#D4AF37" opacity="0.5" filter="blur(6px)">
            <animateMotion dur="9s" repeatCount="indefinite" path={flightPath} />
            <animate attributeName="opacity" values="0;0.5;0.5;0" keyTimes="0;0.06;0.94;1" dur="9s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* destination pins */}
        {destinations.map((d, i) => (
          <div
            key={d.city}
            className="reveal absolute hidden -translate-x-1/2 md:block"
            style={{ left: `${d.x}%`, top: `${d.y}%`, transitionDelay: `${300 + i * 120}ms` }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-3 py-1 shadow-sm backdrop-blur-md">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#1B3B2B]">{d.city}</span>
            </div>
          </div>
        ))}

        {/* blend edges into the dark page */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-void to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-void to-transparent 2xl:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-void to-transparent 2xl:block" />
      </div>

      {/* mobile destination list */}
      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-2 px-6 md:hidden">
        {destinations.map((d) => (
          <span key={d.city} className="rounded-full border border-paper-15 px-3 py-1 text-[10px] uppercase tracking-widest text-paper-70">
            {d.city}
          </span>
        ))}
      </div>

      <div className="relative mx-auto -mt-6 grid max-w-3xl grid-cols-3 gap-6 px-6 text-center md:-mt-16">
        {stats.map((s, i) => (
          <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <p className="font-display text-4xl text-gold md:text-5xl">{s.value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-paper-50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
