import { useEffect, useRef } from 'react'

interface Props {
  size?: number
  happy?: boolean
}

/** Original, provisional companion. Eyes follow the pointer unless reduced motion is on. */
export function Companion({ size = 120, happy = false }: Props) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height * 0.45)
        const dist = Math.hypot(dx, dy) || 1
        const k = Math.min(1, dist / 260) * 3.4
        el.style.setProperty('--px', `${((dx / dist) * k).toFixed(2)}px`)
        el.style.setProperty('--py', `${((dy / dist) * k).toFixed(2)}px`)
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <svg ref={ref} className={`companion${happy ? ' is-happy' : ''}`} width={size} height={(size * 136) / 120} viewBox="0 -6 120 136" aria-hidden="true" focusable="false">
      <ellipse cx="42" cy="122" rx="13" ry="6" fill="#10513F" />
      <ellipse cx="78" cy="122" rx="13" ry="6" fill="#10513F" />
      <g className="companion-body">
        <path d="M60 14C92 14 108 40 108 76c0 32-18 46-48 46S12 108 12 76c0-36 16-62 48-62z" fill="#176D59" />
        <ellipse cx="60" cy="98" rx="27" ry="19" fill="#E5F3ED" />
        <path d="M60 16C55 5 62-3 74-1c0 11-5 17-14 17z" fill="#EDB742" />
        <circle cx="33" cy="82" r="5.5" fill="#EDB742" opacity=".55" />
        <circle cx="87" cy="82" r="5.5" fill="#EDB742" opacity=".55" />
        <g className="companion-eyes">
          <circle cx="44" cy="62" r="12" fill="#fff" />
          <circle cx="76" cy="62" r="12" fill="#fff" />
          <circle className="pupil" cx="44" cy="62" r="5.4" fill="#202426" />
          <circle className="pupil" cx="76" cy="62" r="5.4" fill="#202426" />
        </g>
        <path d="M52 81q8 7 16 0" fill="none" stroke="#10513F" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}
