import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import Formulario from './components/Formulario.jsx';
import {  FormTest } from './components/Form.jsx';
import { StaticModal } from './components/StaticModal.jsx';
import { App2 } from './form/App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
