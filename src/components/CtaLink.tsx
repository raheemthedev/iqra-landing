import type { Cta } from '../content/config'
import { Icon } from './Icons'

export function CtaLink({ cta, size = 'md', variant = 'primary', className = '' }: { cta: Cta; size?: 'sm' | 'md'; variant?: 'primary' | 'light'; className?: string }) {
  return (
    <a
      className={`btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`}
      href={cta.href}
      {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {cta.label}
      <Icon name={cta.external ? 'external' : 'arrow'} size={18} />
    </a>
  )
}
