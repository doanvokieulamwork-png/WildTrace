import { Link } from 'react-router-dom'

/** Temporary screen used until a flow is implemented on its feature branch. */
export function Placeholder({ title, flow, next }: { title: string; flow: string; next?: { to: string; label: string } }) {
  return (
    <div style={{ padding: 'var(--pad-xl)', paddingTop: 80, display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
      <span className="t-caption" style={{ color: 'var(--color-content-light)' }}>{flow}</span>
      <h1 className="t-h3" style={{ margin: 0 }}>{title}</h1>
      <p className="t-body-sm" style={{ color: 'var(--color-content-base)', margin: 0 }}>
        Not implemented yet. See AGENT.md for the screen list.
      </p>
      {next && (
        <Link
          to={next.to}
          className="t-body-medium"
          style={{
            marginTop: 'var(--gap-lg)',
            height: 'var(--btn-size-lg)',
            borderRadius: 'var(--radius-full)',
            background: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-content)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          {next.label}
        </Link>
      )}
    </div>
  )
}
