import { useState } from "react"
import LoadingContext from "./LoadingContext"

export default function LoadingProvider({ children }){

  const [ isLoading, setIsLoading ] = useState(false)

    const startLoading = ()=>{
      setIsLoading(true)
    }
    const stopLoading = ()=>{
      setIsLoading(false)
    }

  return(
    <>
     {isLoading && (
        <div className="loadingIcon"></div>
      )}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .loadingIcon {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
            position: absolute; // Adjust positioning as needed
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
      <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
        {children}
      </LoadingContext.Provider>
    </>
  )
}