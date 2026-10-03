import { useRef, useState, type KeyboardEvent } from 'react'
import { Icon, type IconName } from './Icons'
import { HadithPreview, LearnPreview, PracticePreview, QuranPreview, TodayPreview } from './DemoPanels'

const tabs: { id: string; label: string; icon: IconName; title: string; body: string; Panel: () => React.JSX.Element }[] = [
  { id: 'today', label: 'Today', icon: 'today', title: 'One meaningful next step at a time.', body: 'Your lesson, Qur’an reading, and practice in one plan. Pick a step and begin.', Panel: TodayPreview },
  { id: 'practice', label: 'Practice', icon: 'practice', title: 'Practice, reveal, and review.', body: 'Try a short Arabic check, reveal the answer, and rate your recall for future reviews.', Panel: PracticePreview },
  { id: 'learn', label: 'Learn', icon: 'learn', title: 'Return to your course.', body: 'Return to your course, keep private notes, and bring your own study materials.', Panel: LearnPreview },
  { id: 'quran', label: 'Qur’an', icon: 'quran', title: 'Read by mushaf page.', body: 'Read with translation, bookmark your place, and start recitation from any āyah you choose.', Panel: QuranPreview },
  { id: 'hadith', label: 'Hadith & Duʿāʾ', icon: 'hadith', title: 'Small selections, with sources.', body: 'Selected Hadith and Qur’anic duʿāʾ for your reading. Full sources stay one click away.', Panel: HadithPreview },
]

export function ProductDemo() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    const last = tabs.length - 1
    let next = active
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    else return
    e.preventDefault()
    setActive(next)
    refs.current[next]?.focus()
  }

  const { Panel, title, body, id } = tabs[active]

  return (
    <section id="inside" className="section container" aria-labelledby="inside-title">
      <p className="eyebrow">Inside Iqra</p>
      <h2 id="inside-title" className="h2 narrow">Small on your desktop. Useful when you open it.</h2>
      <div className="tablist" role="tablist" aria-label="Iqra study spaces" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[i] = el }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls="demo-panel"
            tabIndex={i === active ? 0 : -1}
            className={`tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <Icon name={t.icon} size={18} />
            {t.label}
          </button>
        ))}
      </div>
      <div className="demo" role="tabpanel" id="demo-panel" aria-labelledby={`tab-${id}`} tabIndex={0}>
        <div className="demo-copy" key={`c-${id}`}>
          <h3>{title}</h3>
          <p>{body}</p>
          <p className="fine">A taste of the desktop app. Explore freely; this demo saves nothing.</p>
        </div>
        <div className="demo-panel" key={id}>
          <Panel />
        </div>
      </div>
    </section>
  )
}
