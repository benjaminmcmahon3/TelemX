import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import LoadingContext from "../../LoadingContext"
import '../DataTiles.css'
// import LaunchTimeline from "./LaunchTimeline"
import PadLaunches from "./PadLaunches"

export default function Pad(){

  let { launchSite } = useParams()
  const [ launchSiteName, setLaunchSiteName ] = useState(null)
  const [ locationId, setLocationId ] = useState(null)
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ activeView, setActiveView ] = useState()
  const locationReference = {
    'vandy': 11,
    'cape': 12,
    'starbase': 143
  };
  const views = {
    'timeline': 0,
    'past' : 1,
    'future': 2
  }

  useEffect(()=>{
    launchSiteNameSetter(launchSite)
    setLocationId(locationReference[launchSite]);
    if (!locationId) {
      console.log(`${launchSite} not found`);
      return;
    }
  },[launchSite])

  async function launchSiteNameSetter(launchSiteString){
    setLaunchSiteName(launchSiteString[0].toUpperCase() + launchSiteString.substring(1))
  }

  return(
    <>
      <h1>{launchSiteName}</h1>
      {/* <LaunchTimeline locationId={locationId} launchSite={launchSite} /> */}
      <PadLaunches locationId={locationId} timeline={'past'} />
      <PadLaunches locationId={locationId} timeline={'future'} />
    </>
  )
}