import arrow from '../../assets/flow1/icon-arrow-up-right.svg'
import pin from '../../assets/flow1/icon-location.svg'
import thumb from '../../assets/flow1/home-discovery-thumb.png'
import './DiscoveryBanner.css'

/** Nearby discovery call-to-action (Figma Feature-Component/Call-To-Action). */
export function DiscoveryBanner() {
  return (
    <section className="discovery-banner">
      <div className="discovery-banner__image">
        <img src={thumb} alt="" />
      </div>
      <div className="discovery-banner__content">
        <p className="t-body-medium">Someone just discovered a new species in your area</p>
        <div className="discovery-banner__caption t-caption">
          <span className="discovery-banner__meta">
            <img src={pin} alt="" />
            300m
          </span>
          <span className="discovery-banner__meta">
            <img src={pin} alt="" />3 mins ago
          </span>
        </div>
      </div>
      <button type="button" className="discovery-banner__action" aria-label="Open discovery">
        <img src={arrow} alt="" />
      </button>
    </section>
  )
}
