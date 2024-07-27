import React from 'react'
import ReactDOM from 'react-dom/client';
import { PokemonProvider } from './context/GlobalContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import 'normalize.css';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
