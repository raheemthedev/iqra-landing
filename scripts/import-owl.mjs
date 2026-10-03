import { readFileSync, writeFileSync, copyFileSync } from 'node:fs'
import { PNG } from 'pngjs'

// Reuse the app's custom artwork without regenerating or altering it.
const input = process.argv[2]
if (!input) throw new Error('Pass the app’s iqra-owl-spritesheet.png path.')
const atlas = PNG.sync.read(readFileSync(input))
if (atlas.width !== 1536 || atlas.height !== 2288) throw new Error('Unexpected owl atlas dimensions')
// Remove only transparent frame gutters so the favicon stays legible at 16px.
let left = 192, top = 208, right = 0, bottom = 0
for (let y = 0; y < 208; y++) for (let x = 0; x < 192; x++) {
  if (atlas.data[(y * atlas.width + x) * 4 + 3] > 0) {
    left = Math.min(left, x); top = Math.min(top, y)
    right = Math.max(right, x); bottom = Math.max(bottom, y)
  }
}
const width = right - left + 1, height = bottom - top + 1
const side = Math.max(width, height) + 8
const icon = new PNG({ width: side, height: side })
PNG.bitblt(atlas, icon, left, top, width, height, Math.floor((side - width) / 2), Math.floor((side - height) / 2))
writeFileSync(new URL('../public/iqra-owl.png', import.meta.url), PNG.sync.write(icon))
copyFileSync(input, new URL('../public/iqra-owl-spritesheet.png', import.meta.url))
