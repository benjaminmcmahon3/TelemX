import { useState, useEffect } from "react"
import Payloads from "./Payloads"

export default function Cleanroom(){

  const [ payloadsVisible, setPayloadsVisible ] = useState(false)
  const [ allVandyPayloadData, setAllVandyPayloadData ] = useState([])

  return(
    <>
      <h1>Cleanroom</h1>
      <h3>View spacecraft</h3>

      <button onClick={()=>{
        setPayloadsVisible(!payloadsVisible)
        setAllVandyPayloadData(allVandyPayloadData.map((mission)=>{return(mission.rocket)}))
        }}>View Payloads</button>

      {payloadsVisible && <Payloads />}
    </>
  )
}