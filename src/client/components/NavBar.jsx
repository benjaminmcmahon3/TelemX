import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/dragon'>Dragon Lair</Link>
      <Link to='/live'>Live Launch</Link>
    </>
  )
}