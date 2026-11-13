import cellularDark from '../assets/shared/status-cellular-dark.svg'
import wifiDark from '../assets/shared/status-wifi-dark.svg'
import batteryDark from '../assets/shared/status-battery-dark.svg'
import cellularLight from '../assets/shared/status-cellular-light.svg'
import wifiLight from '../assets/shared/status-wifi-light.svg'
import batteryLight from '../assets/shared/status-battery-light.svg'
import './StatusBar.css'

const icons = {
  dark: { cellular: cellularDark, wifi: wifiDark, battery: batteryDark },
  light: { cellular: cellularLight, wifi: wifiLight, battery: batteryLight },
}

/** iPhone status bar (Figma "Status Bar - iPhone"). `tone` is the colour of the glyphs. */
export function StatusBar({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const set = icons[tone]
  return (
    <div className={`status-bar status-bar--${tone} ${className}`} aria-hidden>
      <div className="status-bar__time t-status-time">9:41</div>
      <div className="status-bar__island" />
      <div className="status-bar__levels">
        <img src={set.cellular} alt="" className="status-bar__cellular" />
        <img src={set.wifi} alt="" className="status-bar__wifi" />
        <img src={set.battery} alt="" className="status-bar__battery" />
      </div>
    </div>
  )
}
