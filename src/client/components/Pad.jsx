import { useParams } from "react-router-dom"
import LaunchTiles from "./LaunchTiles"
import { useEffect, useState } from "react"

export default function Pad(){

  let launchSitePerParams = useParams()

  useEffect(()=>{
    console.log(launchSitePerParams)
  },[launchSitePerParams])

  return(
    <>
      <LaunchTiles launchSite={launchSitePerParams} />
    </>
  )
}