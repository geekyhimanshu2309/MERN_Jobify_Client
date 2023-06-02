import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Dashboard, Register, Error, Landing } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/error" element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App