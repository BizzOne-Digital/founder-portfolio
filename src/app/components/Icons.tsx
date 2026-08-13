"use client";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function PawIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="10" cy="8" rx="2.5" ry="3.2" fill={color} opacity="0.85"/>
      <ellipse cx="18" cy="8" rx="2.5" ry="3.2" fill={color} opacity="0.85"/>
      <ellipse cx="5.5" cy="13.5" rx="2" ry="2.8" fill={color} opacity="0.85"/>
      <ellipse cx="22.5" cy="13.5" rx="2" ry="2.8" fill={color} opacity="0.85"/>
      <path d="M14 12c-4 0-7 2.5-6.5 6.5C8 22.5 10.5 24 14 24s6-1.5 6.5-5.5C21 14.5 18 12 14 12z" fill={color}/>
    </svg>
  );
}

export function HandHeartIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 16.5c0-1 .8-1.8 1.8-1.8.5 0 1 .2 1.3.5.3-.3.8-.5 1.3-.5 1 0 1.8.8 1.8 1.8 0 2-3.1 3.8-3.1 3.8S4 18.5 4 16.5z" fill={color}/>
      <path d="M6 21.5l10 2.5 6.5-4.5c.8-.55.9-1.7.25-2.4-.6-.65-1.6-.7-2.3-.15L17.5 19l-4.5-.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 15h3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 8c1-2.5 4.5-2.5 4.5 0 0 2.5-4.5 5-4.5 5S9.5 10.5 9.5 8C9.5 5.5 13 5.5 14 8z" fill={color} opacity="0.85"/>
    </svg>
  );
}

export function SoundwaveIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="11" width="2.5" height="6" rx="1.25" fill={color}/>
      <rect x="6.5" y="8" width="2.5" height="12" rx="1.25" fill={color}/>
      <rect x="11" y="5" width="2.5" height="18" rx="1.25" fill={color}/>
      <rect x="15.5" y="9" width="2.5" height="10" rx="1.25" fill={color}/>
      <rect x="20" y="12" width="2.5" height="4" rx="1.25" fill={color}/>
      <rect x="24" y="10" width="2" height="8" rx="1" fill={color} opacity="0.5"/>
    </svg>
  );
}

export function LightningIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 3L6 16.5h8L10 25l14-12.5h-8.5L16 3z" fill={color}/>
    </svg>
  );
}

export function MirrorIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="14" cy="11" rx="7" ry="8.5" stroke={color} strokeWidth="1.8" fill="none"/>
      <rect x="12.2" y="19.5" width="3.6" height="5" rx="1" fill={color}/>
      <path d="M10 24.5h8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M11 8.5c1-1.5 2-2 3-2" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = "", size = 16, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ExternalLinkIcon({ className = "", size = 14, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5.5 2.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 1.5h4.5V6" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 1.5L6.5 7.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function MenuIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 5h14M3 10h14M3 15h14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CloseIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 4l12 12M16 4L4 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function OrbitIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="14" cy="14" r="3.5" fill={color}/>
      <ellipse cx="14" cy="14" rx="11" ry="5" stroke={color} strokeWidth="1.4" fill="none"/>
      <ellipse cx="14" cy="14" rx="5" ry="11" stroke={color} strokeWidth="1.4" fill="none" opacity="0.55"/>
      <circle cx="14" cy="3" r="1.8" fill={color}/>
    </svg>
  );
}

export function GridDotsIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  const dots = [2, 9, 16];
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {dots.map((y) => dots.map((x) => (
        <circle key={`${x}-${y}`} cx={x + 1} cy={y + 1} r="1.4" fill={color} />
      )))}
    </svg>
  );
}

export function PeopleIcon({ className = "", size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="8" cy="7" r="3" stroke={color} strokeWidth="1.4"/>
      <circle cx="17" cy="8.5" r="2.3" stroke={color} strokeWidth="1.4" opacity="0.7"/>
      <path d="M2.5 20c0-3.6 2.4-6 5.5-6s5.5 2.4 5.5 6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M14.5 15c2.6 0 4.7 1.9 4.9 4.6" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

export function HeartPulseIcon({ className = "", size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 12h4l2-4 3 7 2-5h7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5.5C10.8 3.7 7 3.9 7 7.2c0 3 5 7.3 5 7.3s5-4.3 5-7.3c0-3.3-3.8-3.5-5-1.7z" stroke={color} strokeWidth="1.2" opacity="0.55"/>
    </svg>
  );
}

export function InfinityIcon({ className = "", size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 9a4 4 0 100 6c1.5 0 2.6-1 4-3 1.4-2 2.5-3 4-3a4 4 0 110 6c-1.5 0-2.6-1-4-3-1.4-2-2.5-3-4-3z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function TargetIcon({ className = "", size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.3"/>
      <circle cx="12" cy="12" r="4.5" stroke={color} strokeWidth="1.3" opacity="0.6"/>
      <circle cx="12" cy="12" r="1.3" fill={color}/>
    </svg>
  );
}

export function BulbIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2.5a5.5 5.5 0 00-3 10.1c.5.35.8.9.8 1.5v.4h4.4v-.4c0-.6.3-1.15.8-1.5A5.5 5.5 0 0010 2.5z" stroke={color} strokeWidth="1.3"/>
      <path d="M8 17h4M8.6 14.5h2.8" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function NodeWebIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="10" cy="4" r="1.6" fill={color}/>
      <circle cx="4" cy="14" r="1.6" fill={color}/>
      <circle cx="16" cy="14" r="1.6" fill={color}/>
      <circle cx="10" cy="10" r="1.6" fill={color}/>
      <path d="M10 5.5v3M8.9 10.9L5.2 12.9M11.1 10.9l3.7 2" stroke={color} strokeWidth="1.1" opacity="0.7"/>
    </svg>
  );
}

export function ShieldCheckIcon({ className = "", size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2.5l6.5 2.4v4.6c0 4.2-2.9 6.9-6.5 8.2-3.6-1.3-6.5-4-6.5-8.2V4.9L10 2.5z" stroke={color} strokeWidth="1.3"/>
      <path d="M7.3 10l1.9 1.9 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
