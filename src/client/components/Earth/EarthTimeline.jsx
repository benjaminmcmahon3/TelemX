import { useEffect, useState, useContext } from "react"
import LaunchThumbnail from "../LaunchThumbnail"
import { fetchPast, fetchFuture } from "./earthHandler"
import { useNavigate } from "react-router-dom"
import LoadingContext from "../../LoadingContext"

export default function EarthTimeline(){

  const limit = 5
  const [ futureData, setFutureData ] = useState([]);
  const [ pastData, setPastData ] = useState([]);
  const navigate = useNavigate()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function fetchEarthTimeline(){
      try{
        const [past, future] = await Promise.all([
          fetchPast(limit),
          fetchFuture(limit)
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
    return null
  }

  console.log('Past: ', pastData, 'Future: ', futureData)

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
              {
                pastData.map((launch, index)=>{
                  return <LaunchThumbnail key={index} launch={launch}/>
                })
              }
            </div>

            <div className="futureColumn">
              <h3>Upcoming Launches</h3>
              <button onClick={()=>{
                navigate(`/launches/future`)
              }}>View all</button>
              {
                futureData.map((launch, index)=>{
                  return <LaunchThumbnail key={index} launch={launch}/>
                })
              }
            </div>
          </div>
        }
      </div>
    </>
  )
}