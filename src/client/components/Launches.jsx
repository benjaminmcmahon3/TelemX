import { useContext, useEffect, useState } from "react"
import { queryDispatcher } from "../dataHandler"
import Tile from "./Tile"
import { useParams } from "react-router-dom"
import LoadingContext from "../LoadingContext"
import './launchDisplay.css'

export default function Launches({ timeFrame, limit, toggleLaunchDetails }){

  const [localLoading, setLocalLoading] = useState(false);
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([]);
  const { launchSite } = useParams();

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchLaunchData = async () => {
      setLocalLoading(true);
      setLaunchData([]);
      try{
        let data = await queryDispatcher(timeFrame, limit, launchSite, signal);
        setLaunchData(data);
      } catch(err) {
        console.error(`Error fetching launch data: `, err);
        setLaunchData([]);
      } finally {
        setLocalLoading(false);
      }
    }
    fetchLaunchData()
    return () => controller.abort()
  },[timeFrame, limit, launchSite])

  if (localLoading && isLoading || launchData.length === 0) {
    return <div className="loadingIcon"></div>;
  }

  return(
    <div className="launchesContainer" style={{ 
        flexDirection: timeFrame === 'past' ? 'row-reverse' : 'row'
      }}>
      {launchData.map((launch)=> <Tile key={launch.id} launch={launch} toggleLaunchDetails={toggleLaunchDetails} />)}
    </div>
  )
}