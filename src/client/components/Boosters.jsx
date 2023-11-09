import { useEffect, useState } from "react"

export default function Boosters({allVandyBoosterData}){

  const [ vandyBoosterData, setVandyBoosterData ] = useState([])

  useEffect(()=>{
    console.log(allVandyBoosterData)
  },[allVandyBoosterData])

  return(
    <>
      <h1>You're viewing boosters</h1>
      {

      }
    </>
  )
}