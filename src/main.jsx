import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import PokemonApp from './PokemonApp.jsx'
import TodoApp from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider 
      store={store}
    >
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </StrictMode>,
)
