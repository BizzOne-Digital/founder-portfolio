"use client";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

export default function FootprintCards() {
  return (
    <section
      className="relative w-full bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10"
      style={{ fontFamily: "'Futura Md BT Medium', system-ui, -apple-system, sans-serif" }}
    >
      <style>{`@import url(https://db.onlinewebfonts.com/c/e55e9079ee863276569c8a68d776ef04?family=Futura+Md+BT+Medium);`}</style>

      <p className="mb-3 text-center text-[10px] uppercase tracking-[0.2em] text-gold">The Footprint</p>
      <h2
        className="mb-12 text-center text-3xl font-light text-white sm:mb-24 sm:text-4xl md:text-5xl"
        style={{ letterSpacing: "-0.04em" }}
      >
        Small Actions, Collective Impact
      </h2>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        {/* Card 1 — text, blob left */}
        <div className="relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div className="absolute -left-[420px] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col">
            <h3 className="text-xl font-light leading-tight text-white sm:text-2xl">
              Communities Touched
              <br />
              50K and Growing
            </h3>
            <p className="mt-12 max-w-[280px] text-[13px] font-light leading-relaxed text-white/70 sm:mt-20 sm:text-[14px]">
              Every brand in this ecosystem exists to solve a real human need — and together
              they&rsquo;ve reached tens of thousands of people across companionship, care,
              sound, movement, and imagination.
            </p>
          </div>
        </div>

        {/* Card 2 — video, center */}
        <div className="relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 sm:h-[460px]">
          <div className="relative w-full overflow-hidden" style={{ height: "75%" }}>
            <video
              className="block h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={VIDEO_URL}
            />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
          </div>
          <div className="flex flex-1 items-center justify-start p-6 sm:p-8">
            <h3 className="text-left text-xl font-light leading-tight text-white sm:text-2xl">
              Ideas in Motion,
              <br />
              Building Toward 2030
            </h3>
          </div>
        </div>

        {/* Card 3 — text, blob top-right, body pinned bottom */}
        <div className="relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div className="absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col">
            <h3 className="text-xl font-light leading-tight text-white sm:text-2xl">
              Purpose Committed,
              <br />
              Legacy That Lasts
            </h3>
            <p className="mt-auto max-w-[320px] text-[13px] font-light leading-relaxed text-white/70 sm:text-[14px]">
              100% committed to a vision built on trust, creativity, and lasting human impact —
              creating ripples that outlive us all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
