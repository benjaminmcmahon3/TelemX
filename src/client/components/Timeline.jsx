import { useEffect, useState } from "react"
import Launches from "./Launches"
import { convertDateFromIso, getCurrentIsoDate, getCurrentTime } from "../dataHandler"
import '../styles/timeline.css'
import { useNavigate, useParams } from "react-router-dom"

export default function Timeline({ toggleLaunchDetails }){

  const timelineLimit = 10;
  const navigate = useNavigate();
  const params = useParams();
  const [ launchSite, setLaunchSite ] = useState();
  const [ currentTime, setCurrentTime ] = useState();

  useEffect(()=>{
    if(params.launchSite) setLaunchSite(params.launchSite)
  },[params])

  useEffect(()=>{
    const updateCurrentTime = ()=>{
      setCurrentTime(getCurrentTime())
    }
    const intervalId = setInterval(updateCurrentTime, 600)
    return ()=> clearInterval(intervalId)
  },[])

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
        <h4 className="timeTitle">Recent</h4>
        <Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'past'} limit={timelineLimit} />
      </div>

      <div className="timelineIndicator">
        <h4>{getCurrentTime()}</h4>
        <h3>Select a launch site above to explore its events!</h3>
      </div>

      <div className="timelineFuture">
        <h4 className="timeTitle">Upcoming</h4>
        <Launches toggleLaunchDetails={toggleLaunchDetails} timeFrame={'future'} limit={timelineLimit} />
      </div>
    </div>
  )
} 