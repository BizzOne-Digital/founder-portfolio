"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import {
  PawIcon,
  HandHeartIcon,
  SoundwaveIcon,
  LightningIcon,
  MirrorIcon,
  CloseIcon,
} from "./Icons";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4";

const navLinks = [
  { label: "Index", href: "#index" },
  { label: "Journey", href: "#journey" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "2030", href: "#vision" },
  { label: "Connect", href: "#connect" },
];

const strip = [
  { name: "DTdogs", Icon: PawIcon },
  { name: "HandandPaw", Icon: HandHeartIcon },
  { name: "Kroak Studiyo", Icon: SoundwaveIcon },
  { name: "ABCL", Icon: LightningIcon },
  { name: "Aeon Salon", Icon: MirrorIcon },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 31.5 48.5" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="dt-bg1" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9e9e9e" />
          <stop offset=".28" stopColor="#a6a6a6" />
          <stop offset=".34" stopColor="#a3a3a3" />
          <stop offset=".40" stopColor="#3a3a3a" />
          <stop offset=".55" stopColor="#414141" />
          <stop offset=".60" stopColor="#7a7a7a" />
          <stop offset=".68" stopColor="#8e8e8e" />
          <stop offset=".80" stopColor="#a9a9a9" />
          <stop offset=".95" stopColor="#c4c4c4" />
          <stop offset="1" stopColor="#cccccc" />
        </linearGradient>
      </defs>
      <path
        d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
        fill="url(#dt-bg1)"
      />
      <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
      <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
    </svg>
  );
}

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div id="index" className={`${styles.stage} ${isOpen ? styles.isOpen : ""}`}>
      {/* video plate */}
      <div className={styles.plate}>
        <video
          className={styles.plateVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* topbar */}
      <header className={styles.topbar}>
        <a className={styles.brand} href="#index" aria-label="Home">
          <BrandMark />
        </a>

        <ul className={styles.links} aria-label="Primary">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a className={styles.pillNav} href="#connect">
          <span>Get in touch</span>
        </a>

        <button
          className={styles.burger}
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="hero-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <i />
          <i />
        </button>
      </header>

      {/* mobile menu overlay */}
      <nav
        id="hero-menu"
        className={styles.menu}
        aria-hidden={!isOpen}
      >
        <button
          className={styles.menuClose}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon size={18} color="#1B3B2B" />
        </button>

        <div className={styles.menuInner}>
          <p className={styles.menuEyebrow}>Menu</p>
          <ul className={styles.menuList}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setIsOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.menuFoot}>
            <a className={styles.pillCta} href="#ecosystem" onClick={() => setIsOpen(false)}>
              Explore the ecosystem
            </a>
            <a className={styles.ghost} href="#journey" onClick={() => setIsOpen(false)}>
              View the journey
            </a>
          </div>
        </div>
      </nav>

      {/* hero content */}
      <main className={styles.hero}>
        <h1 className={styles.headline}>
          <span>I build worlds around</span>
          <span>human needs.</span>
        </h1>
        <p className={styles.sub}>
          <span>Brands. Communities. Experiences.</span>
          <span>Building toward 2030 — and beyond.</span>
        </p>
        <div className={styles.actions}>
          <a className={styles.pillCta} href="#ecosystem">
            Explore the ecosystem
          </a>
          <a className={styles.ghost} href="#connect">
            Connect with me
          </a>
        </div>
      </main>

      {/* partner / brand strip */}
      <div className={styles.logos}>
        {strip.map((s) => (
          <div key={s.name} className={styles.lg}>
            <span className={styles.lgIcon}>
              <s.Icon size={22} color="#6f6a60" />
            </span>
            <span className={styles.lgWord}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
