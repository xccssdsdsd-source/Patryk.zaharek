---
name: website-excellence
description: The single master skill for building premium, award tier websites (agencies, studios, real estate, interior design, renovation, portfolios, local business, SaaS landing pages) that never read as AI generated. One self contained file covering message architecture, Polish copywriting, conversion and forms, anti AI slop rules, design doctrine (archetypes, OKLCH tokens, typography, hero and section patterns), a full motion doctrine (Motion Storyboard, tiers, GSAP + ScrollTrigger + SplitText, Lenis, anime.js v4, native CSS scroll driven animations, View Transitions, parallax, pinned storytelling, reveals, exit fades) with tested code, SEO (research, page map, on page, technical, JSON-LD, local SEO Poland), GEO for AI answers (ChatGPT, Perplexity, Claude, AI Overviews, robots.txt for AI crawlers), performance, WCAG 2.2, an image pipeline and an automated site audit (motion, axe accessibility, SEO, images). Builds run as a parallel agent team (§0a) when the tool can spawn subagents, to cut delivery time without lowering quality. Security is out of scope. Use it for ANY request to build, redesign, restyle, animate, optimise or polish a website, landing page or web app, including "zrób stronę", "zaprojektuj landing", "dodaj animacje", "animacje przy scrollu", "parallax", "anime.js", "GSAP", "SEO", "GEO", "widoczność w ChatGPT", "popraw wygląd strony", "zdejmij z tego AI look", "dopracuj tastem", regardless of industry.
---

# Website Excellence

One file, every client. Read sections 0, 0a and 1 to 7 before building, 8 for code, 10 for every public site, 9 and 13 before shipping. Section 12 only for real estate clients. Security is out of scope here (separate skill).

**Contents:** Response style · Session start · 0 Pre flight · 0a Parallel build (agents) · 1 Discovery · 2 Message architecture · 3 Motion in short · 4 Anti slop · 5 Design doctrine · 6 Copy, conversion, components · 7 Motion doctrine · 8 Motion code · 9 Site audit · 10 SEO and GEO · 11 Stack · 12 Real estate · 13 Visual QA · 14 Performance · 15 Accessibility · Hard rules · Pre ship checklist

## Response style
* Before code, output one short plan block (20 lines maximum): assumptions, macrostructure, aesthetic archetype, motion tier, primary search query and page map (§10.2), the Motion Storyboard table (§7.3) and, when agents are available, the agent plan (§0a.1: phases and agent count). Then build exactly that. The plan is the thinking; skipping it produces generic sites.
* Then code, no narration, no recap of the brief. After shipping: one to three sentences on what was built and the QA result.
* Unknown facts (client data, numbers, library behaviour) are said out loud and left as labelled placeholders. Never guess into the page.

## Session start
1. Run the Pre flight scan (§0) and the Discovery gate (§1).
2. Choose archetype (§5.1) and motion tier (§7.2) together; they must match.
3. Write the plan block: macrostructure, archetype, motion tier, Motion Storyboard, primary query and page map (§10.2).
3a. Freeze the contract and the Rhythm Map (§0a.4). If agents are available, plan the phases (§0a.3).
4. Build with tokens (§4.5), the design doctrine (§5) and the tested motion code (§8). With agents: P1 prep fan out, then one Section agent per section in parallel (§0a.3).
5. Optional external skills, used only if installed: `frontend-design`, `transitions-dev` / `transitions-polish` for component transitions (§7.12), `premium-ui-components` for Next.js. If missing, do not pretend they ran; this file covers everything, say so in one line.
6. Write copy with §6 before layout; plan SEO with §10.1 to §10.3 before writing page text.
7. Before handing back: visual QA (§13) as the parallel review fan out (§0a.6), fixes by file owner, then the full site audit (§9) alone, with no other agent running.

Commit to ONE aesthetic direction and ONE motion tier before the first line of code.

## Project type
Set at project level: `HTML` | `NEXTJS`
* HTML: one `index.html` per page, mobile first, tokens and motion CSS in their own files. Tailwind play CDN only for prototypes; compile or write plain CSS for anything that ships.
* NEXTJS: component files, Tailwind via config, CSS variables in `globals.css`, motion via §8.7 and §8.8.

## 0. Pre flight scan
If the project already has code, read it first: font stack, palette (`:root` tokens, `tailwind.config`), motion libraries in `package.json` (GSAP, Lenis, anime.js, Motion, transitions-dev, or legacy AOS and similar to remove), existing ScrollTrigger or smooth scroll setup, spacing scale, framework and version. State findings in 3 to 5 lines: preserved, introduced, removed and why. Never add a second animation or scroll engine next to an existing one. Check `brand_assets/` first; real client assets override all placeholders. Skip silently on an empty project.

## 0a. Parallel build with agents (speed without losing quality)

Parallelism saves time only where work is independent. Quality in a parallel build comes from three things: a frozen contract, one owner per file, and reviewers who did not write the code. Everything shared or judgement heavy stays with ONE writer: the orchestrator (the main session).

### 0a.1 When and how many
* Use it when the tool can spawn subagents (Claude Code subagents / Task tool, agent teams). If it cannot, run the same phases in the same order sequentially and say so in one line; never pretend agents ran.
* No agents for: a single section tweak, a restyle of existing sections, a one page site with 3 sections or fewer (use Foundation + one builder at most).
* Concurrency: 5 to 6 agents at once by default, up to 8 for builds with 8+ sections or several pages. More agents add merge overhead and rate limit pressure, not speed. One agent per section; group tiny sections (contact + footer). Multi page: one builder per page after the shared foundation exists.
* Every agent costs a full context load. Put the agent plan in the plan block (one to three lines: phases, agent count per phase).

### 0a.2 Never parallel (orchestrator only)
Discovery (§1), message architecture (§2), plan block and Motion Storyboard (§7.3), the token and archetype decision, ALL copy (one voice, one writer), the design of the signature moment, integration, and the final audit sign off. Splitting these produces five sites glued together.

### 0a.3 Phases
| Phase | Runs | Parallel agents | Output | Gate to next phase |
|---|---|---|---|---|
| P0 Contract | sequential | none (orchestrator) | `.build/CONTRACT.md`, `.build/storyboard.md`, section briefs | Contract complete (§0a.4) |
| P1 Prep | parallel | Foundation, Copy (single writer), SEO technical, Images, Audit setup | tokens and engine, copy per section, SEO files, image pipeline, audit script | Foundation renders an empty page with 0 console errors; copy written |
| P2 Build | parallel | one Section agent per section or page | one HTML/TSX and CSS file per section | Each agent reports done per its brief |
| P3 Integrate | sequential | none | assembled page, first run | Page loads, 0 console errors, storyboard order matches DOM |
| P4 Review | parallel, read only | 5 to 6 reviewers (§0a.6) | findings table | All reviewers returned |
| P5 Fix | parallel by file | one fixer per file group | fixes | Blockers and majors closed, max 2 rounds |
| P6 Final audit | sequential, alone | none | `site-audit.mjs` result, sign off line (§9.5) | §9 passes |

P1 agents:
* **Foundation:** `css/tokens.css` (§5.8, §4.5 and motion tokens R0), `css/base.css` (reset, type scale, §6b components with all states), boot (§8.3), `css/motion.css` (§8.4), the one chosen engine file (§8.5 or §8.6), `src/head.html`, `src/header.html`, `src/footer.html`. Copies §8 blocks, does not retype them.
* **Copy:** one file per section in `.build/copy/NN-name.md` following §6 and the storyboard messages: headline, supporting line, CTA, microcopy, image alt text, labelled placeholders. One agent only.
* **SEO technical:** `robots.txt` (§10.7), `sitemap.xml`, `llms.txt`, JSON-LD `@graph` skeleton (§10.5), meta per page from the page map (§10.2). Titles and descriptions are finalised in P3 against the final copy.
* **Images:** `images.mjs` (§9.7), processes every supplied image into `/img` and writes `.build/images.json` (file, widths, ratio, LCP flag). Without images: records the labelled placeholders.
* **Audit setup:** installs Playwright and axe-core, writes `site-audit.mjs` from §9.6, smoke tests it on an empty page. Installs are slow, so this overlaps with everything else.

### 0a.4 The contract (P0): what freezes before any agent starts
`.build/CONTRACT.md` is the single source every agent reads (agents do not see the conversation). It holds:
* Client facts and the one memorable sentence (§2), the page map, project type, archetype, motion tier, engine.
* Token names only (full values live in `css/tokens.css`), the §8.2 markup contract reference, the file layout and ownership table (§0a.7).
* The **Rhythm Map**: the Motion Storyboard (§7.3) plus these columns per section: layout pattern (from §5.10), density (airy, dense, full bleed, narrow column), background theme, image treatment, the effect used by the previous and next section. This is what stops independent agents from all building the same centered block with the same fade up.
* An extract of the hard rules (§Hard rules) and banned phrases (§6).
Contract changes during P2 are append only (a new token, a new class). Anything else goes to the orchestrator, who re broadcasts only when it affects other agents.

### 0a.5 Agent brief template
Each brief is self contained and short. Fields: **Role** · **Read first** (`.build/CONTRACT.md`, the exact SKILL sections, e.g. §5.10, §8.2, §6b, never "the whole file") · **Owns** (files it may create or edit) · **Read only** (everything else) · **Inputs** (its storyboard row, its Rhythm Map row, its copy file, neighbours) · **Rules** (tokens only; effects only through §8.2 attributes; no section level motion JS; copy verbatim from the copy file, and if it does not fit, report instead of rewriting; its own mobile layout; all states designed; real alt text; reserved space for media) · **Done when** (renders, 0 console errors at 390 and 1440, no horizontal overflow, matches its storyboard row, mobile and reduced motion columns implemented) · **Return** (at most 15 lines: files written, deviations, "needs from orchestrator").
A Section agent never edits tokens, base, motion files, head, header or footer. If it needs something there, it reports it.

### 0a.6 Review fan out (P4)
Reviewers are fresh agents, never the authors. They are read only, each with one lens, and return findings as `ID | blocker/major/minor | file:selector | problem | proposed fix`.
1. **Visual A:** 360, 390, 768 px (§13 steps 1, 2, 5 on mobile and tablet).
2. **Visual B:** 1024, 1440, 1920 px (same on desktop).
3. **Motion:** frames against the Storyboard, signature moment reads, no neighbouring repeats, reduced motion and no JS passes (§9.2, §7.13).
4. **Accessibility:** keyboard run, focus, landmarks, headings, contrast on both themes, targets (§15, §13 steps 3 and 4).
5. **Copy and anti slop:** §4 and §6, banned phrases, fabricated facts, skim test, the find and replace test (§4.6), consistent voice across sections.
6. **SEO, GEO, images, performance (static review):** §10, §14, image dimensions, `srcset`, LCP image, JSON-LD matches visible content.
The orchestrator merges duplicates and classifies. Blockers and majors are mandatory; minors are the orchestrator's call.

### 0a.7 Ownership and merging
* One owner per file; no two agents ever edit the same file. Fixes in P5 go to one fixer per file group, parallel across groups.
* HTML projects: sections are fragments, assembled by the orchestrator with `build.mjs` (below). Next.js: `components/sections/NN-Name.tsx` per section, the page file is the orchestrator's.
* Layout:
```
.build/            CONTRACT.md  storyboard.md  copy/NN-name.md  images.json  findings/
src/               head.html  header.html  footer.html  sections/NN-name.html
css/               tokens.css  base.css  motion.css  sections/NN-name.css
js/                motion-gsap.js | motion-anime.js
build.mjs  images.mjs  site-audit.mjs
```
* Two fix rounds at most. If blockers remain after round two, the orchestrator fixes them itself.
* P6 runs alone: no other agent, dev server rebuild or image job active. The audit measures LCP, CLS and long tasks under 4x CPU throttle, and parallel load on the machine distorts exactly those numbers.

### 0a.8 build.mjs (HTML projects)
```js
// build.mjs | assembles index.html and css/sections.css from fragments. node build.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
const read = (p) => readFileSync(p, 'utf8');
const list = (d, ext) => (existsSync(d) ? readdirSync(d).filter((f) => f.endsWith(ext)).sort() : []);
const sections = list('src/sections', '.html');
const cssFiles = list('css/sections', '.css');
if (!sections.length) { console.error('build: no sections in src/sections'); process.exit(1); }
const body = sections.map((f) => `<!-- ${f} -->\n${read('src/sections/' + f).trim()}`).join('\n\n');
const html = `${read('src/head.html').trim()}\n<body>\n${read('src/header.html').trim()}\n<main id="main">\n${body}\n</main>\n${read('src/footer.html').trim()}\n</body>\n</html>\n`;
writeFileSync('index.html', html);
writeFileSync('css/sections.css', cssFiles.map((f) => `/* ${f} */\n${read('css/sections/' + f).trim()}`).join('\n\n') + '\n');
console.log(`build: ${sections.length} sections, ${cssFiles.length} css files -> index.html, css/sections.css`);
```
`src/head.html` opens `<!doctype html><html lang="pl">`, contains the boot (§8.3) first in `<head>`, links `tokens.css`, `base.css`, `motion.css`, `sections.css`, and ends after `</head>`. The motion script tags go in `src/footer.html`. Section files are numbered in storyboard order (`01-hero.html`), because DOM order equals read order equals motion order (§2).


## 1. Discovery gate: ask once, briefly
1. **Klient / branża**: kim jest klient i czym się zajmuje?
2. **Odbiorca**: kto ogląda tę stronę i co ma na niej zrobić?
3. **Jedna rzecz do zapamiętania**: co ma zostać w głowie po 5 sekundach?
4. **Poziom ruchu**: spokojny (Tier 1), dopracowany (Tier 2, domyślny) czy kinowy (Tier 3)? See §7.2.

Real estate clients: also the two questions in §12. If the person says "rób" or does not answer, infer, state the inferences in one line, proceed. No follow up loops.

## 2. Message architecture: the page must say something
Motion and design amplify a message; they cannot replace one. Before the storyboard:
* Write the one sentence the visitor must remember (from discovery point 3). The hero headline says it or sets it up.
* Give every section exactly one job and one message, in the order the visitor needs them: who this is for and what it does, proof, how it works, what it costs or what happens next, action.
* Every section must survive the skim test: headline plus one line alone must carry the message, for the visitor who scrolls fast and never reads body copy.
* A clear next step is never more than one screen away on long pages (a repeated CTA, a sticky contact, or a contact section in reach).
* Concrete over clever: names of places, real numbers the client gave, real project names, real process steps. Specific copy is the strongest anti slop signal.
* Read order equals DOM order equals motion order.

## 3. Motion in short
Full doctrine in §7, code in §8, QA in §9.
* Every motion has a job (orient, focus, pace, connect, signature). No job, no motion.
* Motion Storyboard before code; exactly one signature moment per page; neighbouring sections never repeat an effect.
* Tier decides the engine: Tier 1 native CSS; Tier 2 GSAP (+ SplitText, optional Lenis) or anime.js v4; Tier 3 GSAP + Lenis via the exception path. One scroll engine per page.
* Content visible without JS (boot pattern). Hero animated in CSS from first paint, never from opacity 0. Pins are CSS sticky. Transform and opacity only, clip-path and small blurs with care. Refresh after fonts. Full cleanup. No scrolljacking.
* Mobile is its own design. Reduced motion means no movement, not no feedback.

## 4. Anti slop discipline: non negotiable
The biggest tell of an AI built site is genericness: hero, three feature cards, testimonial carousel, footer, with the same fade up on every section. Refuse it structurally, visually and in motion.

### 4.1 Structural variety
* Pick a macrostructure deliberately: **Portfolio Led** (best work as hero proof: studios, agencies, freelancers), **Editorial** (long form storytelling: personal brands, boutique studios), **Product First** (the thing itself dominates above the fold: SaaS, physical product), **Single Statement** (one oversized idea fills the viewport: art, luxury, personal portfolios), **Catalog / Grid** (a browsable grid is the hero: shops, galleries, listings). Real estate alternatives: §12.
* Vary nav and footer shape. Default away from "logo + 4 links + button" nav and "4 column footer + social row".
* Multiple pages for one client share tokens, but each page's section rhythm fits its own content.

### 4.2 Honest content: never fabricate
* Never invent testimonials, review counts or stars, client counts, "trusted by X", years of experience, team size, awards, prices, specs, availability, credentials, licences or company history. Use a labelled placeholder (`do potwierdzenia`) or omit the section. Counters (R13, §8) animate only numbers the client supplied.
* Avoid marketing sludge ("Twój wymarzony X czeka", "Odkryj idealne rozwiązanie", "Zaufaj ekspertom"). Write specific, concrete copy tied to the real client and market.

### 4.3 Visual slop to refuse
* No generic purple or blue gradients, glassmorphism everywhere, or floating 3D shapes without purpose.
* No stock photos of anonymous smiling people, handshakes or laptops in cafés. Use the client's real work, an art directed placeholder, or a typographic hero. Full imagery rules in §5.6.
* No redrawn fake browser chrome, phone frames or fake map or UI screenshots.
* Every card and section earns its place from real content.

### 4.4 Motion slop to refuse
* The same fade up on every section. Reveals that replay every time you scroll up. Everything staggering at once.
* Bounce and elastic easing outside the Playful archetype. Reveal distances over 60 px. Scale reveals from 0.
* Parallax on text. Custom cursors that hide the native cursor on links. Scroll hijacking. Loading screens that exist only to show an animation.
* Motion that delays reading: if the headline is not readable within one second, the motion is wrong.

### 4.5 Locked design tokens
Once palette, type pairing and motion values are chosen, every color, font, duration, easing and distance uses a named CSS custom property (`var(--color-accent)`, `var(--font-display)`, `var(--dur-reveal)`, `var(--ease-out)`). No inline hex or OKLCH, no ad hoc `font-family`, no literal durations in components. New value: add the token first.

### 4.6 Pre ship self check
Could this copy, structure or motion be moved onto another client's site with find and replace? If yes, revise.

## 5. Design doctrine (Awesome Design, condensed)

Benchmark: Awwwards, SiteInspire, Land book tier. The question is never "does it look professional" but "would a design director stop scrolling".

### 5.1 Six archetypes: pick one extreme and commit
| Archetype | For | Type | Color | Layout | Motion personality |
|---|---|---|---|---|---|
| Boutique / Editorial | Studios, interior design, personal brands | High contrast serif display + quiet sans | Warm neutrals, one ink, one accent | Asymmetric, generous margins, big type | Slow, line masked reveals, clip reveals |
| Modern Minimal | SaaS, tech services, consultancies | Precise grotesk, tight tracking on display | Near white or near black, one sharp accent | Strict grid, lots of air | Medium, opacity and position only |
| Warm / Organic | Renovation, craft, food, wellness | Soft serif or rounded sans | Earth tones, muted greens, clay | Rounded shapes, layered photos | Medium slow, soft scale, gentle parallax |
| Architectural / Luxury | Premium real estate, architects, developers | Light weight large serif or wide sans, caps with tracking | Deep darks, stone, one metallic or muted accent (never default navy and gold) | Full bleed imagery, monumental spacing | Slow, tiny distances, scale down image reveals |
| Playful / Expressive | Events, consumer brands, youth | Chunky display, variable fonts | Saturated, confident clashes | Broken grid, stickers, rotation | Fast, character staggers, magnetic |
| Brutalist / Technical | Dev tools, agencies with attitude | Mono + grotesk | Raw black, white, one signal color | Visible grid lines, dense info | Instant or stepped, hard cuts, scramble |

### 5.2 Design Excellence Bar
* **Hierarchy:** one dominant element per viewport. If two things shout, one is wrong.
* **The hero move:** one deliberate, memorable design decision per site (a cropped oversized headline, an unusual image crop, a typographic grid break). Only one.
* **Whitespace:** more than feels comfortable. Section padding 12 to 20 svh on desktop.
* **Spacing rhythm:** one scale (4 or 8 px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160). Nothing off scale.
* **Restraint:** maximum 2 typefaces, 1 accent color, 1 signature motion moment.
* **Micro details:** optical alignment, hanging punctuation on quotes, tabular numbers in data, balanced headline wrapping (`text-wrap: balance`), `text-wrap: pretty` on body.
* **States are design surface:** hover, focus, active, disabled, loading, empty, error, success all designed, never browser default.

### 5.3 Palette construction
* Build in OKLCH so lightness steps are perceptually even. Define 9 to 11 steps per hue (`--ink-50` to `--ink-950`), plus one accent hue.
* 60 30 10: dominant neutral, secondary surface, accent reserved for action and emphasis only.
* Harmony models: monochrome + one accent (safest premium), analogous (warm, organic), complementary accent at low chroma (luxury).
* Backgrounds are never flat white or flat black: warm off white, subtle grain (inline SVG noise at 3 to 5% opacity) or very soft layered gradients. Never loud gradients.
* Contrast is checked, not guessed: 4.5:1 body, 3:1 large text and UI.
* Refuse by default: purple to blue gradients, navy and gold, neon on black without a reason.

### 5.4 Typography
* Fluid scale with `clamp()`, ratio 1.25 (minimal) to 1.5 (editorial). Display can go to 8 to 12 vw on editorial heroes.
* Body 17 to 19 px, line height 1.5 to 1.7, measure 60 to 75 characters.
* Display line height 0.95 to 1.1, negative tracking on large grotesk (-0.02em to -0.04em), positive tracking on small caps (+0.08em).
* Self host fonts as WOFF2, subset to the needed languages, `font-display: swap`, preload the 1 or 2 files used above the fold. Verify Polish diacritics (ą ć ę ł ń ó ś ź ż) in every weight used.
* Good sources: Fontshare, Google Fonts (pick less common families), Pangram Pangram, Klim (licensed). Avoid Inter / Poppins / Montserrat as the display face; they read as template.

### 5.5 Composition and grid
* 12 column grid on desktop, 4 on mobile, with deliberate breaks from it (an image bleeding off the edge, a headline spanning into the margin).
* Asymmetry over centering for anything longer than a hero statement.
* Vary section rhythm: dense, airy, full bleed, narrow text column, grid. Never five identical centered sections.
* Mobile is recomposed, not squeezed: reorder for reading, keep one dominant element per screen.

### 5.6 Imagery and art direction
* Real client work first. One consistent treatment (same crop ratios, color grade, framing).
* Large and few beats small and many. Crops with intent (detail shots, unusual angles).
* No stock people, handshakes, laptops in cafés. Without real photos: typographic hero, abstract texture from the brand palette, or an art directed placeholder labelled `zdjęcie do dostarczenia`.
* Every image: WebP, explicit `width` / `height` or `aspect-ratio`, `srcset` + `sizes`, lazy below the fold, the LCP image eager with `fetchpriority="high"`.

### 5.7 Iconography, depth, dark mode
* One icon family, one stroke weight (Lucide, Phosphor, Tabler). Icons support labels, never replace them.
* Depth from layering, scale and light, not heavy drop shadows. Shadows soft, large, low opacity, tinted by the background hue.
* Dark mode only if the archetype or client needs it; then define it as a full token set, not inverted colors. Dark surfaces use near black with a hue, text off white, accents with lowered chroma.

### 5.8 Token starter (copy, then tune to the archetype)
```css
:root {
  /* color: OKLCH ramps, one neutral hue + one accent */
  --ink-950: oklch(0.21 0.006 160); --ink-800: oklch(0.33 0.008 160); --ink-600: oklch(0.47 0.01 150);
  --paper: oklch(0.95 0.012 80); --paper-2: oklch(0.91 0.016 78); --line: oklch(0.82 0.015 78);
  --accent: oklch(0.52 0.12 45); --accent-ink: oklch(0.98 0.01 80);
  --color-accent: var(--accent);
  /* type */
  --font-display: "Display Face", "Iowan Old Style", Georgia, serif;
  --font-body: "Text Face", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --step--1: clamp(0.88rem, 0.84rem + 0.15vw, 0.95rem);
  --step-0: clamp(1.06rem, 0.98rem + 0.3vw, 1.19rem);
  --step-1: clamp(1.3rem, 1.1rem + 0.8vw, 1.7rem);
  --step-2: clamp(1.9rem, 1.4rem + 2vw, 3rem);
  --step-3: clamp(2.6rem, 1.6rem + 4.6vw, 6.2rem);
  /* space: 8 px rhythm */
  --space-2xs: 0.5rem; --space-xs: 0.75rem; --space-s: 1rem; --space-m: 2rem; --space-l: 4rem;
  --space-xl: clamp(5rem, 3rem + 8vw, 10rem);
  --radius: 2px; --container: 1320px;
}
[data-theme="dark"]  { background: var(--ink-950); color: var(--paper); }
[data-theme="light"] { background: var(--paper);   color: var(--ink-950); }
```
The accent on `--accent-ink` text must pass 4.5:1 (this pair does: about 5.2:1). Check every new pair.

### 5.9 Hero patterns that are not templates
* **Statement crop:** a display headline so large it is cropped by the viewport edge or wraps into a deliberate shape; one line of value, one CTA.
* **Full bleed proof:** the client's best real photo edge to edge, headline bottom left on a gradient scrim for contrast, facts in a thin row (location, specialty, response time).
* **Split editorial:** 5/7 grid, headline and CTA left, a tall image right bleeding off the top.
* **Product first:** the actual product or interface as the hero object, copy secondary.
* **Index hero:** a list or grid of real work is the hero (studios, portfolios, listings).
Never: centered headline + subline + two buttons over a stock image, the default AI hero.

### 5.10 Section patterns (pick by content, not by habit)
* **Proof:** asymmetric grid of 3 to 5 real projects, the first one twice the size; captions with place and what was done.
* **Process:** numbered steps with real names and durations; the natural candidate for the pinned signature moment.
* **Comparison:** a plain two column table ("my approach / typical approach") only if the claims are true and checkable.
* **About:** one tall portrait (real), one strong sentence in display type, credentials as plain facts with placeholders when unknown.
* **FAQ:** native `<details>`, questions clients actually ask, answers of 2 to 4 sentences, mirrored in `FAQPage` JSON-LD.
* **Contact:** large headline, short form, phone and email as real links, response time promise only if the client confirms it.
* **Footer:** name, contact, legal links, nothing decorative. One or two rows, not four columns of filler.

## 6. Copywriting (Polish market first)
Copy decides whether a beautiful page sells. Write it before the layout, not after.
* **Headline formula:** outcome + for whom + how it is different, in 6 to 12 words. "Sprzedaj mieszkanie z planem, nie z ogłoszeniem." beats "Profesjonalne usługi pośrednictwa".
* **Specific over generic:** places (Orłowo, Wrzeszcz), time frames (6 tygodni), process nouns (wycena, akt notarialny), real numbers only from the client.
* **Second person, active voice, short sentences.** "Dostajesz wycenę na piśmie" not "Klient otrzymuje profesjonalną wycenę".
* **Banned phrases (AI and agency sludge):** "kompleksowe usługi", "profesjonalne podejście", "najwyższa jakość", "Twój wymarzony", "odkryj", "zaufaj ekspertom", "innowacyjne rozwiązania", "w dzisiejszych czasach", "szyte na miarę" without saying how, "pasja" as a selling point.
* **Free offers:** "bezpłatna wycena", "bezpłatna konsultacja", never "za darmo".
* **CTA labels say what happens:** "Umów bezpłatną wycenę", "Zobacz ofertę", "Zadzwoń: 500 000 000". Never "Wyślij", "Kliknij tutaj", "Dowiedz się więcej" alone.
* **Microcopy under CTAs reduces fear:** response time, no obligation, what happens next, only if true.
* **Typography of Polish:** non breaking space after one letter words (w, z, i, a, o, u) in headlines (`&nbsp;` or `text-wrap: balance` plus a manual fix), Polish quotes „…”, en dash free phrasing is fine, numbers with spaces (1 250 000 zł), `lang="pl"` so hyphenation and screen readers work.
* **Placeholders are visible:** `[cena do potwierdzenia]` styled so nobody ships it by accident. Never plausible fake data.
* **Skim test:** read only headlines and CTAs top to bottom. It must still tell the whole story.

## 6a. Conversion and forms
* One primary action per page, repeated at natural decision points (after proof, after process, at the end). Secondary action (phone, email) always visible in the contact section.
* Forms: 3 to 5 fields. Labels always visible (no placeholder only labels). Correct `type` and `autocomplete` (`name`, `tel`, `email`, `street-address`). `inputmode="tel"` for phones. Required fields marked in text, not only by color.
* Errors: inline, next to the field, written as a fix ("Podaj numer telefonu, np. 500 600 700"), announced with `aria-live="polite"`, focus moved to the first invalid field.
* Success: replace the form with a clear confirmation that says what happens next and when. Never a silent reset.
* Consent (RODO): the required checkbox covers only answering the inquiry and names the administrator and the privacy policy; marketing consent is a separate, unticked, optional checkbox. The form works without marketing consent.
* Trust without fabrication: real licence numbers, real addresses, real photos of the person, real project names. If none exist yet, leave the element out rather than invent it.
* Sticky mobile contact bar (call + message) for local service businesses, 56 px high, hidden while the form is in view.
* Analytics and pixels load only after consent where required; measure form submits and phone clicks as conversions.

## 6b. Components
* Buttons: `0.8em 1.6em` padding, clear hover (color or subtle lift), pressed state (`scale(0.98)`), visible focus ring (`:focus-visible`, 2 px accent, 3 px offset). Shadows, if any, change via opacity of a pseudo element, never by animating `box-shadow`.
* Inputs: token colors, visible labels, accent focus state, designed error and success states, no browser default styling.
* Cards: hover state required (image scale 1.03 inside a clipped frame, border reveal, or color shift); the whole card is one link with a real accessible name.
* Navigation: 3 to 5 links. Sticky header only on long pages; hide on scroll down and show on scroll up with a 200 to 300 ms transform. Mobile menu is a real `<dialog>` or disclosure button with `aria-expanded`, focus trapped while open, Escape closes, page scroll stopped (and `lenis.stop()` if Lenis runs).
* Skip link to `#main` as the first focusable element.
* Component transitions come from `transitions-dev` when installed, otherwise native CSS per §7.12.

## 7. Motion doctrine

The rules that turn animation from decoration into direction. Versions: GSAP 3.15 (all plugins free), Lenis 1.3, anime.js 4.5 (September 2026). Check the API if the project pins older majors.

### 7.1 The one principle

Every motion has a job. If you cannot name the job in five words, delete the motion.

The five jobs:

| Job | What it does | Typical effects |
|---|---|---|
| Orient | Shows where the user is and what just changed | Nav state change, progress bar, section color shift, page transition |
| Focus | Pulls the eye to the one thing that matters in this viewport | Headline line reveal, CTA entrance, highlight sweep |
| Pace | Releases information in reading order so it lands piece by piece | Staggered reveals, pinned step storytelling, counters |
| Connect | Makes two states or sections feel like one continuous space | Shared element transitions, Flip, clip reveals that continue a shape |
| Signature | The one memorable brand moment | The hero move, one pinned sequence, one custom interaction |

Motion serves the message, never the other way around. A visitor who scrolls fast and ignores every animation must still get the full message. A visitor who watches every animation must get the message faster and remember it longer. If motion delays reading, hides content, or competes with the headline, it fails.

### 7.2 Motion tiers

Pick one tier per project during discovery. It sets the budget, the engine, and how far the effects go. If the person did not specify, infer from industry and audience and state it in one line.

| Tier | For | What is allowed | Engine | Smooth scroll |
|---|---|---|---|---|
| 1 Quiet | Law, medical, finance, B2B trust sites, local services where the visitor wants an answer fast | Hover and focus states, short reveals on first entry, nav changes, native scroll progress | Native CSS only (scroll driven animations, transitions, `@starting-style`, View Transitions). Optional anime.js WAAPI for a hero stagger | No |
| 2 Crafted (default) | Studios, real estate, interior design, renovation, premium services, SaaS landing pages | Everything in Tier 1, plus one signature scroll moment, line masked headline reveals, image clip reveals, light parallax, exit fades, counters on real numbers | GSAP + ScrollTrigger (+ SplitText), or anime.js v4 for lighter builds | Optional Lenis, only if there is scrubbed motion that benefits |
| 3 Cinematic | Portfolios, launches, single property showcases, luxury, award submissions | Everything in Tier 2, plus pinned storytelling, horizontal sections, scrubbed image sequences, page transitions, WebGL | GSAP + ScrollTrigger + Lenis (or ScrollSmoother, never both) | Yes |

Tier 3 always goes through the exception path in §11. A Tier 3 site that fails on a mid range Android phone is worse than a Tier 2 site that works everywhere.

### 7.3 The Motion Storyboard (mandatory before code)

Before writing any animation code, write this table. It is the step that connects motion to what the page communicates. Keep it short: one row per section.

```
MOTION STORYBOARD
Tier: 2 Crafted | Engine: GSAP + ScrollTrigger + SplitText | Smooth scroll: Lenis (lerp 0.1)
Signature moment: §7.3 pinned "3 kroki" sequence
Hero move (design): oversized serif headline cropped by the viewport edge

| # | Section | Message (what the visitor must learn) | Motion job | Effect | Trigger | Mobile | Reduced motion |
|---|---------|---------------------------------------|------------|--------|---------|--------|----------------|
| 1 | Hero | Who this is for, in one line | Focus | CSS line mask reveal of H1, CTA fades in 200 ms after | Page load | Same, shorter distance | Instant, no movement |
| 2 | Proof | Real completed projects | Pace | Image clip reveal, captions stagger 60 ms | Enters at 80% | Same | 150 ms crossfade |
| 3 | Process | 3 steps, in order | Signature | Pinned, scrubbed step swap | Pin at top, 250% length | No pin, stacked cards with simple reveals | Static list |
| 4 | CTA | Book a call | Focus | Background shifts to accent, button enters | Enters at 70% | Same | Instant color |
```

Rules for the storyboard:
* Exactly one signature moment per page. Everything else is supporting motion and stays quiet.
* The hero message must be readable within 1 second of first paint, animated or not.
* Every row must have a mobile and a reduced motion column filled in. "Same" is a valid answer. Blank is not.
* If two neighboring sections use the same effect, change one of them or drop it. Repeating the same fade up on every section is the most common AI motion tell.
* Show the storyboard to the person in the reply before the code (it is part of the one short plan block), then build exactly what it says.

### 7.4 Choreography: order, rhythm, restraint

**Order follows reading order.** Headline, then supporting line, then CTA, then imagery. Never reveal the image before the words that explain it, unless the image is the message (portfolio hero).

**Rhythm.** Motion on the page should breathe: a strong moment, then quiet, then a strong moment. Alternate between sections with motion and sections that are simply present.

**Restraint numbers (defaults, tune per archetype in §7.5):**
* Stagger between list items: 50 to 80 ms. Between words: 30 to 50 ms. Between lines: 80 to 120 ms. Between characters: 15 to 30 ms, and only for display text of three words or fewer.
* Total duration of one staggered group: 1000 ms maximum. More than 8 items: stagger the first 6 and group the rest.
* Reveal distance: 16 to 40 px (or 4 to 8% of element height). Anything above 60 px reads as sloppy.
* Durations: micro (hover, press) 120 to 200 ms; component (menu, modal) 200 to 350 ms; section reveal 600 to 900 ms; hero entrance 800 to 1200 ms total, first element moving within 100 ms of paint.
* Exits are shorter than entrances (about 70%) and ease in, not out.
* Scale reveals: 1.04 to 1.1 down to 1. Never from 0 or 0.5.
* Blur reveals: 4 to 8 px maximum, small elements only (see §7.8).

**Easing.**
* Entrances: strong ease out. GSAP `expo.out` or `power3.out`; CSS `cubic-bezier(0.16, 1, 0.3, 1)`; anime.js `outExpo`.
* Exits: `power2.in`, CSS `cubic-bezier(0.7, 0, 0.84, 0)`.
* State swaps (tabs, toggles): `power2.inOut`.
* Scrubbed scroll animations: `ease: "none"` (linear). The scroll itself, smoothed by Lenis or `scrub: 0.5` to `1`, provides the feel. An eased tween on a scrubbed timeline feels laggy and wrong.
* Bounce, elastic, back: only in the Playful archetype, and only on small UI elements.

**Replay policy.** Section reveals play once (`once: true` / `toggleActions: "play none none none"`). Replaying every reveal when scrolling back up feels cheap. Exceptions: scrubbed effects (they are position, not events) and the signature moment if it is scrubbed.

### 7.5 Motion tokens and the archetype map

Motion values are design tokens exactly like colors. Define them once in `:root`, mirror them in JS, never hard code a duration or easing inside a component. Recipe R0 in §7.8 has the token block and the JS reader.

| Archetype (from §5.1) | Duration feel | Ease | Distance | Signature style |
|---|---|---|---|---|
| Boutique / Editorial | Slow, 800 to 1100 ms reveals | `expo.out` | Small, 16 to 24 px | Line masked serif headlines, image clip reveals, long pinned reading passages |
| Modern Minimal | Medium, 500 to 700 ms | `power3.out` | Small, 12 to 20 px | Opacity and position only, precise stagger, no parallax or very subtle |
| Warm / Organic | Medium slow, 700 to 900 ms | `power2.out` or `sine.out` | Medium, 24 to 32 px | Soft scale 1.05 to 1 on images, gentle parallax, rounded clip reveals |
| Architectural / Luxury | Slow, 900 to 1400 ms | `expo.out`, `power4.out` | Very small, 8 to 16 px | Scale down image reveals, slow parallax, dark to light section shifts, generous pins |
| Playful / Expressive | Fast, 300 to 500 ms | `back.out(1.4)` on UI, `expo.out` on sections | Medium to large | Character staggers, magnetic buttons, rotation, color jumps |
| Brutalist / Technical | Instant or stepped, 0 to 250 ms | `steps(n)` or `none` | None or hard cuts | Hard cuts, text scramble, cursor followers, marquees, no smoothing |

### 7.6 Engine selection

Default order: native first, then one JS engine. Pick once per project and write it in the storyboard header.

**Native CSS (always allowed, alongside anything):**
* Component states: CSS transitions plus `@starting-style` for entry animation of elements that appear (dialogs, popovers). Or the transitions-dev catalog (§7.12).
* Simple scroll reveals, reading progress bars, light parallax: `animation-timeline: view()` / `scroll()`. Runs off the main thread. Supported in Chromium since 115 and Safari 26. Firefox stable still ships it behind a flag as of mid 2026, so always wrap in `@supports (animation-timeline: view())` with the final state as the default. The fallback is "no animation", never "hidden content".
* Page and state transitions: View Transitions API. Same document transitions work in all current major engines. Cross document (`@view-transition { navigation: auto; }`) is progressive enhancement: Chromium and Safari animate, others just navigate.

**GSAP + ScrollTrigger (default for Tier 2 and 3 scroll work).**
Use for: pins, scrubbed timelines, horizontal sections, anything where several elements are choreographed against one scroll range, SplitText line reveals, Flip layout transitions. Register only the plugins used. In React / Next.js always use `@gsap/react` `useGSAP()` with a `scope` so everything reverts on unmount.

**anime.js v4 (the lighter alternative).**
Use for: Tier 1 and light Tier 2 builds, SVG line drawing (`svg.createDrawable`), stagger grids, text splitting (`splitText`, accessible by default, re-splits on resize and font load), draggable elements, scroll synced animations without pinning (`onScroll({ sync: true })`). Prefer `waapi.animate()` for plain transform and opacity animations, it is smaller and hardware accelerated. Do not use anime.js for pinning or long multi element scroll choreography; that is GSAP territory.

**Lenis (optional smooth scroll).**
Use in Tier 3, and in Tier 2 only when the page has scrubbed or parallax motion that visibly benefits. Skip it for Tier 1, long reading pages (blogs, documentation), and pages dominated by maps, iframes, or nested scroll areas. Keep `syncTouch: false` (the default) so touch devices keep native scrolling. Never combine Lenis with ScrollSmoother, never combine two scroll engines of any kind.

**Motion (formerly Framer Motion).**
Only when the React project already uses it, for component state animation. Never animate the same element with Motion and GSAP.

**Hard no:** AOS, WOW.js, ScrollMagic, locomotive-scroll v4, jQuery animation plugins, custom wheel hijacking (`preventDefault` on wheel to force section snapping), a second copy of any engine loaded from a CDN on top of npm.

**Decision in one line:** Tier 1 → native CSS. Tier 2 with pins or scrub choreography → GSAP. Tier 2 without pins, SVG or text heavy, bundle sensitive → anime.js. Tier 3 → GSAP + Lenis.

### 7.7 Effect catalog: when to use, when not to

Each effect lists its job, the constraint that keeps it premium, and when to refuse it. Code for each lives in §7.8 under the listed recipe.

| Effect | Job | Premium constraint | Refuse when | Recipe |
|---|---|---|---|---|
| Hero entrance | Focus | CSS driven so it starts at first paint, not after JS loads. First element moves within 100 ms. Total under 1.2 s | Never refuse; keep it simple | R5 |
| Line masked text reveal | Focus | Lines slide up 100% inside an overflow clip, stagger 80 to 120 ms. Split only after fonts load | Body copy, anything longer than about 4 lines | R6, R17 |
| Word or character reveal | Signature | Display text only, three words or fewer for characters | Headlines longer than 8 words, any body copy | R6 |
| Image clip reveal | Connect / Pace | `clip-path: inset()` from one edge plus inner image scale 1.1 to 1 | More than 6 on one screen at once | R7 |
| Parallax | Connect (depth) | Image inside an overflow hidden frame, scaled 1.15 so edges never show, travel 8 to 15% | Text (never parallax readable text), mobile below 768 px unless tested, Tier 1 | R8 |
| Exit fade (disappearing content) | Orient | Hero content fades and drifts up as it leaves, scrubbed, fully reversible | Content the user may scroll back to read mid animation | R9 |
| Pinned storytelling | Signature / Pace | One per page, 3 to 5 steps. Scroll length 150 to 300% of viewport. Each step readable at rest. Staggered swap (outgoing half gone before incoming starts). Progress visible | Mobile unless it is short and tested; content with forms or links inside the pin | R10 |
| Horizontal scroll section | Signature | Real content that is naturally a sequence (projects, timeline), at least 5 items so the track travels more than half a viewport (the engine skips the pin otherwise). Fallback to native swipe row on touch | Fewer than 5 items; anything the user needs to compare side by side; Tier 1 and 2 without a reason | R11 |
| Stacking cards | Pace | Cards pin and the previous one scales to 0.95 and dims slightly | More than 5 cards | R12 |
| Counters | Pace | Only real, client supplied numbers. Duration 1.2 to 2 s, `power2.out`, tabular numerals, final value in the HTML | Invented numbers (never), numbers that are not the point | R13 |
| Section theme contrast | Orient | Each section paints its own background (`data-theme`); optional gradient seam between themes. Never recolor `<body>` from JS | Adjacent sections already contrast strongly | R14 |
| Marquee | Signature (Brutalist / Playful) | CSS transform loop, pauses on hover and when offscreen, stops under reduced motion | Client logos the client has not approved, anything that must be read | R15 |
| Magnetic button / cursor effects | Signature | `(hover: hover) and (pointer: fine)` only, max 8 to 12 px pull, never hide the native cursor on links or inputs | Touch devices, Tier 1, forms | R16 |
| SVG line drawing | Focus / Signature | `stroke-dasharray` via `svg.createDrawable` or DrawSVG, drawn once | Icons in UI (distracting) | R17 |
| Page / state transitions | Connect | View Transitions API, under 400 ms, shared element names only on elements that exist in both states | When it delays navigation or breaks back button behaviour | R18 |
| Scrubbed image sequence / video | Signature (Tier 3) | Canvas, frames preloaded progressively, max 60 to 120 frames at WebP, pause offscreen | Tier 1 and 2, any site where it becomes the LCP | R10 notes |
| Scroll progress indicator | Orient | Native `animation-timeline: scroll(root)` | Short pages | R2 |

### 7.8 Engineering rules that cannot be skipped

**7.8.1 Content must never depend on JavaScript to be visible.**
Hidden initial states are applied only when motion is confirmed to run. Use the boot pattern (R1): a tiny inline script in `<head>` adds `motion` to `<html>`, CSS hides reveal targets only under `.motion`, and a failsafe removes the class if the engine did not report ready within 2.5 s. With JS off, blocked, or crashed, every word is still on screen. This single rule prevents the most damaging motion bug on the web: a blank page with a half loaded bundle.

**7.8.2 Never hide the LCP element behind JS.**
The largest element in the first viewport (usually the H1 or the hero image) must not wait for a JS bundle to become visible, and must not start at opacity 0. Measured in Chromium: a heading whose CSS entrance started at opacity 0 was never reported as FCP or LCP at all, even after it faded in; the same entrance starting at opacity 0.01, or animating transform only, reported LCP at first paint. A line mask reveal starting fully clipped reported a tiny LCP size, which lets a later element become LCP. So: animate the hero with CSS keyframes that start at first paint (R5), from opacity 0.01 or transform only, with no delay on the first line. For an image hero animate `scale`, never `opacity`.

**7.8.3 What you may animate.**
* Always fine: `transform` (translate, scale, rotate) and `opacity`.
* Fine with care: `clip-path` (paints, so limit to a few elements at a time and keep it off very large areas during scrub), `filter: blur()` (4 to 8 px, small elements, never scrubbed on full width images), one root CSS variable driving `background-color` / `color` for section shifts.
* Never during scroll or hover: `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`, `border-width`, `box-shadow` spread, `font-size`, `letter-spacing`, `line-height`. These force layout on every frame and are the fastest way to fail INP. For a size change use `scale`, or Flip.
* `will-change` only while animating (GSAP handles it). Never blanket `will-change: transform` on dozens of elements; it eats GPU memory on phones.

**7.8.4 Measurements and refresh.**
ScrollTrigger calculates start and end positions once. Anything that changes layout after that breaks every trigger below it. Call `ScrollTrigger.refresh()` after `document.fonts.ready` and after `window` `load`. Give every image and video explicit `width` and `height` or `aspect-ratio` so nothing shifts later. Create triggers top to bottom in page order, or set `refreshPriority` when you cannot.

**7.8.5 One scroll source of truth.**
With Lenis: `lenis.on('scroll', ScrollTrigger.update)`, drive Lenis from `gsap.ticker`, and `gsap.ticker.lagSmoothing(0)`. Without Lenis: nothing, ScrollTrigger listens itself. Never add your own `scroll` event listener that does work per event; use ScrollTrigger callbacks, `onScroll`, IntersectionObserver, or native scroll timelines.

**7.8.6 Anchors, nested scroll and focus with Lenis.**
Use `anchors: true` (or a custom `lenis.scrollTo` with offset for a sticky header). Put `data-lenis-prevent` on every element with its own scroll (modals, drawers, map embeds, code blocks, long dropdowns). Stop Lenis (`lenis.stop()`) while a modal is open and start it on close.

**7.8.7 Cleanup.**
Every animation must be revertable. Vanilla: keep context in a `gsap.matchMedia()` or `gsap.context()` and call `revert()` when needed. React / Next.js: `useGSAP(() => {...}, { scope })`. anime.js: keep the returned instances and call `.revert()`. Single page apps and Next.js route changes leak triggers otherwise, and the second page scrolls wrong.

**7.8.8 Split text safely.**
Split only after fonts load (GSAP SplitText `autoSplit: true` with the animation returned from `onSplit`; anime.js `splitText` waits for fonts automatically). Both libraries keep the text accessible to screen readers by default (`aria: "auto"` / `accessible: true`); do not turn that off. Never split a heading whose line breaks come from `<br>` without testing at every breakpoint. Use `mask: "lines"` rather than hand built wrappers.

**7.8.9 No scrolljacking.**
The user's scroll input must always move the page. Pins advance by scroll, they do not lock it. Section snapping by intercepting the wheel is banned. Native CSS `scroll-snap` is allowed for horizontal galleries and on mobile swipe rows.

**7.8.10 Offscreen work stops.**
Loops (marquees, canvas, WebGL, autoplay video, Lottie) pause when out of view (IntersectionObserver or ScrollTrigger `onToggle`) and when the tab is hidden.

**7.8.11 Layout stability.**
Motion must not cause CLS. Transforms do not. SplitText must not change line wrapping (fonts loaded first). Hidden states use opacity and transform, never `display: none` toggled into layout.

**7.8.12 Pins are CSS sticky.**
Measured in Chromium: ScrollTrigger `pin: true` (which switches the element to `position: fixed` and inserts a spacer) produced CLS of 0.26 for one pin without Lenis, 0.36 with Lenis, and close to 1.0 per pin on a full page. A pin built with `position: sticky` inside a tall section, with ScrollTrigger only scrubbing the timeline, measured CLS 0. Use the sticky pattern (R10, R11) by default. Use `pin: true` only when sticky is impossible (for example pinning inside a custom scroller), then run the audit and accept the result only if CLS stays within budget. Sticky needs every ancestor to avoid `overflow: hidden` / `auto`; use `overflow: clip`.

### 7.9 Mobile and touch

Build mobile motion as its own design, not as the desktop version with things broken. Use `gsap.matchMedia()` breakpoints (R3).

* Parallax: travel halved, or off below 768 px.
* Pins: off below 768 px by default; replace with stacked content and simple reveals. Keep a pin on mobile only if the storyboard says so and it passes QA on a real phone size.
* Horizontal scroll sections become native horizontal swipe rows with `scroll-snap-type: x mandatory`.
* Hover effects exist only under `@media (hover: hover) and (pointer: fine)`. Touch users get a clear pressed state instead.
* Use `svh` for full height sections, not `vh`, so the mobile address bar does not cause jumps. Set `ScrollTrigger.config({ ignoreMobileResize: true })`.
* Lenis keeps native touch scrolling (`syncTouch: false`). Do not smooth touch.
* Respect `navigator.connection?.saveData` and low core counts (`navigator.hardwareConcurrency <= 4`) as signals to drop to the next lower tier's effects for heavy Tier 3 features.
* Reveal distances shrink by about 30% on mobile; durations stay the same.

### 7.10 Accessibility

* `prefers-reduced-motion: reduce` means "no movement", not "no feedback". Replace translate, scale, parallax, and pins with instant state or a crossfade of 150 ms or less. Disable Lenis. Stop marquees and autoplay loops. Pinned sections become normal flow. Implement it as a separate branch in `gsap.matchMedia()` (R19), not as `if` statements scattered through code.
* Anything that moves automatically for more than 5 seconds needs a visible pause control (WCAG 2.2.2), or it must stop on its own.
* No flashing faster than 3 times per second.
* Keyboard: every link and button inside animated or pinned sections is reachable by Tab in reading order, and receives focus in a visible state. If focus lands on an element that has not been revealed, reveal it immediately (R19 includes a `focusin` handler).
* DOM order is the reading order. Visual reordering with transforms must not change the meaning.
* Split text stays readable for screen readers (7.8.8).
* Motion never carries information alone. A counter's final number is in the HTML; a step sequence also exists as readable text.

### 7.11 Performance budget and the exception path

Targets are strong defaults with a written escape hatch, not a wall that blocks all ambitious work.

**Default budget (Tier 1 and 2), measured at p75 on throttled mobile (4x CPU, fast 4G):**
* LCP ≤ 2.5 s (aim for 2.0 s).
* INP ≤ 200 ms.
* CLS ≤ 0.1.
* Motion JavaScript, compressed: Tier 1 under 10 KB; Tier 2 under about 60 KB (GSAP core + ScrollTrigger + SplitText + Lenis fit inside this). Measure with the bundle analyzer, do not guess.
* No long task over 100 ms while scrolling. No more than 5% of frames over 32 ms during a scroll pass (the audit script measures this).

**Exception path (Tier 3, or any Tier 2 page that needs something heavy):**
Allowed when all of these are true and written in the storyboard header:
1. The reason: which effect needs the extra weight and what it communicates.
2. The first meaningful content (headline, one line of value, CTA) is painted within 2.5 s regardless.
3. LCP stays under 3.0 s at p75 throttled mobile. This is the absolute ceiling.
4. Heavy assets (WebGL, image sequences, 3D, large video) load after LCP, on idle or on approach (IntersectionObserver with a margin), never in the critical path.
5. A lighter fallback exists for reduced motion, save data, and low core devices.

**Never exempt:** CLS ≤ 0.1 and INP ≤ 200 ms. Those measure broken experiences, not ambition.

### 7.12 Component level motion: transitions-dev and transitions-polish

Component interactions (modal, dropdown, badge, toast, tab, accordion, tooltip, hover, press, loading, error, success states) come from the `transitions-dev` catalog when that skill is installed. Do not hand roll one the catalog already ships. Before shipping, run `transitions review` then `transitions polish` from `transitions-polish` so every duration, easing, distance, scale, and blur value lands on the shared token scale.

**If those skills are not installed:** build component states with native CSS (transitions, `@starting-style`, `<dialog>`, popover API) using the tokens from R0, following §7.4 numbers. Do not guess catalog names or pretend the skill ran. Say in one line that the fallback was used.

Scroll and page level motion (everything in §7.7) is never delegated to transitions-dev; it follows this file.

### 7.13 Failure modes and fixes

| Symptom | Cause | Fix |
|---|---|---|
| Blank sections when JS fails or loads slowly | Reveal targets hidden in plain CSS | Boot pattern R1: hide only under `.motion`, failsafe timeout |
| LCP 1 to 2 s worse after adding motion | Hero H1 or image starts at opacity 0 via JS | CSS hero entrance R5, never delay the LCP element |
| Triggers fire too early or too late after a few seconds | Fonts or images changed layout after ScrollTrigger measured | `ScrollTrigger.refresh()` after fonts and load; reserve image dimensions |
| Content jumps when a pin starts, CLS spikes | ScrollTrigger `pin: true` switching to fixed positioning | CSS sticky pin with a scrubbed timeline (7.8.12, R10, R11) |
| Sticky pin does not stick | An ancestor has `overflow: hidden` or `auto`, or the sticky element is as tall as its section | `overflow: clip` on ancestors; the section must be taller than the pin (the recipes set the height) |
| Lenis + ScrollTrigger feel out of sync, jitter | Two tickers | Drive Lenis from `gsap.ticker`, `lagSmoothing(0)`, `lenis.on('scroll', ScrollTrigger.update)` |
| Anchor links jump wrong or not at all | Lenis intercepts native anchors | `anchors: true` or `lenis.scrollTo(target, { offset })` |
| Modal or map scrolls the page instead of itself | Lenis catches the wheel | `data-lenis-prevent` on the nested scroller, `lenis.stop()` while open |
| Headline wraps differently after split | Split before web fonts loaded | `autoSplit` / `onSplit`, or anime.js `splitText` which waits for fonts |
| Second page after navigation scrolls wrong | Triggers from the previous route still alive | `useGSAP` scope, `revert()` on route change |
| Mobile jumps when the address bar hides | `vh` units, resize refresh | `svh`, `ScrollTrigger.config({ ignoreMobileResize: true })` |
| Reveals replay every time you scroll up | Default toggle actions | `once: true` or `toggleActions: "play none none none"` |
| Page feels heavy and slow despite small JS | Animating layout properties, blanket `will-change`, blur on large images | §8.3 |
| Horizontal section unreachable by keyboard | Items only move by scroll | Ensure natural DOM order and that focus scrolls the pin (R11 focus note) |
| Everything feels the same and generic | Same fade up on every section | Storyboard rule: vary effects, one signature moment, quiet sections between |
| Light text on light background for half a screen when a dark section enters | `<body>` recolored by JS at mid viewport | Sections own their colors (R14); JS may only mirror the theme for fixed UI |
| Horizontal pin barely moves | Too few items, track only slightly wider than viewport | 5+ items, or keep the static swipe row (engine skips pins under half a viewport of travel) |
| Two step headings overlap mid scroll, or an empty frame between steps | Full crossfade, or fully sequential swap | Staggered swap: incoming starts when outgoing is half gone |
| Pin starts late or the horizontal track moves before it sticks | Heading or padding inside the pinned section | `.story` / `.h-scroll` contain only their pin; headings go in the element before (engine warns in console, audit fails on the warning) |

## 8. Motion code (tested)

Everything below was verified in September 2026 in Chromium with gsap 3.15, lenis 1.3 and animejs 4.5, using the audit in §9 on four passes, on a reference page and on a realistic real estate page built with this skill (desktop, mobile with 4x CPU throttle, reduced motion, JavaScript off): CLS 0, LCP reported at first paint, no content left hidden, no console errors, keyboard focus always visible. The Next.js components pass `tsc --strict`. Copy these blocks into project files; do not retype them from memory. Delete init calls and CSS blocks the storyboard does not use.

### 8.1 Wiring
| File to create | From | Use when |
|---|---|---|
| inline in `<head>` | §8.3 boot | Always, first script in `<head>` |
| `css/motion.css` | §8.4 | Always, after the design tokens |
| `js/motion-gsap.js` | §8.5 | Tier 2 with pins or scrub choreography, all Tier 3 |
| `js/motion-anime.js` | §8.6 | Lighter Tier 2, SVG or text heavy |
| `components/motion/MotionProvider.tsx` + `Reveal.tsx` | §8.7, §8.8 | Next.js App Router |

HTML project, end of `<body>` (modules are deferred, never in the critical path; pin exact versions in production):
```html
<script type="importmap">
{ "imports": {
  "gsap": "https://cdn.jsdelivr.net/npm/gsap@3.15/index.js",
  "gsap/ScrollTrigger": "https://cdn.jsdelivr.net/npm/gsap@3.15/ScrollTrigger.js",
  "gsap/SplitText": "https://cdn.jsdelivr.net/npm/gsap@3.15/SplitText.js",
  "lenis": "https://cdn.jsdelivr.net/npm/lenis@1.3/dist/lenis.mjs",
  "animejs": "https://cdn.jsdelivr.net/npm/animejs@4.5/dist/modules/index.js"
} }
</script>
<script type="module" src="js/motion-gsap.js"></script>
```
With Lenis also add `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.3/dist/lenis.css">` in `<head>`. For anime.js load `js/motion-anime.js` instead of the GSAP file.

### 8.2 Markup contract

Every effect is opt in by attribute. No attribute, no motion.

| Attribute / class | Effect | Recipe |
|---|---|---|
| `data-hero-line` + `style="--i:N"` | CSS hero entrance, block children of the hero heading | R5 |
| `data-hero-fade` + `style="--i:N"` | CSS hero fade for subline and CTA | R5 |
| `data-exit` | Wrapper that fades and drifts up as its section leaves | R9 |
| `data-reveal` | One element fades and rises once | R3 |
| `data-reveal data-reveal-stagger` | Its direct children reveal in sequence | R3 |
| `data-reveal-native` | Pure CSS scroll driven reveal (scrubbed, no JS) | R2 |
| `data-split` / `data-split="words"` / `data-split="chars"` | Line masked heading reveal | R6 |
| `data-clip="up|down|left|right"` | Image or video clip reveal (wrapper with media inside) | R7 |
| `data-parallax="0.12"` | Parallax media inside an overflow hidden frame | R8 |
| `.story > .story__pin > ol.story__steps > li.story__step` + `.story__progress > span` (nothing else directly inside `.story`) | Pinned step story (desktop) | R10 |
| `.h-scroll > .h-scroll__pin > .h-scroll__track > *` (nothing else inside `.h-scroll`, 5+ items) | Horizontal pinned section (desktop), swipe row (mobile) | R11 |
| `.stack > .stack__card[style="--i:N"] > .stack__shade` | Stacking cards | R12 |
| `data-count-to="127" data-count-decimals="0"` | Counter; the final number is also the element text | R13 |
| `data-theme="dark"` / `"light"` on sections | Section paints its own theme; engine mirrors it to `html[data-page-theme]` for fixed UI | R14 |
| `.marquee#id > .marquee__track > ul + ul[aria-hidden]` + `button[data-marquee-toggle][aria-controls=id]` | Marquee with pause control | R15 |
| `data-magnetic="10"` | Magnetic pull in px (fine pointers only) | R16 |
| `svg[data-draw]` | SVG line drawing (anime.js engine) | R17 |
| `data-motion-stage` | Set by R10 on step containers; tells the audit that swapped content is intentional | R10 |
| `data-lenis-prevent` | On any nested scroller (modal, drawer, map, long list) | R3 |

Never put two effects that set `transform` on the same element (for example `data-hero-line` and `data-exit`, or `data-reveal` and `data-magnetic`). Nest a wrapper instead. CSS animations with fill mode override inline transforms from JS, and two JS tweens on one transform fight.

### 8.3 Boot (R1)
```html
<!-- R1. Motion boot. Paste as the FIRST script in <head>, before any stylesheet that uses .motion.
     Adds html.motion only when the user allows motion. If no engine calls window.__motionReady()
     within 2.5 s (slow network, blocked or crashed bundle), the class is removed and everything shows.
     Next.js: render this inside <head> in app/layout.tsx via <script dangerouslySetInnerHTML={{ __html: "..." }} />
     and add suppressHydrationWarning to <html>. -->
<script>
  (function () {
    var d = document.documentElement;
    if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    d.classList.add('motion');
    var t = setTimeout(function () { d.classList.remove('motion'); }, 2500);
    window.__motionReady = function () { clearTimeout(t); d.classList.add('motion-ready'); return d.classList.contains('motion'); };
  })();
</script>
```
### 8.4 motion.css (R0, R2, R5, R10 to R15, R19)
```css
/* motion.css | website-excellence motion layer
   Load after the design tokens. Every value below is a token; tune tokens, not rules.
   Hidden states only apply under html.motion (set by boot.html), so content is
   always visible without JS, with reduced motion, or if the engine fails. */

/* R0. Motion tokens */
:root {
  --dur-micro: 160ms;
  --dur-component: 280ms;
  --dur-reveal: 800ms;
  --dur-hero: 1000ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);      /* expo.out feel */
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);
  --dist-reveal: 28px;
  --stagger-item: 70ms;
  --stagger-line: 100ms;
  --parallax: 0.12;                                 /* default travel, 0.08 to 0.15 */
  --marquee-dur: 32s;
}
@media (max-width: 767px) {
  :root { --dist-reveal: 20px; }
}

/* R1. Boot hidden states (JS engines reveal these) */
.motion [data-reveal]:not([data-reveal-stagger]),
.motion [data-reveal-stagger] > * { opacity: 0; }
.motion [data-split] { visibility: hidden; }
.motion [data-count-to] { font-variant-numeric: tabular-nums; }

/* R2. Native scroll driven reveals (no JS). Fallback = fully visible. */
@keyframes mx-reveal-up {
  from { opacity: 0; transform: translateY(var(--dist-reveal)); }
  to   { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    [data-reveal-native] {
      animation: mx-reveal-up linear both;
      animation-timing-function: var(--ease-out);
      animation-timeline: view();
      animation-range: entry 0% entry 70%;
    }
  }
}

/* R2b. Reading progress bar. Unsupported browsers simply show no bar. */
.mx-progress {
  position: fixed; inset: 0 0 auto 0; height: 2px; z-index: 100;
  background: var(--color-accent, currentColor);
  transform-origin: 0 50%; transform: scaleX(0); pointer-events: none;
}
@keyframes mx-grow { to { transform: scaleX(1); } }
@supports (animation-timeline: scroll()) {
  .mx-progress { animation: mx-grow linear both; animation-timeline: scroll(root); }
}

/* R5. Hero entrance, CSS driven so it starts at first paint (protects LCP).
   Put data-hero-line on block children of the hero heading wrapper.
   Never put data-exit on the same element (CSS animation fill overrides inline transforms). */
/* opacity starts at 0.01, never 0: in Chromium, text first painted at opacity 0 is never
   reported as FCP or LCP, even after it fades in (verified). 0.01 is invisible to the eye. */
@keyframes mx-hero-rise {
  from { transform: translateY(0.6em); opacity: 0.01; }
  to   { transform: none; opacity: 1; }
}
@keyframes mx-hero-fade { from { opacity: 0.01; } to { opacity: 1; } }
@media (prefers-reduced-motion: no-preference) {
  [data-hero-line] {
    animation: mx-hero-rise var(--dur-hero) var(--ease-out) both;
    animation-delay: calc(var(--i, 0) * var(--stagger-line));
  }
  [data-hero-fade] {
    animation: mx-hero-fade var(--dur-reveal) var(--ease-out) both;
    animation-delay: calc(var(--i, 0) * var(--stagger-item) + 200ms);
  }
}

/* R10. Pinned story: CSS sticky pin (zero layout shift, no pin spacer).
   JS sets the section height and adds .is-pinned on desktop only.
   Sticky breaks if ANY ancestor has overflow: hidden/auto; use overflow: clip instead. */
.story__steps { display: grid; gap: 2rem; list-style: none; margin: 0; padding: 0; }
.story.is-pinned .story__pin { position: sticky; top: 0; height: 100svh; display: grid; place-content: center; }
.story.is-pinned .story__steps { gap: 0; }
.story.is-pinned .story__step { grid-area: 1 / 1; }
.story__progress { display: none; }
.story.is-pinned .story__progress { display: block; height: 2px; background: color-mix(in oklch, currentColor 15%, transparent); margin-top: 3rem; }
.story__progress span { display: block; height: 100%; background: var(--color-accent, currentColor); transform-origin: 0 50%; transform: scaleX(0); }

/* R11. Horizontal section: native swipe row by default, sticky pinned row on desktop. */
.h-scroll__track {
  display: flex; gap: 1.5rem; overflow-x: auto;
  scroll-snap-type: x mandatory; overscroll-behavior-x: contain;
  scrollbar-width: none;
}
.h-scroll__track > * { flex: 0 0 min(80vw, 520px); scroll-snap-align: start; }
.h-scroll.is-pinned .h-scroll__pin { position: sticky; top: 0; height: 100svh; overflow: clip; display: grid; align-content: center; }
.h-scroll.is-pinned .h-scroll__track { overflow: visible; scroll-snap-type: none; width: max-content; }

/* R12. Stacking cards: native sticky, JS only adds the depth. */
.stack { display: grid; gap: 4svh; }
.stack__card { position: sticky; top: calc(10svh + var(--i, 0) * 1.25rem); transform-origin: 50% 0; }
.stack__shade { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; border-radius: inherit; }

/* R14. Section themes. Every themed section paints its OWN background and text color, so contrast is
   correct at every scroll position, with JS off and for audits. Do not recolor <body> for this: a
   body switch at mid viewport shows light text on a light background for half a screen (found in testing).
   Define the tokens in your theme CSS, e.g.
   [data-theme="dark"]  { background: var(--ink-950); color: var(--paper); }
   [data-theme="light"] { background: var(--paper);   color: var(--ink-950); }
   Fixed UI can follow html[data-page-theme] (set by the engine). Soft seam between themes:
   [data-theme-seam]::before { content:""; display:block; height:12svh; margin-top:-12svh;
     background: linear-gradient(to bottom, transparent, var(--ink-950)); } */
.story.is-pinned, .h-scroll.is-pinned { padding-block: 0; }

/* R15. Marquee. Duplicate the list once with aria-hidden="true". */
.marquee { overflow: hidden; }
.marquee__track { display: flex; width: max-content; animation: mx-marquee var(--marquee-dur) linear infinite; }
.marquee__track > * { display: flex; gap: 3rem; padding-inline-end: 3rem; margin: 0; list-style: none; }
.marquee:hover .marquee__track,
.marquee.is-paused .marquee__track,
.marquee.is-offscreen .marquee__track { animation-play-state: paused; }
@keyframes mx-marquee { to { transform: translateX(-50%); } }

/* Hover only where hover exists. */
@media (hover: hover) and (pointer: fine) {
  [data-magnetic] { will-change: transform; }
}

/* R19. Reduced motion: no movement anywhere, content fully present. */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; }
  .marquee__track { animation: none; flex-wrap: wrap; width: auto; }
  .marquee__track > [aria-hidden="true"] { display: none; }
}
```
### 8.5 motion-gsap.js (GSAP + ScrollTrigger + SplitText + Lenis)
```js
// motion-gsap.js | website-excellence GSAP + ScrollTrigger (+ SplitText, optional Lenis) layer.
// Tested with gsap 3.15, lenis 1.3. Vanilla ESM. For Next.js see next/ folder.
// Markup contract: see §8.2 of SKILL.md. Every effect is opt in via data attributes,
// so unused recipes cost nothing but bytes. Delete init calls you do not use.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
// Bundlers: import 'lenis/dist/lenis.css';  Plain HTML: <link rel="stylesheet" href=".../lenis.css">

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

// Project level switches (set from the Motion Storyboard).
const CONFIG = {
  smoothScroll: true,   // Lenis. false for Tier 1 and long reading pages.
  lenis: { lerp: 0.1, anchors: true }, // anchors: pass { offset: -80 } for a sticky header
};

const root = document.documentElement;
const motionOK = typeof window.__motionReady === 'function' ? window.__motionReady() : false;

// R0. Read motion tokens from CSS so JS and CSS never drift.
const css = getComputedStyle(root);
const sec = (name, fallback) => {
  const v = css.getPropertyValue(name).trim();
  if (!v) return fallback;
  return v.endsWith('ms') ? parseFloat(v) / 1000 : parseFloat(v);
};
const T = {
  reveal: sec('--dur-reveal', 0.8),
  component: sec('--dur-component', 0.28),
  dist: () => parseFloat(getComputedStyle(root).getPropertyValue('--dist-reveal')) || 24,
  staggerItem: sec('--stagger-item', 0.07),
  staggerLine: sec('--stagger-line', 0.1),
  parallax: parseFloat(css.getPropertyValue('--parallax')) || 0.12,
  easeIn: 'expo.out',
};

export let lenis = null;

function startLenis() {
  lenis = new Lenis(CONFIG.lenis);
  const offScroll = lenis.on('scroll', ScrollTrigger.update);
  const raf = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  // Nested scrollers (modals, maps, drawers) need data-lenis-prevent in markup.
  return () => { offScroll(); gsap.ticker.remove(raf); lenis.destroy(); lenis = null; };
}

// R3. Reveals: [data-reveal] (single) and [data-reveal][data-reveal-stagger] (children).
function initReveals() {
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    const staggered = el.hasAttribute('data-reveal-stagger');
    const targets = staggered ? Array.from(el.children) : el;
    gsap.fromTo(targets,
      { autoAlpha: 0, y: T.dist() },
      {
        autoAlpha: 1, y: 0, duration: T.reveal, ease: T.easeIn,
        stagger: staggered ? Math.min(T.staggerItem, 1 / targets.length) : 0, // group total never above 1 s
        clearProps: 'transform',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
  });
}

// R6. SplitText line masked headings: [data-split]. Not for the hero (use CSS R5).
function initSplitHeadings() {
  const splits = gsap.utils.toArray('[data-split]').map((el) => {
    const type = el.dataset.split || 'lines'; // lines | words | chars (chars: 3 words max)
    return SplitText.create(el, {
      type: type === 'lines' ? 'lines' : `lines,${type}`,
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: 'visible' });
        if (el.dataset.revealed) return;
        const parts = self[type];
        return gsap.from(parts, {
          yPercent: 110, duration: T.reveal, ease: T.easeIn,
          stagger: type === 'chars' ? 0.02 : type === 'words' ? 0.04 : T.staggerLine,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true, onEnter: () => { el.dataset.revealed = '1'; } },
        });
      },
    });
  });
  return () => splits.forEach((s) => s.revert());
}

// R7. Image clip reveal: [data-clip] wrapper with one img/video inside. data-clip="up|down|left|right".
function initClipReveals() {
  const from = { up: 'inset(100% 0% 0% 0%)', down: 'inset(0% 0% 100% 0%)', left: 'inset(0% 0% 0% 100%)', right: 'inset(0% 100% 0% 0%)' };
  gsap.utils.toArray('[data-clip]').forEach((wrap) => {
    const media = wrap.querySelector('img, video');
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: 'top 80%', once: true } });
    tl.fromTo(wrap, { clipPath: from[wrap.dataset.clip] || from.up }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.inOut' });
    if (media) tl.fromTo(media, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: 'expo.out', clearProps: 'transform' }, 0);
  });
}

// R8. Parallax: [data-parallax] frame (overflow hidden, fixed aspect-ratio) with img/video inside.
function initParallax(strength = 1) {
  gsap.utils.toArray('[data-parallax]').forEach((frame) => {
    const media = frame.querySelector('img, video');
    if (!media) return;
    const amt = (parseFloat(frame.dataset.parallax) || T.parallax) * strength;
    gsap.fromTo(media,
      { yPercent: -amt * 50, scale: 1 + amt * 1.05 },
      { yPercent: amt * 50, scale: 1 + amt * 1.05, ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

// R9. Exit fade: [data-exit] wrapper fades and drifts as its section leaves. Scrubbed, reversible.
function initExitFades() {
  gsap.utils.toArray('[data-exit]').forEach((el) => {
    const scope = el.closest('section') || el.parentElement;
    gsap.to(el, {
      autoAlpha: 0, yPercent: -12, ease: 'none',
      scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom top', scrub: true },
    });
  });
}

// R10. Pinned story: .story > .story__pin > ol.story__steps > li.story__step (+ .story__progress > span)
// Uses a CSS sticky pin, not ScrollTrigger pin: zero layout shift (ScrollTrigger pin: true measured
// CLS 0.26 to 1.0 per pin in Chromium, with or without Lenis), no pin spacer, no reparenting. Steps fade with opacity only,
// so screen readers still read every step.
function initPinnedStory() {
  const cleanups = [];
  gsap.utils.toArray('.story').forEach((story) => {
    const steps = gsap.utils.toArray('.story__step', story);
    if (steps.length < 2) return;
    if (story.children.length !== 1) console.warn('[motion] .story must contain only .story__pin (put headings inside the pin or before the section)');
    const stage = steps[0].parentElement;
    stage.setAttribute('data-motion-stage', '');
    story.classList.add('is-pinned');
    story.style.height = `${100 + (steps.length - 1) * 90}svh`; // 90svh of scroll per step
    const bar = story.querySelector('.story__progress span');
    gsap.set(steps.slice(1), { opacity: 0, yPercent: 12 });
    const tl = gsap.timeline({
      defaults: { ease: 'none', duration: 1 },
      scrollTrigger: { trigger: story, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
    });
    // Staggered swap: the outgoing step is half gone before the next starts. A full crossfade overlaps
    // two headings at 50% (reads as a glitch); a fully sequential swap leaves an empty frame (tested).
    steps.slice(1).forEach((step, i) => {
      tl.to(steps[i], { opacity: 0, yPercent: -12, duration: 0.5 }, '+=0.6')
        .to(step, { opacity: 1, yPercent: 0, duration: 0.5 }, '-=0.25');
    });
    tl.to({}, { duration: 0.6 }); // hold on the last step
    if (bar) tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: tl.duration() }, 0);
    cleanups.push(() => { story.classList.remove('is-pinned'); story.style.height = ''; stage.removeAttribute('data-motion-stage'); });
  });
  return () => cleanups.forEach((fn) => fn());
}

// R11. Horizontal section: .h-scroll > .h-scroll__pin > .h-scroll__track > items.
// Desktop: sticky pin + scrubbed x. Mobile: native swipe row with scroll-snap (CSS only).
function initHorizontal() {
  const cleanups = [];
  gsap.utils.toArray('.h-scroll').forEach((section) => {
    const track = section.querySelector('.h-scroll__track');
    const pin = section.querySelector('.h-scroll__pin');
    if (!track || !pin) return;
    if (section.children.length !== 1) console.warn('[motion] .h-scroll must contain only .h-scroll__pin (put the heading in the element before it)');
    const dist = () => Math.max(0, track.scrollWidth - pin.clientWidth);
    // Not enough content to travel: a pin that moves a few pixels is worse than a static row.
    if (dist() < window.innerWidth * 0.5) return;
    section.classList.add('is-pinned');
    const setHeight = () => { section.style.height = `${window.innerHeight + dist()}px`; };
    setHeight();
    ScrollTrigger.addEventListener('refreshInit', setHeight);
    const tween = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true },
    });
    // Keyboard: focusing an item scrolls the page to the matching progress.
    const onFocus = (e) => {
      const item = e.target.closest('.h-scroll__track > *');
      const st = tween.scrollTrigger;
      if (!item || !st || !dist()) return;
      pin.scrollLeft = 0; // the browser may scroll the clipped box to show focus; undo it
      const p = Math.min(1, item.offsetLeft / dist());
      const y = st.start + (st.end - st.start) * p;
      lenis ? lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y);
    };
    section.addEventListener('focusin', onFocus);
    cleanups.push(() => {
      section.removeEventListener('focusin', onFocus);
      ScrollTrigger.removeEventListener('refreshInit', setHeight);
      section.classList.remove('is-pinned'); section.style.height = '';
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

// R12. Stacking cards depth: .stack > .stack__card (each with .stack__shade child).
function initStack() {
  const cards = gsap.utils.toArray('.stack__card');
  cards.forEach((card, i) => {
    const next = cards[i + 1];
    if (!next) return;
    const st = { trigger: next, start: 'top bottom', end: 'top 20%', scrub: true };
    gsap.to(card, { scale: 0.94, ease: 'none', scrollTrigger: st });
    const shade = card.querySelector('.stack__shade');
    if (shade) gsap.to(shade, { opacity: 0.35, ease: 'none', scrollTrigger: { ...st } });
  });
}

// R13. Counters: <span data-count-to="127" data-count-decimals="0">127</span>. REAL numbers only.
function initCounters(locale = document.documentElement.lang || 'pl-PL') {
  gsap.utils.toArray('[data-count-to]').forEach((el) => {
    const to = parseFloat(el.dataset.countTo);
    const decimals = parseInt(el.dataset.countDecimals || '0', 10);
    const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    el.style.display = 'inline-block';
    el.style.minWidth = `${fmt.format(to).length}ch`;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: to, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onStart: () => { el.textContent = fmt.format(0); },
      onUpdate: () => { el.textContent = fmt.format(obj.v); },
      onComplete: () => { el.textContent = fmt.format(to); },
    });
  });
}

// R14. Theme shift: sections own their colors in CSS (data-theme). JS only mirrors the active theme
// on <html data-page-theme> so fixed UI (header, progress bar) can adapt. No JS color changes content.
function initThemeShift() {
  gsap.utils.toArray('[data-theme]').forEach((s) => ScrollTrigger.create({
    trigger: s, start: 'top 50%', end: 'bottom 50%',
    onToggle: (self) => { if (self.isActive) root.dataset.pageTheme = s.dataset.theme; },
  }));
}

// R15. Marquee control: pause offscreen + pause button [data-marquee-toggle] (WCAG 2.2.2).
function initMarquees() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting)));
  const ac = new AbortController();
  document.querySelectorAll('.marquee').forEach((m) => io.observe(m));
  document.querySelectorAll('[data-marquee-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const m = document.getElementById(btn.getAttribute('aria-controls'));
      const paused = m.classList.toggle('is-paused');
      btn.setAttribute('aria-pressed', String(paused));
    }, { signal: ac.signal });
  });
  return () => { io.disconnect(); ac.abort(); };
}

// R16. Magnetic: [data-magnetic]. Fine pointers only, max pull 10 px.
function initMagnetic() {
  const ac = new AbortController();
  gsap.utils.toArray('[data-magnetic]').forEach((el) => {
    const pull = parseFloat(el.dataset.magnetic) || 10;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    let r = null;
    el.addEventListener('pointerenter', () => { r = el.getBoundingClientRect(); }, { signal: ac.signal });
    el.addEventListener('pointermove', (e) => {
      if (!r) return;
      xTo(((e.clientX - r.left) / r.width - 0.5) * 2 * pull);
      yTo(((e.clientY - r.top) / r.height - 0.5) * 2 * pull);
    }, { signal: ac.signal });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); r = null; }, { signal: ac.signal });
  });
  return () => ac.abort();
}

// R19. Focus safety: anything focused while still hidden is revealed at once.
function initFocusReveal() {
  const onFocus = (e) => {
    const hidden = e.target.closest?.('[data-reveal], [data-reveal-stagger] > *, [data-split]');
    if (hidden && parseFloat(getComputedStyle(hidden).opacity) < 0.5) {
      gsap.to(hidden, { autoAlpha: 1, y: 0, duration: 0.15, overwrite: true });
    }
  };
  document.addEventListener('focusin', onFocus);
  return () => document.removeEventListener('focusin', onFocus);
}

// Boot
const mm = gsap.matchMedia();
mm.add(
  {
    desktop: '(min-width: 768px)',
    mobile: '(max-width: 767px)',
    fine: '(hover: hover) and (pointer: fine)',
    reduce: '(prefers-reduced-motion: reduce)',
  },
  (ctx) => {
    const { desktop, fine, reduce } = ctx.conditions;
    const cleanups = [];
    cleanups.push(initMarquees()); // pause control is needed in every mode
    if (reduce || !motionOK) {
      root.classList.remove('motion');
      initThemeShift(); // color change only, no movement
      return () => cleanups.forEach((fn) => fn && fn());
    }
    if (CONFIG.smoothScroll) cleanups.push(startLenis());
    initReveals();
    cleanups.push(initSplitHeadings());
    initClipReveals();
    initParallax(desktop ? 1 : 0.5);
    initExitFades();
    initStack();
    initCounters();
    initThemeShift();
    if (desktop) {
      cleanups.push(initPinnedStory());
      cleanups.push(initHorizontal());
    }
    if (fine) cleanups.push(initMagnetic());
    cleanups.push(initFocusReveal());
    return () => cleanups.forEach((fn) => fn && fn());
  },
);

// R4. Re-measure after anything that can move layout.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
```
### 8.6 motion-anime.js (anime.js v4, no pinning)
```js
// motion-anime.js | website-excellence anime.js v4 layer (lighter alternative, no pinning).
// Tested with animejs 4.5. Same markup contract as motion-gsap.js for the effects it supports:
// data-reveal, data-reveal-stagger, data-split, data-clip, data-parallax, data-exit,
// data-count-to, data-draw, .marquee. Pinned story, horizontal pin and stacking depth are GSAP only;
// with this engine they stay in their CSS fallback layout (list, swipe row, sticky stack).

import { animate, onScroll, stagger, splitText, svg, utils } from 'animejs';

const root = document.documentElement;
const motionOK = typeof window.__motionReady === 'function' ? window.__motionReady() : false;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 768px)').matches;

const css = getComputedStyle(root);
const ms = (name, fallback) => {
  const v = css.getPropertyValue(name).trim();
  return v ? (v.endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000) : fallback;
};
const T = {
  reveal: ms('--dur-reveal', 800),
  dist: parseFloat(css.getPropertyValue('--dist-reveal')) || 24,
  staggerItem: ms('--stagger-item', 70),
  staggerLine: ms('--stagger-line', 100),
  parallax: parseFloat(css.getPropertyValue('--parallax')) || 0.12,
  ease: 'outExpo',
};

// One shot trigger when the element top crosses 85% of the viewport.
const once = (target) => onScroll({ target, enter: 'end-=15% start', repeat: false });
const scrub = (target, extra = {}) => onScroll({ target, enter: 'end start', leave: 'start end', sync: true, ...extra });

const instances = [];

function initReveals() {
  utils.$('[data-reveal]').forEach((el) => {
    const staggered = el.hasAttribute('data-reveal-stagger');
    const targets = staggered ? Array.from(el.children) : el;
    const n = staggered ? targets.length : 1;
    instances.push(animate(targets, {
      opacity: { from: 0, to: 1 }, y: { from: T.dist, to: 0 }, // explicit to: CSS boot state is opacity 0
      duration: T.reveal, ease: T.ease,
      delay: staggered ? stagger(Math.min(T.staggerItem, 1000 / n)) : 0,
      autoplay: once(el),
    }));
  });
}

function initSplitHeadings() {
  utils.$('[data-split]').forEach((el) => {
    const type = el.dataset.split || 'lines';
    const params = { lines: { wrap: 'clip' } };
    if (type !== 'lines') params[type] = true;
    const split = splitText(el, params); // accessible by default; re-splits on resize and font load
    split.addEffect((self) => {
      el.style.visibility = 'visible';
      if (el.dataset.revealed) return;
      const parts = self[type];
      return animate(parts, {
        y: { from: '110%' }, duration: T.reveal, ease: T.ease,
        delay: stagger(type === 'chars' ? 20 : type === 'words' ? 40 : T.staggerLine),
        autoplay: once(el),
        onComplete: () => { el.dataset.revealed = '1'; },
      });
    });
    instances.push(split);
  });
}

function initClipReveals() {
  const from = { up: 'inset(100% 0% 0% 0%)', down: 'inset(0% 0% 100% 0%)', left: 'inset(0% 0% 0% 100%)', right: 'inset(0% 100% 0% 0%)' };
  utils.$('[data-clip]').forEach((wrap) => {
    instances.push(animate(wrap, {
      clipPath: { from: from[wrap.dataset.clip] || from.up, to: 'inset(0% 0% 0% 0%)' },
      duration: 1100, ease: 'inOutExpo', autoplay: once(wrap),
    }));
    const media = wrap.querySelector('img, video');
    if (media) instances.push(animate(media, { scale: { from: 1.12 }, duration: 1400, ease: T.ease, autoplay: once(wrap) }));
  });
}

function initParallax(strength) {
  utils.$('[data-parallax]').forEach((frame) => {
    const media = frame.querySelector('img, video');
    if (!media) return;
    const amt = (parseFloat(frame.dataset.parallax) || T.parallax) * strength;
    utils.set(media, { scale: 1 + amt * 1.05 });
    instances.push(animate(media, {
      translateY: { from: `${-amt * 50}%`, to: `${amt * 50}%` },
      ease: 'linear', autoplay: scrub(frame),
    }));
  });
}

function initExitFades() {
  utils.$('[data-exit]').forEach((el) => {
    const scope = el.closest('section') || el.parentElement;
    instances.push(animate(el, {
      opacity: { to: 0 }, translateY: { to: '-12%' }, ease: 'linear',
      autoplay: onScroll({ target: scope, enter: 'start start', leave: 'start end', sync: true }),
    }));
  });
}

function initCounters(locale = root.lang || 'pl-PL') {
  utils.$('[data-count-to]').forEach((el) => {
    const to = parseFloat(el.dataset.countTo);
    const decimals = parseInt(el.dataset.countDecimals || '0', 10);
    const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    el.style.display = 'inline-block';
    el.style.minWidth = `${fmt.format(to).length}ch`;
    const obj = { v: 0 };
    instances.push(animate(obj, {
      v: to, duration: 1600, ease: 'outQuad', autoplay: once(el),
      onBegin: () => { el.textContent = fmt.format(0); },
      onUpdate: () => { el.textContent = fmt.format(obj.v); },
      onComplete: () => { el.textContent = fmt.format(to); },
    }));
  });
}

// SVG line drawing: <svg data-draw> with <path>/<line>/<polyline> children, fill="none".
function initDraw() {
  utils.$('[data-draw]').forEach((el) => {
    const drawables = svg.createDrawable(el.querySelectorAll('path, line, polyline, circle, rect'));
    instances.push(animate(drawables, { draw: ['0 0', '0 1'], duration: 1600, ease: 'inOutQuad', delay: stagger(120), autoplay: once(el) }));
  });
}

function initMarquees() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting)));
  document.querySelectorAll('.marquee').forEach((m) => io.observe(m));
  document.querySelectorAll('[data-marquee-toggle]').forEach((btn) => btn.addEventListener('click', () => {
    const m = document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-pressed', String(m.classList.toggle('is-paused')));
  }));
}

function initFocusReveal() {
  document.addEventListener('focusin', (e) => {
    const hidden = e.target.closest?.('[data-reveal], [data-reveal-stagger] > *, [data-split]');
    if (hidden && parseFloat(getComputedStyle(hidden).opacity) < 0.5) utils.set(hidden, { opacity: 1, translateY: 0 });
  });
}

// Boot
initMarquees();
if (reduce.matches || !motionOK) {
  root.classList.remove('motion');
} else {
  initReveals();
  initSplitHeadings();
  initClipReveals();
  initParallax(desktop ? 1 : 0.5);
  initExitFades();
  initCounters();
  initDraw();
  initFocusReveal();
}

// If the user switches reduced motion on mid session: stop everything, show everything.
reduce.addEventListener('change', (e) => {
  if (!e.matches) return;
  instances.forEach((i) => i.revert?.());
  root.classList.remove('motion');
});

export { instances };
```
### 8.7 Next.js MotionProvider.tsx
```tsx
'use client';
// MotionProvider.tsx | Next.js App Router. Wrap {children} in app/layout.tsx.
// Lenis driven by the GSAP ticker, synced to ScrollTrigger, off under reduced motion,
// re-measures after fonts load and after every route change.
// Requires: npm i gsap @gsap/react lenis   and   import 'lenis/dist/lenis.css' in layout.tsx
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, type LenisRef } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

declare global {
  interface Window { __motionReady?: () => boolean }
}

function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const ok = window.__motionReady ? window.__motionReady() : false;
    const update = () => {
      setAllowed(ok && !mq.matches);
      if (mq.matches) document.documentElement.classList.remove('motion');
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return allowed;
}

export function MotionProvider({ children, smooth = true }: { children: ReactNode; smooth?: boolean }) {
  const allowed = useMotionAllowed();
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!allowed || !smooth) return;
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    const off = lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => { off(); gsap.ticker.remove(raf); };
  }, [allowed, smooth]);

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  useEffect(() => {
    // New route: start at top and re-measure once the new DOM has painted.
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  if (!allowed || !smooth) return <>{children}</>;
  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.1, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
```
### 8.8 Next.js Reveal.tsx
```tsx
'use client';
// Reveal.tsx | Section level reveals for Next.js. Same markup contract as motion-gsap.js
// (data-reveal, data-reveal-stagger, data-split, data-clip, data-parallax) scoped to this subtree.
// useGSAP reverts everything on unmount, so route changes never leak ScrollTriggers.
import { useRef, type ReactNode, type ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type Props = { as?: ElementType; className?: string; children: ReactNode } & Record<string, unknown>;

export function Reveal({ as: Tag = 'section', className, children, ...rest }: Props) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!document.documentElement.classList.contains('motion')) return;
    const q = gsap.utils.selector(scope);
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 768px)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
      const { desktop, reduce } = ctx.conditions as { desktop: boolean; reduce: boolean };
      if (reduce) return;

      q('[data-reveal]').forEach((el: Element) => {
        const staggered = el.hasAttribute('data-reveal-stagger');
        const targets = staggered ? Array.from(el.children) : el;
        const n = staggered ? (targets as Element[]).length : 1;
        gsap.fromTo(targets, { autoAlpha: 0, y: 28 }, {
          autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out', clearProps: 'transform',
          stagger: staggered ? Math.min(0.07, 1 / n) : 0,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

      q('[data-split]').forEach((el: HTMLElement) => {
        SplitText.create(el, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit(self) {
            gsap.set(el, { visibility: 'visible' });
            if (el.dataset.revealed) return;
            return gsap.from(self.lines, {
              yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.1,
              scrollTrigger: { trigger: el, start: 'top 85%', once: true, onEnter: () => { el.dataset.revealed = '1'; } },
            });
          },
        });
      });

      q('[data-parallax]').forEach((frame: HTMLElement) => {
        const media = frame.querySelector('img, video');
        if (!media) return;
        const amt = (parseFloat(frame.dataset.parallax ?? '') || 0.12) * (desktop ? 1 : 0.5);
        gsap.fromTo(media, { yPercent: -amt * 50, scale: 1 + amt * 1.05 }, {
          yPercent: amt * 50, scale: 1 + amt * 1.05, ease: 'none',
          scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });
  }, { scope });

  return <Tag ref={scope} className={className} {...rest}>{children}</Tag>;
}
```
### 8.9 Recipe notes

**R0 Tokens.** `motion.css` opens with the motion token block. JS reads them with `getComputedStyle`, so a change in CSS changes both. Tune per archetype using §7.5. Add tokens, never literals.

**R1 Boot.** Content is hidden only under `html.motion`. The class is added only when reduced motion is off, and removed after 2.5 s unless an engine calls `window.__motionReady()`. The engine checks the return value: `false` means the failsafe already revealed everything, so it does not animate (avoids content disappearing and reappearing). Verified: with the engine missing, everything is visible at 2.5 s.

**R2 Native scroll reveal and progress bar (Tier 1, zero JS).** `[data-reveal-native]` uses `animation-timeline: view()` inside `@supports` and `prefers-reduced-motion: no-preference`. Browsers without support (Firefox stable as of mid 2026) show the final state. It is scrubbed, so it reverses when scrolling up; use it for gentle effects, not for one shot reveals. `.mx-progress` is a reading progress bar with `scroll(root)`.

**R3 Reveals.** `fromTo` with explicit values, because the CSS boot state is already opacity 0 and a plain `from` would animate from 0 to 0. Trigger at `top 85%`, `once: true`. Stagger is capped so a group never takes longer than 1 s. Do not use `data-reveal` inside the first viewport; the hero has its own CSS entrance.

**R4 Refresh.** `ScrollTrigger.refresh()` after `document.fonts.ready` and `load`. In Next.js also after each route change (MotionProvider does it). Any code that changes layout later (accordions above a pin, lazy content) must call `ScrollTrigger.refresh()`.

**R5 Hero entrance (CSS).** Starts at first paint, no JS dependency. Keyframes start at opacity 0.01, not 0: measured in Chromium, text first painted at opacity 0 was never reported as FCP or LCP (the metric simply never fired), while 0.01 or transform only animations report LCP at first paint. The first line has no delay. Total under 1.2 s. For an image hero, animate `scale` 1.06 to 1 on the image only, never its opacity.

**R6 Split headings.** SplitText with `mask: "lines"`, `autoSplit: true` and the animation returned from `onSplit`, so it re-splits correctly on resize and after fonts load. `aria` stays `auto` (screen readers get the original text). `data-revealed` stops a replay after a resize re-split. The element is `visibility: hidden` under `.motion` until split to avoid a flash of unsplit text. Chars only for three words or fewer.

**R7 Clip reveal.** `clip-path: inset()` on the wrapper plus scale 1.12 to 1 on the media, same start. `expo.inOut` on the clip reads as a deliberate wipe. `clip-path` paints, so keep it to a few images per viewport.

**R8 Parallax.** The frame needs `overflow: hidden` and a fixed `aspect-ratio`. Media is scaled `1 + amt * 1.05` and travels `±amt * 50` percent, which mathematically never exposes an edge. Strength halves on mobile. Never parallax text.

**R9 Exit fade.** Scrubbed from section top at viewport top to section bottom at viewport top, so it is fully reversible. Put it on a wrapper around the hero content, never on the elements with `data-hero-line`.

**R10 Pinned story (sticky, not ScrollTrigger pin).** Measured in Chromium: ScrollTrigger `pin: true` produced a layout shift of 0.26 for a single pin without Lenis, 0.36 with Lenis, and close to 1.0 per pin on a fuller page. That alone fails the CLS budget. The recipe uses `position: sticky` for the pin and ScrollTrigger only to scrub the timeline: CLS 0, no pin spacer, no reparenting, works with Lenis and native scroll. JS sets the section height (100svh plus 90svh per extra step) and adds `.is-pinned` on desktop only; mobile shows the steps as a normal list. Steps fade with opacity only (not visibility) so screen readers read every step. Keep links and forms out of the steps. Steps swap staggered (incoming starts when the outgoing is half gone): a full crossfade overlaps two headings, a fully sequential swap leaves an empty frame, both found in testing. `.story` must contain only `.story__pin`; the engine warns in the console otherwise. Sticky fails silently if any ancestor has `overflow: hidden` or `auto`; use `overflow: clip` on ancestors instead.

**R11 Horizontal section.** Same sticky technique. Section height is set to viewport height plus the track overflow, recalculated on every `refreshInit`. Focusing an item scrolls the page to the matching progress, so keyboard users can reach every card. Mobile keeps a native swipe row with `scroll-snap`. The engine skips the pin when the track would travel less than half a viewport (a 3 item row that moves a few pixels looks broken), and warns if `.h-scroll` contains anything besides `.h-scroll__pin`.

**R12 Stacking cards.** Native `position: sticky` does the stacking. JS only scales the previous card to 0.94 and fades in its shade as the next card arrives. Five cards maximum.

**R13 Counters.** Real numbers only, and the HTML contains the final value so no JS, reduced motion, crawlers, and screen readers all see the truth. Width is reserved in `ch` and `tabular-nums` prevents jitter. Formatting follows `<html lang>` (`pl-PL` gives Polish separators).

**R14 Section themes.** Each section with `data-theme` paints its own background and text color in CSS. Found in the test build: recoloring `<body>` when a section crosses mid viewport shows light text on a light background for half a screen, fails contrast with JS off, and fails axe. The engine only mirrors the active theme to `html[data-page-theme]` so fixed UI (header, progress bar) can switch color. For a soft transition use a gradient seam (commented in `motion.css`).

**R15 Marquee.** Pure CSS loop over two identical lists (the second `aria-hidden`). Pauses on hover, offscreen, and via a real button (WCAG 2.2.2 needs a pause control for motion longer than 5 s). Under reduced motion it becomes a static wrapped list.

**R16 Magnetic.** `quickTo` for x and y, rect cached on `pointerenter`, 10 px default pull, only under `(hover: hover) and (pointer: fine)`, listeners removed on context revert.

**R17 SVG draw (anime.js).** `svg.createDrawable` plus `draw: ['0 0', '0 1']`. With GSAP use the DrawSVG plugin the same way (free, register it first).

**R18 View Transitions (native).**
Cross document (multi page sites, progressive enhancement, Chromium and Safari animate, others just navigate):
```css
@view-transition { navigation: auto; }
::view-transition-old(root), ::view-transition-new(root) {
  animation-duration: var(--dur-component);
  animation-timing-function: var(--ease-inout);
}
/* Shared element: same name on both pages, unique per page */
.project-hero img { view-transition-name: project-hero; }
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
}
```
Same document state change (filters, tabs, gallery view switch):
```js
function swap(update) {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return update();
  document.startViewTransition(update);
}
```
Under 400 ms. Give `view-transition-name` only to elements present in both states, and never the same name to two elements at once (the transition aborts). In Next.js, use the framework's own View Transition support only if it is stable in the project's installed version; otherwise call `startViewTransition` from a client component.

**R19 Reduced motion and focus.** Handled in three layers: CSS (`motion.css` bottom block), the boot script (no `.motion` class, nothing is ever hidden), and the engine (`reduce` branch in `gsap.matchMedia()` or the `change` listener in anime.js that reverts everything if the setting flips mid session). `initFocusReveal` shows any element that receives focus while still hidden.

### 8.10 Native only recipes (Tier 1)

A complete Tier 1 site needs only `boot.html` (optional), `motion.css`, and:
* R5 hero entrance.
* R2 `data-reveal-native` on a few section intros (not on every paragraph).
* R2 progress bar on long pages.
* R14 theme shift works without JS if you skip it; for Tier 1 prefer static contrast between sections.
* R18 cross document transitions.
* Component states with CSS transitions and `@starting-style` (or the transitions-dev catalog).
Motion JS: zero bytes.

### 8.11 anime.js specifics

* `onScroll` threshold strings are `"<container> <target>"`: `'end start'` means the viewport bottom meets the element top. `'end-=15% start'` triggers at 85% of the viewport. `repeat: false` makes it one shot. `sync: true` scrubs.
* `splitText(el, { lines: { wrap: 'clip' } })` creates masked lines, keeps an accessible copy for screen readers, waits for fonts, and re-splits on resize. Put animations inside `split.addEffect(...)` and return them so re-splits revert them.
* Use explicit `{ from, to }` values for anything hidden by the boot CSS.
* `waapi.animate()` is the lighter choice for plain transform and opacity animations that do not need scroll sync.
* No pinning. Pinned story, horizontal pin and stacking depth need GSAP; with anime.js they stay in their CSS layouts (list, swipe row, sticky stack without depth), which are complete designs on their own.

### 8.12 Next.js specifics

1. `npm i gsap @gsap/react lenis`
2. `app/layout.tsx`:
```tsx
import 'lenis/dist/lenis.css';
import './motion.css';
import { MotionProvider } from '@/components/motion/MotionProvider' // file from §8.7;

const boot = `(function(){var d=document.documentElement;if(!window.matchMedia||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');var t=setTimeout(function(){d.classList.remove('motion')},2500);window.__motionReady=function(){clearTimeout(t);d.classList.add('motion-ready');return d.classList.contains('motion')};})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: boot }} /></head>
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
```
3. Sections: `<Reveal as="section">...markup with data attributes...</Reveal>`. For pins, horizontal sections, counters and the rest, port the matching function from `the GSAP engine (§8.5)` into a `useGSAP` block in a client component with `{ scope }`; the logic is identical.
4. Server components stay server components. Only the wrappers are client components; the content inside can still be server rendered.
5. `suppressHydrationWarning` on `<html>` is required because the boot script changes its class before hydration.

## 9. Site audit (motion, accessibility, SEO, images)

Runs after the visual QA loop (§13), before anything is called done. Static screenshots cannot catch motion bugs; this script scrolls, waits, measures and looks, then checks SEO, structured data, images and accessibility. Write §9.6 to `site-audit.mjs` in the project root (outside `public/`).

### 9.1 Run
Run it alone: no other agent, build or image job active (§0a.7), or LCP, CLS and long task numbers are distorted.

```bash
npm i -D playwright axe-core && npx playwright install chromium   # once per project
node site-audit.mjs http://localhost:3000 --out ./site-audit
```
Five passes: desktop 1440x900, mobile 390x844 with 4x CPU throttle and touch, reduced motion, JavaScript off (each scrolls in 60% viewport steps, screenshots every step, scrolls back up, tabs through 25 elements), plus one SEO / accessibility / image pass.

**Hard fails (exit code 1):**
* Any console error or warning (the motion engine warns on broken pin markup on purpose).
* Text, links, buttons or images in the reading zone (top 75% of the viewport) still invisible after settling; anything hidden at the top after scrolling back up. Children of `[data-motion-stage]` are exempt while the stage as a whole is visible.
* Horizontal overflow; a focused element that is invisible or off screen.
* CLS over 0.1 in any pass; mobile LCP over 3.0 s; Lenis active under reduced motion.
* Missing meta description, `lang` or viewport; not exactly one H1; invalid JSON-LD; images without `alt` or without dimensions; links or buttons without an accessible name; a lazy loaded LCP image; `robots.txt` disallowing everything.
* axe-core violations of impact critical or serious (WCAG 2.0 to 2.2 A and AA rules).

**Warnings (fix unless there is a written reason):** long tasks over 100 ms while scrolling or 250 ms at load; more than 5% of frames over 32 ms; mobile LCP over 2.5 s; title or description length off target; skipped heading levels; no canonical, Open Graph or JSON-LD; JPG/PNG images; images over 2x their displayed size; LCP image without `fetchpriority="high"`; robots.txt without Sitemap or blocking AI search bots; no sitemap; no llms.txt (optional); moderate or minor axe findings.

`report.json` holds everything: layout shift sources, LCP element, long tasks, hidden element selectors per scroll position, SEO fields, JSON-LD types, image list, axe violations.

### 9.2 Look at the frames
Open the step screenshots for desktop and mobile in order, like storyboard panels:
* Does each frame show what the Motion Storyboard says at that point?
* Is something readable on every frame, or are there empty frames while things wait to reveal?
* Does the signature moment read clearly while other sections stay quieter?
* Mobile: pins and horizontal sections replaced by their mobile layouts, nothing overflowing.
* Reduced motion and no JS frames: everything present and in order.

### 9.3 Manual feel check (when a real browser is available)
Scroll once slowly, once fast, once with a trackpad fling. Fast scroll: nothing lags visibly behind. Scroll back up: exit fades reverse, one shot reveals stay. Resize across 768 px: pins turn on and off cleanly. Click every anchor link: lands correctly under the sticky header. Open every modal or menu: the page behind does not scroll.

### 9.4 Field performance
Lab numbers on localhost are optimistic. Before handing over, run PageSpeed Insights on the deployed URL (mobile) and compare with §14. After launch, confirm with Search Console field data.

### 9.5 Sign off line
One block: tier, engine, audit result (pass or fail with counts), CLS, LCP desktop and mobile, worst scroll long task, axe result, SEO warnings left, and any documented exception. Nothing ships on a failing audit.

**Evidence this loop works:** in testing it caught, on a realistic real estate page built with this skill: a body theme switch that put light text on a light background, a pinned horizontal row that moved only a few pixels, a heading inside a pinned section that desynchronised the pin, a step swap that left an empty frame, button and small print contrast below 4.5:1, and an over long title and description. All fixed, and the rules above now prevent them.

### 9.6 site-audit.mjs
```js
#!/usr/bin/env node
// site-audit.mjs | website-excellence QA: motion, accessibility (axe-core), SEO/GEO, images.
// Usage:  node site-audit.mjs <url> [--out ./site-audit] [--steps 0.6] [--no-frames]
// Needs:  npm i -D playwright axe-core   and   npx playwright install chromium
// Passes: desktop, mobile (4x CPU throttle), reduced motion, JavaScript disabled, plus one
// SEO + accessibility + image pass. Exit code 1 if any hard check fails.
// Report: <out>/report.json, frames: <out>/<pass>/NN.png

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith('--'));
if (!url) { console.error('Usage: node site-audit.mjs <url> [--out dir] [--steps 0.6] [--no-frames]'); process.exit(2); }
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i > -1 ? args[i + 1] : def; };
const OUT = opt('out', './site-audit');
const STEP = parseFloat(opt('steps', '0.6'));
const FRAMES = !args.includes('--no-frames');
const SETTLE_MS = 700;

const LIMITS = { cls: 0.1, lcpMs: 2500, lcpCeilingMs: 3000, longTaskMs: 100, jankShare: 0.05, stuckHidden: 0, consoleErrors: 0 };

// Injected before any page script: collects CLS, LCP, long tasks, frame gaps.
const OBSERVERS = () => {
  const m = (window.__mx = { cls: 0, shifts: [], lcp: 0, longTasks: [], frames: [], sampling: false });
  try {
    new PerformanceObserver((l) => l.getEntries().forEach((e) => {
      if (e.hadRecentInput) return;
      m.cls += e.value;
      m.shifts.push({ value: +e.value.toFixed(4), t: Math.round(e.startTime), nodes: (e.sources || []).map((s) => s.node && (s.node.id ? `#${s.node.id}` : s.node.nodeName)).filter(Boolean) });
    })).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((l) => { const e = l.getEntries().at(-1); if (e) { m.lcp = Math.round(e.startTime); m.lcpEl = e.element ? e.element.nodeName + (e.element.id ? '#' + e.element.id : '') : null; } })
      .observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => l.getEntries().forEach((e) => m.longTasks.push({ d: Math.round(e.duration), t: Math.round(e.startTime) })))
      .observe({ type: 'longtask', buffered: true });
  } catch (_) {}
  let last = 0;
  const tick = (t) => { if (m.sampling && last) m.frames.push(t - last); last = t; requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
};

// Text bearing elements in the reading zone (top 75% of the viewport) whose effective opacity is ~0
// or that are visibility hidden. Children of [data-motion-stage] (content that swaps in place, like
// pinned story steps) are exempt while the stage as a whole is visible (summed opacity >= 0.45).
const FIND_HIDDEN = () => {
  const out = [];
  const vh = innerHeight, vw = innerWidth;
  const els = document.querySelectorAll('h1,h2,h3,h4,p,li,a,button,figure,img,blockquote,dd,dt,label');
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2 || r.bottom < vh * 0.1 || r.top > vh * 0.75 || r.right < 0 || r.left > vw) continue;
    if (el.closest('[aria-hidden="true"],[hidden],dialog:not([open]),[inert]')) continue;
    const stage = el.closest('[data-motion-stage]');
    if (stage && Array.from(stage.children).reduce((sum, c) => sum + parseFloat(getComputedStyle(c).opacity), 0) >= 0.45) continue;
    if (el.tagName !== 'IMG' && !el.textContent.trim()) continue;
    let op = 1, node = el, vis = true;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      op *= parseFloat(cs.opacity);
      if (node === el && cs.visibility === 'hidden') vis = false;
      node = node.parentElement;
    }
    if (op < 0.05 || !vis) out.push({ el: el.nodeName + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''), text: (el.textContent || el.alt || '').trim().slice(0, 40), opacity: +op.toFixed(2), visible: vis, top: Math.round(r.top) });
  }
  return out;
};

async function runPass(browser, pass) {
  const ctx = await browser.newContext({
    viewport: pass.viewport,
    deviceScaleFactor: 1,
    isMobile: pass.mobile || false,
    hasTouch: pass.mobile || false,
    reducedMotion: pass.reduced ? 'reduce' : 'no-preference',
    javaScriptEnabled: !pass.noJs,
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  if (pass.cpu) {
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: pass.cpu });
  }
  if (!pass.noJs) await page.addInitScript(OBSERVERS);

  const dir = path.join(OUT, pass.name);
  if (FRAMES) fs.mkdirSync(dir, { recursive: true });

  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(1500);

  const state = pass.noJs ? {} : await page.evaluate(() => ({
    htmlClass: document.documentElement.className,
    lenis: document.documentElement.classList.contains('lenis'),
  }));

  const hiddenStuck = [];
  const vh = pass.viewport.height;
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const steps = Math.ceil((total - vh) / (vh * STEP)) + 1;
  if (!pass.noJs) await page.evaluate(() => { window.__mx.sampling = true; window.__mx.scrollStart = performance.now(); });

  let y = 0, i = 0, overflowX = false;
  for (i = 0; i < steps; i++) {
    await page.waitForTimeout(SETTLE_MS);
    const hid = await page.evaluate(FIND_HIDDEN);
    if (hid.length) hiddenStuck.push({ step: i, scrollY: await page.evaluate(() => Math.round(scrollY)), items: hid.slice(0, 8) });
    overflowX = overflowX || await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (FRAMES) await page.screenshot({ path: path.join(dir, `${String(i).padStart(2, '0')}.png`) });
    const before = await page.evaluate(() => scrollY);
    if (pass.noJs) await page.evaluate((d) => window.scrollBy(0, d), vh * STEP);
    else await page.mouse.wheel(0, vh * STEP);
    await page.waitForTimeout(250);
    y = await page.evaluate(() => scrollY);
    if (y === before) { await page.evaluate((d) => window.scrollBy(0, d), vh * STEP); await page.waitForTimeout(150); if ((await page.evaluate(() => scrollY)) === before) break; }
  }
  // Reverse pass: scroll back to top and check the hero is intact (exit fades must reverse).
  if (!pass.noJs) { for (let k = 0; k < i + 2; k++) { await page.mouse.wheel(0, -vh * STEP * 1.5); await page.waitForTimeout(120); } }
  else await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const topHidden = await page.evaluate(FIND_HIDDEN);
  if (FRAMES) await page.screenshot({ path: path.join(dir, `zz-back-to-top.png`) });

  // Keyboard pass: every focused element must be visible and inside the viewport.
  const focusProblems = [];
  for (let k = 0; k < 25; k++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(pass.noJs ? 30 : 250);
    const f = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const r = el.getBoundingClientRect();
      let op = 1, n = el; while (n && n.nodeType === 1) { op *= parseFloat(getComputedStyle(n).opacity); n = n.parentElement; }
      const inView = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
      return { el: el.nodeName + (el.textContent ? ':' + el.textContent.trim().slice(0, 25) : ''), op: +op.toFixed(2), inView };
    });
    if (f && (f.op < 0.5 || !f.inView)) focusProblems.push(f);
  }

  const metrics = pass.noJs ? null : await page.evaluate(() => {
    const m = window.__mx; const f = m.frames.slice(5);
    const janky = f.filter((d) => d > 32).length;
    return { cls: +m.cls.toFixed(3), shifts: m.shifts.slice(0, 10), lcp: m.lcp, lcpEl: m.lcpEl,
      longTasks: m.longTasks,
      maxLongTaskLoad: Math.max(0, ...m.longTasks.filter((t) => t.t < m.scrollStart).map((t) => t.d)),
      maxLongTask: Math.max(0, ...m.longTasks.filter((t) => t.t >= m.scrollStart).map((t) => t.d)),
      frames: f.length, jankShare: f.length ? +(janky / f.length).toFixed(3) : 0, worstFrame: Math.round(Math.max(0, ...f)) };
  });

  await ctx.close();
  return { pass: pass.name, state, metrics, hiddenStuck, topHidden, overflowX, focusProblems, errors };
}

// SEO, GEO, image and accessibility pass (desktop, JS on, after full scroll so lazy images load).
async function seoPass(browser) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const imgTypes = new Map();
  page.on('response', (r) => { if (r.request().resourceType() === 'image') imgTypes.set(r.url(), r.headers()['content-type'] || ''); });
  await page.addInitScript(() => {
    window.__lcpEl = null;
    try { new PerformanceObserver((l) => { const e = l.getEntries().at(-1); if (e && e.element) window.__lcpEl = e.element; }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch (_) {}
  });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(1200);
  const lcpInfo = await page.evaluate(() => { const e = window.__lcpEl; if (!e || e.tagName !== 'IMG') return null; return { src: e.currentSrc, loading: e.getAttribute('loading'), fetchpriority: e.getAttribute('fetchpriority') }; });
  await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(800);

  const seo = await page.evaluate(() => {
    const $ = (s) => document.querySelector(s);
    const meta = (n) => $(`meta[name="${n}"]`)?.content ?? $(`meta[property="${n}"]`)?.content ?? null;
    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { const j = JSON.parse(s.textContent); const arr = Array.isArray(j) ? j : j['@graph'] || [j]; return { ok: true, types: arr.map((x) => x['@type']).flat() }; } catch (e) { return { ok: false, error: e.message }; } });
    const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => +h.tagName[1]);
    let skip = null; for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) { skip = `h${heads[i - 1]} -> h${heads[i]}`; break; }
    const imgs = [...document.images].map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute('alt'), w: i.getAttribute('width'), h: i.getAttribute('height'), ar: getComputedStyle(i).aspectRatio, loading: i.getAttribute('loading'), srcset: !!(i.srcset || i.closest('picture')), natural: i.naturalWidth, shown: Math.round(i.getBoundingClientRect().width * devicePixelRatio) }));
    const emptyLinks = [...document.querySelectorAll('a[href],button')].filter((a) => !(a.textContent.trim() || a.getAttribute('aria-label') || a.getAttribute('aria-labelledby') || a.querySelector('img[alt]:not([alt=""]),svg[aria-label],[aria-label]'))).length;
    const text = document.body.innerText || '';
    return {
      title: document.title, titleLen: document.title.length,
      description: meta('description'), descLen: (meta('description') || '').length,
      lang: document.documentElement.lang, viewport: !!$('meta[name="viewport"]'),
      canonical: $('link[rel="canonical"]')?.href || null,
      robotsMeta: meta('robots'),
      og: { title: meta('og:title'), description: meta('og:description'), image: meta('og:image'), url: meta('og:url') },
      h1: document.querySelectorAll('h1').length, headingSkip: skip,
      ld, imgs, emptyLinks, words: text.split(/\s+/).filter(Boolean).length,
      hasMain: !!$('main'), hasNav: !!$('nav'), hasFooter: !!$('footer'),
    };
  });

  let axe = null;
  try {
    await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
    axe = await page.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } });
      return r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length, sample: v.nodes[0]?.target?.join(' ') }));
    });
  } catch (e) { axe = { skipped: `axe-core not available (${e.message.split('\n')[0]}). Run: npm i -D axe-core` }; }

  const origin = new URL(url).origin;
  const fetchStatus = async (p) => { try { const r = await page.request.get(origin + p); return { status: r.status(), body: r.status() === 200 ? (await r.text()).slice(0, 4000) : '' }; } catch { return { status: 0, body: '' }; } };
  const robots = await fetchStatus('/robots.txt');
  const sitemap = await fetchStatus('/sitemap.xml');
  const llms = await fetchStatus('/llms.txt');
  await ctx.close();

  const fails = [], warns = [];
  const S = seo;
  if (!S.title || S.titleLen < 15 || S.titleLen > 65) (S.title ? warns : fails).push(`seo: title length ${S.titleLen} (aim 30 to 60): "${S.title}"`);
  if (!S.description) fails.push('seo: missing meta description'); else if (S.descLen < 70 || S.descLen > 170) warns.push(`seo: meta description length ${S.descLen} (aim 120 to 160)`);
  if (!S.lang) fails.push('seo: <html lang> missing');
  if (!S.viewport) fails.push('seo: viewport meta missing');
  if (S.h1 !== 1) fails.push(`seo: ${S.h1} <h1> elements (exactly 1)`);
  if (S.headingSkip) warns.push(`seo/a11y: heading level skipped (${S.headingSkip})`);
  if (!S.canonical) warns.push('seo: no canonical link');
  if (S.robotsMeta && /noindex/i.test(S.robotsMeta)) warns.push(`seo: robots meta is "${S.robotsMeta}" (fine for staging, never for production)`);
  if (!S.og.title || !S.og.image) warns.push('seo: Open Graph title or image missing');
  if (!S.ld.length) warns.push('seo/geo: no JSON-LD structured data');
  S.ld.filter((l) => !l.ok).forEach((l) => fails.push(`seo: invalid JSON-LD: ${l.error}`));
  if (!S.hasMain) warns.push('a11y: no <main> landmark');
  if (S.emptyLinks) fails.push(`a11y: ${S.emptyLinks} links/buttons without an accessible name`);
  const noAlt = S.imgs.filter((i) => i.alt === null); if (noAlt.length) fails.push(`a11y: ${noAlt.length} images without alt attribute, e.g. ${noAlt[0].src.slice(0, 80)}`);
  const noDims = S.imgs.filter((i) => !(i.w && i.h) && (!i.ar || i.ar === 'auto')); if (noDims.length) fails.push(`perf: ${noDims.length} images without width/height or aspect-ratio (CLS risk)`);
  const legacy = S.imgs.filter((i) => { const t = imgTypes.get(i.src) || ''; return /image\/(jpeg|png)/.test(t) || (!t && /\.(jpe?g|png)(\?|$)/i.test(i.src)); }); if (legacy.length) warns.push(`perf: ${legacy.length} images served as JPG/PNG (ship WebP/AVIF), e.g. ${legacy[0].src.slice(0, 80)}`);
  const oversized = S.imgs.filter((i) => i.natural && i.shown && i.natural > i.shown * 2.2); if (oversized.length) warns.push(`perf: ${oversized.length} images over 2x their displayed size (add srcset/sizes)`);
  if (lcpInfo && lcpInfo.loading === 'lazy') fails.push('perf: the LCP image is loading="lazy"');
  if (lcpInfo && lcpInfo.fetchpriority !== 'high') warns.push('perf: the LCP image has no fetchpriority="high"');
  if (Array.isArray(axe)) axe.forEach((v) => (['critical', 'serious'].includes(v.impact) ? fails : warns).push(`a11y (axe ${v.impact}): ${v.id}: ${v.help} [${v.nodes}x, e.g. ${v.sample}]`));
  else warns.push(axe.skipped);
  if (robots.status !== 200) warns.push('seo: /robots.txt not found');
  else {
    if (!/sitemap:/i.test(robots.body)) warns.push('seo: robots.txt has no Sitemap line');
    ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'].forEach((bot) => { const re = new RegExp(`user-agent:\\s*${bot}[\\s\\S]*?disallow:\\s*/\\s*$`, 'im'); if (re.test(robots.body)) warns.push(`geo: robots.txt blocks ${bot}: the site will not be cited in that AI search`); });
    if (/user-agent:\s*\*[\s\S]*?disallow:\s*\/\s*$/im.test(robots.body)) fails.push('seo: robots.txt disallows everything for *');
  }
  if (sitemap.status !== 200) warns.push('seo: /sitemap.xml not found');
  if (llms.status !== 200) warns.push('geo (optional): no /llms.txt');
  return { seo: S, axe, lcpImage: lcpInfo, robots: robots.status, sitemap: sitemap.status, llms: llms.status, fails, warns };
}

const passes = [
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
  { name: 'mobile', viewport: { width: 390, height: 844 }, mobile: true, cpu: 4 },
  { name: 'reduced', viewport: { width: 1440, height: 900 }, reduced: true },
  { name: 'nojs', viewport: { width: 1440, height: 900 }, noJs: true },
];

const browser = await chromium.launch();
fs.mkdirSync(OUT, { recursive: true });
const results = [];
for (const p of passes) {
  results.push(await runPass(browser, p).catch((e) => ({ pass: p.name, fatal: e.message })));
}
const seoResult = await seoPass(browser).catch((e) => ({ fatal: e.message, fails: [`seo pass crashed: ${e.message}`], warns: [] }));
await browser.close();

const fails = [...seoResult.fails];
const warns = [...seoResult.warns];
for (const r of results) {
  const P = r.pass;
  if (r.fatal) { fails.push(`${P}: crashed: ${r.fatal}`); continue; }
  if (r.errors.length > LIMITS.consoleErrors) fails.push(`${P}: ${r.errors.length} console errors/warnings, first: ${r.errors[0]}`);
  if (r.hiddenStuck.length) fails.push(`${P}: content still hidden in viewport after settling at ${r.hiddenStuck.length} scroll positions, e.g. ${JSON.stringify(r.hiddenStuck[0].items[0])}`);
  if (r.topHidden.length) fails.push(`${P}: after scrolling back to top, hidden: ${JSON.stringify(r.topHidden[0])}`);
  if (r.overflowX) fails.push(`${P}: horizontal overflow`);
  if (r.focusProblems.length) fails.push(`${P}: ${r.focusProblems.length} focused elements invisible or off screen, e.g. ${JSON.stringify(r.focusProblems[0])}`);
  if (r.metrics) {
    const m = r.metrics;
    if (m.cls > LIMITS.cls) fails.push(`${P}: CLS ${m.cls} > ${LIMITS.cls}`);
    if (m.maxLongTask > LIMITS.longTaskMs) warns.push(`${P}: long task ${m.maxLongTask} ms while scrolling (INP risk)`);
    if (m.maxLongTaskLoad > 250) warns.push(`${P}: long task ${m.maxLongTaskLoad} ms during load (split or defer motion init)`);
    if (m.jankShare > LIMITS.jankShare) warns.push(`${P}: ${(m.jankShare * 100).toFixed(1)}% frames over 32 ms (worst ${m.worstFrame} ms)`);
    if (P === 'mobile' && m.lcp > LIMITS.lcpCeilingMs) fails.push(`${P}: LCP ${m.lcp} ms over the ${LIMITS.lcpCeilingMs} ms ceiling (local lab value, network not throttled)`);
    else if (P === 'mobile' && m.lcp > LIMITS.lcpMs) warns.push(`${P}: LCP ${m.lcp} ms over ${LIMITS.lcpMs} ms default budget: needs the exception path`);
  }
  if (P === 'reduced' && r.state.lenis) fails.push('reduced: Lenis smooth scroll is active under prefers-reduced-motion');
}

fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({ url, date: new Date().toISOString(), results, seo: seoResult, fails, warns }, null, 2));
for (const r of results) {
  if (r.fatal) continue;
  const m = r.metrics;
  console.log(`[${r.pass}] ${m ? `CLS ${m.cls} | LCP ${m.lcp} ms (${m.lcpEl}) | long task load ${m.maxLongTaskLoad} / scroll ${m.maxLongTask} ms | jank ${(m.jankShare * 100).toFixed(1)}% | ` : ''}hidden ${r.hiddenStuck.length} | focus issues ${r.focusProblems.length} | errors ${r.errors.length}`);
}
warns.forEach((w) => console.log('WARN', w));
fails.forEach((f) => console.log('FAIL', f));
console.log(fails.length ? `\nSITE AUDIT FAILED (${fails.length} fails, ${warns.length} warnings)` : `\nSITE AUDIT PASSED (${warns.length} warnings)`);
process.exit(fails.length ? 1 : 0);
```

### 9.7 images.mjs (image pipeline)
Converts source photos to responsive WebP (+ AVIF with `--avif`), never upscales, respects EXIF rotation, slugifies Polish names, and writes ready `<img>` / `<picture>` snippets with dimensions to `images.json`. `npm i -D sharp`, then `node images.mjs ./src-photos ./public/img --avif`.
```js
#!/usr/bin/env node
// images.mjs | website-excellence image pipeline. Source photos in, responsive WebP (+ optional AVIF) out,
// plus a ready <img> snippet per image with width/height, srcset and sizes.
// Usage: node images.mjs <srcDir> <outDir> [--widths 480,800,1200,1600,2400] [--avif] [--quality 72]
// Needs: npm i -D sharp. Keeps originals untouched. Never upscales.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const [src, out] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!src || !out) { console.error('Usage: node images.mjs <srcDir> <outDir> [--widths 480,800,1200,1600,2400] [--avif] [--quality 72]'); process.exit(2); }
const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i > -1 ? process.argv[i + 1] : d; };
const WIDTHS = arg('widths', '480,800,1200,1600,2400').split(',').map(Number);
const Q = Number(arg('quality', '72'));
const AVIF = process.argv.includes('--avif');
fs.mkdirSync(out, { recursive: true });

const files = fs.readdirSync(src).filter((f) => /\.(jpe?g|png|webp|tiff?|heic)$/i.test(f));
const manifest = {};
for (const f of files) {
  const name = path.parse(f).name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const img = sharp(path.join(src, f)).rotate(); // respect EXIF orientation
  const meta = await img.metadata();
  const w0 = (meta.orientation >= 5 ? meta.height : meta.width), h0 = (meta.orientation >= 5 ? meta.width : meta.height);
  const widths = [...new Set(WIDTHS.filter((w) => w <= w0).concat(WIDTHS.some((w) => w > w0) ? [w0] : []))].sort((a, b) => a - b);
  const set = [];
  for (const w of widths) {
    const base = path.join(out, `${name}-${w}`);
    await img.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: Q, effort: 5 }).toFile(`${base}.webp`);
    if (AVIF) await img.clone().resize({ width: w, withoutEnlargement: true }).avif({ quality: Q - 22, effort: 4 }).toFile(`${base}.avif`);
    set.push(w);
  }
  const largest = set.at(-1), h = Math.round((h0 / w0) * largest);
  const srcset = (ext) => set.map((w) => `${name}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `${name}-${set.includes(1200) ? 1200 : largest}.webp`;
  const imgTag = `<img src="${fallback}" srcset="${srcset('webp')}" sizes="100vw" width="${largest}" height="${h}" alt="" loading="lazy" decoding="async">`;
  manifest[name] = { width: largest, height: h, widths: set, snippet: AVIF ? `<picture><source type="image/avif" srcset="${srcset('avif')}" sizes="100vw">${imgTag}</picture>` : imgTag };
  console.log(`${f} -> ${name} [${set.join(', ')}]`);
}
fs.writeFileSync(path.join(out, 'images.json'), JSON.stringify(manifest, null, 2));
console.log(`\n${files.length} images. Snippets in ${path.join(out, 'images.json')}. Set real alt text and sizes; the LCP image gets loading="eager" fetchpriority="high".`);
```

## 10. SEO and GEO
Goal: rank in Google for the client's money queries, and be the source AI answers (Google AI Overviews, ChatGPT search, Perplexity, Claude, Copilot) quote and link. Both reward the same foundation: fast, crawlable HTML with specific, verifiable facts organised around what people actually ask.

### 10.1 Research before writing (no paid tools needed)
1. List the client's services x places ("sprzedaż mieszkania Gdynia", "wycena mieszkania Orłowo", "pośrednik nieruchomości Redłowo").
2. Expand with Google autocomplete, "Podobne pytania" (People Also Ask), related searches, and the client's own phone and email questions. If an SEO connector (SE Ranking, Keyword Planner, Search Console) is available, pull volumes and current rankings.
3. Look at the top 5 results for each main query: what type of page ranks (service page, guide, listing, local pack), what they cover, what they miss. Beat them on specificity, not length.
4. Classify intent: transactional (service page), local (Google Business Profile + local page), informational (guide or FAQ), navigational (brand).

### 10.2 Page map
* One primary intent per URL; no two pages targeting the same query (cannibalisation).
* A one page site targets one main query cluster; secondary services get their own page only when there is enough genuinely distinct content (at least a real paragraph of specifics, not a city name swap).
* URL: short, lowercase, Polish words without diacritics, hyphens (`/wycena-mieszkania-gdynia`).

### 10.3 On page template
* `<title>`: primary query + differentiator + brand, 50 to 60 characters ("Sprzedaż mieszkań w Gdyni z planem | Marta Wiśniewska").
* Meta description: 120 to 160 characters, the promise plus a reason to click. Not a keyword list.
* One H1 that contains the main query naturally; H2s answer the next questions in order.
* First 100 words state who, what, where, for whom. Answer first, detail after.
* Internal links with descriptive anchors between related pages; every page reachable within 3 clicks; breadcrumbs on multi level sites.
* Images: descriptive file names (`salon-orlowo-3-pokoje.webp`), real alt text that describes the image, not keyword stuffing.
* Rendered HTML contains all content (static or server rendered). Never content that appears only after client side JS.

### 10.4 Technical
* `<html lang="pl">`, viewport meta, canonical on every page, `robots.txt`, `sitemap.xml` (only canonical, indexable URLs, real `lastmod`), 301 redirects for changed URLs, custom 404, HTTPS, one host (www or not) with redirects.
* Open Graph and Twitter tags with a 1200x630 image per page.
* Multilingual: `hreflang` pairs (including `x-default`) and separate URLs per language; never auto redirect by IP.
* Core Web Vitals from field data (PageSpeed Insights, Search Console) after launch, not only lab numbers.
* Staging is `noindex`; production never is (the §9 audit warns).

### 10.5 Structured data (JSON-LD, one `@graph`)
Use only what is true and visible on the page. Validate in the Rich Results Test and the Schema.org validator.
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[
 {"@type":"LocalBusiness","@id":"https://example.pl/#business","name":"[Nazwa]","url":"https://example.pl/",
  "telephone":"+48 [numer]","email":"[email]","image":"https://example.pl/img/og.jpg",
  "address":{"@type":"PostalAddress","streetAddress":"[ulica]","postalCode":"[kod]","addressLocality":"[miasto]","addressCountry":"PL"},
  "geo":{"@type":"GeoCoordinates","latitude":0,"longitude":0},
  "areaServed":[{"@type":"City","name":"[miasto]"}],
  "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"17:00"}],
  "sameAs":["[profil Google]","[Instagram]","[Facebook]"]},
 {"@type":"WebSite","@id":"https://example.pl/#site","url":"https://example.pl/","name":"[Nazwa]","inLanguage":"pl-PL"},
 {"@type":"Service","name":"[usługa]","provider":{"@id":"https://example.pl/#business"},"areaServed":"[miasto]"},
 {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"[pytanie z FAQ na stronie]","acceptedAnswer":{"@type":"Answer","text":"[ta sama odpowiedź co na stronie]"}}]},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Strona główna","item":"https://example.pl/"}]}
]}
</script>
```
Pick the most specific `LocalBusiness` subtype (`RealEstateAgent`, `HomeAndConstructionBusiness`, `GeneralContractor`, `InteriorDesigner` is not a schema type, so use `ProfessionalService` there). Never add `Review` or `AggregateRating` markup that is not backed by reviews shown on the page. Placeholder values are replaced before launch or the block is removed.

### 10.6 Local SEO (Poland)
* Google Business Profile: exact primary category, service area, hours, real photos, services list, regular posts, and replies to every review. It drives the map pack, which often beats organic results for local queries.
* NAP (name, address, phone) identical on the site, GBP, and directories (for example panoramafirm.pl, pkt.pl, aleo.com, industry portals). Inconsistency costs trust.
* A location section with a static map image that loads the interactive map on click (facade), plus a text description of the area served.
* Reviews: ask real clients, link to the GBP review form; never write or buy reviews.

### 10.7 GEO: being quoted by AI answers
What is reasonably established (September 2026):
* AI search engines retrieve pages through their own search crawlers and cite sources. Google AI Overviews use the normal Google index (Googlebot); `Google-Extended` controls Gemini training and grounding use, not appearance in Search.
* Content must be in plain HTML text, near the top, stated as facts: who, what, where, prices or price logic if public, process, credentials. Extractable sentences ("Wycena jest bezpłatna i trwa 30 minut.") get quoted; vague marketing does not.
* Question shaped headings with direct 1 to 3 sentence answers underneath, then detail. Real FAQ sections mirrored in `FAQPage` markup.
* Entity consistency: the same name, address, phone, founder name and descriptions everywhere (site, GBP, social profiles, directories), linked via `sameAs`.
* Evidence: named author or owner with credentials, dates on time sensitive content, links to primary sources, original data or photos.
* Allow AI search crawlers in `robots.txt`. Blocking `OAI-SearchBot`, `Claude-SearchBot` or `PerplexityBot` removes the site from those engines' answers. Training crawlers (`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`) are a separate business choice.
* Register the site in Google Search Console and Bing Webmaster Tools (Bing feeds Copilot and other engines), submit the sitemap, and enable IndexNow where the host supports it.

What is not proven: `llms.txt` has no confirmed effect on any major AI engine. It costs minutes, so add it as optional hygiene, never promise results from it. "Optimising for AI" tricks (hidden text, prompt like instructions in pages) are spam and can get a site dropped.

`robots.txt` default:
```text
User-agent: *
Allow: /

# AI search and user fetchers: allow (visibility in AI answers)
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /

# Training crawlers: client's choice. Uncomment to opt out of model training.
# User-agent: GPTBot
# Disallow: /
# User-agent: ClaudeBot
# Disallow: /
# User-agent: Google-Extended
# Disallow: /
# User-agent: CCBot
# Disallow: /

Sitemap: https://example.pl/sitemap.xml
```
`llms.txt` (optional):
```text
# [Nazwa firmy]
> [Jedno zdanie: co, dla kogo, gdzie.]

## Najważniejsze strony
- [Oferta](https://example.pl/oferta): [co tam jest]
- [Kontakt](https://example.pl/kontakt): telefon, adres, godziny
```

### 10.8 Measuring
* Search Console: queries, clicks, indexing errors, CWV field data. Check 2 to 4 weeks after launch.
* Analytics (after consent): conversions (form, phone, email clicks) by landing page; referrals from `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com` as an AI traffic segment.
* Monthly manual check: ask 5 real client questions in ChatGPT, Perplexity and Google, note whether and how the client is cited.

## 11. Stack
| Need | Choice |
|---|---|
| Framework | Plain HTML for 1 to 3 page sites, Next.js (App Router) for anything with CMS, many pages or dynamic data |
| Styling | Tailwind (compiled) or plain CSS with tokens. Tailwind play CDN for prototypes only |
| Scroll motion | GSAP 3.15+ (`npm i gsap`, all plugins free: ScrollTrigger, SplitText, Flip, DrawSVG, ScrollSmoother) |
| React integration | `@gsap/react` (`useGSAP`) |
| Smooth scroll | `lenis` 1.3+ (`lenis/react` for Next.js). Never together with ScrollSmoother |
| Lighter motion | `animejs` 4.x |
| Component transitions | `transitions-dev` skill if installed, else native CSS |
| Icons | Lucide, Phosphor, Tabler |
| Images | `images.mjs` (§9.7, uses sharp); `next/image` in Next.js |
| QA | `site-audit.mjs` (§9.6) with Playwright + axe-core; Playwright MCP for visual QA |
| SEO | Google Search Console, Bing Webmaster Tools, Rich Results Test, PageSpeed Insights |
| Forms | Native HTML validation + small JS; server side validation always |

Never: AOS, WOW.js, ScrollMagic, locomotive-scroll v4, jQuery animation plugins, two scroll engines.

## 12. Real estate module (load only for agents, agencies, developers)
**Two extra discovery questions:**
1. Czy strona ma pokazywać oferty (listingi), jedną inwestycję, czy markę pośrednika?
2. Skąd pochodzą dane ofert (CRM / eksport XML / ręcznie) i jak często się zmieniają?

**Macrostructures:** Listing Led (search and grid of offers as hero), Map First (map with offers as primary navigation), Single Property Showcase (one investment, cinematic, Tier 3 candidate), Agent Brand (the person as proof: local knowledge, sold properties, process).

**Components:** listing card (photo with fixed ratio, price, area m², rooms, district, status: dostępne / rezerwacja / sprzedane), filters that update without page reload and keep state in the URL, property detail (gallery with keyboard support, key facts table, floor plan, location, contact form with the property ID prefilled), district guide pages with real local facts.

**Anti slop for real estate:** no "Twój wymarzony dom czeka", no fake sold counters, no stock keys-in-hand photos, no invented prices or m². Missing data is a visible placeholder.

**Schema:** `RealEstateAgent` (or `LocalBusiness`) for the agent / agency; per offer `RealEstateListing` with `offers` (`price`, `priceCurrency: PLN`, `availability`) and `itemOffered` (`Apartment` / `House` / `SingleFamilyResidence` with `floorSize`, `numberOfRooms`, `address`).

**RODO:** every contact form states the administrator, purpose, legal basis, and links the privacy policy; marketing consent is a separate, unticked checkbox; the form works without marketing consent. Map embeds and analytics load only after consent where required.

**Motion notes:** Tier 2 by default. Signature moments that fit: clip reveal of the hero property photo, pinned "jak pracuję" process, horizontal gallery of sold or current investments. Never animate prices or key facts in a way that delays reading them.

## 13. Visual QA (Playwright MCP)
Install once: `claude mcp add playwright npx @playwright/mcp@latest` (Claude Code). Other clients: add an MCP server with command `npx` and args `["@playwright/mcp@latest"]`. Without Playwright MCP, run the §9 audit script alone and review its frames.

With agents, the checks below are split across independent reviewers (§0a.6); the loop is the same, the wall clock is shorter.

Loop, repeated until clean:
1. Navigate to the local URL. Console: zero errors, zero warnings.
2. Screenshots at 360, 390, 768, 1024, 1440 and 1920 px wide. Check: no horizontal overflow, no text collisions, no orphaned single words in headlines, images correctly cropped, tap targets large enough.
3. Accessibility snapshot: every image has meaningful `alt` (or empty for decoration), every control has a name, logical heading outline, landmarks present.
4. Keyboard pass through the whole page: focus always visible, order logical, no traps, skip link works.
5. Emulate `prefers-reduced-motion: reduce` and screenshot again: nothing moves, nothing missing.
6. Self critique against §5.2 and §4: What is the hero move? What is generic? Would a design director stop scrolling? Does the skim test (§6) pass? Fix, then repeat.
7. Run the full audit (§9) and review the frames.

## 14. Performance: strong defaults, written exceptions
Default budget at p75 on throttled mobile: LCP ≤ 2.5 s (aim for 2.0 s), INP ≤ 200 ms, CLS ≤ 0.1, motion JS within the tier budget (§7.11). Heavier pages go through the exception path in §7.11. CLS and INP are never exempt.

**How to hit it:**
* **LCP:** the LCP element is known and designed for. Hero image: preloaded (`<link rel="preload" as="image" imagesrcset imagesizes fetchpriority="high">`), eager, WebP/AVIF, sized with `srcset`. Hero text: web font preloaded or a system stack, CSS entrance from opacity 0.01 (§7.8.2).
* **Fonts:** self hosted WOFF2, subset to Latin + Latin Extended (Polish), 2 families maximum, 3 to 4 files total, `font-display: swap`, preload only the files used above the fold, metric compatible fallback (`size-adjust`, `ascent-override`) to avoid a reflow when the font arrives. Next.js: `next/font` does this.
* **Images:** run `images.mjs` (§9.7): WebP (+ AVIF optional) at 480 to 2400 px, never upscaled, with `width`/`height` and `srcset`. `sizes` must reflect the real layout width or the browser downloads too much.
* **CSS:** one small stylesheet, critical rules inline for single page HTML sites, no unused framework CSS (compiled Tailwind purges it).
* **JS:** modules at the end of `<body>`, motion engine only what the storyboard uses, no jQuery, no animation libraries beyond one engine.
* **Third parties:** maps, YouTube, chat widgets and booking embeds behind a click facade (static image + button that loads the embed). Analytics after consent, loaded with `defer`/idle.
* **Video:** compressed (H.264/VP9, a few MB), `muted playsinline autoplay loop`, a real poster that is sized like an LCP image, paused offscreen and under reduced motion.
* **Caching:** hashed file names with `Cache-Control: public, max-age=31536000, immutable`; HTML short cache. Compression (Brotli) on. A CDN or edge host (Vercel, Netlify, Cloudflare Pages).
* **Next.js:** static generation where possible, `next/image` with correct `sizes`, `next/font`, client components only for interactive or animated wrappers.

## 15. Accessibility (WCAG 2.2 AA floor, European Accessibility Act)
* Semantic landmarks: `header`, `nav` (with `aria-label` when there are several), `main#main`, `footer`; skip link first.
* One H1, headings never skip levels (the audit checks).
* Contrast: 4.5:1 body, 3:1 large text (24 px or 19 px bold) and UI components, including text on images (use a scrim) and placeholder styles. Check both themes.
* Keyboard: everything operable, logical order, visible `:focus-visible` style on every interactive element, no traps, Escape closes overlays.
* Targets: at least 24x24 px (WCAG 2.2), 44x44 px recommended on touch.
* Images: meaningful `alt`; decorative images `alt=""`; icons that act as buttons get an accessible name.
* Forms: visible labels, programmatic errors, `autocomplete`, no timeouts without warning.
* Motion: reduced motion branch, pause controls for anything moving longer than 5 s, nothing flashing more than 3 times per second.
* Language: `lang="pl"` on `<html>`, `lang` attribute on foreign language fragments.
* Verify with the axe pass in the §9 audit plus one real keyboard run through the page.

## Hard rules
* No content that is not in the brief or the client's materials.
* Never `transition: all` (`transition-all`).
* Never hand roll a component transition the `transitions-dev` catalog ships, when that skill is installed.
* Never: purple gradients on white, navy and gold as a default palette, the hero / 3 features / testimonials / footer layout, fabricated stats or testimonials, stock handshake photos, fake browser or map chrome.
* Never hide content in plain CSS: hidden motion states exist only under `html.motion` from the boot pattern with its failsafe.
* Never start the hero or any LCP candidate at opacity 0, and never make it wait for JavaScript.
* Never animate layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`, `box-shadow` spread, `font-size`, `letter-spacing`) on scroll or hover.
* Never pin with ScrollTrigger `pin: true` when a CSS sticky pin can do the job (it is the default in the recipes).
* Never recolor `<body>` from JS for section themes; sections own their colors.
* Never two scroll engines, never scrolljacking.
* Every form that collects contact data has an explicit, non dark patterned consent checkbox where the market requires it (RODO / GDPR, see §12).
* No decorative image, embed, or animated element without reserved space (`width` / `height` or `aspect-ratio`).
* Every photo ships as WebP (AVIF optional), `loading="lazy"` below the fold, `srcset` for responsive sizes, explicit dimensions. The LCP image is never lazy loaded and gets `fetchpriority="high"`.
* Hero or background video: compressed (H.264 or VP9, a few MB for a short loop), `muted playsinline autoplay loop`, a real `poster`, paused offscreen and under reduced motion, never the reason LCP misses the budget.
* WCAG AA is the floor (European Accessibility Act, in force since June 2025): 4.5:1 body text contrast, 3:1 large text, everything keyboard operable with a visible focus state, real `alt` text, a pause control for motion longer than 5 seconds, no flashing more than 3 times per second.
* Never invent facts to fill SEO or GEO content (prices, numbers, reviews, credentials). Never mark up what the page does not show.
* Never block AI search crawlers by accident; never ship `noindex` to production.
* Nothing ships on a failing visual QA loop (§13) or site audit (§9).
* Parallel builds: no agent starts before the contract is frozen (§0a.4); no two agents edit the same file; Section agents never touch tokens, base, motion, head, header or footer; copy is written by one agent; reviewers are never the authors; the final audit runs with no other agent active.

## Pre ship checklist
* [ ] Primary query and page map defined; title, description, H1 and first 100 words written for them (§10).
* [ ] Copy passes §6: specific, no banned phrases, CTAs say what happens, placeholders visible.
* [ ] Message architecture holds: one memorable sentence, one message per section, skim test passes, next step always within one screen.
* [ ] Design held to §5: one aesthetic direction, one hero move, on grid spacing rhythm.
* [ ] Motion Storyboard written and followed; one signature moment; no two neighbouring sections share an effect.
* [ ] Motion tokens in `:root`; no literal durations or easings in components.
* [ ] Boot pattern in `<head>`; page fully readable with JS off (audit `nojs` pass).
* [ ] Hero animates in CSS from first paint, never from opacity 0.
* [ ] One scroll engine; Lenis (if used) driven by `gsap.ticker` and synced with ScrollTrigger; `data-lenis-prevent` on nested scrollers; anchors work with the sticky header offset.
* [ ] Pins are CSS sticky; mobile layouts replace pins and horizontal sections; `svh` used for full height sections.
* [ ] `prefers-reduced-motion` branch: no movement, Lenis off, marquees stopped, content complete.
* [ ] Component transitions from `transitions-dev` when installed; `transitions review` clean, or native fallback stated.
* [ ] `site-audit.mjs` passes: 0 console errors, 0 hidden content, 0 focus issues, CLS ≤ 0.1, no overflow, 0 serious axe issues, SEO basics complete; frames reviewed.
* [ ] Every card and button has real hover, focus and pressed states.
* [ ] Fonts preloaded, diacritics verified for the target market (ą ć ę ł ń ó ś ź ż for Polish).
* [ ] Images WebP with dimensions and `srcset`; LCP image eager with `fetchpriority="high"`.
* [ ] Video compressed, poster set, paused offscreen and under reduced motion.
* [ ] No horizontal overflow at any QA breakpoint.
* [ ] JSON-LD (true and visible only), sitemap, robots.txt (AI search bots allowed), canonical, Open Graph per §10; Search Console and Bing Webmaster Tools ready for launch.
* [ ] Forms per §6a: visible labels, autocomplete, inline errors, success state, separate optional marketing consent.
* [ ] No fabricated stats, testimonials or reviews anywhere, including counters.
* [ ] Core Web Vitals within budget on throttled mobile, or exception path documented.
* [ ] Contrast, keyboard access, visible focus, alt text, pause controls verified.
* [ ] Parallel builds: contract and Rhythm Map frozen before P2, one owner per file, review fan out run by fresh agents, findings classified, blockers and majors closed, final audit run alone (§0a).
* [ ] Real estate builds: every point of §12.

