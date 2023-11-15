import { useNavigate } from 'react-router-dom'
import EarthTimeline from './EarthTimeline'
import './Earth.css'
import earthImage from '../../assets/Earth.png'

export default function Earth(){

  const navigate = useNavigate()

  return(
    <div className='earthContainer'>
      <h1 id='title'>Earth</h1>
        <div className='padButtonContainer'>
          <img id='earthImage' src={earthImage}></img>
          <button id='vandyPadButton' onClick={()=>{navigate('/pad/vandy')}}>Vandy</button>
          <button id='capePadButton' onClick={()=>{navigate('/pad/cape')}}>Cape</button>
          <button id='starbasePadButton' onClick={()=>{navigate('/pad/starbase')}}>Starbase</button>
        </div>
      <div>
        <div className="pastMarker">
          <h3>Previous Launches</h3>
          <button onClick={()=>{
            navigate(`/launches/past`)
          }}>View all</button>
        </div>
        <div className='futureMarker'>
          <h3>Upcoming Launches</h3>
          <button onClick={()=>{
            navigate(`/launches/future`)
          }}>View all</button>
        </div>
      </div>
      <div>
        <EarthTimeline />
      </div>
    </div>
  )
}