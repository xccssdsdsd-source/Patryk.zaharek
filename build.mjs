import { cpSync, rmSync, mkdirSync, readdirSync, readFileSync, writeFileSync, renameSync } from 'fs'
import { join, basename, extname, relative, dirname } from 'path'
import { execSync } from 'child_process'

execSync('./node_modules/.bin/tailwindcss -i tailwind-input.css -o tailwind.css', { stdio: 'inherit' })

const EXCLUDE = new Set([
  'node_modules', '.git', '.github', '.sixth', 'dist',
  'temporary screenshots', 'build.mjs', 'serve.mjs',
  'screenshot.mjs', 'screenshot-section.mjs', 'crop.mjs',
  'tailwind.config.js', 'tailwind-input.css',
  'package.json', 'package-lock.json',
  'wrangler.jsonc', '.gitignore', 'CLAUDE.md'
])

rmSync('dist', { recursive: true, force: true })
mkdirSync('dist')

const filter = src => {
  const name = basename(src)
  if (EXCLUDE.has(name)) return false
  if (name.endsWith('.log')) return false
  return true
}

for (const entry of readdirSync('.')) {
  if (!filter(entry)) continue
  cpSync(entry, join('dist', entry), { recursive: true, filter })
}

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.webp', '.png', '.JPG', '.JPEG', '.WEBP', '.PNG'])

function sanitizeFilename(filename) {
  const lastDot = filename.lastIndexOf('.')
  if (lastDot === -1) return filename.replace(/ /g, '-')
  let stem = filename.slice(0, lastDot)
  const ext = filename.slice(lastDot + 1).toLowerCase()
  const trailingDots = stem.match(/\.+$/)
  const dotCount = trailingDots ? trailingDots[0].length : 0
  if (dotCount > 0) stem = stem.slice(0, -dotCount) + '-' + (dotCount + 1)
  stem = stem.replace(/ /g, '-')
  return stem + '.' + ext
}

function sanitizeRelPath(relPath) {
  return relPath.split('/').map((part, i, arr) =>
    i === arr.length - 1 ? sanitizeFilename(part) : part.replace(/ /g, '-')
  ).join('/')
}

function* walkImages(dir, base) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkImages(full, base)
    } else if (IMAGE_EXTS.has(extname(entry.name))) {
      yield relative(base, full).replace(/\\/g, '/')
    }
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const renames = []

for (const rel of walkImages('dist', 'dist')) {
  const sanitized = sanitizeRelPath(rel)
  if (sanitized === rel) continue
  const oldFull = join('dist', rel)
  const newFull = join('dist', sanitized)
  mkdirSync(dirname(newFull), { recursive: true })
  renameSync(oldFull, newFull)
  renames.push({ old: rel, new: sanitized })
  console.log(`RENAME  ${rel}  →  ${sanitized}`)
}

const htmlPatches = []

for (const entry of walkHtml('dist')) {
  let content = readFileSync(entry, 'utf8')
  let patched = content
  for (const { old: oldRel, new: newRel } of renames) {
    const encodedOld = oldRel.split('/').map((p, i, a) => i === a.length - 1 ? p : encodeURIComponent(p)).join('/')
    const encodedNew = newRel
    for (const variant of [oldRel, encodedOld]) {
      const re = new RegExp(escapeRegex(variant), 'g')
      patched = patched.replace(re, encodedNew)
    }
  }
  if (patched !== content) {
    writeFileSync(entry, patched, 'utf8')
    htmlPatches.push(entry)
    console.log(`PATCH   ${entry}`)
  }
}

function* walkHtml(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walkHtml(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

console.log(`\ndist/ ready — ${renames.length} files renamed, ${htmlPatches.length} HTML files patched`)
