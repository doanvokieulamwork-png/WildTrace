import { Outlet } from 'react-router-dom'
import { PhoneFrame } from './PhoneFrame'
import { ScreenNavigator } from './ScreenNavigator'

/** Root layout: the phone frame with the current screen, plus the showcase screen navigator. */
export function AppLayout() {
  return (
    <>
      <PhoneFrame>
        <Outlet />
      </PhoneFrame>
      <ScreenNavigator />
    </>
  )
}
