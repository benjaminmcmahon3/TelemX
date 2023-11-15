import { convertDateFromIso } from "../../dataHandler"
import { useNavigate } from "react-router-dom"

export default function PadThumbnail({ launch }){

  const navigate = useNavigate();

  return(
    <>
      <div className='padThumbnail'>
        <h3>{launch.name}</h3>
        <h3>{launch.pad.name}</h3>
        <h3>{
          convertDateFromIso(launch.net)
        }</h3>
        <button onClick={()=>{
          navigate(`/${launch.id}`)
        }}>More Info</button>
        <img src={launch.image}></img>
      </div>
    </>
  )
}