import { useEffect, useRef } from 'react'

/** The same custom owl and directional poses used in the desktop app. */
export function Companion({ size = 120, happy = false }: { size?: number; happy?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.backgroundPosition = happy ? '0% 40%' : '0% 0%'
    if (happy || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect()
        const dx = event.clientX - (box.left + box.width / 2)
        const dy = event.clientY - (box.top + box.height * 0.4)
        if (Math.hypot(dx, dy) < 28) { el.style.backgroundPosition = '0% 0%'; return }
        const angle = (Math.atan2(dx, -dy) * 180 / Math.PI + 360) % 360
        const column = Math.round(angle / 45) % 8
        el.style.backgroundPosition = `${column / 7 * 100}% 100%`
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(frame) }
  }, [happy])
  return <span ref={ref} className="iqra-owl" aria-hidden="true" style={{
    width: size, height: size * 208 / 192,
    backgroundImage: 'url(/iqra-owl-spritesheet.png)', backgroundSize: '800% 1100%',
  }} />
}
