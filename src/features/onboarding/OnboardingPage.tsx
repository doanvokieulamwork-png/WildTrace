import { Navigate, Route, Routes } from 'react-router-dom'
import { LogoSplashScreen } from './LogoSplashScreen'
import { OnboardingCarousel } from './OnboardingCarousel'
import { SplashScreen } from './SplashScreen'
import { WelcomeScreen } from './WelcomeScreen'

/** Flow 1 — Onboarding routes: splash → logo → 1/2/3 → welcome → /home. */
export function OnboardingPage() {
  return (
    <Routes>
      <Route index element={<SplashScreen />} />
      <Route path="logo" element={<LogoSplashScreen />} />
      <Route path="welcome" element={<WelcomeScreen />} />
      <Route path=":step" element={<OnboardingCarousel />} />
      <Route path="*" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  )
}
