import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter} from './router'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './store'
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <ReduxProvider store={store} children={undefined}/>
    <AppRouter/>
  </StrictMode>,
)
