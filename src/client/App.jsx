import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Pad from './components/Pad'
import Hangar from './components/Hangar'
import './App.css'
import Cleanroom from './components/Cleanroom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home 

          />} />
        <Route path='/hangar' element={<Hangar 

          />} />
        <Route path='/pad' element={<Pad 

          />} />
        <Route path='/cleanroom' element={<Cleanroom 

        />} />
      </Routes>
    </>
  )
}

export default App
