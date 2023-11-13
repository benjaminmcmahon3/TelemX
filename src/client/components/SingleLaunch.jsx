import { useEffect, useState, useContext } from "react"
import { fetchSingleLaunch, convertDateFromIso } from "../dataHandler";
import { useParams } from "react-router-dom";
import LoadingContext from "../LoadingContext";

export default function SingleLaunch(){

  let { launchId } = useParams()
  const [ singleLaunchData, setSingleLaunchData ] = useState(null);
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function setLaunchData(){
      try{
        const launchData = await fetchSingleLaunch(launchId)
        setSingleLaunchData(launchData)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading()
      }
    }
    setLaunchData()
  },[launchId])

  if (!singleLaunchData){
    return null
  }

  return(
    <>
      <h1>Hello</h1>
      {!isLoading &&
        <div>
        <h1>{singleLaunchData.name}</h1>
        <h2>{convertDateFromIso(singleLaunchData.net)}</h2>
        <img src={singleLaunchData.mission_patches[0].image_url}></img>
        <img src={singleLaunchData.image}></img>
      </div>}
    </>
  )
}