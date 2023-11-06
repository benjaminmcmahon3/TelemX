import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

export default function Capsules({BASE_URL}){

  const CAPSULES_URL = BASE_URL + ''
  const [ allCapsules, setAllCapsules ] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
   async function fetchAllCapsules(){
    try{

      const response = await fetch(CAPSULES_URL)
      const result = await response.json()
      console.log(result)
      setAllCapsules(result)

    }catch(err){
      console.log('Error fetching all dragon capsules')
    }
   }
   fetchAllCapsules()
  },[])

  return(
    <>
      <h1>Dragon lair</h1>
      {/* {
        allCapsules.map((capsule, index)=>{
          return(
            <div key={index}>
              <h1>{}</h1>
            </div>
          )
        })
      } */}
    </>
  )
}