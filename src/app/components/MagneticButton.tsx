"use client";

import type { ReactNode } from "react";

// Plain link with a soft hover glow — the cursor-pull motion was removed to
// keep the site's total motion budget to the hero video + the journey light.
export default function MagneticButton({
  href,
  className = "",
  children,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a href={href} target={target} rel={rel} className={`magnetic ${className}`}>
      {children}
    </a>
  );
}
