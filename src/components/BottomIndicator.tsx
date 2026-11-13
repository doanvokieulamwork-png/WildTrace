import './BottomIndicator.css'

/** iOS home indicator strip (Figma "Bottom Indicator"). */
export function BottomIndicator({ className = '' }: { className?: string }) {
  return (
    <div className={`bottom-indicator ${className}`} aria-hidden>
      <div className="bottom-indicator__bar" />
    </div>
  )
}
