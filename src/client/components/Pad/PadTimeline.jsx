import { useEffect, useState, useContext } from "react"
import LaunchThumnail from "../LaunchThumbnail"
import { fetchFuture, fetchPast } from "./padHandler"
import { useNavigate, useParams } from "react-router-dom"
import LoadingContext from "../../LoadingContext"

export default function PadTimeline(){

  const limit = 5
  let { launchSite } = useParams()
  const [ futureData, setFutureData ] = useState(null);
  const [ pastData, setPastData ] = useState(null);
  const navigate = useNavigate()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function fetchPadTimeline(){
      try{
        const [past, future] = await Promise.all([
          fetchPast(launchSite, limit),
          fetchFuture(launchSite, limit)
        ]);
        setPastData(past)
        setFutureData(future)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading();
      }
    }
    fetchPadTimeline()
  },[launchSite])

  if (!futureData || !pastData){
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