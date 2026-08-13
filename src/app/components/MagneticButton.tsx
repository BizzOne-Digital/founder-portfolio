"use client";

import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  href,
  className = "",
  children,
  target,
  rel,
  strength = 0.35,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic ${className}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      {children}
    </a>
  );
}
