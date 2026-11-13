import pin from '../../assets/flow1/icon-location.svg'
import star from '../../assets/flow1/icon-star.svg'
import type { DexEntry } from '../../mocks/dex'
import './DexCard.css'

/** One "New in your dex" card (Figma Card-Info). */
export function DexCard({ entry }: { entry: DexEntry }) {
  const tilt = entry.tilted ? ' dex-card__art--tilted' : ''
  return (
    <article className="dex-card">
      <div className="dex-card__illustration dex-card__illustration--base" aria-hidden>
        <div className={`dex-card__art dex-card__art--base${tilt}`}>
          <img src={entry.baseImage} alt="" style={{ objectFit: entry.baseFit }} />
        </div>
      </div>
      <div className="dex-card__illustration">
        <div className={`dex-card__art dex-card__art--insect${tilt}`}>
          <img src={entry.insectImage} alt={entry.name ?? entry.latinName} />
        </div>
      </div>
      <div className={`dex-card__content${entry.name ? '' : ' dex-card__content--fill'}`}>
        <div className="dex-card__title">
          {entry.name && <h3 className="dex-card__name t-subheading">{entry.name}</h3>}
          <p className="dex-card__latin t-body">{entry.latinName}</p>
        </div>
        <div className="dex-card__info t-caption">
          <span className="dex-card__meta">
            <img src={star} alt="" />
            {entry.rarity}
          </span>
          <span className="dex-card__meta">
            <img src={pin} alt="" />
            {entry.location}
          </span>
        </div>
      </div>
    </article>
  )
}
