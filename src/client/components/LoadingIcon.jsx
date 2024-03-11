import '../styles/loadingIcon.css'
import { SlRocket } from "react-icons/sl";

export default function LoadingIcon({timeFrame}) {
  return (        
  <div id={timeFrame + 'LoadingIcon'} className='rocketContainer'>
    <div className="drift">
      <div className="yaw">
      <SlRocket className="loadingRocket" />
      </div>
    </div>
  </div>

  )
}