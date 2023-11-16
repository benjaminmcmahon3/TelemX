import { useContext, useEffect, useState } from "react"
import { queryDispatcher } from "../dataHandler"
import Tile from "./Tile"
import { useParams } from "react-router-dom"
import LoadingContext from "../LoadingContext"
import './launchDisplay.css'

export default function Launches({ timeFrame, limit }){

  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([]);
  const { launchSite } = useParams();

  useEffect(()=>{
    startLoading()
    async function fetchLaunchData(){
      try{
        let data = await queryDispatcher(timeFrame, limit, launchSite)
        setLaunchData(data)
        console.log('launchData set')
      }catch(err){
        console.error(`Error`, err)
      }
    }
    fetchLaunchData()
  },[timeFrame, limit, launchSite])

  useEffect(()=>{
    if(launchData && launchData.length > 0){
      stopLoading()
    }
  },[launchData])

  return(
    <div>
      <div className="launchesContainer">
        {isLoading ? (
          <div className="loadingIcon"></div>
        ):(
          launchData.length > 0 ? (
            launchData.map((launch)=> <Tile key={launch.id} launch={launch} />)
          ):(
            <h1>No launches to display</h1>
          ))}
      </div>
    </div>
  )
}