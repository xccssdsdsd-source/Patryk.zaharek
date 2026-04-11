import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

const requiredFiles = [
  'index.html',
  'package.json',
  'serve.mjs',
  'robots.txt',
  'sitemap.xml',
  'styles/tailwind.css',
]

const errors = []

const isLocalRef = value => {
  if (!value) return false
  if (value.startsWith('#')) return false
  if (value.startsWith('data:')) return false
  if (value.startsWith('mailto:')) return false
  if (value.startsWith('tel:')) return false
  if (value.startsWith('javascript:')) return false
  if (/^[a-z]+:\/\//i.test(value)) return false
  return true
}

const resolveRef = value => {
  const cleanValue = decodeURIComponent(value.split('?')[0].split('#')[0])
  if (cleanValue.startsWith('/')) {
    return path.join(repoRoot, cleanValue.slice(1))
  }
  return path.join(repoRoot, cleanValue)
}

const collectHtmlRefs = html => {
  const refs = new Set()
  const assetAttrPattern = /\b(?:src|href)=["']([^"'<>]+)["']/g
  const galleryPattern = /\bdata-nr-photos=(["'])(.*?)\1/g

  for (const match of html.matchAll(assetAttrPattern)) {
    if (isLocalRef(match[1])) refs.add(match[1])
  }

  for (const match of html.matchAll(galleryPattern)) {
    try {
      const photos = JSON.parse(match[2])
      for (const photo of photos) {
        if (isLocalRef(photo)) refs.add(photo)
      }
    } catch {
      errors.push('index.html contains invalid JSON in data-nr-photos.')
    }
  }

  return [...refs]
}

const collectCssRefs = css => {
  const refs = new Set()
  const cssUrlPattern = /url\((['"]?)(.*?)\1\)/g

  for (const match of css.matchAll(cssUrlPattern)) {
    if (isLocalRef(match[2])) refs.add(match[2])
  }

  return [...refs]
}

const normalizeLineEndings = value => value.replace(/\r\n/g, '\n')

const validateSitemap = sitemap => {
  const normalized = normalizeLineEndings(sitemap).trim()
  if (!normalized.startsWith('<?xml')) {
    errors.push('sitemap.xml must start with an XML declaration.')
  }
  if (!/<urlset\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/i.test(normalized)) {
    errors.push('sitemap.xml must contain a valid <urlset> root element.')
  }
  if (/<html\b/i.test(normalized)) {
    errors.push('sitemap.xml must not contain HTML markup.')
  }
  if (!/<loc>https:\/\/pm-apartments\.pl\/<\/loc>/i.test(normalized)) {
    errors.push('sitemap.xml must include the canonical https://pm-apartments.pl/ URL.')
  }
}

const validateRobots = robots => {
  const normalized = normalizeLineEndings(robots)
  if (!/^Sitemap:\s+https:\/\/pm-apartments\.pl\/sitemap\.xml$/mi.test(normalized)) {
    errors.push('robots.txt must point to https://pm-apartments.pl/sitemap.xml.')
  }
}

for (const relativePath of requiredFiles) {
  try {
    await fs.access(path.join(repoRoot, relativePath))
  } catch {
    errors.push(`Missing required file: ${relativePath}`)
  }
}

const indexHtml = await fs.readFile(path.join(repoRoot, 'index.html'), 'utf8')
for (const ref of collectHtmlRefs(indexHtml)) {
  try {
    await fs.access(resolveRef(ref))
  } catch {
    errors.push(`Missing asset referenced from index.html: ${ref}`)
  }
}

const siteCss = await fs.readFile(path.join(repoRoot, 'styles', 'tailwind.css'), 'utf8')
for (const ref of collectCssRefs(siteCss)) {
  try {
    await fs.access(resolveRef(ref))
  } catch {
    errors.push(`Missing asset referenced from styles/tailwind.css: ${ref}`)
  }
}

const sitemapXml = await fs.readFile(path.join(repoRoot, 'sitemap.xml'), 'utf8')
validateSitemap(sitemapXml)

const robotsTxt = await fs.readFile(path.join(repoRoot, 'robots.txt'), 'utf8')
validateRobots(robotsTxt)

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Repository validation passed.')
