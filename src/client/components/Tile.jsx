import React from "react"
import { convertDateFromIso } from "../dataHandler"
import './launchDisplay.css'
import { SlCalender, SlLocationPin } from "react-icons/sl";

const Tile = React.memo(({ launch, toggleLaunchDetails }) => {

  return(
    <div className='tileContainer'>
      <div className="tileTop">
        <h3 className="tileTitle">{launch.mission.name}</h3>
        <h4 className="tileDate"><SlCalender /> {
          convertDateFromIso(launch.net)
        }</h4>
        <h4 className="tilePad"><SlLocationPin /> {launch.pad.name}</h4>
      </div>
      <div className="tileBottom">
        <img className="tileImage" src={launch.image} alt={`Image of the ${launch.name} launch`}></img>
        <button className="tileButton" onClick={()=>{toggleLaunchDetails(launch.id)}}>More Info</button>
      </div>
    </div>
  )
})

export default Tile;