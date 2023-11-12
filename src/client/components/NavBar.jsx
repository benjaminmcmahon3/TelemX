import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
    <>
      <Link to='/'>Earth</Link>
      <Link to='/vandy'>Vandy</Link>
      <Link to='/cape'>Cape</Link>
      <Link to='/starbase'>Starbase</Link>
    </>
  )
}