import { useParams } from "react-router-dom"
import LaunchTiles from "./LaunchTiles"
import { useEffect, useState } from "react"

export default function Pad(){

  let launchSitePerParams = useParams()
  const [ launchSiteName, setLaunchSiteName ] = useState(null)

  useEffect(()=>{
    launchSiteNameSetter(launchSitePerParams.launchSite)
  },[launchSitePerParams])

  async function launchSiteNameSetter(launchSiteString){
    setLaunchSiteName(launchSiteString[0].toUpperCase() + launchSiteString.substring(1))
  }


  return(
    <>
      <h1>
        {
        launchSiteName
        }
      </h1>
      <LaunchTiles launchSite={launchSitePerParams} />
    </>
  )
}