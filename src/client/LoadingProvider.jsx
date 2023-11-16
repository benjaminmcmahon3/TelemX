import { useState } from "react"
import LoadingContext from "./LoadingContext"

export default function LoadingProvider({ children }){

  const [ isLoading, setIsLoading ] = useState(false)

    const startLoading = ()=>{
      console.log('Starting loading')
      setIsLoading(true)
    }
    const stopLoading = ()=>{
      console.log('Stopping loading')
      setIsLoading(false)
    }

  return(
    <>
      <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
        {children}
      </LoadingContext.Provider>
    </>
  )
}