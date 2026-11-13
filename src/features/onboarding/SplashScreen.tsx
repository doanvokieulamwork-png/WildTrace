import { BottomIndicator } from '../../components/BottomIndicator'
import { StatusBar } from '../../components/StatusBar'
import { useAutoAdvance } from './useAutoAdvance'
import './SplashScreen.css'

/** Splash 1 — empty dark screen (Figma 4022:18199). */
export function SplashScreen() {
  useAutoAdvance('/onboarding/logo', 900)
  return (
    <div className="splash">
      <StatusBar tone="light" />
      <div className="splash__wrapper" />
      <BottomIndicator className="splash__indicator" />
    </div>
  )
}
