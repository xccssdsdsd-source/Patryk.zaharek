import { rmSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join, relative, dirname } from 'path'
import { execSync } from 'child_process'

const SRC = '.'
const DIST = 'dist'

const EXCLUDE = new Set([
  'node_modules', '.git', '.github', '.sixth', 'dist',
  'temporary screenshots', 'build.mjs', 'serve.mjs',
  'screenshot.mjs', 'screenshot-section.mjs', 'crop.mjs',
  'tailwind.config.js', 'tailwind-input.css',
  'package.json', 'package-lock.json',
  '.gitignore', 'CLAUDE.md', 'memory',
  'Patryk.zaharek', 'Patryk_Zaharek', 'public', 'scripts',
])

execSync('npx tailwindcss -i tailwind-input.css -o styles/tailwind.css', { stdio: 'inherit', shell: true })

rmSync(DIST, { recursive: true, force: true })
mkdirSync(DIST)

function sanitizeDir(seg) {
  return seg.replace(/ /g, '-')
}

function sanitizeFilename(name) {
  const dot = name.lastIndexOf('.')
  if (dot === -1) return name.replace(/ /g, '-')
  let stem = name.slice(0, dot)
  const ext = name.slice(dot + 1).toLowerCase()
  const trailing = stem.match(/\.+$/)
  if (trailing) stem = stem.slice(0, -trailing[0].length) + '-' + (trailing[0].length + 1)
  return stem.replace(/ /g, '-') + '.' + ext
}

function sanitizePath(rel) {
  return rel.split('/').map((seg, i, arr) =>
    i === arr.length - 1 ? sanitizeFilename(seg) : sanitizeDir(seg)
  ).join('/')
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function* walkSrc(dir, base) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE.has(e.name) || e.name.endsWith('.log')) continue
    const full = join(dir, e.name)
    if (e.isDirectory()) yield* walkSrc(full, base)
    else yield relative(base, full).replace(/\\/g, '/')
  }
}

function* walkDist(dir, base) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name)
    if (e.isDirectory()) yield* walkDist(full, base)
    else yield relative(base, full).replace(/\\/g, '/')
  }
}

const renames = []
let copied = 0

for (const rel of walkSrc(SRC, SRC)) {
  const sanitized = sanitizePath(rel)
  const dest = join(DIST, sanitized)
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(join(SRC, rel), dest)
  copied++
  if (sanitized !== rel) {
    renames.push({ old: rel, new: sanitized })
    console.log(`RENAME  ${rel}  →  ${sanitized}`)
  }
}

const htmlPatches = []

for (const rel of walkDist(DIST, DIST)) {
  if (!rel.endsWith('.html')) continue
  const file = join(DIST, rel)
  let content = readFileSync(file, 'utf8')
  let patched = content
  for (const { old: o, new: n } of renames) {
    const encodedDirs = o.split('/').map((seg, i, arr) =>
      i === arr.length - 1 ? seg : encodeURIComponent(seg)
    ).join('/')
    const encodedFull = o.split('/').map(encodeURIComponent).join('/')
    for (const variant of new Set([o, encodedDirs, encodedFull])) {
      patched = patched.replace(new RegExp(escapeRe(variant), 'g'), n)
    }
  }
  if (patched !== content) {
    writeFileSync(file, patched, 'utf8')
    htmlPatches.push(rel)
    console.log(`PATCH   ${rel}`)
  }
}

console.log(`\ndist/ ready — ${copied} files copied, ${renames.length} renames, ${htmlPatches.length} HTML patches`)
