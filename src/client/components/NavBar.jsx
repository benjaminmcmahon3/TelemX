import { Link } from 'react-router-dom'

export default function NavBar(){
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/capsules'>Dragon Lair</Link>
      <Link to='/live'>Live Launch</Link>
    </>
  )
}