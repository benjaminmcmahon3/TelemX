import { useNavigate } from 'react-router-dom'
import EarthTimeline from './EarthTimeline'
import '../DataTiles.css'

export default function Earth(){

  const navigate = useNavigate()

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