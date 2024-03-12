import { useEffect, useState } from "react"
import Launches from "./Launches"
import { convertDateFromIso, getCurrentIsoDate } from "../dataHandler"
import '../styles/timeline.css'
import { useNavigate, useParams } from "react-router-dom"

export default function Timeline({ toggleLaunchDetails }){

  const timelineLimit = 10
  const navigate = useNavigate()
  const params = useParams()
  const [ launchSite, setLaunchSite ] = useState()

  useEffect(()=>{
    if(params.launchSite) setLaunchSite(params.launchSite)
  },[params])

  return(
    <div className="timelineContainer">
        {/* <div className="pastMarker">

          <button onClick={()=>{
            navigate(`/${launchSite ? `pad/${launchSite}` : 'launches'}/past`)
          }}>View all (WIP)</button>
          <h3>Previous Launches</h3>
        </div>
        
        <div className='futureMarker'>
          <h3>Upcoming Launches</h3>
          <button onClick={()=>{
            navigate(`/${launchSite ? `pad/${launchSite}` : 'launches'}/future`)
          }}>View all (WIP)</button>
      </div> */}

      <div className="timelinePast">
        <h3 className="timeTitle">Recent</h3>
        <Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'past'} limit={timelineLimit} />
      </div>

      <div className="timelineIndicator">
        <h3>Current Time: {convertDateFromIso(getCurrentIsoDate())}</h3>
        <h3>Select a launch site above to explore its events!</h3>
      </div>

      <div className="timelineFuture">
        <h3 className="timeTitle">Upcoming</h3>
        <Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'future'} limit={timelineLimit} />
      </div>
    </div>
  )
} 