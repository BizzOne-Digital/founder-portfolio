"use client";

import { useEffect, useRef } from "react";
import {
  PawIcon,
  HandHeartIcon,
  SoundwaveIcon,
  LightningIcon,
  MirrorIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  PeopleIcon,
  HeartPulseIcon,
  InfinityIcon,
  TargetIcon,
  BulbIcon,
  NodeWebIcon,
  ShieldCheckIcon,
} from "./components/Icons";
import MagneticButton from "./components/MagneticButton";
import Hero from "./components/Hero";

// ─── DATA ───────────────────────────────────────────────────────────────────

const timeline = [
  { year: "2009", title: "Curiosity", body: "The spark of creation." },
  { year: "2012", title: "First Leap", body: "Turning ideas into action." },
  { year: "2015", title: "First Impact", body: "Building with purpose." },
  { year: "2018", title: "Ecosystems", body: "Brands that connect." },
  { year: "2021", title: "Acceleration", body: "Scaling impact. Deepening roots." },
  { year: "2030+", title: "Infinity", body: "Building toward forever." },
];

const ecosystemBrands = [
  {
    name: "DTdogs.ca",
    tag: "Companionship. Loyalty. Love.",
    Icon: PawIcon,
    accent: "#c99a5e",
  },
  {
    name: "HandandPaw.ca",
    tag: "Care. Trust. Family.",
    Icon: HandHeartIcon,
    accent: "#8fae8b",
  },
  {
    name: "Kroak Studiyo",
    tag: "Sound. Emotion. Connection.",
    Icon: SoundwaveIcon,
    accent: "#9d8bd6",
  },
  {
    name: "ABCL",
    tag: "Movement. Progress. Potential.",
    Icon: LightningIcon,
    accent: "#5f8fd6",
  },
  {
    name: "Aeon Salon",
    tag: "AI. Imagination. Visualization.",
    Icon: MirrorIcon,
    accent: "#d6c9e8",
  },
];

const footprintStats = [
  { Icon: PeopleIcon, num: "50K+", label: "Communities Touched" },
  { Icon: HeartPulseIcon, num: "100K+", label: "Lives Impacted" },
  { Icon: InfinityIcon, num: "∞", label: "Ideas In Motion" },
  { Icon: TargetIcon, num: "100%", label: "Purpose Committed" },
];

const horizonPoints = [
  { Icon: BulbIcon, label: "Human-first innovation" },
  { Icon: NodeWebIcon, label: "Connected ecosystems" },
  { Icon: TargetIcon, label: "Limitless imagination" },
  { Icon: ShieldCheckIcon, label: "Legacy that lasts" },
];

// ─── WORLD MAP (dotted, generated) ─────────────────────────────────────────

// Rough continent silhouettes as ellipse unions, sampled on a fine grid so
// the result reads as a world map, not a random scatter of blobs.
const CONTINENTS = [
  // North America
  { cx: 20, cy: 22, rx: 10, ry: 9, rot: -0.15 },
  { cx: 14, cy: 30, rx: 5, ry: 6, rot: 0 },
  // South America
  { cx: 26, cy: 46, rx: 5, ry: 11, rot: 0.1 },
  // Europe
  { cx: 49, cy: 18, rx: 5, ry: 5, rot: 0 },
  // Africa
  { cx: 51, cy: 34, rx: 8, ry: 13, rot: 0 },
  // Asia
  { cx: 68, cy: 18, rx: 13, ry: 8, rot: -0.1 },
  { cx: 78, cy: 26, rx: 8, ry: 9, rot: 0.1 },
  // Australia
  { cx: 84, cy: 46, rx: 6, ry: 4, rot: 0 },
];

function insideContinents(x: number, y: number) {
  return CONTINENTS.some((c) => {
    const dx = x - c.cx;
    const dy = y - c.cy;
    const cos = Math.cos(c.rot);
    const sin = Math.sin(c.rot);
    const rx = dx * cos + dy * sin;
    const ry = -dx * sin + dy * cos;
    return (rx * rx) / (c.rx * c.rx) + (ry * ry) / (c.ry * c.ry) <= 1;
  });
}

function WorldMapDots() {
  const dots = useRef<{ x: number; y: number; r: number }[]>();
  if (!dots.current) {
    const arr: { x: number; y: number; r: number }[] = [];
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const step = 1.6;
    for (let y = 4; y < 60; y += step) {
      for (let x = 2; x < 98; x += step) {
        const jx = x + (rand() - 0.5) * step * 0.6;
        const jy = y + (rand() - 0.5) * step * 0.6;
        if (insideContinents(jx, jy) && rand() > 0.12) {
          arr.push({ x: jx, y: jy, r: 0.28 + rand() * 0.24 });
        }
      }
    }
    dots.current = arr;
  }

  return (
    <svg viewBox="0 0 100 62" className="h-full w-full" aria-hidden="true">
      {dots.current.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="rgba(224,168,86,0.6)" />
      ))}
      <path
        d="M4 44 Q 30 24 52 32 T 96 20"
        stroke="rgba(224,168,86,0.3)"
        strokeWidth="0.15"
        fill="none"
        strokeDasharray="1 1.2"
      />
    </svg>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Page() {
  const roadRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .path-fill")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void text-paper selection:bg-gold selection:text-void">
      <Hero />
      {/* ── I AM ─────────────────────────────────────────────────────────── */}
      <section className="relative border-t border-paper-06 py-24 px-6 md:px-10 overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, rgba(224,168,86,0.07), transparent 70%)" }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.3fr_0.8fr]">
          {/* portrait */}
          <div className="reveal-left group">
            <div className="relative mx-auto w-full max-w-[280px]">
              {/* ambient glow behind frame */}
              <div className="breathe pointer-events-none absolute -inset-6 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, rgba(224,168,86,0.16), transparent 70%)" }} />

              {/* decorative rotating ring */}
              <div className="spin-slow pointer-events-none absolute -inset-3 rounded-sm border border-paper-06" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-paper-15 bg-gradient-to-b from-[#1a1a1f] to-[#0a0a0d] transition-colors duration-500 group-hover:border-gold/40">
                <div
                  className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(224,168,86,0.16), transparent 60%)",
                  }}
                />
                <div className="grain absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-paper-15 transition-colors duration-500 group-hover:text-paper-30">DT</span>
                </div>

                {/* corner accents */}
                <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/50" />
                <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/50" />
                <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/50" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/50" />
              </div>
            </div>
            <p className="font-display mt-6 text-center text-lg italic text-paper-70">Dreamer. Builder. Catalyst.</p>
            <div className="mt-2 flex items-center justify-center gap-2.5">
              <span className="h-px w-5 bg-paper-15" />
              <p className="text-[10px] uppercase tracking-widest text-paper-50">Founder &amp; Creator</p>
              <span className="h-px w-5 bg-paper-15" />
            </div>
          </div>

          {/* statement */}
          <div className="reveal">
            <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-6 bg-gold/50" /> I Am
            </p>
            <h2 className="font-display max-w-lg text-[2rem] font-normal leading-tight text-paper md:text-[2.4rem]">
              A builder of meaning, <span className="italic text-gold">systems</span>, and impact.
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[14px] leading-[1.85] text-paper-70">
              <p>
                I create brands and experiences that bring together humanity, technology,
                and imagination. Each venture is a world — each world, a purpose.
              </p>
              <p>This is not a portfolio. This is a living ecosystem.</p>
            </div>
          </div>

          {/* principles ring */}
          <div className="reveal-right hidden lg:flex justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center">
              {/* rotating dotted orbit with markers */}
              <div className="spin-slow pointer-events-none absolute inset-0 rounded-full border border-dashed border-paper-10">
                <span className="pulse-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
                <span className="absolute left-full top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-30" />
                <span className="absolute left-1/2 top-full h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-30" />
                <span className="absolute left-0 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-30" />
              </div>

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-paper-10 transition-colors duration-500 hover:border-gold/30">
                <div className="absolute inset-4 rounded-full border border-paper-06" />
                <div className="space-y-3 text-center text-[12px] leading-relaxed text-paper-70">
                  <p>Purpose over profit.</p>
                  <p>Impact over ego.</p>
                  <p>Legacy over life.</p>
                  <p className="pt-1 text-gold text-[11px] uppercase tracking-widest">Always.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY ──────────────────────────────────────────────────────── */}
      <section id="journey" className="border-t border-paper-06 py-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 max-w-lg">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gold">The Journey</p>
            <h2 className="font-display text-[2rem] font-normal leading-tight text-paper md:text-[2.4rem]">
              A path of curiosity, courage &amp; creation.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-paper-70">
              Milestones aren&rsquo;t the destination. They&rsquo;re the fuel.
            </p>
            <a
              href="#ecosystem"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper-30 px-6 py-2.5 text-[11px] uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Explore the journey <ArrowRightIcon size={12} />
            </a>
          </div>

          {/* winding road */}
          <div className="reveal relative">
            <svg viewBox="0 0 1200 240" className="w-full" preserveAspectRatio="none">
              <path
                ref={roadRef}
                d="M20 200 C 180 220, 220 120, 340 140 S 520 220, 620 160 S 800 100, 900 130 S 1080 190, 1180 60"
                stroke="rgba(245,241,232,0.08)"
                strokeWidth="2"
                fill="none"
              />
              <path
                className="path-fill visible"
                d="M20 200 C 180 220, 220 120, 340 140 S 520 220, 620 160 S 800 100, 900 130 S 1080 190, 1180 60"
                stroke="#e0a856"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    <span className="h-px flex-1 bg-paper-10" />
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-paper-50">{item.year}</p>
                  <h4 className="mt-1 font-display text-lg text-paper">{item.title}</h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-paper-50">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ────────────────────────────────────────────────────── */}
      <section id="ecosystem" className="border-t border-paper-06 py-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gold">The Ecosystem</p>
              <h2 className="font-display text-[2rem] font-normal leading-tight text-paper md:text-[2.4rem]">
                Five worlds.
                <br />
                One vision.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-paper-60 text-paper-70">
              Different expressions. Unified purpose.
            </p>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-full border border-paper-30 px-6 py-2.5 text-[11px] uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Explore the ecosystem <ArrowRightIcon size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {ecosystemBrands.map((b, i) => (
              <div
                key={b.name}
                className="reveal group relative flex flex-col items-center px-4 py-6 text-center"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* soft glow behind node */}
                <div
                  className="pointer-events-none absolute left-1/2 top-8 h-32 w-32 -translate-x-1/2 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, ${b.accent}40, transparent 70%)` }}
                />
                <div
                  className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
                  style={{ boxShadow: `0 0 0 1px ${b.accent}33, 0 0 30px -6px ${b.accent}55` }}
                >
                  <b.Icon size={26} color={b.accent} />
                </div>
                <h3 className="text-[14px] font-medium text-paper">{b.name}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-paper-50">{b.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTPRINT ────────────────────────────────────────────────────── */}
      <section className="border-t border-paper-06 py-24 px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gold">The Footprint</p>
            <h2 className="font-display text-[2rem] font-normal leading-tight text-paper md:text-[2.4rem]">
              Small actions.
              <br />
              Collective impact.
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-paper-70">
              Creating ripples that outlive us all.
            </p>
            <a
              href="#vision"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper-30 px-6 py-2.5 text-[11px] uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Explore impact <ArrowRightIcon size={12} />
            </a>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {footprintStats.map((s, i) => (
                <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <s.Icon size={20} color="#e0a856" />
                  <p className="font-display mt-3 text-2xl text-paper">{s.num}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-paper-50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right relative aspect-[10/7] w-full overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(224,168,86,0.06), transparent 75%)" }}
            />
            <WorldMapDots />
          </div>
        </div>
      </section>

      {/* ── 2030 VISION ──────────────────────────────────────────────────── */}
      <section id="vision" className="relative border-t border-paper-06 overflow-hidden px-6 py-28 md:px-10">
        {/* horizon glow */}
        <div className="grain vignette pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-[62%] h-[380px] w-[380px] -translate-x-1/2 rounded-full blur-3xl breathe"
            style={{ background: "radial-gradient(circle, rgba(224,168,86,0.55), transparent 70%)" }}
          />
          <div className="absolute left-0 right-0 top-[65%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gold">2030 And Beyond</p>
            <h2 className="font-display text-[2.2rem] font-normal leading-tight text-paper md:text-[2.6rem]">
              The horizon
              <br />
              is just the beginning.
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-paper-70">
              Building a future where human needs, technology, and imagination
              create a better world for all.
            </p>
            <MagneticButton
              href="#connect"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-[12px] font-medium uppercase tracking-wider text-void hover:bg-gold-soft transition-colors duration-300"
            >
              View the 2030 vision <ArrowRightIcon size={13} color="#07070a" />
            </MagneticButton>
          </div>

          <div className="reveal-right relative flex h-64 items-end justify-center overflow-hidden md:h-80">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(26,16,6,0.5) 100%)",
              }}
            />
            <div className="drift-bg absolute left-1/2 top-[58%] h-40 w-40 -translate-x-1/2">
              <div
                className="breathe h-full w-full rounded-full"
                style={{ background: "radial-gradient(circle, #f2c583 0%, #e0a856 40%, transparent 72%)" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-t-[100%] bg-void" />
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4">
          {horizonPoints.map((p, i) => (
            <div key={p.label} className="reveal flex items-center gap-3" style={{ transitionDelay: `${i * 90}ms` }}>
              <p.Icon size={18} color="#e0a856" />
              <span className="text-[12px] text-paper-70">{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECT ──────────────────────────────────────────────────────── */}
      <section id="connect" className="border-t border-paper-06 px-6 py-28 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-6 text-[10px] uppercase tracking-[0.2em] text-gold">Connect</p>
          <h2 className="reveal font-display text-[2.4rem] font-normal leading-tight text-paper md:text-[3.2rem]">
            One person. Many ideas.
            <br />
            Different worlds. <span className="italic text-gold">One evolving vision.</span>
          </h2>
          <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
            <MagneticButton
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-[12px] font-medium uppercase tracking-wider text-void hover:bg-gold-soft transition-colors duration-300"
            >
              Explore the ecosystem <ArrowRightIcon size={13} color="#07070a" />
            </MagneticButton>
            <MagneticButton
              href="https://sunnyism.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-30 px-6 py-2.5 text-[12px] uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Connect with me <ExternalLinkIcon size={12} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-paper-06 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-display text-lg tracking-widest text-paper">DT</span>
          <p className="text-[11px] text-paper-50">© 2026 All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-wider text-paper-50 hover:text-gold transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-wider text-paper-50 hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-wider text-paper-50 hover:text-gold transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
