import { BottomIndicator } from '../../components/BottomIndicator'
import { StatusBar } from '../../components/StatusBar'
import { useAutoAdvance } from './useAutoAdvance'
import { usePreloadFlowImages } from './usePreloadFlowImages'
import './SplashScreen.css'

/** Splash 1 — empty dark screen (Figma 4022:18199). */
export function SplashScreen() {
  usePreloadFlowImages()
  useAutoAdvance('/onboarding/logo', 800)
  return (
    <div className="splash">
      <StatusBar tone="light" />
      <div className="splash__wrapper" />
      <BottomIndicator className="splash__indicator" />
    </div>
  )
}
