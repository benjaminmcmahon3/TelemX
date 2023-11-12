import { useParams } from "react-router-dom"
import LaunchTiles from "./LaunchTiles"
import { useEffect, useState } from "react"

export default function Pad(){

  let launchSite = useParams()
  console.log(launchSite)

  return(
    <>
      <LaunchTiles launchSite={launchSite}/>
    </>
  )
}