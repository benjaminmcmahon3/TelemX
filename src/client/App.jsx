import {Routes, Route} from 'react-router-dom'
import Earth from './components/Earth'
import Pad from './components/Pad'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Earth />} />
        <Route path='/:launchSite' element={<Pad />} />
      </Routes>
    </>
  )
}

export default App
