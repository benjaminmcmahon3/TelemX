import {Routes, Route} from 'react-router-dom'
import Earth from './components/Earth'
import Pad from './components/Pad'
import NavBar from './components/NavBar'
import './App.css'
import SingleLaunch from './components/SingleLaunch'
import LoadingProvider from './LoadingProvider'
import Launches from './components/Launches'

function App() {

  return (
    <>
      <LoadingProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Earth />} />
          <Route path='/:launchSite' element={<Pad />} />
          <Route path='/launches/:launchId' element={<SingleLaunch />} />
          <Route path='/:launchSite/:timeline' element={<Launches />} />
        </Routes>
      </LoadingProvider>
    </>
  )
}

export default App
