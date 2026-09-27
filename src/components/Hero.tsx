import { hero } from '../content/landing-copy'
import { primaryCta } from '../content/config'
import { Companion } from './Companion'
import { CtaLink } from './CtaLink'
import { Icon, type IconName } from './Icons'

const dock: { icon: IconName; active?: boolean }[] = [
  { icon: 'today', active: true },
  { icon: 'practice' },
  { icon: 'learn' },
  { icon: 'quran' },
  { icon: 'hadith' },
]

export function Hero() {
  const cta = primaryCta()
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          {hero.title[0]} <em>{hero.title[1]}</em>
        </h1>
        <p className="lead">{hero.body}</p>
        <div className="hero-actions">
          <CtaLink cta={cta} />
          <a className="btn btn-ghost" href="#how">See how it works</a>
        </div>
        <p className="support">{hero.support}</p>
        <ul className="strip" aria-label="Product attributes">
          {hero.strip.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <figure className="scene" role="img" aria-label="Illustration of the Iqra desktop companion beside a compact Today panel with a row of round study buttons above it.">
        <div className="scene-bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="scene-body" aria-hidden="true">
          <div className="scene-panel">
            <div className="dock">
              {dock.map((d) => (
                <span key={d.icon} className={`round-btn dock-btn${d.active ? ' is-active' : ''}`}>
                  <Icon name={d.icon} />
                </span>
              ))}
            </div>
            <div className="mini-card">
              <div className="mini-head">
                <strong>Today</strong>
                <span className="tag">Example plan</span>
              </div>
              <ul className="mini-list">
                <li className="done"><span className="tick"><Icon name="check" size={14} /></span>Continue your lesson</li>
                <li><span className="tick" />Read a few āyāt</li>
                <li><span className="tick" />Review Arabic</li>
              </ul>
              <div className="bar"><span style={{ width: '33%' }} /></div>
            </div>
          </div>
          <div className="scene-companion">
            <div className="bubble">Ready for a quick check?</div>
            <Companion size={120} />
          </div>
        </div>
      </figure>
    </section>
  )
}
