import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/hangar'>Hangar</Link>
      <Link to='/pad'>Pad</Link>
      <Link to='/cleanroom'>Cleanroom</Link>
    </>
  )
}