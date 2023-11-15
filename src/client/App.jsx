import {Routes, Route} from 'react-router-dom'
import Earth from './components/Earth/Earth'
import Pad from './components/Pad/Pad'
import NavBar from './components/NavBar'
import './App.css'
import SingleLaunch from './components/SingleLaunch'
import LoadingProvider from './LoadingProvider'
import EarthLaunches from './components/Earth/EarthLaunches'
import PadLaunches from './components/Pad/PadLaunches'

function App() {

  return (
    <div className='appContainer'>
      <LoadingProvider>
        <NavBar />
        <Routes>
          {/* All launch data */}
          <Route path='/' element={<Earth />} />
          <Route path='/launches' element={<EarthLaunches />} />
          <Route path='/launches/:timeline' element={<EarthLaunches />} />

          {/* Pad specific launch data */}
          <Route path='/pad/:launchSite' element={<Pad />} />
          <Route path='/pad/:launchSite/launches' element={<PadLaunches />} />
          <Route path='/pad/:launchSite/:timeline' element={<PadLaunches />} />

          {/* Single launch data */}
          <Route path='/:launchId' element={<SingleLaunch />} />
        </Routes>
      </LoadingProvider>
    </div>
  )
}

export default App
