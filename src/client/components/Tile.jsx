import { convertDateFromIso } from "../dataHandler"
import { useNavigate } from "react-router-dom"
import './launchDisplay.css'

export default function Tile({ launch }){

  const navigate = useNavigate();

  return(
    <div className='tileContainer'>
            <h3 className="tileTitle">{launch.name}</h3>
      <img src={launch.image} alt={`Image of the ${launch.name} launch`}></img>

      <h3>{
        convertDateFromIso(launch.net)
      }</h3>
      <h3>{launch.pad.name}</h3>
      <button onClick={()=>{
        navigate(`/${launch.id}`)
      }}>More Info</button>
    </div>
  )
}