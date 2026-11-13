import bell from '../../assets/flow1/icon-bell.svg'
import { currentUser } from '../../mocks/user'
import './HomeHeader.css'

/** Home top navigation: avatar, notifications and greeting. */
export function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-header__bar">
        <div className="home-header__leading">
          <div className="home-header__avatar">
            <img src={currentUser.avatar} alt={currentUser.firstName} />
          </div>
        </div>
        <div className="home-header__trailing">
          <button type="button" className="home-header__action" aria-label="Notifications">
            <img src={bell} alt="" />
          </button>
        </div>
      </div>
      <h1 className="home-header__heading t-h1">
        <span className="home-header__greeting">Hi {currentUser.firstName},</span>
        <span className="home-header__subtitle">The tiny wild awaits</span>
      </h1>
    </header>
  )
}
