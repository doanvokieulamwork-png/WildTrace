import { currentUser } from '../../mocks/user'
import { AsciiTree } from './AsciiTree'
import './JourneyCard.css'

/** "Your Naturalist Journey" summary card (Figma Feature-Component/Card-Sumary). */
export function JourneyCard() {
  return (
    <section className="journey-card">
      <div className="journey-card__content">
        <div className="journey-card__title">
          <p className="journey-card__eyebrow t-body-sm">Your Naturalist Journey</p>
          <h2 className="journey-card__level t-h3">{currentUser.journeyLevel}</h2>
        </div>
        <p className="journey-card__body t-body-sm">You’re helping reveal patterns in local insect life.</p>
      </div>
      <AsciiTree />
    </section>
  )
}
