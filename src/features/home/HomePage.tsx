import { Placeholder } from '../../components/Placeholder'

export function HomePage() {
  return <Placeholder flow="Home (shared by Flow 1 & 2)" title="Hi Kago, the tiny wild awaits" next={{ to: '/capture', label: 'Capture' }} />
}
