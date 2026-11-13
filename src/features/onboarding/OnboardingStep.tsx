import type { ReactNode } from 'react'
import { ControlFooter } from '../../components/ControlFooter'
import { PrimaryButton } from '../../components/PrimaryButton'
import { StatusBar } from '../../components/StatusBar'
import { useSwipe } from './useSwipe'
import './OnboardingStep.css'

type OnboardingStepProps = {
  /** Right inset of the yellow progress fill, in % (from Figma). */
  progressInset: number
  title: string
  body: string
  illustration: ReactNode
  onNext: () => void
  onSkip: () => void
  onSwipeNext: () => void
  onSwipePrev: () => void
}

/** Shared layout for Onboarding 1–3 (Figma 4022:17887 / 18176 / 17914). */
export function OnboardingStep({
  progressInset,
  title,
  body,
  illustration,
  onNext,
  onSkip,
  onSwipeNext,
  onSwipePrev,
}: OnboardingStepProps) {
  const swipe = useSwipe({ onSwipeLeft: onSwipeNext, onSwipeRight: onSwipePrev })
  return (
    <div className="onboarding-step" {...swipe}>
      <div className="onboarding-step__top-nav">
        <StatusBar tone="dark" />
      </div>
      <div className="onboarding-step__container">
        <div className="onboarding-step__progress">
          <div className="onboarding-step__track" role="progressbar" aria-valuenow={100 - progressInset} aria-valuemin={0} aria-valuemax={100}>
            <div className="onboarding-step__fill" style={{ right: `${progressInset}%` }} />
          </div>
          <button type="button" className="onboarding-step__skip t-body" onClick={onSkip}>
            Skip
          </button>
        </div>
        <div className="onboarding-step__main">
          <div className="onboarding-step__image">{illustration}</div>
          <div className="onboarding-step__text">
            <h1 className="t-h2">{title}</h1>
            <p className="t-body">{body}</p>
          </div>
        </div>
      </div>
      <ControlFooter>
        <PrimaryButton onClick={onNext}>Next</PrimaryButton>
      </ControlFooter>
    </div>
  )
}
