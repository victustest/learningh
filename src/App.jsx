import React from 'react'
import Dashboard from './components/Dashboard'
import Robotix from './components/Robotix'
import MathAndEla from './components/MathAndEla'
import { BrowserRouter, Routes, Route } from "react-router";
import Testing from "./components/Testing"

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/robotix" element={<Robotix />} />
    //     <Route path="/math-and-ela" element={<MathAndEla />} />
    //   </Routes>
    // </BrowserRouter>
    <Testing />
  )
}

export default App
