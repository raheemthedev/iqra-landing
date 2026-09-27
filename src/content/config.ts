export type ReleaseMode = 'none' | 'preview' | 'public'

/**
 * Release state lives here, not in the copy. Absence of a value is meaningful:
 * with releaseMode 'none' the primary CTA scrolls to the demo and no download
 * or waitlist control is shown.
 */
export const release: {
  releaseMode: ReleaseMode
  downloadUrl?: string
  version?: string
  minimumMacOS?: string
  contactUrl?: string
  privacyUrl?: string
  mascotAssetApproved: boolean
} = {
  releaseMode: 'none',
  mascotAssetApproved: false,
}

export interface Cta {
  label: string
  href: string
  external: boolean
  note: string
}

export function primaryCta(): Cta {
  if (release.releaseMode === 'public' && release.downloadUrl) {
    const meta = [release.version && `Version ${release.version}`, release.minimumMacOS && `macOS ${release.minimumMacOS}+`]
      .filter(Boolean)
      .join(' · ')
    return { label: 'Download for macOS', href: release.downloadUrl, external: true, note: meta }
  }
  if (release.releaseMode === 'preview' && release.contactUrl) {
    return { label: 'Request access', href: release.contactUrl, external: true, note: 'Private preview' }
  }
  return {
    label: 'Explore Iqra',
    href: '#inside',
    external: false,
    note: 'Public download details are being finalized.',
  }
}
