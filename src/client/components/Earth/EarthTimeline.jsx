import { useEffect, useState, useContext } from "react"
import LaunchThumnail from "../LaunchThumbnail"
import { fetchFutureLaunches, fetchPastLaunches } from "./earthHandler"
import { useNavigate } from "react-router-dom"
import LoadingContext from "../../LoadingContext"

export default function EarthTimeline(){

  const [ futureData, setFutureData ] = useState([]);
  const [ pastData, setPastData ] = useState([]);
  const navigate = useNavigate()
  const timelineLimit = 5
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function fetchEarthTimeline(){
      try{
        const [past, future] = await Promise.all([
          fetchPastLaunches(timelineLimit),
          fetchFutureLaunches(timelineLimit)
        ]);
        setPastData(past)
        setFutureData(future)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading();
      }
    }
    fetchEarthTimeline()
  },[])

  if (!futureData || !pastData){
    startLoading()
    return null
  }

  return(
    <>
      <div>
        {!isLoading &&
          <div className="missionTileContainer">
            <div className="pastColumn">
              <h3>Previous Launches</h3>
              <button onClick={()=>{
                navigate(`/launches/past`)
              }}>View all</button>
              <LaunchThumnail data={pastData}/>
            </div>
            <div className="futureColumn">
              <h3>Upcoming Launches</h3>
              <button onClick={()=>{
                navigate(`/launches/future`)
              }}>View all</button>
              <LaunchThumnail data={futureData}/>
            </div>
          </div>
        }
      </div>
    </>
  )
}