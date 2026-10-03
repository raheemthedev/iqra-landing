import { useState } from 'react'
import { companion, download, faq, features, mac, routine, sources, steps, why } from '../content/landing-copy'
import { primaryCta, release } from '../content/config'
import { Companion } from './Companion'
import { CtaLink } from './CtaLink'
import { AppleIcon, BrandMark, Icon, type IconName } from './Icons'

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
    <section id="how" className="section container how" aria-labelledby="how-title">
      <div className="how-head">
        <p className="eyebrow">How it works</p>
        <h2 id="how-title" className="h2">Three small moves, repeated.</h2>
        <p className="body-lg">No setup marathon. Pick a starting point, take one small step, and come back tomorrow.</p>
      </div>
      <ol className="how-steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="how-n" aria-hidden="true">{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

const praise = ['Mumtāz!', 'Aḥsanta!', 'Rā’iʿ!', 'Jayyid!', 'Ṣaḥīḥ!']

export function CompanionSection() {
  const [happy, setHappy] = useState(false)
  const [count, setCount] = useState(0)
  const wave = () => {
    setHappy(false)
    requestAnimationFrame(() => setHappy(true))
    setCount((c) => c + 1)
  }
  return (
    <section className="band cband" aria-labelledby="companion-title">
      <div className="container companion-grid">
        <div className="stage">
          <div className="stage-rings" aria-hidden="true" />
          <div className="stage-inner">
            <div className={`stage-bubble${count ? ' is-on' : ''}`} key={count} aria-live="polite">
              {count ? praise[(count - 1) % praise.length] : 'Ready for a quick check?'}
            </div>
            <button type="button" className="companion-btn" onClick={wave} aria-label="Say hello to the companion">
              <Companion size={176} happy={happy} />
            </button>
            <div className="stage-shadow" aria-hidden="true" />
            <p className="stage-hint">{count === 0 ? 'Try clicking it, or moving your pointer.' : 'It reacts, then settles.'}</p>
          </div>
        </div>
        <div className="cband-copy">
          <h2 id="companion-title" className="h2">{companion.title}</h2>
          {companion.lines.map((l) => (
            <p key={l} className="body-lg mt">{l}</p>
          ))}
          <ul className="cband-facts">
            <li><span className="round-btn"><Icon name="cursor" size={18} /></span>Eyes follow your pointer</li>
            <li><span className="round-btn"><Icon name="sparkle" size={18} /></span>Reacts when you answer</li>
            <li><span className="round-btn"><Icon name="move" size={18} /></span>Move it anywhere</li>
          </ul>
          <p className="fine mt">{companion.note}</p>
        </div>
      </div>
    </section>
  )
}

export function Sources() {
  return (
    <section id="sources" className="section container" aria-labelledby="sources-title">
      <div className="src3-head">
        <p className="eyebrow">Sources &amp; privacy</p>
        <h2 id="sources-title" className="h2">{sources.title}</h2>
      </div>
      <div className="src3">
        <div className="src3-sources">
          <h3>{sources.left.title}</h3>
          <p>{sources.left.body}</p>
          <ul className="src3-list">
            {sources.links.map((l) => (
              <li key={l.href + l.label}>
                <span className="round-btn"><Icon name="quran" size={18} /></span>
                <div>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}<Icon name="external" size={13} /></a>
                  <span>{l.what}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="src3-privacy">
          <span className="round-btn"><Icon name="lock" size={22} /></span>
          <h3>{sources.right.title}</h3>
          <p>{sources.right.body}</p>
          <ul>
            <li><Icon name="check" size={16} />Stored on your Mac</li>
            <li><Icon name="check" size={16} />No account for local progress</li>
            <li><Icon name="check" size={16} />Export a backup any time</li>
          </ul>
        </div>
        <p className="src3-note"><Icon name="sparkle" size={16} />{sources.disclaimer}</p>
      </div>
    </section>
  )
}

const routineIcons: IconName[] = ['learn', 'quran', 'practice']

const routineTimes = ['12 min', '10 min', '3–5 min']

export function Routine() {
  return (
    <section className="section container rtn" aria-labelledby="routine-title">
      <div className="rtn-copy">
        <p className="eyebrow">A realistic day</p>
        <h2 id="routine-title" className="h2">{routine.title}</h2>
        <p className="body-lg">{routine.body}</p>
      </div>
      <div className="rtn-card" role="img" aria-label="Example day: a lesson segment, a few āyāt, and a short Arabic review.">
        <div className="rtn-card-head"><strong>An example day</strong><span className="tag">Example plan</span></div>
        <ol>
          {routine.items.map((r, i) => (
            <li key={r.label}>
              <span className={`round-btn rtn-icon rtn-icon-${i}`}><Icon name={routineIcons[i]} size={22} /></span>
              <div><strong>{r.label}</strong><span>{r.text}</span></div>
              <span className="rtn-time">{routineTimes[i]}</span>
            </li>
          ))}
        </ol>
        <p className="rtn-foot">Do what fits the day. Some days it’s just one.</p>
      </div>
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
          <p className="dl-pill"><AppleIcon size={14} /> {release.chip ?? 'Mac'}</p>
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
          <p className="fine mt">Arabic practice, Qur’an reading, and your next lesson. A little closer, every day.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#how">How it works</a>
          <a href="#inside">Inside Iqra</a>
          <a href="#sources">Sources &amp; privacy</a>
          <a href="#faq">FAQ</a>
        </nav>
        <p className="fine">
          A study aid, not a teacher. Linked sources aren’t partners. This website collects no data. Illustrations are provisional.
        </p>
      </div>
    </footer>
  )
}
