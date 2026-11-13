import type { ReactNode } from 'react'
import './PhoneFrame.css'

/**
 * Renders the app inside a 390×844 phone frame on desktop browsers
 * (for showcase), and full-screen on real mobile devices.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="phone-stage">
      <div className="phone-frame">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  )
}
