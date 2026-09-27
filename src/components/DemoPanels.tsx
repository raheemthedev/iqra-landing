import { useState } from 'react'
import { duaExample, fatihah, hadithCollections, hadithExample, practiceWord } from '../content/demo-fixtures'
import { Icon } from './Icons'

export function TodayPreview() {
  const items = [
    { id: 'lesson', title: 'Continue your lesson', sub: 'Lesson 12 · example' },
    { id: 'read', title: 'Read a few āyāt', sub: 'Al-Fātiḥah 1:1–7' },
    { id: 'review', title: 'Review Arabic', sub: 'Ten short checks' },
  ]
  const [done, setDone] = useState<string[]>(['lesson'])
  const toggle = (id: string) => setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]))
  return (
    <div className="pv">
      <div className="pv-head"><h3>Today</h3><span className="tag">Example plan</span></div>
      <ul className="plan">
        {items.map((it) => {
          const on = done.includes(it.id)
          return (
            <li key={it.id}>
              <button type="button" className={`plan-row${on ? ' done' : ''}`} aria-pressed={on} onClick={() => toggle(it.id)}>
                <span className={`tick${on ? ' on' : ''}`}>{on && <Icon name="check" size={14} />}</span>
                <span className="plan-text"><strong>{it.title}</strong><span>{it.sub}</span></span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="progress" role="status">
        <div className="bar"><span style={{ width: `${(done.length / items.length) * 100}%` }} /></div>
        <span>{done.length} of {items.length} done</span>
      </div>
      <p className="pv-note">Demonstration only—nothing here is saved.</p>
    </div>
  )
}

export function PracticePreview() {
  const [shown, setShown] = useState(false)
  const [rated, setRated] = useState<string | null>(null)
  const reset = () => { setShown(false); setRated(null) }
  return (
    <div className="pv">
      <div className="pv-head"><h3>Quick check</h3><span className="tag">Illustrative example</span></div>
      <div className="check-card">
        <p className="fine">From {practiceWord.context}</p>
        <p className="ar word" lang="ar" dir="rtl">{practiceWord.ar}</p>
        <p className="prompt">What does this word mean?</p>
        {shown ? (
          <div className="answer">
            <p className="answer-text">{practiceWord.answer}</p>
            <div className="rate" role="group" aria-label="How did that feel?">
              {['Again', 'Good', 'Easy'].map((r) => (
                <button key={r} type="button" className={`chip${rated === r ? ' is-on' : ''}`} aria-pressed={rated === r} onClick={() => setRated(r)}>{r}</button>
              ))}
            </div>
            {rated && <p className="pv-note" role="status">In the app, this rating shapes when the word comes back for review.</p>}
          </div>
        ) : (
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setShown(true)}>Show answer</button>
        )}
      </div>
      {shown && <button type="button" className="text-btn" onClick={reset}>Reset example</button>}
    </div>
  )
}

export function LearnPreview() {
  const [complete, setComplete] = useState(false)
  const [notes, setNotes] = useState('')
  return (
    <div className="pv">
      <div className="pv-head"><h3>Classes</h3><span className="tag">Example</span></div>
      <div className="lesson-row">
        <div>
          <p className="fine">Lesson 12</p>
          <strong>Your course playlist</strong>
        </div>
        <button type="button" className={`chip${complete ? ' is-on' : ''}`} aria-pressed={complete} onClick={() => setComplete((c) => !c)}>
          {complete ? 'Completed' : 'Mark complete'}
        </button>
      </div>
      <label className="field">
        <span>Private notes</span>
        <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Write something you want to remember…" />
      </label>
      <p className="pv-note">Lessons open in your browser. Iqra keeps your place in the lesson list, not the video second.</p>
      <div className="res-row" aria-label="Personal resource types">
        <span className="chip static"><Icon name="file" size={16} />PDF</span>
        <span className="chip static"><Icon name="video" size={16} />Video</span>
        <span className="chip static"><Icon name="audio" size={16} />Audio</span>
        <span className="chip static"><Icon name="link" size={16} />Web link</span>
      </div>
    </div>
  )
}

export function QuranPreview() {
  const [translit, setTranslit] = useState(true)
  const [trans, setTrans] = useState(true)
  const [from, setFrom] = useState<number | null>(null)
  return (
    <div className="pv">
      <div className="pv-head">
        <h3>Al-Fātiḥah</h3>
        <div className="toggles">
          <button type="button" className={`chip${translit ? ' is-on' : ''}`} aria-pressed={translit} onClick={() => setTranslit((v) => !v)}>Transliteration</button>
          <button type="button" className={`chip${trans ? ' is-on' : ''}`} aria-pressed={trans} onClick={() => setTrans((v) => !v)}>Translation</button>
        </div>
      </div>
      <ol className="ayat">
        {fatihah.map((a) => (
          <li key={a.n} className={from === a.n ? 'is-from' : ''}>
            <span className="ayah-n" aria-label={`Āyah ${a.n}`}>{a.n}</span>
            <div className="ayah-body">
              <p className="ar" lang="ar" dir="rtl">{a.ar}</p>
              {translit && <p className="tr">{a.tr}</p>}
              {trans && <p className="en">{a.en}</p>}
              <button type="button" className="text-btn" aria-pressed={from === a.n} onClick={() => setFrom(from === a.n ? null : a.n)}>
                {from === a.n ? 'Selected as start' : 'Start from here'}
              </button>
            </div>
          </li>
        ))}
      </ol>
      <p className="pv-note" role="status">
        {from
          ? `In the app, recitation would begin at āyah ${from} and continue to the end of the sūrah. It’s streamed, so it needs internet.`
          : 'Choose an āyah. In the app, recitation starts there and continues to the end of the sūrah.'}
        {' '}This page plays no audio.
      </p>
    </div>
  )
}

export function HadithPreview() {
  const [view, setView] = useState<'hadith' | 'dua'>('hadith')
  const ex = view === 'hadith' ? hadithExample : duaExample
  return (
    <div className="pv">
      <div className="pv-head">
        <div className="toggles" role="group" aria-label="Choose a reading type">
          <button type="button" className={`chip${view === 'hadith' ? ' is-on' : ''}`} aria-pressed={view === 'hadith'} onClick={() => setView('hadith')}>Hadith</button>
          <button type="button" className={`chip${view === 'dua' ? ' is-on' : ''}`} aria-pressed={view === 'dua'} onClick={() => setView('dua')}>Duʿāʾ</button>
        </div>
        <span className="tag">{view === 'hadith' ? 'Excerpt' : 'Example'}</span>
      </div>
      {view === 'hadith' && (
        <ul className="collections" aria-label="Hadith collections (links to full sources)">
          {hadithCollections.map((c) => (
            <li key={c.name}><a className="chip" href={c.href} target="_blank" rel="noopener noreferrer">{c.name}</a></li>
          ))}
        </ul>
      )}
      <div className="check-card">
        <p className="ar reading" lang="ar" dir="rtl">{ex.ar}</p>
        <p className="en">{ex.en}</p>
        <a className="src-link" href={ex.href} target="_blank" rel="noopener noreferrer">{ex.ref}<Icon name="external" size={14} /></a>
      </div>
      <p className="pv-note">
        {view === 'hadith'
          ? 'Selected, source-linked readings across six collection entries—not complete collections.'
          : 'A small selection of Qur’anic duʿāʾ, taken from the same verse records as the reader.'}
      </p>
    </div>
  )
}
