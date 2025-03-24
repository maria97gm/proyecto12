import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Convertidor from './Pages/Convertidor/Convertidor'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/convertidor' element={<Convertidor />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
