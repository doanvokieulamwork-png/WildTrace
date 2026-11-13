import { useEffect, useState } from 'react'

const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/** Steps through `count` frames once, `frameMs` apart, and holds on the last one. */
export function useFrameSequence(count: number, frameMs: number) {
  const [frame, setFrame] = useState(() => (prefersReducedMotion() ? count - 1 : 0))
  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = window.setInterval(() => {
      setFrame((f) => {
        if (f >= count - 1) {
          window.clearInterval(id)
          return f
        }
        return f + 1
      })
    }, frameMs)
    return () => window.clearInterval(id)
  }, [count, frameMs])
  return frame
}
