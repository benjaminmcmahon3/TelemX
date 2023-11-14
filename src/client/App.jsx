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
          {/* All launch data */}
          <Route path='/' element={<Earth />} />
          <Route path='/launches' element={<Launches />} />
          <Route path='/launches/past' element={<Launches />} />
          <Route path='/launches/future' element={<Launches />} />
          <Route path='/launches/:launchId' element={<SingleLaunch />} />

          {/* Pad specific launch data */}
          <Route path='/pad/:launchSite' element={<Pad />} />
          <Route path='/pad/launches' element={<Launches />} />
          <Route path='/pad/:launchSite/past' element={<Launches />} />
          <Route path='/pad/:launchSite/future' element={<Launches />} />
        </Routes>
      </LoadingProvider>
    </>
  )
}

export default App
