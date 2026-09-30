import type { ReactNode } from 'react'

function Svg({ children, size = 20 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export type IconName = 'today' | 'practice' | 'learn' | 'quran' | 'hadith' | 'check' | 'arrow' | 'external' | 'menu' | 'close' | 'plus' | 'file' | 'link' | 'video' | 'audio' | 'download' | 'laptop' | 'bell' | 'lock' | 'power' | 'chart' | 'moon' | 'pin' | 'move' | 'sparkle' | 'cursor'

export function Icon({ name, size }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    today: <><rect x="3" y="4" width="18" height="18" rx="3" /><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" /></>,
    practice: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
    learn: <><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4z" /></>,
    quran: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
    hadith: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
    check: <path d="M20 6 9 17l-5-5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
    video: <><rect x="2" y="5" width="14" height="14" rx="3" /><path d="m22 8-6 4 6 4z" /></>,
    audio: <path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7" />,
    download: <path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16" />,
    laptop: <><rect x="4" y="4" width="16" height="11" rx="2" /><path d="M2 20h20M9 20l.5-2h5l.5 2" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    power: <path d="M12 2v10M6.4 6.4a8 8 0 1 0 11.2 0" />,
    chart: <path d="M18 20V10M12 20V4M6 20v-6" />,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
    pin: <path d="M12 17v5M9 3h6l-1 6 3 3v2H7v-2l3-3z" />,
    move: <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />,
    sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
    cursor: <path d="M4 3l7 17 2.5-7.5L21 10z" />,
  }
  return <Svg size={size}>{paths[name]}</Svg>
}

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="18" fill="#176D59" />
      <rect x="28" y="16" width="8" height="34" rx="4" fill="#fff" />
      <circle cx="46" cy="46" r="5" fill="#EDB742" />
    </svg>
  )
}
