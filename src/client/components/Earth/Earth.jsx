import { useNavigate } from 'react-router-dom'
import LoadingContext from '../../LoadingContext'
import { useContext, useEffect } from 'react'
import EarthTimeline from './EarthTimeline'
import '../DataTiles.css'

export default function Earth(){

  const navigate = useNavigate()
  const { startLoading, stopLoading, isLoading } = useContext(LoadingContext)

  useEffect(()=>{
    startLoading()
  },[])

  return(
    <>
      <h1>Earth</h1>
      <button onClick={()=>{navigate('/pad/vandy')}}>Vandy</button>
      <button onClick={()=>{navigate('/pad/cape')}}>Cape</button>
      <button onClick={()=>{navigate('/pad/starbase')}}>Starbase</button>
      <EarthTimeline />
    </>
  )
}