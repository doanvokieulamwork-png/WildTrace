import { Navigate, createHashRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { OnboardingPage } from '../features/onboarding/OnboardingPage'
import { HomePage } from '../features/home/HomePage'
import { CapturePage } from '../features/capture/CapturePage'
import { AchievementPage } from '../features/achievement/AchievementPage'

/**
 * Route map. Each flow owns its own path prefix:
 *   flow1 Onboarding  → /onboarding/*
 *   (shared)  Home    → /home
 *   flow2 Capture     → /capture/*
 *   flow3 Achievement → /achievement/*
 * HashRouter is used so the build works on any static host (GitHub Pages, etc).
 */
export const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Navigate to="/onboarding" replace /> },
      { path: '/onboarding/*', element: <OnboardingPage /> },
      { path: '/home', element: <HomePage /> },
      { path: '/capture/*', element: <CapturePage /> },
      { path: '/achievement/*', element: <AchievementPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
