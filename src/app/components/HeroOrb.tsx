"use client";

import { useEffect, useRef } from "react";

interface HeroOrbProps {
  tiltX?: number;
  tiltY?: number;
}

// Canvas particle field forming a "living organism" core — scales to its
// container and keeps drifting/rotating on its own, independent of the cursor.
export default function HeroOrb({ tiltX = 0, tiltY = 0 }: HeroOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef({ x: tiltX, y: tiltY });
  tiltRef.current = { x: tiltX, y: tiltY };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let raf = 0;
    let w = 0;
    let h = 0;
    let base = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Particle = {
      angle: number;
      radius: number;
      speed: number;
      wobble: number;
      wobbleSpeed: number;
      size: number;
    };
    let particles: Particle[] = [];

    const N = 160;

    const buildParticles = () => {
      particles = Array.from({ length: N }, (_, i) => {
        const angle = (i / N) * Math.PI * 2;
        return {
          angle,
          radius: base * (0.18 + Math.random() * 0.34),
          speed: 0.0009 + Math.random() * 0.0016,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.006 + Math.random() * 0.014,
          size: 0.8 + Math.random() * (base * 0.012),
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      base = Math.min(w, h);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      buildParticles();
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let autoAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const { x: tx, y: ty } = tiltRef.current;
      // gentle continuous drift of the whole core, independent of the cursor
      const driftX = Math.sin(autoAngle) * base * 0.02;
      const driftY = Math.cos(autoAngle * 0.8) * base * 0.015;
      const cx = w / 2 + tx * base * 0.05 + driftX;
      const cy = h / 2 + ty * base * 0.04 + driftY;

      const glowR = base * 0.32;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      glow.addColorStop(0, "rgba(224,168,86,0.5)");
      glow.addColorStop(0.4, "rgba(224,168,86,0.12)");
      glow.addColorStop(1, "rgba(224,168,86,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        const a = p.angle + t * p.speed;
        const wob = Math.sin(t * p.wobbleSpeed + p.wobble) * base * 0.03;
        const r = p.radius + wob;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.62;
        const alpha = 0.3 + 0.55 * Math.abs(Math.sin(a));
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,168,86,${alpha})`;
        ctx.fill();
      });

      if (!reduced) {
        t += 1;
        autoAngle += 0.0022;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
