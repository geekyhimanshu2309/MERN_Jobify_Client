import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Dashboard, Register, Error, Landing } from "./pages"
import { AllJobs, AddJob, Profile, SharedLayout, Stats } from './pages/dashboard'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>}>
          <Route path="stats" element={<Stats/>}/>
          <Route path="all-jobs" element={<AllJobs/>}/>
          <Route path="add-jobs" element={<AddJob/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App