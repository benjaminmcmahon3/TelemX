import { useNavigate } from 'react-router-dom'
import earthImage from '../assets/Earth.png'
import '../App.css'

export default function Earth(){

  const navigate = useNavigate()

  return(
    <div className='padButtonContainer'>
      <img id='earthImage' src={earthImage}></img>
      <button id='vandyPadButton' onClick={()=>{navigate('/pad/vandy')}}>Vandy</button>
      <button id='capePadButton' onClick={()=>{navigate('/pad/cape')}}>Cape</button>
      <button id='starbasePadButton' onClick={()=>{navigate('/pad/starbase')}}>Starbase</button>
    </div>
  )
}