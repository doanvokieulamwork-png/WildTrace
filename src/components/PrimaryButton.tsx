import type { ButtonHTMLAttributes } from 'react'
import './PrimaryButton.css'

/** Large primary pill button (Figma "Button/Main", primary, large). */
export function PrimaryButton({ className = '', children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`primary-button t-button ${className}`} {...rest}>
      <span className="primary-button__label">{children}</span>
    </button>
  )
}
