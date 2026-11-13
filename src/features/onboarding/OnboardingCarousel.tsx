import { Navigate, useNavigate, useParams } from 'react-router-dom'
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

/** Onboarding 1–3, driven by the `/onboarding/:step` param (1-based). */
export function OnboardingCarousel() {
  const navigate = useNavigate()
  const index = Number(useParams().step) - 1
  const step = onboardingSteps[index]
  if (!step) return <Navigate to="/onboarding/1" replace />

  const Illustration = illustrations[step.id]
  const isLast = index === onboardingSteps.length - 1
  return (
    <OnboardingStep
      key={step.id}
      progressInset={step.progressInset}
      title={step.title}
      body={step.body}
      illustration={<Illustration />}
      onNext={() => navigate(isLast ? '/onboarding/welcome' : `/onboarding/${index + 2}`)}
      onSkip={() => navigate('/onboarding/welcome')}
    />
  )
}
