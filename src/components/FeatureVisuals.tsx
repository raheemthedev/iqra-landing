import { fatihah, hadithCollections } from '../content/demo-fixtures'
import { Companion } from './Companion'
import { Icon } from './Icons'

/* Small illustrations of the real app surfaces. They are drawings, not the app. */

export function CompanionVisual() {
  return (
    <div className="fv fv-companion" aria-hidden="true">
      <span className="fv-float f1"><Icon name="pin" size={14} /> Above your windows</span>
      <span className="fv-float f2"><Icon name="move" size={14} /> Drag anywhere</span>
      <span className="fv-float f3"><Icon name="cursor" size={14} /> Eyes follow you</span>
      <div className="fv-sprite">
        <div className="fv-bubble">Ready for a quick check?</div>
        <Companion size={128} />
        <span className="fv-timer"><Icon name="clock" size={13} /> 4:58</span>
      </div>
    </div>
  )
}

export function ChecksVisual() {
  return (
    <div className="fv fv-checks" aria-hidden="true">
      <div className="fv-card">
        <div className="fv-card-top"><span>Quick check</span><span className="tag">Arabic sound</span></div>
        <p className="ar fv-letter" lang="ar" dir="rtl">ص</p>
        <p className="fv-say">Say it aloud.</p>
        <div className="fv-btns">
          <span className="fv-btn primary">Show answer</span>
          <span className="fv-btn">Later</span>
        </div>
      </div>
    </div>
  )
}

export function TodayVisual() {
  return (
    <div className="fv fv-today" aria-hidden="true">
      <div className="fv-card">
        <div className="fv-card-top"><strong>Today</strong><span className="fv-count">1 / 3</span></div>
        <ul>
          <li className="done"><span className="tick"><Icon name="check" size={13} /></span>Continue your lesson</li>
          <li><span className="tick" />Read a few āyāt</li>
          <li><span className="tick" />Review Arabic</li>
        </ul>
        <div className="bar"><span style={{ width: '33%' }} /></div>
      </div>
    </div>
  )
}

export function QuranVisual() {
  const a = fatihah[0]
  return (
    <div className="fv fv-quran" aria-hidden="true">
      <div className="fv-card">
        <div className="fv-card-top">
          <strong>Al-Fātiḥah</strong>
          <span className="fv-chips"><span className="chip is-on">Translation</span></span>
        </div>
        <div className="fv-ayah">
          <span className="ayah-n">1</span>
          <div>
            <p className="ar" lang="ar" dir="rtl">{a.ar}</p>
            <p className="fv-tr">{a.en}</p>
            <span className="fv-play"><Icon name="play" size={12} /> Play from here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ClassesVisual() {
  return (
    <div className="fv fv-classes" aria-hidden="true">
      <div className="fv-card">
        <div className="fv-lesson">
          <span className="round-btn tone"><Icon name="learn" size={18} /></span>
          <div><small>Lesson 12</small><strong>Your course</strong></div>
          <span className="chip is-on">Complete</span>
        </div>
        <div className="fv-note">Private notes…</div>
        <div className="fv-res">
          <span className="chip static"><Icon name="file" size={14} />PDF</span>
          <span className="chip static"><Icon name="video" size={14} />Video</span>
          <span className="chip static"><Icon name="audio" size={14} />Audio</span>
          <span className="chip static"><Icon name="link" size={14} />Link</span>
        </div>
      </div>
    </div>
  )
}

export function HadithVisual() {
  return (
    <div className="fv fv-hadith" aria-hidden="true">
      <div className="fv-card">
        <div className="fv-card-top"><strong>Collections</strong><span className="tag">Selected readings</span></div>
        <div className="fv-coll">
          {hadithCollections.map((c) => (
            <span key={c.name} className="chip"><Icon name="hadith" size={13} />{c.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function LocalVisual() {
  return (
    <div className="fv fv-local" aria-hidden="true">
      <div className="fv-lock"><Icon name="lock" size={30} /></div>
      <div className="fv-chips-col">
        <span className="chip is-on"><Icon name="check" size={14} />On your Mac</span>
        <span className="chip is-on"><Icon name="check" size={14} />No account</span>
        <span className="chip"><Icon name="download" size={14} />Export backup</span>
      </div>
    </div>
  )
}
