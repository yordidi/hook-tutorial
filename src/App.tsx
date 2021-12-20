import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className="app-container">
      <aside className="app-aside">
        <ul>
          <li>
            <NavLink to='useState'>useState hook</NavLink>
          </li>
          <li>
            <NavLink to='functionalUpdate'>functional update state</NavLink>
          </li>
        </ul>
        
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
    
  )
}

export default App
