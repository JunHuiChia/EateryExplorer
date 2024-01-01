import { useState } from 'react'
import '../css/App.css'
import Navigation from '../components/navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
