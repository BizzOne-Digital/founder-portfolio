"use client";

import { ArrowRightIcon } from "./Icons";

const VIDEO_URL =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/creative_studio_video.mp4";

const chapters = ["2009", "2012", "2015", "2018", "2021", "2030+"];

export default function JourneyIntro() {
  return (
    <div className="reveal relative mb-16 min-h-[480px] w-full overflow-hidden rounded-2xl border border-paper-06 sm:min-h-[560px] md:min-h-[600px]">
      {/* background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
      />

      {/* left column gradient mask — keeps text readable over the footage */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[62%] lg:w-[52%]"
        style={{
          background:
            "linear-gradient(to right, #07070a 0%, rgba(7,7,10,0.94) 46%, rgba(7,7,10,0.55) 78%, transparent 100%)",
        }}
      />

      {/* top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-28"
        style={{ background: "linear-gradient(to bottom, #07070a 0%, rgba(7,7,10,0.5) 60%, transparent 100%)" }}
      />
      {/* bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28"
        style={{ background: "linear-gradient(to top, #07070a 0%, rgba(7,7,10,0.5) 60%, transparent 100%)" }}
      />

      {/* content */}
      <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-center px-5 py-12 sm:min-h-[560px] sm:max-w-[60%] sm:px-10 sm:py-16 md:min-h-[600px] lg:max-w-[54%]">
        <p className="mb-4 text-[9px] uppercase tracking-[0.18em] text-gold sm:mb-5 sm:text-[10px] sm:tracking-[0.2em]">
          &bull; Curiosity &bull; Courage &bull; Creation
        </p>

        <h2 className="font-sans text-[1.7rem] font-semibold leading-[1.1] tracking-tight text-paper sm:text-[2.2rem] sm:leading-[1.05] md:text-[2.6rem]">
          A path of
          <br />
          <span className="font-display italic font-normal text-gold">curiosity.</span>
        </h2>

        <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-paper-70 sm:mt-6 sm:text-[14px]">
          Milestones aren&rsquo;t the destination. They&rsquo;re the fuel.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9">
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-void transition-colors duration-300 hover:bg-gold-soft sm:px-6 sm:text-[12px]"
          >
            See the journey <ArrowRightIcon size={13} color="#07070a" />
          </a>
        </div>

        {/* chapter stack — years standing in for the "trusted by" avatar row */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:flex-nowrap">
          <div className="flex -space-x-3">
            {chapters.map((year) => (
              <div
                key={year}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper-15 bg-void text-[8px] font-medium text-paper-70 sm:h-9 sm:w-9 sm:text-[9px]"
                title={year}
              >
                {year.slice(2)}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-paper-50 sm:text-[12px]">Six chapters. One evolving story.</p>
        </div>
      </div>
    </div>
  );
}
