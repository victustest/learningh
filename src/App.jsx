import React from 'react'
import Dashboard from './components/Dashboard'
import Robotix from './components/Robotix'
import MathAndEla from './components/MathAndEla'
import { BrowserRouter, Routes, Route } from "react-router";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
