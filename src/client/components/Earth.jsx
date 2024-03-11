import { useNavigate } from 'react-router-dom'
import earthImage from '../assets/Earth.png'
import '../styles/earth.css'
import { useState } from 'react'

export default function Earth(){

  const navigate = useNavigate();
  const [ activePad, setActivePad ] = useState(null);
  const padOptions = ['vandy', 'cape', 'starbase'];

  function handlePadToggle(pad){
    const isPadSelected = activePad === pad;
    setActivePad(isPadSelected ? null : pad);
    navigate(isPadSelected ? '/' : `/pad/${pad}`);
  }

  return(
    <div className='padButtonContainer'>
      <img id='earthImage' src={earthImage} alt='Image of Earth'></img>
      {padOptions.map(pad => (
        <button
          key={pad}
          id={`${pad}PadButton`}
          className={activePad === pad ? 'padButtonToggled' : 'padButtonNotToggled'}
          onClick={() => handlePadToggle(pad)}
        >{pad.charAt(0).toUpperCase() + pad.slice(1)}
        </button>))}
    </div>
  )
}