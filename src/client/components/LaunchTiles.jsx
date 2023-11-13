import { useContext, useEffect, useState } from "react"
import './DataTiles.css'
import { fetchFutureLaunches, fetchPastLaunches } from "../dataHandler"

import LoadingContext from "../LoadingContext"
import LaunchThumnail from "./LaunchThumbnail"

export default function LaunchTiles({launchSite}){

  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ futureData, setFutureData ] = useState(null);
  const [ pastData, setPastData ] = useState(null);


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
      {!isLoading &&
        <div className="missionTileContainer">
          <div className="pastColumn">
            <h3>Previous Launches</h3>
            <button>View all</button>
            <LaunchThumnail incomingData={pastData}/>
          </div>
          <div className="futureColumn">
            <h3>Upcoming Launches</h3>
            <button>View all</button>
            <LaunchThumnail incomingData={futureData}/>
          </div>
        </div>
      }
    </>
  )
}