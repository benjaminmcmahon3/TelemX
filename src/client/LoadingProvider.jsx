import { useMemo, useState } from "react"
import LoadingContext from "./LoadingContext"
import { useMatch } from "react-router-dom";

export default function LoadingProvider({ children }){

  // const [ isLoading, setIsLoading ] = useState(false)
  const [activeFetches, setActiveFetches] = useState(0);

  const startLoading = ()=>{
    setActiveFetches((prev) => prev + 1)
  }
  const stopLoading = ()=>{
    setActiveFetches((prev) => Math.max(0, prev - 1));
    }

  const value = useMemo(() => ({
    isLoading: activeFetches > 0,
    startLoading,
    stopLoading
  }), [activeFetches])

  return(
    <>
      <LoadingContext.Provider value={value}>
        {children}
      </LoadingContext.Provider>
    </>
  )
}