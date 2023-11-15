import { convertDateFromIso } from "../../dataHandler"
import { useNavigate } from "react-router-dom"

export default function EarthThumbnail({ launch }){

  const navigate = useNavigate();

  return(
    <>
      <div className='earthThumbnail'>
        <div className="left">
          <img src={launch.image}></img>
        </div>
        <div className="right">
          <h3 className="thumbnailTitle">{launch.name}</h3>
          <h3>{
            convertDateFromIso(launch.net)
          }</h3>
          <h3>{launch.pad.name}</h3>
          <button onClick={()=>{
            navigate(`/${launch.id}`)
          }}>More Info</button>
        </div>
      </div>
    </>
  )
}