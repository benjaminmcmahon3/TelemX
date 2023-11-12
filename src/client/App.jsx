import {Routes, Route} from 'react-router-dom'
import Earth from './components/Earth'
import Pad from './components/Pad'
import NavBar from './components/NavBar'
import './App.css'

const baseUrl = 'https://lldev.thespacedevs.com/2.2.0/'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Earth 
          baseUrl = {baseUrl}
          />} />
        <Route path='/:launchSite' element={<Pad />} />
      </Routes>
    </>
  )
}

export default App
