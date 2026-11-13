# AGENT.md — WildTrace shared rules for AI agents

This file is the single source of truth for **every AI coding tool** working on this repo
(Claude Code, Codex, Cursor, Copilot, …) and for humans. `CLAUDE.md` and `AGENTS.md`
point here. If a rule changes, change it **here only**.

Team communication can be Vietnamese; code, commits, comments and docs are in **English**.

---

## 1. Product

**WildTrace** — "Discover Insects · Map Their World". A mobile app MVP where users photograph
insects, an AI identifies the species, and each discovery becomes a collectible card that
unlocks achievements.

- It is a **mobile app**, but this MVP runs **in a web browser** for testing and showcase.
- Target viewport: **390 × 844** (iPhone 14). On desktop the app renders inside a phone
  frame (`src/app/PhoneFrame.tsx`); on real phones (≤500px) it goes full-screen.
- There is **no real backend yet**. Use mock data in `src/mocks/` and fake async (e.g.
  `setTimeout`) for AI identification, unless the team decides otherwise.

## 2. Design source

- Figma (current, V1): https://www.figma.com/design/mZ4zszrGGodQVXIzVDxF2M/Odd-Side-Good-Vibe--V1-?node-id=4022-17886
  — Flow 1 + Home node ids (`4022:*`) are from this file.
- Figma (older presentation file, still the source for flow2/flow3 ids `2070:*` until
  they are re-mapped): https://www.figma.com/design/YGQ6JigqO0ir3u7upacSXL/Odd-Side-Good-Vibe-Final-Presentation?node-id=2070-246
- Always open the specific frame (node id in the tables) before building a screen.
- Pixel-match the design. If the design is ambiguous or missing a state (loading, error,
  empty), make a sensible choice and note it in the PR description — do not invent new
  visual styles.

### Design tokens

All tokens from Figma variables live in `src/styles/tokens.css`.

- **Never hardcode** colors, spacing, radius or font values in components — use
  `var(--…)` tokens and the `.t-*` typography classes.
- Need a value that is not a token? Add it to `tokens.css` (named after the Figma
  variable) in the same PR.
- Fonts: headings `STIX Two Text` (serif), body `Instrument Sans`.
- Key colors: canvas `#f9f7f4`, primary dark `#352b18`, accent yellow `#ffdb3d`.

## 3. Flows, screens and branches

One branch per flow. Branch name = `feature/flowN`.

### flow1 — Onboarding → `feature/flow1`
Figma V1 section `4022:17886`. Route prefix `/onboarding`.

| # | Screen | Figma node | Route | Notes |
|---|--------|-----------|-------|-------|
| 1 | Splash (dark, empty) | `4022:18199` | `/onboarding` | auto-advance 0.9s |
| 2 | Splash with "WildTrace" logo | `4022:18207` | `/onboarding/logo` | letter animation, auto-advance 2.8s |
| 3 | Onboarding 1 — "Tiny World in Plain Sight" | `4022:17887` | `/onboarding/1` | progress 1/3, Skip → Welcome |
| 4 | Onboarding 2 — "Build Your Collection" | `4022:18176` | `/onboarding/2` | progress 2/3 |
| 5 | Onboarding 3 — "Your Discoveries Matter" | `4022:17914` | `/onboarding/3` | progress 3/3 |
| 6 | Welcome to WildTrace | `4022:18159` | `/onboarding/welcome` | "Start Exploring" → Home |
| 7 | Home | `4022:17937` | `/home` | shared screen, see below |

### Home (shared) — built in `feature/flow1`
Route `/home`, folder `src/features/home/`. Greeting, Naturalist Journey card
("Field Explorer"), nearby discovery banner, "New in your dex", "Wild Blogs",
bottom tab bar with center capture button. flow2 and flow3 must **reuse** it, not copy it.

### flow2 — Capture & identify → `feature/flow2`
Figma section `Flow 2` (`2070:4495`). Route prefix `/capture`.

| # | Screen | Figma node | Notes |
|---|--------|-----------|-------|
| 1 | Home (entry point) | `2070:4496` | tap capture button |
| 2 | Camera — taking (framing) | `2070:4618` | mock camera with sample image |
| 3 | Camera — taking (focused) | `2070:4641` | |
| 4 | AI identifying | `2070:4666` | loading state + location sheet |
| 5 | New species discovered (card reveal) | `2070:4752` | |
| 6 | New species claim | `2070:4756`, `2070:5038` | "Card Claimed" stamp |
| 7 | Achievement unlock (hand-off to flow3) | `2070:5061` | |
| 8 | Species detail | `2070:5351`, `2070:5489` | long scroll: observations, traits, overview, conservation, guide |
| 9 | Observation details | `2070:5627`, `2070:5669`, `2070:5699` | gallery → photo → note |

### flow3 — Achievements → `feature/flow3`
Figma section `Flow 3` (`2070:5732`). Route prefix `/achievement`.

| # | Screen | Figma node | Notes |
|---|--------|-----------|-------|
| 1 | Badge unlocked — "Thrill of Exploration" | `2070:5733` | Share / View your Achievement |
| 2 | Achievement main (badge grid, progress 05/12) | `2070:5746` | |
| 3 | Badge detail modal — discovered | `2070:5776` | |
| 4 | Badge detail modal — undiscovered ("???") | `2070:5825` | |

New flows: add a section to this table and use the next number (`feature/flow4`, …).

## 4. Tech stack

- **React 19 + TypeScript + Vite**, `react-router-dom` (HashRouter so static hosting works).
- Plain CSS files colocated with components + tokens. No CSS framework, no UI library,
  unless the team agrees and this file is updated.
- Node ≥ 20. Package manager: **npm** (keep `package-lock.json` committed).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build — must pass before every PR
npm run lint
```

## 5. Project structure

```
src/
  app/            # router, PhoneFrame, app-level providers
  components/     # shared UI used by 2+ flows (Button, TopNav, BottomTab, Card…)
  features/
    onboarding/   # flow1
    home/         # shared Home screen (owned by flow1)
    capture/      # flow2
    achievement/  # flow3
  mocks/          # mock data (species, badges, user)
  assets/         # images/icons exported from Figma
  styles/         # tokens.css, global.css
```

Rules:
- Code for a flow stays inside its `features/<flow>/` folder.
- A component moves to `src/components/` only when a **second** flow needs it.
  Announce it in the PR — other branches may depend on it.
- Do not edit another flow's folder from your branch. If you must, keep the change
  minimal and call it out in the PR.
- One component per file, `PascalCase.tsx`; CSS file with the same name next to it.
- Named exports only. No `any`. Keep components small; extract hooks into `useX.ts`.
- Assets: export from Figma as SVG (icons) or WebP/PNG @2x (photos) into
  `src/assets/<flow>/` (e.g. `src/assets/flow1/`; assets used by 2+ flows go in
  `src/assets/shared/`), kebab-case names. Downscale large photos (`sips -Z 900`) —
  keep the bundle small.
- Shared components already available: `StatusBar`, `BottomIndicator`, `PrimaryButton`,
  `ControlFooter` (in `src/components/`).

## 6. Git workflow

Branches:
- `main` — stable, showcase-ready. Protected; only merged from `develop`.
- `develop` — integration branch. All feature branches start from and merge back here.
- `feature/flowN` — one per flow (see section 3).
- Sub-work inside a flow if needed: `feature/flowN-<short-name>` (e.g. `feature/flow2-camera`), branched from `feature/flowN`.
- Fixes: `fix/<short-name>`.

Commits — Conventional Commits with flow scope:
```
feat(flow1): add onboarding carousel
fix(flow2): correct card claim animation timing
chore: update tokens from Figma
```

Pull requests:
- Target `develop`. Title in Conventional Commit form.
- Description: what screens/nodes were built, screenshot or recording, any design
  assumption made.
- `npm run build` and `npm run lint` must pass.
- Rebase/merge `develop` into your branch before opening the PR to resolve conflicts locally.

## 7. Rules for AI agents

1. Read this file first, every session.
2. Work only on the branch for the flow you were asked to do. Check with `git branch --show-current` (or `git rev-parse --abbrev-ref HEAD` on older git) before editing.
3. Before building a screen, fetch the Figma frame (node id above) for layout and copy. Use real copy from Figma, not lorem ipsum.
4. Use tokens; never hardcode visual values.
5. Do not add dependencies without saying why in the PR. Do not upgrade major versions.
6. Do not commit secrets, `.env` files, or `node_modules`.
7. Do not push to `main` or `develop` directly. Do not force-push shared branches.
8. Leave the app runnable: `npm run build` must pass after your change.
9. When you finish a screen, verify it in the browser at 390×844.
10. If this file is wrong or out of date, update it in your PR rather than working around it.
