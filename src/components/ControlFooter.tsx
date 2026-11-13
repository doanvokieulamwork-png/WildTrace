import type { ReactNode } from 'react'
import { BottomIndicator } from './BottomIndicator'
import './ControlFooter.css'

/** Bottom "Control" block: a full-width action area followed by the home indicator. */
export function ControlFooter({ children }: { children: ReactNode }) {
  return (
    <div className="control-footer">
      <div className="control-footer__actions">{children}</div>
      <BottomIndicator />
    </div>
  )
}
