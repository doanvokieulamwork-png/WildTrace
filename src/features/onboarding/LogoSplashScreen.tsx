import { BottomIndicator } from '../../components/BottomIndicator'
import { StatusBar } from '../../components/StatusBar'
import { useAutoAdvance } from './useAutoAdvance'
import './SplashScreen.css'

const WILD = ['W', 'i', 'l', 'd']
const TRACE = ['T', 'r', 'a', 'c', 'e']

/** Splash 2 — animated WildTrace logo (Figma 4022:18207). */
export function LogoSplashScreen() {
  useAutoAdvance('/onboarding/1', 2800)
  return (
    <div className="splash">
      <StatusBar tone="light" />
      <div className="splash__wrapper">
        <div className="splash__logo">
          <h1 className="splash__letters t-logo" aria-label="WildTrace">
            {WILD.map((l, i) => (
              <span key={`w${i}`} className="splash__letter splash__letter--wild" aria-hidden>
                {l}
              </span>
            ))}
            {TRACE.map((l, i) => (
              <span key={`t${i}`} className="splash__letter splash__letter--trace" aria-hidden>
                {l}
              </span>
            ))}
          </h1>
          <p className="splash__tagline t-body">Discover Insects - Map Their World</p>
        </div>
      </div>
      <BottomIndicator className="splash__indicator" />
    </div>
  )
}
