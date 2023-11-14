import { useContext, useEffect, useState } from "react"
import LoadingContext from "../LoadingContext"
import { convertDateFromIso } from "../dataHandler"
import { useNavigate } from "react-router-dom"

export default function LaunchThumnail({ data }){

  const { isLoading } = useContext(LoadingContext)
  const [ launchData, setLaunchData ] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
    async function dataSetter(){
      try{
        setLaunchData(data)
      }catch(err){
        console.log('Error', err)
      }
    }
    dataSetter()
  },[data])

  return(
    <>
      {!isLoading &&
        launchData.map((mission, index)=>{
          return(
            <div key={index} className="missionTile">
              <h3>{mission.name}</h3>
              <h3>{mission.pad.name}</h3>
              <h3>{
                convertDateFromIso(mission.net)
              }</h3>
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