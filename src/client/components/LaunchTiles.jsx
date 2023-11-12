import { useEffect, useState } from "react"
import './DataTiles.css'
import { useParams } from "react-router-dom"
import { fetchFutureLaunches, fetchPastLaunches } from "../dataHandler"

// make detailed mode filter seperate from inital fetch, fetch only THAT one launch detail after clicking a "more info" button "mode=detailed"

// see below for date format (please confirm format is correct, this was a bit brute forced)
//  'https://lldev.thespacedevs.com/2.2.0/launch/?net__lte=2022-12-16T11%3A46%3A47Z'

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
      <h1>Hello from {launchSite.launchSite}</h1>
     {console.log('Future data', futureData)}
     {console.log('Past data', pastData)}

      {
        futureData.map((mission, index)=>{
          return(
            <div key={index} className="missionTile">
              <h1>{mission.mission.name}</h1>
              <h2>{mission.rocket.configuration.full_name}</h2>
              <h2>{mission.mission.description}</h2>
              <img src={mission.image}></img>
            </div>
          )
        })
      }
      {
        pastData.map((mission, index)=>{
          return(
            <div key={index} className="missionTile">
              <h1>{mission.mission.name}</h1>
              <h2>{mission.rocket.configuration.full_name}</h2>
              <h2>{mission.mission.description}</h2>
              <img src={mission.image}></img>
            </div>
          )
        })
      }
    </>
  )
}