export type OnboardingStepId = 'focus' | 'stamp' | 'map'

export type OnboardingStepData = {
  id: OnboardingStepId
  /** Right inset of the progress fill, % (Figma "Progress" layer). */
  progressInset: number
  title: string
  body: string
}

export const onboardingSteps: OnboardingStepData[] = [
  {
    id: 'focus',
    progressInset: 63.12,
    title: 'Tiny World in Plain Sight',
    body: 'Look closer and discover the fascinating insects living all around you. Every corner holds something new waiting to be found.',
  },
  {
    id: 'stamp',
    progressInset: 32.32,
    title: 'Build Your Collection',
    body: 'Scan the insects you encounter, uncover their species, and add each new discovery to your growing collection of cards.',
  },
  {
    id: 'map',
    progressInset: 5.7,
    title: 'Your Discoveries Matter',
    body: 'Every sighting you record adds to a growing picture of insect biodiversity to better understand the world around us.',
  },
]
