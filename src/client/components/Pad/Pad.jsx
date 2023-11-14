import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import LoadingContext from "../../LoadingContext"
import '../DataTiles.css'
import PadTimeline from "./PadTimeline"

export default function Pad(){

  let { launchSite } = useParams()
  const [ launchSiteTitle, setLaunchSiteTitle ] = useState(null)
  // const [ locationId, setLocationId ] = useState(null)
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  // const locationReference = {
  //   'vandy': 11,
  //   'cape': 12,
  //   'starbase': 143
  // };

  useEffect(()=>{
    launchSiteTitleSetter(launchSite)
    // setLocationId(locationReference[launchSite]);
    // if (!locationId) {
    //   console.log(`${launchSite} not found`);
    //   return;
    // }
  },[launchSite])

  async function launchSiteTitleSetter(launchSiteString){
    setLaunchSiteTitle(launchSiteString[0].toUpperCase() + launchSiteString.substring(1))
  }

  return(
    <>
      <h1>{launchSiteTitle}</h1>
      <PadTimeline />
    </>
  )
}