import { fetchAllVandyLaunchData } from '../dataHandler.js'

export default function Home(){
  return(
    <>
      <h1>Home</h1>
      <button onClick={()=>{fetchAllVandyLaunchData()}}>Fetch data, save to local storage</button>
    </>
  )
}