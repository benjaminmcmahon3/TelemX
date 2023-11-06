import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Capsules from './components/Capsules'
import NavBar from './components/NavBar'
import Live from './components/Live'
import './App.css'

const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/launch/?name=&slug=&rocket__configuration__name=&rocket__configuration__id=&status=&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&rocket__spacecraftflight__spacecraft__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=&mission__orbit__name=&mission__orbit__name__icontains=&r_spacex_api_id=&pad=16&pad__location=&orbital_launch_attempt_count=&orbital_launch_attempt_count__lt=&orbital_launch_attempt_count__lte=&orbital_launch_attempt_count__gt=&orbital_launch_attempt_count__gte=&location_launch_attempt_count=&location_launch_attempt_count__lt=&location_launch_attempt_count__lte=&location_launch_attempt_count__gt=&location_launch_attempt_count__gte=&pad_launch_attempt_count=&pad_launch_attempt_count__lt=&pad_launch_attempt_count__lte=&pad_launch_attempt_count__gt=&pad_launch_attempt_count__gte=&agency_launch_attempt_count=&agency_launch_attempt_count__lt=&agency_launch_attempt_count__lte=&agency_launch_attempt_count__gt=&agency_launch_attempt_count__gte=&orbital_launch_attempt_count_year=&orbital_launch_attempt_count_year__lt=&orbital_launch_attempt_count_year__lte=&orbital_launch_attempt_count_year__gt=&orbital_launch_attempt_count_year__gte=&location_launch_attempt_count_year=&location_launch_attempt_count_year__lt=&location_launch_attempt_count_year__lte=&location_launch_attempt_count_year__gt=&location_launch_attempt_count_year__gte=&pad_launch_attempt_count_year=&pad_launch_attempt_count_year__lt=&pad_launch_attempt_count_year__lte=&pad_launch_attempt_count_year__gt=&pad_launch_attempt_count_year__gte=&agency_launch_attempt_count_year=&agency_launch_attempt_count_year__lt=&agency_launch_attempt_count_year__lte=&agency_launch_attempt_count_year__gt=&agency_launch_attempt_count_year__gte=&net__gt=&net__lt=&net__gte=&net__lte=&window_start__gt=&window_start__lt=&window_start__gte=&window_start__lte=&window_end__gt=&window_end__lt=&window_end__gte=&window_end__lte=&last_updated__gte=&last_updated__lte=&day=&month=&year=&id=&include_suborbital=unknown&is_crewed=unknown&launcher_config__id=&status__ids=&spacecraft_config__ids=&serial_number=&video_url='

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
