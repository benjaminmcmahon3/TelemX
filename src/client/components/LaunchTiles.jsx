import { useEffect, useState } from "react"
import './DataTiles.css'
import { fetchFutureLaunches, fetchPastLaunches, convertDateFromIso } from "../dataHandler"

export default function LaunchTiles({launchSite}){

  const [ locationId, setLocationId ] = useState(null)
  const [ futureData, setFutureData ] = useState([])
  const [ pastData, setPastData ] = useState([])

  useEffect(()=>{
    const locationId = {
      'vandy': 11,
      'cape': 12,
      'starbase': 143
    };
    const newLocationId = locationId[launchSite.launchSite];
    if (!newLocationId) {
      console.log(`${launchSite.launchSite} not found`);
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
      }
    }
    fetchInitialLaunches()
  },[launchSite])

  return(
    <>
      <div className="missionTileContainer">
        <div className="pastColumn">
          <h3>Previous Launches</h3>
          {
            pastData.map((mission, index)=>{
              return(
                <div key={index} className="missionTile">
                  <h1>{mission.name}</h1>
                  <h2>{
                    convertDateFromIso(mission.net)
                  }</h2>
                  <img src={mission.image}></img>
                </div>
              )
            })
          }
        </div>
        <div className="futureColumn">
          <h3>Upcoming Launches</h3>
          {
            futureData.map((mission, index)=>{
              return(
                <div key={index} className="missionTile">
                  <h1>{mission.name}</h1>
                  <h2>{
                    convertDateFromIso(mission.net)
                  }</h2>
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