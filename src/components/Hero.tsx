import { hero } from '../content/landing-copy'
import { primaryCta } from '../content/config'
import { CtaLink } from './CtaLink'
import { MacDesktop } from './MacDesktop'

export function Hero() {
  const cta = primaryCta()
  return (
    <section className="hx container" aria-labelledby="hero-title">
      <div className="hx-copy">
        <p className="eyebrow">{hero.pill}</p>
        <h1 id="hero-title">
          {hero.title[0]} <em>{hero.title[1]}</em>
        </h1>
        <p className="hx-lead">{hero.body}</p>
        <div className="hx-actions">
          <CtaLink cta={cta} size="lg" />
          <a className="btn btn-ghost btn-lg" href="#how">See how it works</a>
        </div>
        <p className="hx-meta">{cta.note}</p>
      </div>
      <MacDesktop />
    </section>
  )
}
