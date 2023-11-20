import {Routes, Route } from 'react-router-dom'
import Earth from './components/Earth'
import NavBar from './components/NavBar'
import './App.css'
import SingleLaunch from './components/SingleLaunch'
import LoadingProvider from './LoadingProvider'
import Launches from './components/Launches'
import Timeline from './components/Timeline'

function App() {

  const defaultLimit = 10;

  return (
    <div className='appContainer'>
      <LoadingProvider>
        {/* <NavBar /> */}
        <Earth />
        <Routes>
          <Route path='/' element={<Timeline />} />
          <Route path='/:launchId' element={<SingleLaunch />} />

          <Route path='/launches' element={<Launches />} />
          <Route path='/launches/past' element={<Launches timeFrame={'past'} limit={defaultLimit} />} />
          <Route path='/launches/future' element={<Launches timeFrame={'future'} limit={defaultLimit} />} />

          <Route path='/pad/:launchSite' element={<Timeline />} />
          <Route path='/pad/:launchSite/launches' element={<Launches />} />
          <Route path='/pad/:launchSite/past' element={<Launches timeFrame={'past'} limit={defaultLimit} />} />
          <Route path='/pad/:launchSite/future' element={<Launches timeFrame={'future'} limit={defaultLimit} />} />
        </Routes>
      </LoadingProvider>
    </div>
  )
}

export default App
