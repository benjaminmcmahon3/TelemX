import { convertDateFromIso } from "../dataHandler"
import { useNavigate } from "react-router-dom"
import './launchDisplay.css'

export default function Tile({ launch }){

  const navigate = useNavigate();

  return(
    <div className='tileContainer'>
      <div className="tileTop">
        <h3 className="tileDate">{
          convertDateFromIso(launch.net)
        }</h3>
        <h3 className="tileTitle">{launch.mission.name}</h3>
      </div>
      <div className="tileBottom">
        <img className="tileImage" src={launch.image} alt={`Image of the ${launch.name} launch`}></img>
        {/* <h3 className="tilePad">{launch.pad.name}</h3> */}
        <button className="tileButton" onClick={()=>{
          navigate(`/${launch.id}`)
        }}>More Info</button>
      </div>
    </div>
  )
}