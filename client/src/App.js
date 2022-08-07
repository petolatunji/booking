import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotel/:id' element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  )
}
