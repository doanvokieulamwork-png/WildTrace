import { useEffect } from 'react'
import { useScreenNavigate, type ScreenTransition } from '../../app/useScreenNavigate'

/** Navigates to `to` after `delayMs` (Figma "After delay" reactions on the splash screens). */
export function useAutoAdvance(to: string, delayMs: number, transition: ScreenTransition = 'none', durationMs?: number) {
  const go = useScreenNavigate()
  useEffect(() => {
    const id = window.setTimeout(() => go(to, { transition, durationMs, replace: true }), delayMs)
    return () => window.clearTimeout(id)
  }, [go, to, delayMs, transition, durationMs])
}
