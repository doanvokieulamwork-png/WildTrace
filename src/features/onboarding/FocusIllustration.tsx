import dragonfly from '../../assets/flow1/onboarding-ascii-dragonfly.png'
import './FocusIllustration.css'

/** Onboarding 1 artwork: ASCII dragonfly inside a camera focus frame. */
export function FocusIllustration() {
  return (
    <div className="focus-illustration">
      <img className="focus-illustration__image" src={dragonfly} alt="" />
      <div className="focus-illustration__frame" aria-hidden>
        <span className="focus-illustration__corner focus-illustration__corner--tl" />
        <span className="focus-illustration__corner focus-illustration__corner--tr" />
        <span className="focus-illustration__corner focus-illustration__corner--bl" />
        <span className="focus-illustration__corner focus-illustration__corner--br" />
      </div>
    </div>
  )
}
