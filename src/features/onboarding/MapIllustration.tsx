import map1 from '../../assets/flow1/onboarding-map-1.png'
import map2 from '../../assets/flow1/onboarding-map-2.png'
import './MapIllustration.css'

/** Onboarding 3 artwork: two layered map cut-outs. */
export function MapIllustration() {
  return (
    <div className="map-illustration">
      <div className="map-illustration__stack">
        <img className="map-illustration__layer" src={map1} alt="" />
        <img className="map-illustration__layer map-illustration__layer--top" src={map2} alt="" />
      </div>
    </div>
  )
}
