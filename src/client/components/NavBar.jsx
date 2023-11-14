import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
    <>
      <Link to='/'>Earth</Link>
      <Link to='/pad/vandy'>Vandy</Link>
      <Link to='/pad/cape'>Cape</Link>
      <Link to='/pad/starbase'>Starbase</Link>
    </>
  )
}