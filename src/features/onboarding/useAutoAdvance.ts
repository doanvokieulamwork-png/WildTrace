import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/** Navigates to `to` after `delayMs` (used by the splash screens). */
export function useAutoAdvance(to: string, delayMs: number) {
  const navigate = useNavigate()
  useEffect(() => {
    const id = window.setTimeout(() => navigate(to, { replace: true }), delayMs)
    return () => window.clearTimeout(id)
  }, [navigate, to, delayMs])
}
