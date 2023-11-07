import { useEffect, useState } from "react"

export default function Hangar({BASE_URL}){

  const [ allMissions, setAllMissions ] = useState([])
  const [ allBoosters, setAllBoosters ] = useState([])
  const [ allFairings, setAllFairings ] = useState([])
  const [ allPayloads, setAllPayloads ] = useState([])

  useEffect(()=>{
    async function getAllMissions(){
      try{

        const response = await fetch(BASE_URL)
        const result = await response.json()
        console.log('First page: ', result)
        getNextPage(result.next)

      }catch(err){
        console.log('Error')
      }
    }
    getAllMissions()
  },[])

  async function getNextPage(NEXT_URL){
    try{

      const response = await fetch(NEXT_URL)
      const result = await response.json()
      console.log('Next page: ', result)

    }catch(err){

    }
  }

  return(
    <>
      <h1>Hangar</h1>
      {

      }
    </>
  )
}