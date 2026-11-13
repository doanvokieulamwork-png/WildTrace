import { useNavigate } from 'react-router-dom'
import photo from '../../assets/flow1/welcome-photo.jpg'
import { ControlFooter } from '../../components/ControlFooter'
import { PrimaryButton } from '../../components/PrimaryButton'
import { StatusBar } from '../../components/StatusBar'
import { welcomeInsectAscii } from './welcomeInsectAscii'
import './WelcomeScreen.css'

/** Welcome to WildTrace (Figma 4022:18159). */
export function WelcomeScreen() {
  const navigate = useNavigate()
  return (
    <div className="welcome">
      <div className="welcome__image">
        <img className="welcome__photo" src={photo} alt="" />
        <div className="welcome__scrim" />
        <pre className="welcome__ascii" aria-hidden>
          {welcomeInsectAscii}
        </pre>
      </div>
      <div className="welcome__body">
        <h1 className="welcome__title t-h2">Welcome to WildTrace</h1>
        <p className="welcome__subtitle t-body">Your field journal is ready for what you find next.</p>
      </div>
      <div className="welcome__top-nav">
        <StatusBar tone="light" />
      </div>
      <div className="welcome__control">
        <ControlFooter>
          <PrimaryButton onClick={() => navigate('/home', { replace: true })}>Start Exploring</PrimaryButton>
        </ControlFooter>
      </div>
    </div>
  )
}
