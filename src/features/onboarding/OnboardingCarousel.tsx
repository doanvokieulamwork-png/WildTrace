import { Navigate, useParams } from 'react-router-dom'
import { transitionMs, useScreenNavigate } from '../../app/useScreenNavigate'
import { FocusIllustration } from './FocusIllustration'
import { MapIllustration } from './MapIllustration'
import { OnboardingStep } from './OnboardingStep'
import { StampIllustration } from './StampIllustration'
import { onboardingSteps, type OnboardingStepId } from './onboardingSteps'

const illustrations: Record<OnboardingStepId, () => React.JSX.Element> = {
  focus: FocusIllustration,
  stamp: StampIllustration,
  map: MapIllustration,
}

const WELCOME = '/onboarding/welcome'

/**
 * Onboarding 1–3, driven by the `/onboarding/:step` param (1-based).
 * Transitions follow the Figma prototype: Next = dissolve (1.02s; 0.38s into Welcome),
 * swipe = move in (0.3s). Onboarding is one-way, so steps replace the history entry
 * and the browser Back button never lands on a half-finished onboarding.
 */
export function OnboardingCarousel() {
  const go = useScreenNavigate()
  const index = Number(useParams().step) - 1
  const step = onboardingSteps[index]
  if (!step) return <Navigate to="/onboarding/1" replace />

  const Illustration = illustrations[step.id]
  const isLast = index === onboardingSteps.length - 1

  const next = () =>
    isLast
      ? go(WELCOME, { durationMs: transitionMs.dissolveFast, replace: true })
      : go(`/onboarding/${index + 2}`, { replace: true })

  return (
    <OnboardingStep
      progressInset={step.progressInset}
      title={step.title}
      body={step.body}
      illustration={<Illustration />}
      onNext={next}
      onSkip={() => go(WELCOME, { durationMs: transitionMs.dissolveFast, replace: true })}
      onSwipeNext={() =>
        isLast
          ? go(WELCOME, { transition: 'slide-next', durationMs: transitionMs.slide, replace: true })
          : go(`/onboarding/${index + 2}`, { transition: 'slide-next', durationMs: transitionMs.slide, replace: true })
      }
      onSwipePrev={() => {
        if (index > 0) go(`/onboarding/${index}`, { transition: 'slide-prev', durationMs: transitionMs.slide, replace: true })
      }}
    />
  )
}
