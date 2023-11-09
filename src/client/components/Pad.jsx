import { useState } from "react"
import Missions from "./Missions"

export default function Pad(){

  const [ missionsVisible, setMissionsVisible ] = useState(false)

  return(
    <>
      <h1>Pad</h1>
      <h3>View upcoming and past launch info</h3>
      <button onClick={()=>{
        setMissionsVisible(!missionsVisible)
        }}>View Missions</button>

      {missionsVisible && <Missions />}
    </>
  )
}