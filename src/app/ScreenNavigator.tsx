import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { allScreens, screenGroups } from './screens'
import { useScreenNavigate } from './useScreenNavigate'
import './ScreenNavigator.css'

const openByDefault = () => window.matchMedia('(min-width: 900px)').matches

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))

/**
 * Showcase tool (not part of the Figma design): lists every screen so testers can
 * jump to any of them, and step back / forward through the flow (also ← / → keys).
 * Lives outside the phone frame on desktop; a small toggle on phones.
 */
export function ScreenNavigator() {
  const [open, setOpen] = useState(openByDefault)
  const { pathname } = useLocation()
  const go = useScreenNavigate()

  const index = allScreens.findIndex((screen) => screen.path === pathname)
  const prev = index > 0 ? allScreens[index - 1] : undefined
  const next = index >= 0 && index < allScreens.length - 1 ? allScreens[index + 1] : undefined

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || isTyping(event.target)) return
      const target = event.key === 'ArrowLeft' ? prev : event.key === 'ArrowRight' ? next : undefined
      if (!target) return
      event.preventDefault()
      go(target.path, { transition: 'none' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, prev, next])

  const jump = (path: string) => {
    go(path, { transition: 'none' })
    // On phones the panel covers the app: close it after a jump.
    if (window.matchMedia('(max-width: 500px)').matches) setOpen(false)
  }

  return (
    <aside className={`screen-nav${open ? ' screen-nav--open' : ''}`} aria-label="Screen navigator">
      <button
        type="button"
        className="screen-nav__toggle t-caption"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Hide screens' : 'Screens'}
      </button>

      {open && (
        <div className="screen-nav__panel">
          <div className="screen-nav__steps">
            <button
              type="button"
              className="screen-nav__step t-body-sm"
              disabled={!prev}
              onClick={() => prev && go(prev.path, { transition: 'none' })}
            >
              ← Back
            </button>
            <button
              type="button"
              className="screen-nav__step t-body-sm"
              disabled={!next}
              onClick={() => next && go(next.path, { transition: 'none' })}
            >
              Next →
            </button>
          </div>

          {screenGroups.map((group) => (
            <section key={group.title} className="screen-nav__group">
              <h2 className="screen-nav__title t-caption">{group.title}</h2>
              <ul className="screen-nav__list">
                {group.screens.map((screen) => (
                  <li key={screen.path}>
                    <button
                      type="button"
                      className="screen-nav__item t-body-sm"
                      aria-current={screen.path === pathname ? 'page' : undefined}
                      onClick={() => jump(screen.path)}
                    >
                      {screen.label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="screen-nav__hint t-caption">Tip: ← / → keys</p>
        </div>
      )}
    </aside>
  )
}
