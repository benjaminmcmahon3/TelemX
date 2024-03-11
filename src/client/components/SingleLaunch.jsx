import { useEffect, useState, useContext } from "react"
import { fetchSingleLaunch, convertDateFromIso } from "../dataHandler";
import LoadingContext from "../LoadingContext";
import "../styles/singleLaunch.css"
import '../styles/loadingIcon.css'
import { SlClose } from "react-icons/sl";
import LoadingIcon from "./LoadingIcon";

export default function SingleLaunch({ launchId, toggleLaunchDetails }){

  const [ singleLaunchData, setSingleLaunchData ] = useState(null);
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    const setLaunchData = async () => {
      try{
        const launchData = await fetchSingleLaunch(launchId);
        setSingleLaunchData(launchData);
      } catch (err) {
        console.error('Error fetching single launch data: ', err);
      } finally {
        stopLoading();
      }
    }
    setLaunchData();
  },[launchId]);

  if (isLoading) {
    return (
    <div className="screenOverlay">
      <LoadingIcon timeFrame={'singleLaunch'} />
    </div>
  )}

if (singleLaunchData) {
  return(
      <>
        {!isLoading ?
          <div className="screenOverlay">
            {singleLaunchData.mission_patches[0] && <img className="patch" src={singleLaunchData.mission_patches[0].image_url}></img>}
            <SlClose className='closeButton' onClick={() => {toggleLaunchDetails(null)}} />
            <div className="singleLaunchContainer">
              <div className="textContent">
                <h3>{singleLaunchData.name}</h3>
                <h3>{convertDateFromIso(singleLaunchData.net)}</h3>
                <h3 className="singlePad">{singleLaunchData.pad.name}</h3>
                <h4>{singleLaunchData.mission.description}</h4>
              </div>
              <div className="visualsContainer">
                {singleLaunchData.image && <img className="singleLaunchImage" src={singleLaunchData.image}></img>}
              </div>
            </div>  
          </div> : <div className="loadingIcon"></div>}
      </>
  )}
}