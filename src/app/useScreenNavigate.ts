import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Screen-to-screen transitions, mirroring Figma prototype transitions.
 * - `dissolve`: the next screen fades in on top of the current one.
 * - `slide-next` / `slide-prev`: the next screen moves in from the right / left (swipe).
 */
export type ScreenTransition = 'none' | 'dissolve' | 'slide-next' | 'slide-prev'

/** Durations (ms) taken from the Figma prototype reactions. */
export const transitionMs = {
  dissolve: 1022,
  dissolveFast: 383,
  slide: 300,
} as const

type GoOptions = {
  transition?: ScreenTransition
  durationMs?: number
  replace?: boolean
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** True while a screen transition runs: blocks double taps / swipe + tap from skipping screens. */
let busy = false

/**
 * `navigate()` wrapped in a View Transition (CSS in global.css). We drive
 * `document.startViewTransition` ourselves and render the next route with `flushSync`,
 * so the new screen is in the DOM before the browser snapshots it. Browsers without
 * the View Transitions API (or with reduced motion) change screens instantly.
 */
export function useScreenNavigate() {
  const navigate = useNavigate()
  return useCallback(
    (to: string, { transition = 'dissolve', durationMs = transitionMs.dissolve, replace = false }: GoOptions = {}) => {
      if (busy) return
      const animate =
        transition !== 'none' && !prefersReducedMotion() && typeof document.startViewTransition === 'function'
      if (!animate) {
        void navigate(to, { replace })
        return
      }
      busy = true
      const root = document.documentElement
      root.dataset.screenTransition = transition
      root.style.setProperty('--screen-transition-duration', `${durationMs}ms`)
      const vt = document.startViewTransition(async () => {
        await navigate(to, { replace, flushSync: true })
      })
      void vt.finished.finally(() => {
        busy = false
        delete root.dataset.screenTransition
      })
    },
    [navigate],
  )
}
