import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFuture, fetchPast } from "./earthHandler"
import LoadingContext from "../../LoadingContext"
import LaunchThumnail from "../LaunchThumbnail"

export default function EarthLaunches(){

  const limit = 10
  const params = useParams()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([])

  useEffect(()=>{
    startLoading()
    async function fetchAllLaunches(){
      try{
        if (params.timeline === 'past'){
          const pastResults = await fetchPast(limit)
          setLaunchData(pastResults)

        }else if (params.timeline === 'future'){
          const futureResults = await fetchFuture(limit)
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
      {!isLoading &&
        <div>
          <LaunchThumnail data={launchData}/>
        </div>
      }
    </>
  )
}