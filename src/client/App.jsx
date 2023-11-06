import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Capsules from './components/Capsules'
import NavBar from './components/NavBar'
import Live from './components/Live'
import './App.css'

const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/launch/?search=SpX'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home 
          BASE_URL={BASE_URL}
          />} />
        <Route path='/capsules' element={<Capsules 
          BASE_URL={BASE_URL}
          />} />
        <Route path='/live' element={<Live 
          BASE_URL={BASE_URL}
          />} />
      </Routes>
    </>
  )
}

export default App
