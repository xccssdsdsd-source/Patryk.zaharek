import { cpSync, rmSync, mkdirSync, readdirSync } from 'fs'
import { join, basename } from 'path'

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

console.log('dist/ ready')
