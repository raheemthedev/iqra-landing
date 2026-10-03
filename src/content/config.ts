export type ReleaseMode = 'none' | 'preview' | 'public'

/**
 * Release state lives here, not in the copy. Absence of a value is meaningful.
 *
 * To turn the "Download for Mac" button into a real download, host the DMG
 * somewhere public (for example a GitHub Release) and set:
 *   releaseMode: 'public'
 *   downloadUrl: '<direct link to the .dmg>'
 * and optionally `version` / `minimumMacOS`. Nothing else needs to change.
 */
export const release: {
  releaseMode: ReleaseMode
  downloadUrl?: string
  version?: string
  minimumMacOS?: string
  /** Chip architecture of the published build. The current local build is Apple Silicon (aarch64). */
  chip?: string
  contactUrl?: string
  privacyUrl?: string
  mascotAssetApproved: boolean
} = {
  releaseMode: 'none',
  chip: 'Apple Silicon',
  mascotAssetApproved: true,
}

export interface Cta {
  label: string
  href: string
  external: boolean
  /** Short line shown beside/under the button. */
  note: string
  /** True when the button is a real download rather than a pointer to the download section. */
  live: boolean
}

export function primaryCta(): Cta {
  const meta = [release.chip, release.version && `v${release.version}`, release.minimumMacOS && `macOS ${release.minimumMacOS}+`]
    .filter(Boolean)
    .join(' · ')
  if (release.releaseMode === 'public' && release.downloadUrl) {
    return { label: 'Download for Mac', href: release.downloadUrl, external: false, note: meta, live: true }
  }
  if (release.releaseMode === 'preview' && release.contactUrl) {
    return { label: 'Download for Mac', href: release.contactUrl, external: true, note: 'Private preview · request access', live: false }
  }
  return {
    label: 'Download for Mac',
    href: '#download',
    external: false,
    note: `${release.chip ?? 'Mac'} · public build being finalized`,
    live: false,
  }
}
