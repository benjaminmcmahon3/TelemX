import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFutureLaunches, fetchPastLaunches } from "./padHandler"
import LoadingContext from "../../LoadingContext"
import LaunchThumnail from "../LaunchThumbnail"

export default function PadLaunches(){

  const params = useParams()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const allLaunchesLimit = 10
  const [ launchData, setLaunchData ] = useState([])

  useEffect(()=>{
    startLoading()
    const locationId = {
      'vandy': 11,
      'cape': 12,
      'starbase': 143
    };
    const launchSiteId = locationId[params.launchSite]

    async function fetchAllLaunches(){
      try{
        if (params.timeline === 'past'){
          const pastResults = await fetchPastLaunches(launchSiteId, allLaunchesLimit)
          setLaunchData(pastResults)

        }else if (params.timeline === 'future'){
          const futureResults = await fetchFutureLaunches(launchSiteId, allLaunchesLimit)
          setLaunchData(futureResults)
        }
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading()
      }
    }
    fetchAllLaunches()
  },[params])

  if (!launchData){
    return null
  }

  return(
    <>
      <h1>Hello</h1>
      {!isLoading &&
        <div>
          <LaunchThumnail incomingData={launchData}/>
        </div>
      }
    </>
  )
}