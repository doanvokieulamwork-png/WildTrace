import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PhoneFrame } from './app/PhoneFrame'
import { router } from './app/routes'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhoneFrame>
      <RouterProvider router={router} />
    </PhoneFrame>
  </StrictMode>,
)
