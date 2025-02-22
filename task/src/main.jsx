import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { AvatarItem } from './AvatarItem'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AvatarItem/>


    {/* <App />} */}


  </StrictMode>,
)
