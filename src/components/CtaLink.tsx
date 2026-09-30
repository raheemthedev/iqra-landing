import type { Cta } from '../content/config'
import { AppleIcon, Icon } from './Icons'

export function CtaLink({ cta, size = 'md', variant = 'primary', className = '', icon = true }: { cta: Cta; size?: 'sm' | 'md' | 'lg'; variant?: 'primary' | 'light'; className?: string; icon?: boolean }) {
  const isDownload = cta.label.startsWith('Download')
  return (
    <a
      className={`btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${size === 'lg' ? 'btn-lg' : ''} ${className}`}
      href={cta.href}
      {...(cta.live ? { download: '' } : {})}
      {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && isDownload && <AppleIcon size={20} />}
      {cta.label}
      {!icon || !isDownload ? <Icon name={cta.external ? 'external' : 'arrow'} size={18} /> : <Icon name="download" size={18} />}
    </a>
  )
}
