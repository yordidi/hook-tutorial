import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TutorialUseState from './routes/TutorialUseState';
import StateFunctionalUpdate from './routes/StateFunctionalUpdate'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App />} >
        <Route path='/useState'  element={<TutorialUseState />} />
        <Route path='/functionalUpdate'  element={<StateFunctionalUpdate />} />
      </Route>
      
    </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
)
