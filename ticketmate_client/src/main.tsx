import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { ButtonAppBar } from './Shared/AppBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ButtonAppBar />
  </StrictMode>
)
