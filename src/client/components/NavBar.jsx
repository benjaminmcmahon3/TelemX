import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar(){
  return(
    <div className='navBarContainer'>
      <Link to='/'>Earth</Link>
      <Link to='/pad/vandy'>Vandy</Link>
      <Link to='/pad/cape'>Cape</Link>
      <Link to='/pad/starbase'>Starbase</Link>
    </div>
  )
}