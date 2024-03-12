import React from "react"
import { useContext } from 'react'
import { convertDateFromIso } from "../dataHandler"
import '../styles/tile.css'
import { SlCalender, SlLocationPin } from "react-icons/sl";
import LoadingContext from "../LoadingContext";

const Tile = React.memo(({ launch, toggleLaunchDetails }) => {

  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  return(
    <div className='tileContainer'>
      <h3 className="tileTitle">{launch.mission.name}</h3>
      <div className="tileDetails">
        <h4 className="tileDate"><SlCalender /> {
          convertDateFromIso(launch.net)
        }</h4>
        <h4 className="tilePad"><SlLocationPin /> {launch.pad.name}</h4>
        <button className="tileButton" onClick={()=>{startLoading(); toggleLaunchDetails(launch.id)}}>More Info</button>
      </div>
        <img className="tileImage" src={launch.image} alt={`Image of the ${launch.name} launch`}></img>
    </div>
  )
})

export default Tile;