import { useEffect, useState } from "react"
import Boosters from "./Boosters"
import Fairings from "./Fairings"

export default function Hangar({BASE_URL}){

  const [ boostersVisible, setBoostersVisible ] = useState(false)
  const [ fairingsVisible, setFairingsVisible ] = useState(false)

  const [ allVandyFalconData, setAllVandyFalconData ] = useState([])
  const [ allVandyBoosterData, setAllVandyBoosterData ] = useState([])
  const [ allVandyFairingData, setAllVandyFairingData ] = useState([])

  const handleStorageUpdate = () => {
    const dataToStore = JSON.parse(localStorage.getItem('vandyLaunchData'))
    setAllVandyFalconData(dataToStore)
  }

  useEffect(()=>{
    async function setStoredVandyFalconData(){
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
    setStoredVandyFalconData()
  },[])

  return(
    <>
      <h1>Hangar</h1>
      <h3>View vehicle info</h3>
      <button onClick={()=>{
        setBoostersVisible(!boostersVisible)
        setAllVandyBoosterData(allVandyFalconData.map((mission)=>{return(mission.rocket)}))
        }}>View Boosters</button>

      <button onClick={()=>{
        setFairingsVisible(!fairingsVisible)
        setAllVandyFairingData(allVandyFairingData.map((mission)=>{return(mission.rocket)}))
        }}>View Fairings</button>

      {boostersVisible && <Boosters allVandyBoosterData={allVandyBoosterData} />}
      {fairingsVisible && <Fairings allVandyFairingData={allVandyFalconData} />}

    </>
  )
}