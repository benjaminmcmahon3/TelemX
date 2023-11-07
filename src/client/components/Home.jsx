import { fetchAllVandyFalconData } from '../dataHandler.js'

export default function Home(){
  return(
    <>
      <h1>Home</h1>
      <button onClick={()=>{fetchAllVandyFalconData()}}>Hello</button>
    </>
  )
}