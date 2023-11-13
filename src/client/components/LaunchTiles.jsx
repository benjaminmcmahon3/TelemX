import { useContext, useEffect, useState } from "react"
import './DataTiles.css'
import { fetchFutureLaunches, fetchPastLaunches, convertDateFromIso } from "../dataHandler"
import { useNavigate } from "react-router-dom"
import LoadingContext from "../LoadingContext"

export default function LaunchTiles({launchSite}){

  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ futureData, setFutureData ] = useState(null);
  const [ pastData, setPastData ] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    startLoading();
    const locationId = {
      'vandy': 11,
      'cape': 12,
      'starbase': 143
    };
    const newLocationId = locationId[launchSite];
    if (!newLocationId) {
      console.log(`${launchSite} not found`);
      return;
    }
    async function fetchInitialLaunches(){
      try{
        const [future, past] = await Promise.all([
          fetchFutureLaunches(newLocationId),
          fetchPastLaunches(newLocationId)
        ]);
        setFutureData(future)
        setPastData(past)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading();
      }
    }
    fetchInitialLaunches()
  },[launchSite])

  if (!futureData || !pastData){
    return null
  }

  return(
    <>
      <div className="missionTileContainer">
        <div className="pastColumn">
          <h3>Previous Launches</h3>
          <button>View all</button>
          {
            pastData.map((mission, index)=>{
              return(
                <div key={index} className="missionTile">
                  <h1>{mission.name}</h1>
                  <h2>{
                    convertDateFromIso(mission.net)
                  }</h2>
                  <button onClick={()=>{
                    navigate(`/launches/${mission.id}`)
                  }}>More Info</button>
                  <img src={mission.image}></img>
                </div>
              )
            })
          }
        </div>
        <div className="futureColumn">
          <h3>Upcoming Launches</h3>
          <button>View all</button>
          {
            futureData.map((mission, index)=>{
              return(
                <div key={index} className="missionTile">
                  <h1>{mission.name}</h1>
                  <h2>{
                    convertDateFromIso(mission.net)
                  }</h2>
                  <button onClick={()=>{
                    navigate(`/launches/${mission.id}`)
                  }}>More Info</button>
                  <img src={mission.image}></img>
                </div>
              )
            })
          }
        </div>
      </div>
      


    </>
  )
}