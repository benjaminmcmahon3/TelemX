import { useContext, useEffect, useState } from "react"
import LoadingContext from "../LoadingContext"
import { convertDateFromIso } from "../dataHandler"
import { useNavigate } from "react-router-dom"

export default function LaunchThumnail({ incomingData }){

  const { isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
    async function dataSetter(){
      try{
        setLaunchData(incomingData)
      }catch(err){
        console.log('Error', err)
      }
    }
    dataSetter()
  },[incomingData])

  return(
    <>
      {!isLoading &&
        launchData.map((mission, index)=>{
          return(
            <div key={index} className="missionTile">
              <h1>{mission.name}</h1>
              <h2>{
                convertDateFromIso(mission.net)
              }</h2>
              <button onClick={()=>{
                navigate(`/launches/${mission.id}`)
              }}>More Info</button>
              <img src={mission.image}></img>
            </div>
          )
        })
      }
    </>
  )
}