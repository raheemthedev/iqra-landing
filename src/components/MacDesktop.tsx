import { Companion } from './Companion'
import { Icon, type IconName } from './Icons'

const rail: { icon: IconName; active?: boolean }[] = [
  { icon: 'today', active: true },
  { icon: 'practice' },
  { icon: 'learn' },
  { icon: 'quran' },
  { icon: 'hadith' },
]

const dock = ['#f4c7a1', '#a9d6c1', '#bcd0f2', '#f2d9a1', '#d8c3ee']

/**
 * An illustrated Mac desktop: other apps behind, Iqra's compact panel and the
 * companion floating above them. It is a drawing, not a screenshot.
 */
export function MacDesktop() {
  return (
    <figure
      className="mac"
      role="img"
      aria-label="Illustration of a Mac desktop. Behind, other app windows are open. On top, the Iqra companion sits in the corner beside a compact Today panel with a row of round study buttons."
    >
      <div className="mac-menubar" aria-hidden="true">
        <span className="mac-dot" />
        <strong>Iqra</strong>
        <span>File</span>
        <span>View</span>
        <span>Window</span>
        <span className="mac-clock">Mon 9:41</span>
      </div>

      <div className="mac-stage" aria-hidden="true">
        <div className="mac-win mac-win-a">
          <div className="mac-win-bar"><i /><i /><i /></div>
          <div className="mac-lines">
            <b style={{ width: '54%' }} />
            <b style={{ width: '82%' }} />
            <b style={{ width: '68%' }} />
            <b style={{ width: '76%' }} />
            <b style={{ width: '40%' }} />
          </div>
        </div>
        <div className="mac-win mac-win-b">
          <div className="mac-win-bar"><i /><i /><i /></div>
          <div className="mac-lines dark">
            <b style={{ width: '38%' }} />
            <b style={{ width: '64%' }} />
            <b style={{ width: '48%' }} />
            <b style={{ width: '72%' }} />
          </div>
        </div>

        <div className="mac-iqra">
          <div className="mac-rail">
            {rail.map((r) => (
              <span key={r.icon} className={`round-btn mac-rail-btn${r.active ? ' is-active' : ''}`}>
                <Icon name={r.icon} size={18} />
              </span>
            ))}
          </div>
          <div className="mac-card">
            <div className="mac-card-head">
              <strong>Today</strong>
              <span className="tag">Example plan</span>
            </div>
            <ul className="mac-plan">
              <li className="done"><span className="tick"><Icon name="check" size={13} /></span>Continue your lesson</li>
              <li><span className="tick" />Read a few āyāt</li>
              <li><span className="tick" />Review Arabic</li>
            </ul>
            <div className="bar"><span style={{ width: '33%' }} /></div>
          </div>
        </div>

        <div className="mac-sprite">
          <div className="mac-bubble">Ready for a quick check?</div>
          <Companion size={104} />
        </div>
      </div>

      <div className="mac-dock" aria-hidden="true">
        {dock.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
        <span className="mac-dock-iqra"><img src="/iqra-owl.png" alt="" /></span>
      </div>
    </figure>
  )
}
