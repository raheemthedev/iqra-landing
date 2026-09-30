import { useState } from 'react'
import { companion, download, faq, features, mac, routine, sources, steps, why } from '../content/landing-copy'
import { primaryCta, release } from '../content/config'
import { Companion } from './Companion'
import { CtaLink } from './CtaLink'
import { BrandMark, Icon, type IconName } from './Icons'

export function Why() {
  return (
    <section className="section container why" aria-labelledby="why-title">
      <h2 id="why-title" className="h2">{why.title}</h2>
      <div>
        <p className="body-lg">{why.body}</p>
        <ul className="check-list">
          {why.points.map((p) => (
            <li key={p}><span className="tick on"><Icon name="check" size={14} /></span>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section id="how" className="section container" aria-labelledby="how-title">
      <p className="eyebrow">How it works</p>
      <h2 id="how-title" className="h2 narrow">Three small moves, repeated.</h2>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="step-n" aria-hidden="true">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function CompanionSection() {
  const [happy, setHappy] = useState(false)
  const [count, setCount] = useState(0)
  const wave = () => {
    setHappy(false)
    requestAnimationFrame(() => setHappy(true))
    setCount((c) => c + 1)
  }
  return (
    <section className="band" aria-labelledby="companion-title">
      <div className="container companion-grid">
        <div className="companion-stage">
          <button type="button" className="companion-btn" onClick={wave} aria-label="Say hello to the companion">
            <Companion size={168} happy={happy} />
          </button>
          <p className="stage-hint" aria-live="polite">{count === 0 ? 'Try clicking it—or moving your pointer.' : 'Hello! It reacts, then settles.'}</p>
        </div>
        <div>
          <h2 id="companion-title" className="h2">{companion.title}</h2>
          {companion.lines.map((l) => (
            <p key={l} className="body-lg mt">{l}</p>
          ))}
          <p className="fine mt">{companion.note}</p>
        </div>
      </div>
    </section>
  )
}

export function Sources() {
  return (
    <section id="sources" className="section container" aria-labelledby="sources-title">
      <h2 id="sources-title" className="h2 narrow">{sources.title}</h2>
      <div className="two-col">
        <div className="col">
          <h3>{sources.left.title}</h3>
          <p>{sources.left.body}</p>
          <ul className="source-list">
            {sources.links.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}<Icon name="external" size={14} /></a>
                <span>{l.what}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>{sources.right.title}</h3>
          <p>{sources.right.body}</p>
          <p className="callout">{sources.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

const routineIcons: IconName[] = ['learn', 'quran', 'practice']

export function Routine() {
  return (
    <section className="section container routine" aria-labelledby="routine-title">
      <div>
        <h2 id="routine-title" className="h2">{routine.title}</h2>
        <p className="body-lg mt">{routine.body}</p>
      </div>
      <ul className="routine-list">
        {routine.items.map((r, i) => (
          <li key={r.label}>
            <span className="round-btn tone"><Icon name={routineIcons[i]} /></span>
            <div>
              <strong>{r.label}</strong>
              <span>{r.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section container faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="h2">Questions, answered plainly.</h2>
      <div className="faq-list">
        {faq.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="faq-item">
              <h3>
                <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <span className={`faq-icon${isOpen ? ' open' : ''}`}><Icon name="plus" size={18} /></span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen}>
                <p>{f.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function Features() {
  const cta = primaryCta()
  return (
    <section id="features" className="section container features" aria-labelledby="features-title">
      <div className="features-head">
        <p className="hx-pill">What Iqra does</p>
        <h2 id="features-title" className="h2">{features.title}</h2>
        <p className="body-lg">{features.intro}</p>
        <CtaLink cta={cta} />
      </div>
      <ol className="flist">
        {features.tiles.map((t, i) => (
          <li key={t.id} className="frow">
            <span className="frow-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="round-btn frow-icon"><Icon name={t.icon as IconName} size={22} /></span>
            <div className="frow-main">
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <ul className="frow-tags">
                {t.tags.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function MadeForMac() {
  return (
    <section id="mac" className="band band-soft" aria-labelledby="mac-title">
      <div className="container">
        <p className="eyebrow">On your desktop</p>
        <h2 id="mac-title" className="h2 narrow">{mac.title}</h2>
        <p className="body-lg intro">{mac.intro}</p>
        <ul className="mac-grid">
          {mac.items.map((it) => (
            <li key={it.title}>
              <span className="round-btn"><Icon name={it.icon as IconName} /></span>
              <div>
                <strong>{it.title}</strong>
                <span>{it.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function DownloadSection() {
  const cta = primaryCta()
  return (
    <section id="download" className="container final-wrap" aria-labelledby="download-title">
      <div className="final dl">
        <div className="dl-copy">
          <p className="dl-pill"><Icon name="laptop" size={16} /> {release.chip ?? 'Mac'}</p>
          <h2 id="download-title" className="h2 on-dark">{download.title}</h2>
          <p className="body-lg">{cta.live ? 'Download the disk image and drag Iqra to Applications.' : download.status}</p>
          <div className="final-actions">
            {cta.live ? (
              <CtaLink cta={cta} variant="light" size="lg" />
            ) : (
              <span className="dl-status" role="status"><span className="dl-dot" aria-hidden="true" />Public build coming soon</span>
            )}
            {cta.live && cta.note && <p className="final-note">{cta.note}</p>}
          </div>
          <p className="dl-req">{download.requirements}</p>
        </div>
        <ol className="dl-steps">
          {download.steps.map((st, i) => (
            <li key={st.title}>
              <span className="dl-n" aria-hidden="true">{i + 1}</span>
              <div>
                <strong>{st.title}</strong>
                <span>{st.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top"><BrandMark size={28} /><span>Iqra Companion</span></a>
          <p className="fine mt">A desktop companion that brings Arabic practice, Qur’an reading, and your next lesson into a daily rhythm.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#how">How it works</a>
          <a href="#inside">Inside Iqra</a>
          <a href="#sources">Sources &amp; privacy</a>
          <a href="#faq">FAQ</a>
        </nav>
        <p className="fine">
          Iqra is a study aid, not a substitute for a qualified teacher. Third-party sources and course playlists are linked, not endorsed partners. The website itself collects no data. Illustrations on this page are provisional.
        </p>
      </div>
    </footer>
  )
}
