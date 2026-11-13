import base from '../../assets/flow1/insect-leaf-insect-base.png'
import insect from '../../assets/flow1/insect-leaf-insect.png'
import moth from '../../assets/flow1/insect-yellow-underwing-moth.png'
import './StampIllustration.css'

/** Stamp scallop edges exported from Figma, in layer order (scallop-00 … scallop-57). */
const scallops = Object.entries(
  import.meta.glob<string>('../../assets/flow1/stamp/*.svg', { eager: true, import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

const leftEdge = scallops.slice(0, 17)
const topEdge = scallops.slice(17, 29)
const bottomEdge = scallops.slice(29, 41)
const rightEdge = scallops.slice(41, 58)

function ScallopRow({ items }: { items: string[] }) {
  return (
    <div className="stamp__row">
      {items.map((src, i) => (
        <img key={i} className="stamp__scallop" src={src} alt="" />
      ))}
    </div>
  )
}

/** Onboarding 2 artwork: collectible stamp card next to a moth. */
export function StampIllustration() {
  return (
    <div className="stamp-illustration">
      <div className="stamp-illustration__stamp-box">
        <div className="stamp">
          <div className="stamp__side">
            <div className="stamp__side-inner stamp__side-inner--left">
              <ScallopRow items={leftEdge} />
            </div>
          </div>
          <div className="stamp__middle">
            <div className="stamp__edge">
              <ScallopRow items={topEdge} />
            </div>
            <div className="stamp__wrapper">
              <div className="stamp__card">
                <div className="stamp__insect">
                  <img className="stamp__base" src={base} alt="" />
                  <img className="stamp__bug" src={insect} alt="" />
                </div>
                <div className="stamp__info">
                  <span className="stamp__name">Common Bluetail</span>
                  <span className="stamp__number">012</span>
                </div>
              </div>
            </div>
            <div className="stamp__edge stamp__edge--bottom">
              <ScallopRow items={bottomEdge} />
            </div>
          </div>
          <div className="stamp__side">
            <div className="stamp__side-inner stamp__side-inner--right">
              <ScallopRow items={rightEdge} />
            </div>
          </div>
        </div>
      </div>
      <img className="stamp-illustration__moth" src={moth} alt="" />
    </div>
  )
}
