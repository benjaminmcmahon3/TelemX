import { useEffect } from "react"
import Launches from "./Launches"
import { convertDateFromIso, getCurrentIsoDate } from "../dataHandler"
import './launchDisplay.css'

export default function Timeline(){

  useEffect(()=>{
    
  },[])

  return(
    <div className="timelineContainer">
      <div className="timelinePast">
        <div className="pastMarker">
          <h3>Previous Launches</h3>
          <button onClick={()=>{
            navigate(`/launches/past`)
          }}>View all</button>
        </div>
        <Launches timeFrame={'past'} limit={3} />
      </div>

      <div className="timelineIndicator">
        <h1>{convertDateFromIso(getCurrentIsoDate())}</h1>
      </div>

      <div className='futureMarker'>
        <h3>Upcoming Launches</h3>
        <button onClick={()=>{
          navigate(`/launches/future`)
        }}>View all</button>
      </div>
      <div className="timelineFuture">
        <Launches timeFrame={'future'} limit={3} />
      </div>
    </div>
  )
}