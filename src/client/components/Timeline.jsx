import { useEffect } from "react"
import Launches from "./Launches"

export default function Timeline(){

  useEffect(()=>{
    
  },[])

  return(
    <div>
      <div className="timelinePast">
        <Launches timeFrame={'past'} limit={3} />
      </div>
      <div className="timelineIndicator">
        <h1>Present</h1>
      </div>
      <div className="timelineFuture">
        <Launches timeFrame={'future'} limit={3} />
      </div>
    </div>
  )
}