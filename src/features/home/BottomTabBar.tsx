import { Link } from 'react-router-dom'
import home from '../../assets/flow1/tab-home.svg'
import dex from '../../assets/flow1/tab-insect-dex.svg'
import scan from '../../assets/flow1/tab-scan.svg'
import map from '../../assets/flow1/tab-wild-map.svg'
import me from '../../assets/flow1/tab-me.svg'
import { BottomIndicator } from '../../components/BottomIndicator'
import './BottomTabBar.css'

type Tab = { label: string; icon: string; active?: boolean }

const leftTabs: Tab[] = [
  { label: 'Home', icon: home, active: true },
  { label: 'Insect Dex', icon: dex },
]
const rightTabs: Tab[] = [
  { label: 'Wild Map', icon: map },
  { label: 'Me', icon: me },
]

function TabItem({ tab }: { tab: Tab }) {
  return (
    <button type="button" className="tab-bar__item" aria-current={tab.active ? 'page' : undefined}>
      <span className="tab-bar__container">
        <img className="tab-bar__icon" src={tab.icon} alt="" />
        <span className={`tab-bar__label t-label-sm${tab.active ? ' tab-bar__label--active' : ''}`}>{tab.label}</span>
      </span>
    </button>
  )
}

/** Home bottom navigation with the centre capture button (Figma Feature/Bottom-Nav). */
export function BottomTabBar() {
  return (
    <nav className="tab-bar">
      <div className="tab-bar__items">
        {leftTabs.map((t) => (
          <TabItem key={t.label} tab={t} />
        ))}
        <div className="tab-bar__item tab-bar__item--capture">
          <span className="tab-bar__container">
            <Link to="/capture" className="tab-bar__capture" aria-label="Capture an insect">
              <img src={scan} alt="" />
            </Link>
          </span>
        </div>
        {rightTabs.map((t) => (
          <TabItem key={t.label} tab={t} />
        ))}
      </div>
      <BottomIndicator />
    </nav>
  )
}
