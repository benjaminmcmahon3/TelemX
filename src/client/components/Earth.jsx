import { useNavigate } from 'react-router-dom'
import { fetchAllVandyLaunchData } from '../dataHandler.js'

export default function Earth(){

  const navigate = useNavigate()

  return(
    <>
      <h1>Home</h1>
      <button onClick={()=>{fetchAllVandyLaunchData()}}>Fetch data, save to local storage</button>
      <button onClick={()=>{navigate('/vandy')}}>Vandy</button>
      <button onClick={()=>{navigate('/cape')}}>Cape</button>
      <button onClick={()=>{navigate('/starbase')}}>Starbase</button>
    </>
  )
}