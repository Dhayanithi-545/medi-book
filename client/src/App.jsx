import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AvailableTests from './pages/AvailableTests'
import BookTest from './pages/BookTest'
// import Booking from '../../server/models/Booking'
import BookingHistory from './pages/BookingHistory'
import Register from './pages/Register'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/home" element={<HomePage />} />
      <Route path="/tests" element={<AvailableTests />} />
      <Route path="/home/book" element={<BookTest />} />
      <Route path="/home/history" element={<BookingHistory />}></Route>
      <Route path='/' element={<Register/>}/>

      </Routes>
      </BrowserRouter>
  )
}

export default App