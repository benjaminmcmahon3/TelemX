import { useEffect } from "react"

export default function DataFetcher({BASE_URL}){

  useEffect(()=>{
    async function getVandyFalconData(){
      try{

        const response = await fetch(BASE_URL)
        const result = await response.json()

      }catch(err){
        console.log('error')
      }
    }
    getVandyFalconData()
  },[])

  return(
    <>
    </>
  )
}