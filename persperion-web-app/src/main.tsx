import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.tsx'
import Navigation from './Navigation.tsx'
import About from './About.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation />
    <Hero />
    <About />
  </React.StrictMode>
)
