import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import '../DataTiles.css'
import PadTimeline from "./PadTimeline"

export default function Pad(){

  let { launchSite } = useParams()
  const [ launchSiteTitle, setLaunchSiteTitle ] = useState(null)

  useEffect(()=>{
    launchSiteTitleSetter(launchSite)
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