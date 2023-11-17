import { useEffect, useState, useContext } from "react"
import { fetchSingleLaunch, convertDateFromIso } from "../dataHandler";
import { useParams } from "react-router-dom";
import LoadingContext from "../LoadingContext";

export default function SingleLaunch(){

  let { launchId } = useParams()
  const [ singleLaunchData, setSingleLaunchData ] = useState(null);
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading
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
    setLaunchData().then(stopLoading)
  },[launchId])

  if (!singleLaunchData){
    return null
  }

  return(
    <>
      {!isLoading && singleLaunchData &&
        <div className="singleLaunchContainer">
          <div>
            <h3>{singleLaunchData.name}</h3>
            <h3>{convertDateFromIso(singleLaunchData.net)}</h3>
            <h3 className="singlePad">{singleLaunchData.pad.name}</h3>
          </div>
          {singleLaunchData.mission_patches[0] && <img className="patch" src={singleLaunchData.mission_patches[0].image_url}></img>}
          {singleLaunchData.image && <img className="singleLaunchImage" src={singleLaunchData.image}></img>}
      </div>}
    </>
  )
}