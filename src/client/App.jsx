import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Dragon from './components/Dragon'
import NavBar from './components/NavBar'
import Live from './components/Live'
import './App.css'

const BASE_URL = 'https://api.spacexdata.com/v4/'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dragon' element={<Dragon />} />
        <Route path='/live' element={<Live />} />
      </Routes>
    </>
  )
}

export default App
