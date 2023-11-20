import {Routes, Route } from 'react-router-dom'
import Earth from './components/Earth'
import './App.css'
import SingleLaunch from './components/SingleLaunch'
import LoadingProvider from './LoadingProvider'
import Launches from './components/Launches'
import Timeline from './components/Timeline'
import { useState } from 'react'

function App() {

  const defaultLimit = 10;
  const [ showLaunch, setShowLaunch ] = useState(false)
  const [ launchId, setLaunchId ] = useState(null)

  const toggleLaunchDetails = (id)=>{
    setLaunchId(id)
    setShowLaunch(!showLaunch)
    console.log(`showLaunch set to ${showLaunch}`)
  }

  return (
    <div className='appContainer'>
      <LoadingProvider>
        <Earth />
        {showLaunch && (
          <SingleLaunch launchId={launchId} toggleLaunchDetails={toggleLaunchDetails} />
        )}
        <Routes>
          <Route path='/' element={<Timeline toggleLaunchDetails={toggleLaunchDetails} />} />
          {/* <Route path='/:launchId' element={<SingleLaunch />} /> */}

          <Route path='/launches' element={<Launches toggleLaunchDetails={toggleLaunchDetails} />} />
          <Route path='/launches/past' element={<Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'past'} limit={defaultLimit} />} />
          <Route path='/launches/future' element={<Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'future'} limit={defaultLimit} />} />

          <Route path='/pad/:launchSite' element={<Timeline toggleLaunchDetails={toggleLaunchDetails} />} />
          <Route path='/pad/:launchSite/launches' element={<Launches toggleLaunchDetails={toggleLaunchDetails} />} />
          <Route path='/pad/:launchSite/past' element={<Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'past'} limit={defaultLimit} />} />
          <Route path='/pad/:launchSite/future' element={<Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'future'} limit={defaultLimit} />} />
        </Routes>
      </LoadingProvider>
    </div>
  )
}

export default App
