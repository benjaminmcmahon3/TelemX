import { useEffect, useState } from "react"
import './DataTiles.css'

export default function Missions(){

  const [ allVandyLaunchData, setAllVandyLaunchData ] = useState([])

  const handleStorageUpdate = () => {
    const dataToStore = JSON.parse(localStorage.getItem('vandyLaunchData'))
    setAllVandyLaunchData(dataToStore)
  }

  useEffect(()=>{
    async function setStoredVandyLaunchData(){
      try{
        window.addEventListener('vandyLaunchDataUpdated', handleStorageUpdate)
        handleStorageUpdate()

        return()=>{
          window.removeEventListener('vandyLaunchDataUpdated', handleStorageUpdate)
        }
      }catch(err){
        console.log('Error')
      }
    }
    setStoredVandyLaunchData()
  },[])

  return(
    <>
      {
        allVandyLaunchData.map((mission, index)=>{
          return(
            <div key={index} className="missionTile">
              <h1>{mission.mission.name}</h1>
              <h2>{mission.rocket.configuration.full_name}</h2>
              <h2>{mission.mission.description}</h2>
              <img src={mission.image}></img>
            </div>
          )
        })
      }
    </>
  )
}