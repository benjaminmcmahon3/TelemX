import { useEffect, useState, useContext } from "react"
import LaunchThumnail from "../LaunchThumbnail"
import { fetchFutureLaunches, fetchPastLaunches } from "./padHandler"
import { useNavigate } from "react-router-dom"
import LoadingContext from "../../LoadingContext"

export default function LaunchTimeline({ locationId, launchSite }){

  const [ futureData, setFutureData ] = useState(null);
  const [ pastData, setPastData ] = useState(null);
  const navigate = useNavigate()
  const timelineLimit = 5
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function fetchTimeline(){
      try{
        const [past, future] = await Promise.all([
          fetchPastLaunches(locationId, timelineLimit),
          fetchFutureLaunches(locationId, timelineLimit)
        ]);
        setPastData(past)
        setFutureData(future)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading();
      }
    }
    fetchTimeline()
  },[locationId])

  if (!futureData || !pastData){
    startLoading()
    return null
  }

  return(
    <>
      <div>
        {!isLoading && launchSite &&
          <div className="missionTileContainer">
            <div className="pastColumn">
              <h3>Previous Launches</h3>
              <button onClick={()=>{
                navigate(`/pad/${launchSite}/past`)
              }}>View all</button>
              <LaunchThumnail data={pastData}/>
            </div>
            <div className="futureColumn">
              <h3>Upcoming Launches</h3>
              <button onClick={()=>{
                navigate(`/pad/${launchSite}/future`)
              }}>View all</button>
              <LaunchThumnail data={futureData}/>
            </div>
          </div>
        }
      </div>
    </>
  )
}