import { useEffect, useRef, useState } from 'react'
import { nav } from '../content/landing-copy'
import { primaryCta } from '../content/config'
import { BrandMark, Icon } from './Icons'
import { CtaLink } from './CtaLink'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const cta = primaryCta()

  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="#top" aria-label="Iqra Companion, back to top">
          <BrandMark />
          <span>Iqra Companion</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <CtaLink cta={cta} size="sm" className="header-cta" />
          <button
            ref={toggle}
            className="round-btn menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="nav-mobile container" aria-label="Primary mobile">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
