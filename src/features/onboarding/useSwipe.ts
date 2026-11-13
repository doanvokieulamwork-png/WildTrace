import { useRef, type PointerEvent } from 'react'

/** Minimum horizontal travel (px) before a drag counts as a swipe. */
const SWIPE_THRESHOLD = 48

/** Horizontal swipe detection with pointer events (touch + mouse drag). */
export function useSwipe({ onSwipeLeft, onSwipeRight }: { onSwipeLeft: () => void; onSwipeRight: () => void }) {
  const start = useRef<{ x: number; y: number } | null>(null)
  return {
    onPointerDown: (e: PointerEvent) => {
      start.current = { x: e.clientX, y: e.clientY }
    },
    onPointerUp: (e: PointerEvent) => {
      const from = start.current
      start.current = null
      if (!from) return
      const dx = e.clientX - from.x
      const dy = e.clientY - from.y
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
      if (dx < 0) onSwipeLeft()
      else onSwipeRight()
    },
    onPointerCancel: () => {
      start.current = null
    },
  }
}
