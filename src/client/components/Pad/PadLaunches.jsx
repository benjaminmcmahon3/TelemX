import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFuture, fetchPast } from "./padHandler"
import LoadingContext from "../../LoadingContext"
import PadThumbnail from "./PadThumbnail"

export default function PadLaunches(){

  const limit = 10
  const params = useParams()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([])

  useEffect(()=>{
    startLoading()
    async function fetchPadLaunches(){
      try{
        if (params.timeline === 'past'){
          const pastResults = await fetchPast(params.launchSite, limit)
          setLaunchData(pastResults)

        }else if (params.timeline === 'future'){
          const futureResults = await fetchFuture(params.launchSite, limit)
          setLaunchData(futureResults)
        }
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading()
      }
    }
    fetchPadLaunches()
  },[params])

  if (!launchData){
    return null
  }

  return(
    <>
      {!isLoading &&
        <div>
          {
            launchData.map((launch, index)=>{
              return <PadThumbnail key={index} launch={launch}/>
            })
          }
        </div>
      }
    </>
  )
}