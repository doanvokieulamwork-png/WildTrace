/**
 * Every screen of the prototype, in flow order. Used by the ScreenNavigator
 * (showcase tool) to jump to any screen and step back / forward.
 * When a flow adds screens, add them here.
 */
export type ScreenEntry = {
  path: string
  label: string
}

export type ScreenGroup = {
  title: string
  screens: ScreenEntry[]
}

export const screenGroups: ScreenGroup[] = [
  {
    title: 'Flow 1 · Onboarding',
    screens: [
      { path: '/onboarding', label: 'Splash' },
      { path: '/onboarding/logo', label: 'Splash · Logo' },
      { path: '/onboarding/1', label: 'Onboarding 1' },
      { path: '/onboarding/2', label: 'Onboarding 2' },
      { path: '/onboarding/3', label: 'Onboarding 3' },
      { path: '/onboarding/welcome', label: 'Welcome' },
    ],
  },
  {
    title: 'Shared',
    screens: [{ path: '/home', label: 'Home' }],
  },
]

export const allScreens: ScreenEntry[] = screenGroups.flatMap((group) => group.screens)
