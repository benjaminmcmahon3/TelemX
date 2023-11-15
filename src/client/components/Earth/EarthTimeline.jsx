import { useEffect, useState, useContext, useRef } from "react"
import EarthThumbnail from "./EarthThumbnail"
import { fetchPast, fetchFuture } from "./earthHandler"
import { useNavigate } from "react-router-dom"
import LoadingContext from "../../LoadingContext"
import './Earth.css'

export default function EarthTimeline(){

  const limit = 3
  const [ futureData, setFutureData ] = useState([]);
  const [ pastData, setPastData ] = useState([]);
  const navigate = useNavigate()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
    async function fetchEarthTimeline(){
      try{
        const [past, future] = await Promise.all([
          fetchPast(limit),
          fetchFuture(limit)
        ]);
        setPastData(past)
        setFutureData(future)
      }catch(err){
        console.log('Error', err)
      }finally{
        stopLoading();
      }
    }
    fetchEarthTimeline()
  },[])

  if (!futureData || !pastData){
    return null
  }

  return(
    <>
      <div>
        {!isLoading &&
          <div className="timelineContainer" >
            <div className="pastContainer">
              {
                pastData.map((launch, index)=>{
                  return <EarthThumbnail key={index} launch={launch} />
                })
              }
            </div>
            <div className="presentIndicator">
              <h1>Present</h1>
            </div>
            <div className="futureContainer">
              {
                futureData.map((launch, index)=>{
                  return <EarthThumbnail key={index} launch={launch} />
                })
              }
            </div>
          </div>
        }
      </div>
    </>
  )
}