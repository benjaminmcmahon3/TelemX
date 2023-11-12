import { useEffect, useState } from "react"
import './DataTiles.css'
import { useParams } from "react-router-dom"

const lsp = 121 // spacex
const pad = 16 // slc-4e
const resultsReturnedPerQuery = 5
let greaterThanTime = Date.now()
let lessThanTime = Date.now()
const baseUrl = `https://lldev.thespacedevs.com/2.2.0/launch/?pad=${pad}&lsp__id=${lsp}&limit=${resultsReturnedPerQuery}&net__gte=${greaterThanTime}&net_lte=${lessThanTime}`
// make detailed mode filter seperate from inital fetch, fetch only THAT one launch detail after clicking a "more info" button

// see below for date format
//  'https://lldev.thespacedevs.com/2.2.0/launch/?net__lte=2022-12-16T11%3A46%3A47Z'


export default function LaunchTiles({launchSite}){

  // const [ allVandyLaunchData, setAllVandyLaunchData ] = useState([])
  // const handleStorageUpdate = () => {
  //   const dataToStore = JSON.parse(localStorage.getItem('vandyLaunchData'))
  //   setAllVandyLaunchData(dataToStore)
  // }

  useEffect(()=>{
    async function fetchInitialData(){
      try{
        

        // window.addEventListener('vandyLaunchDataUpdated', handleStorageUpdate)
        // handleStorageUpdate()
        // return()=>{
        //   window.removeEventListener('vandyLaunchDataUpdated', handleStorageUpdate)
        // }

        const response = await fetch(baseUrl)
        const result = await response.json()
        console.log(result)

      }catch(err){
        console.log('Error')
      }
    }
    fetchInitialData()
  },[])

  return(
    <>
      {/* {
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
      } */}
    </>
  )
}